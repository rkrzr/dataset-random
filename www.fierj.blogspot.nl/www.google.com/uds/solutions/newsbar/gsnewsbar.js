/**
 * Copyright (c) 2008 Google Inc.
 *
 * You are free to copy and use this sample.
 * License can be found here: http://code.google.com/apis/ajaxsearch/faq/#license
*/

function GSnewsBar(barRoot, options) {

  // IE fadein/fadeout is disabled
  // On IE6, when clear type is enabled, you MUST set a background color on
  // the element being tweaked. This is totally impractical. If you dont do this
  // the fonts look terrible/unreadable
  //
  // On IE7, they "fixed" the bug, but they did it by disable font smoothing so
  // once again, the results are terrible. Fix is to just don't do this on IE
  this.br_AgentContains_cache_ = {};
  if (this.br_IsIE()) {
    this.startupDelay = 50;
    this.ieMode = true;
  } else {
    this.startupDelay = 0;
    this.ieMode = false;
  }

  this.CL_RESULTDIV = "resultDiv_gsnb";
  this.CL_RESULTDIV_BOLD = "resultDiv_gsnb resultDivBold_gsnb";
  // FF on win/mac has an interesting issue as well. As soon as opacity hits
  // 100%, the font size seems to change by a pixel or so for many fonts.
  // net result: visible jiggle. The "fix" is to never let ffwin/mac hit 100%...
  this.linkContainerClass = this.CL_RESULTDIV;
  if (this.br_IsNav() && (this.br_IsWin() || this.br_IsMac()) ) {
    if (this.br_IsMac()) {
      this.linkContainerClass = this.CL_RESULTDIV_BOLD;
    }
    this.shortOpacityMode = true;
  } else {
    this.shortOpacityMode = false;
  }

  this.setGlobals();
  this.processArguments(barRoot, options);
  this.adjustGlobals();

  this.buildSuperStructure();
  this.buildSearchControl();

  // build handlers for mousein/mouseout watchers
  // on this.resultsBox
  if ( !this.verticalMode ) {
    this.resultsBox.onmouseover = this.methodClosure(this,
                                            GSnewsBar.prototype.setMouseIn,
                                            [null]);
    this.resultsBox.onmouseout = this.methodClosure(this,
                                            GSnewsBar.prototype.setMouseOut,
                                            [null]);
    if (this.currentResultRoot) {
      this.currentResultRoot.onmouseover = this.methodClosure(this,
                                              GSnewsBar.prototype.setMouseIn,
                                              [null]);
      this.currentResultRoot.onmouseout = this.methodClosure(this,
                                              GSnewsBar.prototype.setMouseOut,
                                              [null]);
    }
  }

  // ie does not like this mode, so defer load on IE
  if (this.ieMode || this.startupDelay != 0) {
    var bootCompleteClosure = this.methodClosure(this,
                                                 GSnewsBar.prototype.bootComplete,
                                                 [null]);
    setTimeout(bootCompleteClosure, this.startupDelay);
  } else {
    this.bootComplete();
  }
}

GSnewsBar.prototype.bootComplete = function() {
  // if we have an auto execute list, then start it up
  if (this.autoExecuteMode) {
    this.cycleTimeClosure = this.methodClosure(this,
                                               GSnewsBar.prototype.cycleTimeout,
                                               [null]);

    // if there is only a single item in the execute list, then
    // disable autoExecuteMode...
    if ( this.executeList.length == 1 ||
         this.cycleTime == GSnewsBar.CYCLE_TIME_MANUAL ) {
      this.switchToListItem(0);
    } else {
      this.cycleTimeout();
    }
  }
}

// cycle time for selecting a news set
GSnewsBar.CYCLE_TIME_EXTRA_SHORT = 3000;
GSnewsBar.CYCLE_TIME_SHORT = 10000;
GSnewsBar.CYCLE_TIME_MEDIUM = 15000;
GSnewsBar.CYCLE_TIME_LONG = 30000;
GSnewsBar.CYCLE_TIME_MANUAL = 3000000;

GSnewsBar.ONE_SECOND = 1000;
GSnewsBar.THREE_SECONDS = 3000;
GSnewsBar.FIVE_SECONDS = 5000;
GSnewsBar.TEN_SECONDS = 10000;

// cycle mode
GSnewsBar.CYCLE_MODE_RANDOM = 1;
GSnewsBar.CYCLE_MODE_LINEAR = 2;

GSnewsBar.MAX_CACHE_LIFETIME = 50;
GSnewsBar.MIN_CACHE_LIFETIME = 1;
GSnewsBar.DEFAULT_CACHE_LIFETIME = 1;
GSnewsBar.MAX_ERROR_COUNT = 1;
GSnewsBar.DEFAULT_QUERY = "Google";
GSnewsBar.MIN_STARTUP_DELAY = 50;
GSnewsBar.MAX_STARTUP_DELAY = 2000;

// result style
GSnewsBar.RESULT_STYLE_EXPANDED = 1;
GSnewsBar.RESULT_STYLE_COMPRESSED = 2;
GSnewsBar.prototype.processArguments = function(barRoot, opt_options) {
  this.totalFailures = 0;
  this.retries = 0;
  this.barRoot = barRoot;
  this.statusRoot = null;
  this.autoExecuteMode = false;
  this.executeList = new Array();
  this.cycleTime = GSnewsBar.CYCLE_TIME_MANUAL;
  this.cycleMode = GSnewsBar.CYCLE_MODE_LINEAR;
  this.cycleNext = 0;
  this.cycleTimer = null;
  this.verticalMode = true;
  this.fadeTimer = null;
  this.mouseInResultArea = false;
  this.mouseOutCallFade = false;
  this.linkTarget = GSearch.LINK_TARGET_SELF;
  this.currentResultRoot = null;
  this.currentResultContainer = null;
  this.cacheLifetime = GSnewsBar.DEFAULT_CACHE_LIFETIME;

  this.fadeIncrement = 10;
  this.fadeTime = 400;
  this.fadeInCallback = GSnewsBar.methodCallback(this,
                                                 GSnewsBar.prototype.fadeIn);
  this.fadeOutCallback = GSnewsBar.methodCallback(this,
                                                  GSnewsBar.prototype.fadeOut);
  this.fadeOpacity = 0;

  // set defaults that are changable via options
  this.resultSetSize = GSearch.SMALL_RESULTSET;
  this.ST_TITLE = "In the news";
  this.resultsBoxClass = this.CL_RESULTSBOX_EXPANDED;
  this.verticalMode = true;

  if (opt_options) {

    // horizontal
    if (opt_options.horizontal && opt_options.horizontal == true ) {
      this.verticalMode = false;
    } else {
      this.verticalMode = true;
    }

    // option.largetResultSet
    if (opt_options.largeResultSet && opt_options.largeResultSet == true ) {
      this.resultSetSize = GSearch.LARGE_RESULTSET;
    } else {
      this.resultSetSize = GSearch.SMALL_RESULTSET;
    }

    // option.resultStyle
    if (opt_options.resultStyle) {
      if (opt_options.resultStyle == GSnewsBar.RESULT_STYLE_EXPANDED) {
        this.resultsBoxClass = this.CL_RESULTSBOX_EXPANDED;
      } else if (opt_options.resultStyle == GSnewsBar.RESULT_STYLE_COMPRESSED) {
        this.resultsBoxClass = this.CL_RESULTSBOX_COMPRESSED;
      }
    }

    if (opt_options.linkTarget) {
      this.linkTarget = opt_options.linkTarget;
    }

    // if currentResult is specified AND we are in horizontal mode,
    // then pick it up.
    if (opt_options.currentResult && !this.verticalMode) {
      this.currentResultRoot = opt_options.currentResult;
      this.removeChildren(this.currentResultRoot);
    }

    if (opt_options.title) {
      this.ST_TITLE = opt_options.title;
    }

    // startupDelay
    if (opt_options.startupDelay &&
        opt_options.startupDelay >= GSnewsBar.MIN_STARTUP_DELAY &&
        opt_options.startupDelay <= GSnewsBar.MAX_STARTUP_DELAY) {
      this.startupDelay = opt_options.startupDelay;
    }

    // cacheLifetime
    if (opt_options.cacheLifetime &&
        opt_options.cacheLifetime >= GSnewsBar.MIN_CACHE_LIFETIME &&
        opt_options.cacheLifetime <= GSnewsBar.MAX_CACHE_LIFETIME ) {
      this.cacheLifetime = opt_options.cacheLifetime;
    }

    // the auto execute list contains
    // a cycleTime value, a cycleMode value, and an array
    // of searchExpressions
    if (opt_options.autoExecuteList) {

      // if specified and valid, then use it, otherwise
      // use default set above
      if (opt_options.autoExecuteList.cycleTime) {
        var cycleTime = opt_options.autoExecuteList.cycleTime;
        if (cycleTime == GSnewsBar.CYCLE_TIME_EXTRA_SHORT ||
            cycleTime == GSnewsBar.CYCLE_TIME_SHORT ||
            cycleTime == GSnewsBar.CYCLE_TIME_MEDIUM ||
            cycleTime == GSnewsBar.CYCLE_TIME_LONG ||
            cycleTime == GSnewsBar.CYCLE_TIME_MANUAL ) {
          this.cycleTime = cycleTime;
        }
      }

      // in vertical mode, cycleTime says how long
      // between new searches. In horizontal mode,
      // it's how long to keep a result up
      if (!this.verticalMode) {
        switch (this.cycleTime) {
        case GSnewsBar.CYCLE_TIME_EXTRA_SHORT:
        case GSnewsBar.CYCLE_TIME_SHORT:
          this.cycleTime = GSnewsBar.THREE_SECONDS;
          break;

        case GSnewsBar.CYCLE_TIME_MEDIUM:
        case GSnewsBar.CYCLE_TIME_MANUAL:
          this.cycleTime = GSnewsBar.FIVE_SECONDS;
          break;

        case GSnewsBar.CYCLE_TIME_LONG:
          this.cycleTime = GSnewsBar.TEN_SECONDS;
          break;
        }
        if (this.ieMode) {
          // since we are not fading in/out, lengthen the cycleTime by 1s
          this.cycleTime += GSnewsBar.ONE_SECOND;
        }
      }

      if (opt_options.autoExecuteList.cycleMode) {
        var cycleMode = opt_options.autoExecuteList.cycleMode;
        if (cycleMode == GSnewsBar.CYCLE_MODE_RANDOM ||
            cycleMode == GSnewsBar.CYCLE_MODE_LINEAR) {
          this.cycleMode = cycleMode;
        }
      }

      // now grab the list...
      if (opt_options.autoExecuteList.executeList &&
          opt_options.autoExecuteList.executeList.length > 0 ) {
        // grab from the list
        for (var i=0; i < opt_options.autoExecuteList.executeList.length; i++) {
          this.executeList.push(
            this.newListItem(opt_options.autoExecuteList.executeList[i]));
        }
        this.autoExecuteMode = true;
        this.currentIndex = 0;
        if (opt_options.autoExecuteList.statusRoot) {
          this.statusRoot = opt_options.autoExecuteList.statusRoot;
        }
      }
    }

    // horizontal mode MUST use autoExecute...
    if (!this.verticalMode && this.autoExecuteMode == false) {
      this.autoExecuteMode = true;
      this.currentIndex = 0;
      this.cycleTime = GSnewsBar.THREE_SECONDS;
      this.executeList.push(this.newListItem(GSnewsBar.DEFAULT_QUERY));
    }
  }

}

GSnewsBar.prototype.testForDefaultQuery = function() {
  if (this.executeList.length == 1 &&
      this.executeList[0].query == GSnewsBar.DEFAULT_QUERY) {
    return true;
  } else {
    return false;
  }
}

GSnewsBar.prototype.resetAutoExecuteListItems = function(newList) {
  if (this.autoExecuteMode && newList.length > 0) {

    // stop the timers...
    this.clearCycleTimer();
    this.clearFadeTimer();

    // clear the status area
    if (this.statusRoot) {
      this.removeChildren(this.statusRoot);
    }

    // nuke the old list
    this.executeList = new Array();

    // build the new list
    for (var i=0; i < newList.length; i++) {
      this.executeList.push(this.newListItem(newList[i]));
    }
    this.currentIndex = 0;

    if (this.statusRoot) {
      this.populateStatusRoot();
    }

    if ( this.executeList.length == 1) {
      this.switchToListItem(0);
    } else {
      this.cycleTimeout();
    }
  }
}

GSnewsBar.prototype.adjustGlobals = function() {
  // horizontal mode changes certain globals...
  // - results are always compressed
  if (this.verticalMode == false) {
    this.resultsBoxClass = this.CL_RESULTSBOX_COMPRESSED;
  }
}

GSnewsBar.prototype.setGlobals = function() {

  // superstructure boxes
  this.CL_NEWSBARBOX = "newsBarBox_gsnb";
  this.CL_NEWSBARBOXFULL = "newsBarBox_gsnb full_gsnb";
  this.CL_NEWSBARBOXEMPTY = "newsBarBox_gsnb empty_gsnb";
  this.CL_NEWSBARINNERBOX = "newsBarInnerBox_gsnb";
  this.CL_VERTICAL = "vertical_gsnb";
  this.CL_HORIZONTAL = "horizontal_gsnb";

  // title
  this.CL_TITLEBOX = "titleBox_gsnb";

  // results
  this.CL_RESULTSBOX_EXPANDED = "resultsBox_gsnb expanded_gsnb";
  this.CL_RESULTSBOX_COMPRESSED = "resultsBox_gsnb compressed_gsnb";
  this.CL_BRANDINGBOX = "brandingBox_gsnb";
  this.CL_SNIPPET = "snippet_gsnb";

  // status
  this.CL_STATUSBOXROOT = "statusBoxRoot_gsnb";
  this.CL_STATUSBOX = "statusBox_gsnb";
  this.CL_STATUSBOX_ONEITEM = "statusBox_gsnb oneitem_gsnb";
  this.CL_STATUSITEMSEP = "statusItemSep_gsnb";
  this.CL_STATUSITEM = "statusItem_gsnb";
  this.CL_STATUSITEM_SELECTED = "statusItem_gsnb statusItemSelected_gsnb";
}

GSnewsBar.prototype.getBarBoxClass = function(full) {
  var baseClass = full ? this.CL_NEWSBARBOXFULL : this.CL_NEWSBARBOXEMPTY;
  if (this.verticalMode) {
    baseClass += " " + this.CL_VERTICAL;
  } else {
    baseClass += " " + this.CL_HORIZONTAL;
  }
  return baseClass;
}

GSnewsBar.prototype.buildSuperStructure = function() {

  // create the newsBar box
  this.removeChildren(this.barRoot);
  this.barBox = this.createDiv(null, this.CL_NEWSBARBOX);
  this.barRoot.appendChild(this.barBox);
  this.innerBox = this.createDiv(null, this.CL_NEWSBARINNERBOX);
  this.barBox.appendChild(this.innerBox);

  // add in the title, statusBox, resultsBox, and branding

  // title
  this.titleBox = this.createDiv(this.ST_TITLE, this.CL_TITLEBOX);
  this.innerBox.appendChild(this.titleBox);

  // optional statusRoot, statusBox
  if (this.statusRoot == null) {
    this.statusRoot = this.createDiv(null, this.CL_STATUSBOXROOT);
    this.innerBox.appendChild(this.statusRoot);
  }
  this.populateStatusRoot();

  // resultsBox
  this.resultsBox = this.createDiv(null, this.resultsBoxClass);
  this.innerBox.appendChild(this.resultsBox);

  if (this.currentResultRoot) {
    this.currentResultContainer = this.createDiv(null,
                                                 this.CL_RESULTSBOX_EXPANDED);
    this.currentResultRoot.appendChild(this.currentResultContainer);
  }

  // branding
  var branding = this.createDiv(null, this.CL_BRANDINGBOX);
  this.barBox.appendChild(branding);
  var orientation = GSearch.HORIZONTAL_BRANDING;
  if (this.verticalMode == false) {
    orientation = GSearch.VERTICAL_BRANDING;
  }
  GSearch.getBranding(branding, orientation);

  this.cssSetClass(this.barBox, this.CL_NEWSBARBOXEMPTY);
}

GSnewsBar.prototype.buildSearchControl = function() {
  this.ns = new GnewsSearch();
  this.ns.setResultSetSize(this.resultSetSize);
  this.ns.setSearcherSrc("uds-nb-" + (this.verticalMode ? "vertical" : "horizontal"));
  this.ns.setLinkTarget(this.linkTarget);
  this.ns.setSearchCompleteCallback(this, GSnewsBar.prototype.searchComplete, [true]);

  this.nsBypass = new GnewsSearch();
  this.nsBypass.setResultSetSize(this.resultSetSize);
  this.nsBypass.setSearcherSrc("uds-nb-" + (this.verticalMode ? "vertical" : "horizontal"));
  this.nsBypass.setLinkTarget(this.linkTarget);
  this.nsBypass.setSearchCompleteCallback(this, GSnewsBar.prototype.searchComplete, [false]);
}

GSnewsBar.prototype.execute = function(query) {
  if (this.verticalMode == false) {
    this.clearFadeTimer();
    this.resetAutoExecuteListItems([query]);
  } else {
    this.populateStatusRoot();
    this.nsBypass.execute(query);
  }
}

GSnewsBar.prototype.executeInternal = function(query) {
  this.ns.execute(query);
}

GSnewsBar.prototype.clearAllResults = function() {
  this.cssSetClass(this.barBox, this.CL_NEWSBARBOXEMPTY);
}

GSnewsBar.prototype.searchComplete = function(fromListItem) {
  var ns;
  var cacheResults = false;
  var currentListItem = null;
  if (fromListItem) {
    currentListItem = this.executeList[this.currentIndex];
    if (currentListItem.cacheCount == 0) {
      cacheResults = true;
      currentListItem.results = new Array();
    }
    ns = this.ns;
  } else {
    ns = this.nsBypass;
  }
  if ( ns.results && ns.results.length > 0) {
    this.cssSetClass(this.barBox, this.getBarBoxClass(true));
    this.removeChildren(this.resultsBox);

    if (!this.verticalMode) {
      // for horizontal mode, nuke the old results
      // and reset currentResultIndex
      this.results = new Array();
      this.currentResult = 0;
    }

    // iterate over the results and capture the .html node
    // and append into the resultBox, OR just capture so that
    // we can fade it in/out
    for (var i = 0; i < ns.results.length; i++) {
      // if we are listItem based search, then cache results
      if (cacheResults) {
        currentListItem.cacheCount = 1;
        currentListItem.results.push(GSnewsBar.cloneObject(ns.results[i]));
        // reset error count based on sucessful search
        currentListItem.errorCount = 0;
      }

      var res = ns.results[i];
      if (this.verticalMode) {
        var resultDiv = this.createDiv(null, this.CL_RESULTDIV);
        var node = res.html.cloneNode(true);
        this.resultsBox.appendChild(resultDiv);
        resultDiv.appendChild(node);
      } else {
        this.results[i] = res;
      }
    }

    // start the fadein, fadeout sequence
    if (!this.verticalMode) {
      this.linkContainer = this.createDiv(null, this.linkContainerClass);
      this.resultsBox.appendChild(this.linkContainer);
      this.link = document.createElement("a");
      this.link.target = this.linkTarget;
      this.snippet = this.createSpan("&nbsp;", this.CL_SNIPPET);
      this.setHorizontalResultContent(
                        this.results[this.currentResult]);
      this.setOpacity(this.linkContainer, 0);
      this.linkContainer.appendChild(this.snippet);
      this.linkContainer.appendChild(this.link);
      this.fadeOpacity = 0;
      this.fadeIn();
    }
  } else {
    // no results, mark the container as empty
    this.cssSetClass(this.barBox, this.getBarBoxClass(true));
    // retry another search expression
    if ( this.executeList.length == 1 ||
         this.cycleTime == GSnewsBar.CYCLE_TIME_MANUAL ) {
      if (this.retries > 1) {

        // we failed the default query. Don't let this get caught
        // in a failure loop
        if (this.testForDefaultQuery()) {
          // stop the timers...
          this.clearCycleTimer();
          this.clearFadeTimer();

          // clear the status area
          if (this.statusRoot) {
            this.removeChildren(this.statusRoot);
          }
          return;
        } else {
          this.resetAutoExecuteListItems([GSnewsBar.DEFAULT_QUERY]);
          this.retries = 0;
        }
      } else {
        this.totalFailures++;
        this.retries++;
      }
      this.switchToListItem(0);
    } else {

      // this really means that this is a list item based search
      // that should have worked and if it had worked would have
      // produced results that we cache. in this case though, we
      // got no results so mark this, and if we get too many on
      // this term, throw away the search term
      if (cacheResults) {
        this.totalFailures++;
        currentListItem.errorCount++;
        // if we are getting excessive errors from this entry
        // then reset the list without this entry
        if (ns.completionStatus == 200) {
          currentListItem.errorCount = GSnewsBar.MAX_ERROR_COUNT + 1;
        }
        if (currentListItem.errorCount > GSnewsBar.MAX_ERROR_COUNT) {
          var newList = new Array();
          for (var i=0; i<this.executeList.length; i++) {
            if (this.executeList[i].errorCount <= GSnewsBar.MAX_ERROR_COUNT) {
              newList.push(this.executeList[i].query);
            }
          }
          if (newList.length == 0) {
            newList.push(GSnewsBar.DEFAULT_QUERY);
          }
          this.resetAutoExecuteListItems(newList);
        }
      }
      this.cycleTimeout();
    }
  }
}

GSnewsBar.prototype.setHorizontalResultContent = function(result) {
  var url = result.unescapedUrl;
  var linkString = result.titleNoFormatting;
  var snippet = result.publisher + "&nbsp;-&nbsp; ";
  this.link.href = url;
  this.link.innerHTML = linkString;
  this.snippet.innerHTML = snippet;

  if (this.currentResultContainer) {
    this.removeChildren(this.currentResultContainer);
    var div = this.createDiv(null, this.CL_RESULTDIV);
    var node = result.html.cloneNode(true);
    div.appendChild(node);
    this.currentResultContainer.appendChild(div);
  }
}

GSnewsBar.prototype.clearCycleTimer = function() {
  if (this.cycleTimer) {
    clearTimeout(this.cycleTimer);
    this.cycleTimer = null;
  }
}

GSnewsBar.prototype.clearFadeTimer = function() {
  if (this.fadeTimer) {
    clearTimeout(this.fadeTimer);
    this.fadeTimer = null;
  }
}

GSnewsBar.prototype.setMouseIn = function() {
  this.mouseInResultArea = true;
}

GSnewsBar.prototype.setMouseOut = function() {
  this.mouseInResultArea = false;
  if (this.mouseOutCallFade) {
    this.fadeOut();
  }
}

GSnewsBar.prototype.cycleTimeout = function() {
  // select a new news topic
  // execute a search
  // restart the timer
  if ( this.executeList.length == 1 ||
       this.cycleTime == GSnewsBar.CYCLE_TIME_MANUAL ) {
    this.switchToListItem(0);
  } else {
    var index = 0;
    if (this.cycleMode == GSnewsBar.CYCLE_MODE_RANDOM) {
      var max = this.executeList.length - 1;
      index = Math.round(max * Math.random());
    } else if (this.cycleMode == GSnewsBar.CYCLE_MODE_LINEAR){
      index = this.cycleNext;
      this.cycleNext++;
      if (this.cycleNext >= this.executeList.length) {
        this.cycleNext = 0;
      }
    }

    this.switchToListItem(index);
    if (this.verticalMode) {
      this.clearCycleTimer();
      this.cycleTimer = setTimeout(this.cycleTimeClosure, this.cycleTime);
    }
  }
}


GSnewsBar.prototype.fadeIn = function() {
  if (this.ieMode) {
    // IE is very broken on the fade in/out
    // it ends up failing miserably on IE6 with cleartype on (well documented)
    // and on IE7, ends up turning off font-smoothing. So, on IE we do not
    // do the fade effect.
    this.clearFadeTimer();
    this.fadeTimer = setTimeout(this.fadeOutCallback, this.cycleTime);
  } else {
    this.fadeOpacity = Math.min(this.fadeOpacity + this.fadeIncrement /
                                 this.fadeTime, 1);
    var fadeOpacity = this.fadeOpacity;

    // this trick prevents shifting on firefox/windows
    if (fadeOpacity >= 1 && this.shortOpacityMode) {
      fadeOpacity = 0.9999999;
    }
    this.setOpacity(this.linkContainer, fadeOpacity);
    if (this.fadeOpacity < 1) {
      this.fadeTimer = setTimeout(this.fadeInCallback, this.fadeIncrement);
    } else {
      this.fadeTimer = setTimeout(this.fadeOutCallback, this.cycleTime);
    }
  }
}

GSnewsBar.prototype.fadeOut = function() {
  if (this.mouseInResultArea) {
    this.mouseOutCallFade = true;
    return;
  }

  // see above
  if (this.ieMode) {
    this.fadeOpacity = 0;
  } else {
    this.mouseOutCallFade = false;
    this.fadeOpacity = Math.max(this.fadeOpacity - this.fadeIncrement /
                                 this.fadeTime, 0);
    this.setOpacity(this.linkContainer, this.fadeOpacity);
    if (this.fadeOpacity > 1) {
      this.fadeOpacity = 1;
    }
  }
  if (this.fadeOpacity > 0) {
    this.fadeTimer = window.setTimeout(this.fadeOutCallback, this.fadeIncrement);
  } else {
    if (this.currentResult+1 < this.results.length) {
      this.currentResult++;
      this.setHorizontalResultContent(this.results[this.currentResult]);
      this.fadeIn();
    } else {
      this.cycleTimeout();
    }
  }
}

/**
 * Autoexecute List Item Support
*/
GSnewsBar.prototype.newListItem = function(q) {
  var listItem = new Object();
  listItem.node = null;
  listItem.query = q;
  listItem.results = new Array();
  listItem.errorCount = 0;
  listItem.cacheCount = 0;
  return listItem;
}


GSnewsBar.prototype.switchToListItem = function(i) {

  // if this is from a static query term, then just return
  if (i == -1) {
    return false;
  }
  // reset selcted class of previous item
  // note, first time through this sets
  // node 0
  if (this.executeList[this.currentIndex].node) {
    this.cssSetClass(this.executeList[this.currentIndex].node,
                     this.CL_STATUSITEM);

  }
  this.currentIndex = i;
  if (this.executeList[this.currentIndex].node) {
    this.cssSetClass(this.executeList[this.currentIndex].node,
                     this.CL_STATUSITEM_SELECTED);

  }
  var queryTerm = this.executeList[this.currentIndex].query;
  var cacheResults = false;
  var currentListItem = null;
  currentListItem = this.executeList[this.currentIndex];

  // if the listItem has no cached results, OR if
  // we have used the cached results several times
  // already, initiate a real search
  if (currentListItem.cacheCount == 0 ||
      currentListItem.cacheCount > this.cacheLifetime ) {
    currentListItem.cacheCount = 0;
    this.executeInternal(this.executeList[this.currentIndex].query);
  } else {

    // we have cached results and they are within the programmed
    // life time so use them. e.g., fake a search
    currentListItem.cacheCount++;
    this.ns.results = new Array();
    for (var ri=0; ri < currentListItem.results.length; ri++) {
      this.ns.results.push(currentListItem.results[ri]);
    }
    this.searchComplete(true);
  }
  return false;
}

GSnewsBar.prototype.populateStatusRoot = function() {
  this.removeChildren(this.statusRoot);
  var sbClass = this.CL_STATUSBOX;
  if (this.executeList.length == 1) {
    sbClass = this.CL_STATUSBOX_ONEITEM;
  }
  this.statusBox = this.createDiv(null, sbClass);
  this.statusRoot.appendChild(this.statusBox);

  if ( this.executeList.length > 0) {
    for (var i=0; i < this.executeList.length; i++ ) {
      var listItem = this.executeList[i];
      var displayTerm = listItem.query;
      var cl;
      if (this.verticalMode) {
        cl = this.createClickLink(displayTerm, null, this.CL_STATUSITEM);

        // add click handler...
        cl.onclick = this.methodClosure(this,
                                         GSnewsBar.prototype.switchToListItem,
                                         [i] );
      } else {
        var gwsUrl = "http://news.google.com/nwshp?source=uds&q=" +
          encodeURIComponent(displayTerm);
        cl = this.createClickLink(displayTerm, gwsUrl, this.CL_STATUSITEM,
                                  GSearch.strings["more-results"] + ": " + displayTerm);
      }

      listItem.node = cl;
      this.statusBox.appendChild(cl);
      if (i+1 < this.executeList.length) {
        if (this.verticalMode) {
          this.statusBox.appendChild(this.createSpan("  ", this.CL_STATUSITEMSEP));
        }
      }
    }
  }
}

/**
 * Static Helper Method
*/
GSnewsBar.methodCallback = function(object, method) {
  return function() {
    return method.apply(object, arguments);
  }
}

/**
 * Class methods
*/
GSnewsBar.prototype.methodClosure = function(object, method, opt_argArray) {
  return function() {
    return method.apply(object, opt_argArray);
  }
}

GSnewsBar.prototype.createDiv = function(opt_text, opt_className) {
  var el = document.createElement("div");
  if (opt_text) {
    el.innerHTML = opt_text;
  }
  if (opt_className) { el.className = opt_className; }
  return el;
}

GSnewsBar.prototype.createSpan = function(opt_text, opt_className) {
  var el = document.createElement("span");
  if (opt_text) {
    el.innerHTML = opt_text;
  }
  if (opt_className) { el.className = opt_className; }
  return el;
}

GSnewsBar.prototype.removeChildren = function(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

GSnewsBar.prototype.removeChild = function(parent, child) {
  parent.removeChild(child);
}

GSnewsBar.prototype.cssSetClass = function(el, className) {
  el.className = className;
}

GSnewsBar.prototype.createClickLink = function(text, opt_href,
                                               opt_className, opt_tooltip) {
  var el = document.createElement("a");
  if (opt_href) {
    el.href = opt_href;
    el.target = this.linkTarget;
  } else {
    el.href = "_nolink_";
  }
  el.appendChild(document.createTextNode(text));
  if (opt_className) {
    el.className = opt_className;
  }
  if (opt_tooltip) {
    el.title = opt_tooltip;
  }
  return el;
}


GSnewsBar.prototype.br_AgentContains_ = function(str) {
  if (str in this.br_AgentContains_cache_) {
    return this.br_AgentContains_cache_[str];
  }

  return this.br_AgentContains_cache_[str] =
    (navigator.userAgent.toLowerCase().indexOf(str) != -1);
}

GSnewsBar.prototype.br_IsIE = function() {
  return this.br_AgentContains_('msie');
}

GSnewsBar.prototype.br_IsKonqueror = function() {
  return this.br_AgentContains_('konqueror');
}

GSnewsBar.prototype.br_IsOpera = function() {
  return this.br_AgentContains_('opera');
}

GSnewsBar.prototype.br_IsSafari = function() {
  return this.br_AgentContains_('safari') || this.br_IsKonqueror();
}

GSnewsBar.prototype.br_IsNav = function() {
  return !this.br_IsIE() &&
         !this.br_IsSafari() &&
         this.br_AgentContains_('mozilla');
}

GSnewsBar.prototype.br_IsWin = function() {
  return this.br_AgentContains_('win');
}


GSnewsBar.prototype.br_IsMac = function() {
  return this.br_AgentContains_('macintosh') ||
         this.br_AgentContains_('mac_powerpc');
}

GSnewsBar.prototype.br_IsLinux = function() {
  return this.br_AgentContains_('linux');
}


GSnewsBar.prototype.setOpacity = function(element, opacity) {

  if (this.ieMode) {
    /*
    // on ie6, if the container doesn't have a background color
    // and cleartype is enabled, the text looks terrible
    // do not fade on ie6...
    // We tried limiting this to IE7, but that was a disaster
    // as well. IE7 seems to disable font-smoothing when you do this
    // making the newsbar look terrible. Fix is to just not do the
    // fade effect on IE at all
    if (navigator.userAgent.indexOf("MSIE 7") != -1) {
      var normalized = Math.round(opacity * 100);
      element.style.filter = "alpha(opacity=" + normalized + ");";
    }
    */
    return;
  } else {
    element.style.opacity = opacity;
  }
}

GSnewsBar.prototype.getNodeWidth = function(node) {
  return node.offsetWidth;
}

/**
 * Blogger B2 has a problem in its html/javascript widget
 * where it will throw away link tags. This is how the
 * wizards used to load their css. This piece of code does
 * its best to work around this problem and will try to
 * reload missing css
 */
GSnewsBar.checkAndFixBloggerCSS = function(){

  if ( window._uds_nbw_donotrepair ) {
    return;
  }
  // same for all solutions
  var gsearchCssPattern = /http:\/\/www\.google\.com\/uds\/css\/gsearch\.css/;
  var gsearchCss = "http://www.google.com/uds/css/gsearch.css";

  // adjust for each solution...
  var selfWizardPattern = /file=uds\.js.*?&source=uds-nbw/;
  var selfNewModePattern = /gsnewsbar.js\?mode=new/;
  var selfCss = "http://www.google.com/uds/solutions/newsbar/gsnewsbar.css";

  var loadCss = function(css) {
    document.write('<link href="' + css + '" rel="stylesheet" type="text/css"/>');
  }

  var windowRef = window.location.href;
  var inBlogger = false;
  if (windowRef && windowRef != "" &&
      windowRef.match(/http:\/\/.*?\.blogspot\.com/)) {
    inBlogger = true;
  }
  if (!inBlogger) {
    return;
  }

  // ok, so we are in blogger
  // now, look to see if we are running from our own
  // wizard code
  var selfNewMode = false;
  var selfWizard = false;
  var scripts = document.getElementsByTagName("script");
  if (scripts && scripts.length > 0) {
    for (var i=0; i < scripts.length; i++) {
      var src = scripts[i].src;
      if (src.match(selfWizardPattern)) {
        selfWizard = true;
      }
      if (src.match(selfNewModePattern)) {
        selfNewMode = true;
      }
    }
  }
  if (!selfWizard) {
    return;
  }
  if (selfNewMode) {
    return;
  }

  // ok, we are running in our own wizard, in blogger
  // now, we need to make sure our CSS is loaded, only
  // we can't really know for sure, because the css tag
  // is next. So, what we do is look for gsearch.css (or
  // the global that says gsearch.css was missing because
  // another wizard already had to fix things up
  var gsearchCssMissing = true;
  var selfCssMissing = true;
  if ( !window._uds_wizards_gsearchCssMissing ) {
    // no other wizard discovered gsearch.css missing
    // so either no one else has run, or its not missing
    // look for gsearch.css. If its missing, load it and
    // load ourselves. If its found, assume ours is there as well
    var links = document.getElementsByTagName("link");
    if (links && links.length > 0) {
      for (var i=0; i < links.length; i++) {
        if (links[i].href.match(gsearchCssPattern) ) {
          gsearchCssMissing = false;
          break;
        }
      }
    }
    if (gsearchCssMissing) {
      window._uds_wizards_gsearchCssMissing = true;
      loadCss(gsearchCss);
      loadCss(selfCss);
    }
  } else {
    // if someone else marked gsearch.css missing, then we should assume
    // that we are missing too and self load
    loadCss(selfCss);
  }
}
GSnewsBar.checkAndFixBloggerCSS();

GSnewsBar.cloneObject = function(obj) {
  var res = new Object();
  for (var prop in obj) {
    switch(typeof(obj[prop])) {
      case "object":
  if (typeof(obj[prop].nodeType) == "undefined" ||
      typeof(obj[prop].cloneNode) == "undefined") {
    res[prop] = GSnewsBar.cloneObject(obj[prop]);
  } else {
    try {
      res[prop] = obj[prop].cloneNode(true);
    } catch (e) {
      res[prop] = GSnewsBar.cloneObject(obj[prop]);
    }
  }
  break;
      default:
  res[prop] = obj[prop];
  break;
    }
  }
  return res;
}