/**
 * Copyright (c) 2008 Google Inc.
 *
 * You are free to copy and use this sample.
 * License can be found here: http://code.google.com/apis/ajaxsearch/faq/#license
*/

/**
 * @fileoverview A slideshow control based on the AJAX Feed API.
 * @author dcollison@google.com (Derek Collison)
 */

/**
 * GFslideshow
 * @param {string} photoFeed The feed URL.
 * @param {String|Object} container Either the id string or the element itself.
 * @param {Object} options Options map.
 * @constructor
 */

function GFslideShow(photoFeed, container, options) {
  this.feedUrl = null;
  this.directEntries = null;
  if (typeof photoFeed == 'string') {
    this.feedUrl = photoFeed;
  } else if (photoFeed && photoFeed.length && photoFeed.length > 1) {
    this.directEntries = photoFeed;
  } else {
    throw "invalid argument: photoFeed";
  }
  if (typeof container == "string") {
    container = document.getElementById(container);
  }
  this.container = container;
  this.parseOptions(options);
  this.setup();
}

// Thumbnail size preferences.

GFslideShow.THUMBNAILS_SMALL = "small";
GFslideShow.THUMBNAILS_MEDIUM = "medium";
GFslideShow.THUMBNAILS_LARGE = "large";

// Thumbnail tag names and namespaces.

// MediaRSS.
GFslideShow.MRSS_THUMBNAIL_TAG = "thumbnail";
GFslideShow.MRSS_THUMBNAIL_NS  = "http://search.yahoo.com/mrss/";

// iTunes.
GFslideShow.ITMS_THUMBNAIL_TAG = "coverArt";
GFslideShow.ITMS_THUMBNAIL_NS  = "http://phobos.apple.com/rss/1.0/modules/itms/";

// MediaRSS is default.
GFslideShow.DEFAULT_THUMBNAIL_TAG = GFslideShow.MRSS_THUMBNAIL_TAG;
GFslideShow.DEFAULT_THUMBNAIL_NS  = GFslideShow.MRSS_THUMBNAIL_NS;

// Default display timings, all in milliseconds.
GFslideShow.DEFAULT_DISPLAY_TIME = 3000;
GFslideShow.DEFAULT_TRANSISTION_TIME = 1000;
GFslideShow.DEFAULT_TRANSISTION_STEP = 40;

GFslideShow.DEFAULT_PAUSE_PNG = google.loader.ServiceBase +
                                "/solutions/slideshow/pause.png";
GFslideShow.DEFAULT_PLAY_PNG = google.loader.ServiceBase +
                               "/solutions/slideshow/play.png";

// Full Control Setting
GFslideShow.FC_PAUSE_PNG = {
  small : google.loader.ServiceBase + "/solutions/slideshow/btn_pause_small.png",
  big   : google.loader.ServiceBase + "/solutions/slideshow/btn_pause.png"
};
GFslideShow.FC_PLAY_PNG = {
  small : google.loader.ServiceBase + "/solutions/slideshow/btn_play_small.png",
  big   : google.loader.ServiceBase + "/solutions/slideshow/btn_play.png"
};
GFslideShow.FC_PREV_PNG = {
  small : google.loader.ServiceBase + "/solutions/slideshow/btn_prev_small.png",
  big   : google.loader.ServiceBase + "/solutions/slideshow/btn_prev.png"
};
GFslideShow.FC_NEXT_PNG = {
  small : google.loader.ServiceBase + "/solutions/slideshow/btn_next_small.png",
  big   : google.loader.ServiceBase + "/solutions/slideshow/btn_next.png"
};

GFslideShow.DEFAULT_FC_FADEOUT_TIME = 5000;
GFslideShow.DEFAULT_FC_OPACITY = 0.65;

/**
 * Setup default option map and apply overrides from constructor.
 * @param {Object} options Options map.
 * @private
 */
GFslideShow.prototype.parseOptions = function(options) {
  var maxEntries;
  if (google != undefined && google.feeds != undefined) {
    maxEntries = google.feeds.Feed.MAX_ENTRIES;
  } else {
    maxEntries = 20;
  }
  // Default Options
  this.options = {
    numResults : maxEntries,
    scaleImages : false,
    thumbnailTag : GFslideShow.DEFAULT_THUMBNAIL_TAG,
    thumbnailNamespace : GFslideShow.DEFAULT_THUMBNAIL_NS,
    thumbnailSize : GFslideShow.THUMBNAILS_LARGE,
    linkTarget : null,
    displayTime : GFslideShow.DEFAULT_DISPLAY_TIME,
    transitionTime : GFslideShow.DEFAULT_TRANSISTION_TIME,
    transitionStep : GFslideShow.DEFAULT_TRANSISTION_STEP,
    pauseOnHover : true,
    pauseImage : GFslideShow.DEFAULT_PAUSE_PNG,
    pauseStateCallback : null,
    scalePauseImage : true,
    autoCleanup : true,
    thumbnailUrlResolver : null,
    transitionCallback : null,
    transitionAnimationCallback : null,
    feedLoadCallback : null,
    feedProcessedCallback : null,
    imageClickCallback : null,
    centerBias : { topBias : 0, leftBias : 0 },
    pauseCenterBias : { topBias : 0, leftBias : 0 },
    fullControlPanel : false,
    fullControlPanelCursor : false,
    fullControlPanelFadeOutTime : GFslideShow.DEFAULT_FC_FADEOUT_TIME,
    fullControlPanelPlayCallback : null,
    fullControlPanelSmallIcons : false,
    maintainAspectRatio : true
  };

  if (options) {
    for (o in this.options) {
      if (typeof options[o] != "undefined") {
        this.options[o] = options[o];
      }
    }
  }
  // Override strange options
  if (this.options.displayTime < 100) {
    this.options.displayTime = 100;
  }
  // Calculated
  var ts = (this.options.transitionTime / this.options.transitionStep);
  this.delta = Math.min(1, (1.0/ts));

  // Flag to start
  this.started = false;
};

/**
 * Basic setup.
 * @private
 */
GFslideShow.prototype.setup = function() {
  if (this.container == null) return;

  // Browser fun.
  if (window.ActiveXObject) {
    this.ie = this[window.XMLHttpRequest ? 'ie7' : 'ie6'] = true;
  } else if (window.opera) {
    this.opera = true;
  } else if (document.childNodes && !document.all && !navigator.taintEnabled) {
    this.safari = true;
    if (navigator.userAgent.indexOf('iPhone') > 0) {
      this.iphone = true;
    }
  } else if (document.getBoxObjectFor != null) {
    this.gecko = true;
  }

  // Feeds..
  if (this.feedUrl) {
    this.feed = new google.feeds.Feed(this.feedUrl);
    this.feed.setResultFormat(google.feeds.Feed.MIXED_FORMAT);
    this.feed.setNumEntries(this.options.numResults);
    this.feed.load(this.bind(this.feedLoaded));
  } else if (this.directEntries) {
    this.feedLoaded(this.directEntries);
  }
};

/**
 * Add new entries to the existing ones. Only useful in direct entry mode.
 * @param {Object} newEntries the additional entries Array.
 */
GFslideShow.prototype.addEntries = function(newEntries) {
  this.processEntries(newEntries);
  if (!this.thumb_timer) {
    this.processThumbs();
  }
};


/**
 * Helper method to bind this instance correctly.
 * @param {Object} method function/method to bind.
 * @return {Function}
 * @private
 */
GFslideShow.prototype.bind = function(method) {
  var self = this;
  var opt_args = [].slice.call(arguments, 1);
  return function() {
    var args = opt_args.concat([].slice.call(arguments));
    return method.apply(self, args);
  }
};

/**
 * Process mouseover event.
 * @param {Event} e Optional passed in event.
 * @private
 */
GFslideShow.prototype.mouseOver = function(e) {
  var event = e || window.event;
  var relatedTarget = event.relatedTarget || event.fromElement;

  while(relatedTarget != null) {
    if (relatedTarget == this.container) {
      return;
    }
    relatedTarget = relatedTarget.parentNode;
  }

  if (this.options.fullControlPanel) {
    if (this.options.pauseOnHover && !this.display_paused) {
      this.pauseOrPlayFullControl();
    }
    this.fadeInFullControl();
  } else {
    this.display_paused = true;
    if (this.pauseImage) {
      this.pauseImage.style.visibility = "visible";
    }
  }

  if (this.options.pauseStateCallback) {
    this.options.pauseStateCallback(this.display_paused);
  }
};

/**
 * Process mouseout event.
 * @param {Event} e Optional passed in event.
 * @private
 */
GFslideShow.prototype.mouseOut = function(e) {
  var event = e || window.event;
  var relatedTarget = event.relatedTarget || event.toElement;

  while(relatedTarget != null) {
    if (relatedTarget == this.container) {
      return;
    }
    relatedTarget = relatedTarget.parentNode;
  }

  if (this.options.fullControlPanel) {
    this.fadeOutFullControl();
    this.container.onmousemove = null;
    if (this.options.pauseOnHover && this.display_paused) {
      this.pauseOrPlayFullControl();
    }
  } else {
    this.display_paused = false;
    if (this.pauseImage) {
      this.pauseImage.style.visibility = "hidden";
    }
  }

  if (this.options.pauseStateCallback) {
    this.options.pauseStateCallback(this.display_paused);
  }

  if (this.display_timer == null && this.transition_timer == null) {
    // restart.
    this.displayNextPhoto();
  }
};

GFslideShow.prototype.operaClickAndCallout = function() {
  var entry = this.entries[this.photo_index];
  var tmpLink = this.createLink(entry.link);
  tmpLink.click();
};

/**
 * Programatic pause action.
 */
GFslideShow.prototype.pause = function(opt_suppressPauseImage) {
  var pi = this.pauseImage;
  if (opt_suppressPauseImage) {
    this.pauseImage = null;
  }
  this.pauseAndCallout();
  this.pauseImage = pi;
};

/**
 * Programatic resume action.
 */
GFslideShow.prototype.resume = function() {
  this.resumeSlideShow();
};

/**
 * Process pause action and associated user callout.
 * @private
 */
GFslideShow.prototype.pauseAndCallout = function() {
  this.display_paused = true;
  if (this.pauseImage) {
    this.pauseImage.style.visibility = "visible";
  }

  // for some reason a mouseout happens
  // when we click and swap divs...
  this.container.onmouseout = null;
  if (this.options.imageClickCallback) {
    this.options.imageClickCallback(this.entries[this.photo_index]);
  }
};

/**
 * Resume the slideshow after a pause action.
 */
GFslideShow.prototype.resumeSlideShow = function() {
  if (this.options.pauseOnHover || this.options.fullControlPanel) {
    this.container.onmouseover = this.bind(this.mouseOver);
    this.container.onmouseout = this.bind(this.mouseOut);
  }
  this.display_paused = false;
  if (this.pauseImage) {
    this.pauseImage.style.visibility = "hidden";
  }
  if (this.display_timer == null && this.transition_timer == null) {
    // restart.
    this.displayNextPhoto();
  }
};

/**
 * Helper method to properly clear a node and its children.
 * @param {Object} node Node to clear.
 * @private
 */
GFslideShow.prototype.clearNode = function(node) {
  if (node == null) return;
  var child;
  while (child = node.firstChild) {
    node.removeChild(child);
  }
};

/**
 * Setup our own subcontainer to the user supplied container.
 * @private
 */
GFslideShow.prototype.createSubContainer = function() {
  var div = document.createElement("div");
  div.style.width = "100%";
  div.style.height = "100%";
  div.style.position = "relative";
  div.style.overflow = "hidden";
  this.clearNode(this.container);
  this.container.appendChild(div);
  // Hold onto our sub-container.
  this.container = div;
};

/**
 * Select the appropriate thumbnail url from the array of thumbnails provided
 * based on options.
 * @param {Array} thumbNodes Array of thumbnails urls.
 * @private
 */
GFslideShow.prototype.grabThumb = function(thumbNodes) {
  var ti = 0;
  if (thumbNodes.length > 1) {
    // Use size hint.
    if (this.options.thumbnailSize == GFslideShow.THUMBNAILS_LARGE) {
      ti = thumbNodes.length - 1;
    } else if (this.options.thumbnailSize == GFslideShow.THUMBNAILS_MEDIUM) {
      ti = Math.floor(thumbNodes.length / 2);
    }
  }
  var node = thumbNodes[ti];
  var thumb = null;
  var thumb = node.getAttribute("url");
  if (!thumb) {
    thumb = node.firstChild.nodeValue;
  }
  return thumb;
};

/**
 * Process the thumbs and create appropriate images. These can be done in
 * chunks.
 * @param {Number} opt_chunk optional chunk size to process.
 * @param {Number} opt_timeout optional timeout for next chunk.
 * @private
 */
GFslideShow.prototype.processThumbs = function(opt_chunk, opt_timeout) {
  this.thumb_timer = null;
  var start = this.thumbs_index;
  var num = this.entries.length;
  var chunk = opt_chunk || 4;
  if (num > (start + chunk)) {
    num = (start + chunk);
    // schedule next batch.
    var cb = this.bind(this.processThumbs);
    var to = opt_timeout || Math.round(this.options.displayTime / 4);
    this.thumb_timer = window.setTimeout(cb, to);
  }
  for (var i = start; i < num; i++) {
    var thumbUrl = this.entries[i].thumbUrl;
    var image = this.createImage(thumbUrl);
    this.images.push(image);
    if (this.options.linkTarget) {
      if (!this.opera) {
        var link = this.createLink(this.entries[i].link);
        link.appendChild(image);
        this.container.appendChild(link);
      } else { // Opera Hack
        image.onclick = this.bind(this.operaClickAndCallout);
        image.style.cursor = 'pointer';
        this.container.appendChild(image);
      }
    } else {
      this.container.appendChild(image);
    }
    if (image.complete) {
      // We are already loaded and we have size dimensions.
      this.imageLoaded(image);
    } else {
      // We need to wait for the image to load..
      image.onerror = this.bind(this.imageError, image);
      image.onload = this.bind(this.imageLoaded, image);
    }
    this.thumbs_index++;
  }
};


/**
 * Process and setup the entries
 * @param {Object} entries Entries array.
 * @private
 */

GFslideShow.prototype.processEntries = function(entries) {
  for (var i = 0; i < entries.length; i++) {
    var thumbUrl = null;
    if (this.options.thumbnailUrlResolver) {
      thumbUrl = this.options.thumbnailUrlResolver(entries[i]);
    } else {
      var thumbNodes = google.feeds.getElementsByTagNameNS(
                           entries[i].xmlNode,
                           this.options.thumbnailNamespace,
                           this.options.thumbnailTag);
      if (thumbNodes && thumbNodes.length > 0) {
        thumbUrl = this.grabThumb(thumbNodes);
      }
    }
    if (thumbUrl) {
      entries[i].thumbUrl = thumbUrl;
      this.entries.push(entries[i]);
    }
  }

};

/**
 * Callback associated with the AJAX Feed api after load.
 * @param {Object} result Loaded result.
 * @private
 */
GFslideShow.prototype.feedLoaded = function(result) {
  if (this.options.feedLoadCallback) {
    this.options.feedLoadCallback(result);
  }

  if ((this.feedUrl && result.error) ||
      (this.directEntries && this.directEntries.length == 0) ) {
    if (!this.options.feedLoadCallback) {
      this.container.innerHTML =
          '<center style="color: gray">feed could not be loaded.</center>';
    }
    return;
  }

  this.createSubContainer();
  if (this.container.offsetWidth) {
    // snapshot.
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
  }
  this.createPauseImage();
  this.images = [];
  this.entries = [];
  this.thumbs_index = 0;
  var entries;
  if (this.feedUrl) {
    entries = result.feed.entries;
  } else {
    entries = this.directEntries;
  }

  // Process the entries.
  this.processEntries(entries);

  if (this.options.feedProcessedCallback) {
    this.options.feedProcessedCallback(result);
  }

  // Enable full panel control mode.
  if (this.options.fullControlPanel && this.entries.length > 0) {
    this.createFullControlPanel();
  }

  // Attach mouse handlers if applicable for pausing.
  if ((this.options.pauseOnHover || this.options.fullControlPanel) &&
      this.entries.length > 0) {
    this.container.onmouseover = this.bind(this.mouseOver);
    this.container.onmouseout = this.bind(this.mouseOut);
  }

  if (this.options.imageClickCallback) {
    this.container.onclick = this.bind(this.pauseAndCallout);
  }

  // Seed with first image and quick timeout for next chunk.
  this.processThumbs(1, 100+(Math.random()*100));
};

/**
 * Callback asscoiated with an image load.
 * @param {Element} image Image instance that was loaded.
 * @private
 */
GFslideShow.prototype.imageLoaded = function(image) {
  image.__gfloaded = true;
  this.adjustImage(image);

  // Once the first image is loaded, begin the slideshow..
  if (!this.started) {
    for (var i = 0; i < this.images.length; i++) {
      if (image == this.images[i]) {
        this.beginSlideShow(i);
      }
      break;
    }
  }
};

/**
 * Callback asscoiated with an image load error.
 * @param {Element} image Image instance that was loaded.
 * @private
 */
GFslideShow.prototype.imageError = function(image) {
  image.__gferror = true;
};

/**
 * Adjust the image to the container after load. Will scale and center.
 * @param {Element} image Image instance that needs adjusting.
 * @private
 */
GFslideShow.prototype.adjustImage = function(image) {
  // Scale if requested.
  if (this.options.scaleImages) {
    if (this.options.maintainAspectRatio) {
      this.scaleImage(image);
    } else {
      image.style.height = this.height + "px";
      image.style.width = this.width + "px";
    }
  }
  // Center the image.
  this.centerImage(image);
};

/**
 * Scale the image appropriately to fit in the container.
 * @param {Element} image Image instance that needs scaling.
 * @private
 */

GFslideShow.prototype.scaleImage = function(image, opt_width, opt_height) {
  // These change when the first one is set, so we need to remember them.
  var width = opt_width || this.width;
  var height = opt_height || this.height;
  var imgW = image.offsetWidth;
  var imgH = image.offsetHeight;
  if (imgW <= 0 || imgH <= 0) return;

  var scaleH = height / imgH;
  var scaleW = width / imgW;

  if (scaleH < scaleW) {
    image.style.height = height + "px";
    image.style.width = Math.round(imgW * scaleH) + "px";
  } else {
    image.style.width = width + "px";
    image.style.height = Math.round(imgH * scaleW) + "px";
  }
};

/**
 * Center the image appropriately within the container.
 * @param {Element} image Image instance.
 * @private
 */
GFslideShow.prototype.centerImage = function(image) {
  var oh = this.height - image.offsetHeight;
  var ow = this.width - image.offsetWidth;

  // Don't assume these are zero..
  image.style.top = "0px";
  image.style.left = "0px";

  // center the image
  if (oh > 0) {
    var ah = Math.round(oh/2);
    image.style.top = image.offsetTop + ah +
                      this.options.centerBias.topBias + "px";
  }
  if (ow > 0) {
    var aw = Math.round(ow/2);
    image.style.left = image.offsetLeft + aw +
                       this.options.centerBias.leftBias + "px";
  }
};

/**
 * Create a link element.
 * @param {string} href Href attribute for the element.
 * @return {Element} Link element.
 * @private
 */
GFslideShow.prototype.createLink = function(href) {
  var link = document.createElement('a');
  link.setAttribute('href', href);
  if (this.options.linkTarget) {
    link.setAttribute('target', this.options.linkTarget);
  }
  return link;
};

/**
 * Create an image element.
 * @param {string} src Source attribute for the image element.
 * @private
 */
GFslideShow.prototype.createImage = function(src) {
  var image = document.createElement("img");
  image.style.position = "absolute";
  image.setAttribute("src", src);
  this.setOpacity(image, 0);
  return image;
};

/**
 * Properly adjust the pause image if need be.
 * @param {Element} image Image representing pause state.
 * @private
 */
GFslideShow.prototype.adjustPauseImage = function(image) {
  if (this.options.scalePauseImage) {
    var height = Math.round(this.height * 0.33);
    var width = Math.round(this.width * 0.33);
    this.scaleImage(image, width, height);
  }
  this.placePauseImage(image);
};

/**
 * Properly place the pause image for overlay on a pause state.
 * @param {Element} image Image representing pause state.
 * @private
 */
GFslideShow.prototype.placePauseImage = function(image) {
  var oh = this.height - image.offsetHeight;
  var ow = this.width - image.offsetWidth;

  // Don't assume these are zero..
  image.style.top = "0px";
  image.style.left = "0px";

  // center the image
  if (oh > 0) {
    var off = Math.round(this.height * 0.10);
    if (off < 15) off = 10;
    var ah = this.height - (image.offsetHeight + off);
    if (ah < 0) ah = 0;
    image.style.top = image.offsetTop + ah +
                      this.options.pauseCenterBias.topBias + "px";
  }
  if (ow > 0) {
    var aw = Math.round(ow/2);
    image.style.left = image.offsetLeft + aw +
                       this.options.pauseCenterBias.leftBias + "px";
  }
};

/**
 * Properly create the alpha transparent version of the pause image.
 * @param {Element} image Image representing pause state.
 * @private
 */
GFslideShow.prototype.createAlphaPauseImage = function(image) {
  // Work with offscreen version first to get the correct sizes and offsets..
  this.adjustPauseImage(image);

  var imgW = image.offsetWidth;
  var imgH = image.offsetHeight;
  var imgT = image.style.top;
  var imgL = image.style.left;

  // Now create real one.
  var element = null;
  if (this.ie) {
    var src = this.options.pauseImage;
    element = document.createElement("div");
    element.style.filter = "progid:DXImageTransform.Microsoft." +
        "AlphaImageLoader(src='" + src + "', sizingMethod='scale')";
    element.style.position = "absolute";
    element.style.width = imgW + "px";
    element.style.height = imgH + "px";
    element.style.left = imgL;
    element.style.top = imgT;
  } else {
    element = image;
    element.style.opacity = "";
  }

  element.style.visibility = "hidden";
  element.style.zIndex = 222;

  if (element != image) {
    this.container.appendChild(element);
    this.container.removeChild(image);
  }
  this.pauseImage = element;
};

/**
 * Callback asscoiated with the pause image load.
 * @param {Element} image Pause image instance that was loaded.
 * @private
 */
GFslideShow.prototype.pauseImageLoaded = function(image) {
  this.createAlphaPauseImage(image);
};

/**
 * Create the pause image element.
 * @param {string} src Source attribute for the pause image element.
 * @private
 */
GFslideShow.prototype.createPauseImage = function(src) {
  if (!this.options.pauseOnHover) return;
  var pauseOff = this.createImage(this.options.pauseImage);
  this.container.appendChild(pauseOff);
  if (pauseOff.complete) {
    this.createAlphaPauseImage(pauseOff);
  } else {
    pauseOff.onload = this.bind(this.pauseImageLoaded, pauseOff);
  }
};

/**
 * Create the fullControlPanel setup.
 * @private
 */
GFslideShow.prototype.createFullControlPanel = function() {
  var h = (this.options.fullControlPanelSmallIcons?25:45);
  if (this.options.fullControlPanelCursor) h += 10;
  var padTop = (this.options.fullControlPanelSmallIcons?5:10);
  var padBottom = 5;
  var div = document.createElement('div');
  div.style.backgroundColor = '#000000';
  div.style.height = h + 'px';
  div.style.top = (this.height - (h+padBottom+padTop)) + 'px';
  div.style.width = '100%';
  div.style.zIndex = '222';
  div.style.position = 'relative';
  div.style.textAlign = 'center';
  div.style.direction = 'ltr';
  div.style.paddingTop = padTop + 'px';
  div.style.paddingBottom = padBottom + 'px';

  var iconSize = this.options.fullControlPanelSmallIcons?'small':'big';
  var handCursor = this.ie?'hand':'pointer';

  var pause = document.createElement("img");
  pause.src = GFslideShow.FC_PAUSE_PNG[iconSize];
  pause.style.cursor = handCursor;

  var next = document.createElement("img");
  next.src = GFslideShow.FC_NEXT_PNG[iconSize];
  next.style.cursor = handCursor;

  var prev = document.createElement("img");
  prev.src = GFslideShow.FC_PREV_PNG[iconSize];
  prev.style.cursor = handCursor;

  pause.style.marginLeft = '5px';
  pause.style.marginRight = '5px';

  div.appendChild(prev);
  div.appendChild(pause);
  div.appendChild(next);

  var cursor = null;
  if (this.options.fullControlPanelCursor) {
    cursor = document.createElement('div');
    cursor.style.height = '1.3em';
    cursor.style.fontSize = '11px';
    cursor.style.color = '#bbbbbb';
    div.appendChild(cursor);
  }

  // Hold onto the ui elements..
  this.fc = {};
  this.fc.container = div;
  this.fc.pause = pause;
  this.fc.next = next;
  this.fc.prev = prev;
  this.fc.cursor = cursor;

  next.onclick = this.bind(this.goForward);
  prev.onclick = this.bind(this.goBackward);
  pause.onclick = this.bind(this.pauseOrPlayClick);

  this.fc.container.style.visibility = "hidden";
  this.container.appendChild(div);
};

/**
 * Clear the transition timer. Used to prevent leaks.
 * @private
 */
GFslideShow.prototype.clearTransitionTimer = function() {
  if (this.transition_timer) {
    clearInterval(this.transition_timer);
    this.transition_timer = null;
  }
};

/**
 * Sets the transition timer for fadeout.
 * @private
 */
GFslideShow.prototype.setTransitionTimer = function() {
  this.clearTransitionTimer();
  this.lastTick = GFslideShow.timeNow();
  var cb = this.bind(this.transitionAnimation);
  this.transition_timer = window.setInterval(cb, this.options.transitionStep);
};

/**
 * Clear the display timer. Used to prevent leaks.
 * @private
 */
GFslideShow.prototype.clearDisplayTimer = function() {
  if (this.display_timer) {
    clearTimeout(this.display_timer);
    this.display_timer = null;
  }
};

/**
 * Sets the display timer.
 * @private
 */
GFslideShow.prototype.setDisplayTimer = function() {
  if (this.display_timer) return;
  var cb = this.bind(this.displayNextPhoto);
  this.display_timer = window.setTimeout(cb, this.options.displayTime);
};

/**
 * Clear the thumb timer. Used to prevent leaks.
 * @private
 */
GFslideShow.prototype.clearThumbTimer = function() {
  if (this.thumb_timer) {
    clearTimeout(this.thumb_timer);
    this.thumb_timer = null;
  }
};

/**
 * Displays the slideshow, starting at the corresponding index.
 * @param {Number} index Index of image to start with.
 * @private
 */
GFslideShow.prototype.beginSlideShow = function(index) {
  this.photo_index = index;
  this.next = this.images[this.photo_index];
  this.snapToNextPhoto();
  this.started = true;
};

/**
 * Class helper method for the time now in milliseconds
 * @private
 */
GFslideShow.timeNow = function() {
  var d = new Date();
  return d.getTime();
};

/**
 * Move to the next photo.
 */
GFslideShow.prototype.goForward = function() {
  this.finishTransition();
  this.setNextPhoto();
  this.snapToNextPhoto();
  this.clearFullControlTimeoutTimer();
};

/**
 * Move to the previous photo.
 */
GFslideShow.prototype.goBackward = function() {
  this.finishTransition();
  this.setPreviousPhoto();
  this.snapToNextPhoto();
  this.clearFullControlTimeoutTimer();
};

/**
 * Goto the specified indexed photo.
 */
GFslideShow.prototype.gotoIndex = function(index) {
  if (index == this.photo_index) {
    return;
  }
  this.clearTransitionTimer();
  this.setPhotoIndex(index);
  this.snapToNextPhoto();
  this.clearFullControlTimeoutTimer();
}

/**
 * Handle mouse clicks on the pause or play button.
 */
GFslideShow.prototype.pauseOrPlayClick = function() {
  // Trap a play click if we have a callout registered.
  if (this.options.fullControlPanelPlayCallback && this.display_paused) {
    // for some reason a mouseout happens
    // when we click and swap divs...
    this.container.onmouseover = null;
    this.container.onmouseout = null;
    this.options.fullControlPanelPlayCallback(this.entries[this.photo_index]);
    this.fadeOutFullControl();
  } else {
    this.pauseOrPlayFullControl();
  }
}

/**
 * Toggle Pause or Play in FullControl Mode.
 */
GFslideShow.prototype.pauseOrPlayFullControl = function() {
  // todo, pause callout?
  var iconSize = this.options.fullControlPanelSmallIcons?'small':'big';
  if (this.display_paused) {
    this.display_paused = false;
    this.fc.pause.src = GFslideShow.FC_PAUSE_PNG[iconSize];
    if (this.display_timer == null && this.transition_timer == null) {
      // restart.
      this.displayNextPhoto();
    }
  } else {
    this.display_paused = true;
    this.fc.pause.src = GFslideShow.FC_PLAY_PNG[iconSize];
  }
};

/**
 * monitors mouse motion inside the container while fullcontrol panel is
 * active.
 * @private
 */
GFslideShow.prototype.fullControlMotion = function() {
  var op = this.fc.container.opacity;
  if (op < GFslideShow.DEFAULT_FC_OPACITY) {
    this.container.onmousemove = null;
    this.clearFullControlTimeoutTimer();
    this.fadeInFullControl();
  } else {
    this.setFullControlTimeoutTimer();
  }
}

/**
 * Clears the timeout timer itself.
 * @private
 */
GFslideShow.prototype.clearFullControlTimeoutTimer = function() {
  if (!this.fc) {
    return;
  }
  if (this.fc.timeout) {
    clearTimeout(this.fc.timeout);
    this.fc.timeout = null;
  }
}

/**
 * Set up the timeout timer itself.
 * @private
 */
GFslideShow.prototype.setFullControlTimeoutTimer = function() {
  if (this.fc.timeout) {
    clearTimeout(this.fc.timeout);
    this.fc.timeout = null;
  }
  if (this.options.fullControlPanelFadeOutTime > 0) {
    var cb = this.bind(this.fadeOutFullControl);
    this.fc.timeout = setTimeout(cb, this.options.fullControlPanelFadeOutTime);
  }
}

/**
 * Set up a timeout to fadeout the control if no mouse activity.
 * @private
 */
GFslideShow.prototype.setFullControlTimeout = function() {
  this.container.onmousemove = this.bind(this.fullControlMotion);
  this.setFullControlTimeoutTimer();
}

/**
 * Begin fading in of the FullControl.
 */
GFslideShow.prototype.fadeInFullControl = function() {
  this.setOpacity(this.fc.container, 0);
  var cb = this.bind(this.fadeInFullControlAnimation);
  this.setFullControlFadeTimer(cb);
}

/**
 * Fade in animation for the FullControl
 */
GFslideShow.prototype.fadeInFullControlAnimation = function() {
  var op = this.fc.container.opacity;
  op += 0.075; // Approximation
  op = Math.min(GFslideShow.DEFAULT_FC_OPACITY, op);
  this.setOpacity(this.fc.container, op);
  if (op >= GFslideShow.DEFAULT_FC_OPACITY) {
    this.setFullControlFadeTimer();
    this.setFullControlTimeout();
  }
}

/**
 * Begin fading out of the FullControl.
 */
GFslideShow.prototype.fadeOutFullControl = function() {
  var cb = this.bind(this.fadeOutFullControlAnimation);
  this.setFullControlFadeTimer(cb);
}

/**
 * Fade out animation for the FullControl
 */
GFslideShow.prototype.fadeOutFullControlAnimation = function() {
  var op = this.fc.container.opacity;
  op -= 0.075;
  this.setOpacity(this.fc.container, op);
  if (op <= 0) {
    this.setFullControlFadeTimer();
  }
}

/**
 * Set the fade timer, clearing previous ones.
 * @param {Object} opt_callback function/method to bind timer to.
 * @private
 */
GFslideShow.prototype.setFullControlFadeTimer = function(opt_callback) {
  if (this.fc.fade_timer) {
    clearInterval(this.fc.fade_timer);
    this.fc.fade_timer = null;
  }
  if (opt_callback) {
    this.fc.fade_timer = window.setInterval(opt_callback, 40);
  }
}

/**
 * Transition animation to next photo. Cleanup when finished.
 * @private
 */
GFslideShow.prototype.transitionAnimation = function() {
  if (this.current && this.next) {
    var delta = this.delta;
    var ts = this.options.transitionStep;
    var now = GFslideShow.timeNow();
    var tick = now - this.lastTick;
    this.lastTick = now;
    delta *= (tick/ts);
    if (delta < 0) return;

    var cur_op = this.current.opacity - delta;
    var next_op = this.next.opacity + delta;

    this.setOpacity(this.current, cur_op);
    this.setOpacity(this.next, next_op);

    if (this.options.transitionAnimationCallback) {
      this.options.transitionAnimationCallback(this.next.opacity);
    }

    // Still more to go?
    if (cur_op > 0) {
      return;
    }
  }

  // Finished transition.
  this.finishTransition();
};

/**
 * Select the next photo to display. This takes into account different load
 * times for images and bad links, etc.
 * @private
 */
GFslideShow.prototype.setNextPhoto = function() {
  if (this.images.length == 0) {
    return;
  }
  var ci = this.photo_index;
  // wrap
  if (++this.photo_index >= this.images.length) {
    this.photo_index = 0;
  }
  var image = this.images[this.photo_index];
  if (image && image.__gfloaded) {
    this.next = image;
  } else {
    // Image not loaded for some reason, skip it. But don't loop forever.
    if (this.photo_index == ci) {
      this.next = this.images[0];
    }
  }
};


/**
 * Select the previous photo to display. This takes into account different load
 * times for images and bad links, etc.
 * @private
 */
GFslideShow.prototype.setPreviousPhoto = function() {
  var ci = this.photo_index;
  if (this.images.length != 0) {
    if (--this.photo_index < 0) {
      this.photo_index = this.images.length-1;
    }
    var image = this.images[this.photo_index];
    if (image && image.__gfloaded) {
      this.next = image;
    } else {
      // Image not loaded for some reason, skip it. But don't loop forever.
      if (this.photo_index == ci) {
        this.next = this.images[0];
      }
    }
  }
};

/**
 * Select the photo index to display.
 * @private
 */
GFslideShow.prototype.setPhotoIndex = function(index) {
  if (index < 0 || index >= this.images.length) {
    return;
  }
  var image = this.images[index];
  if (image && image.__gfloaded) {
    this.next = image;
    this.photo_index = index;
  }
};

/**
 * Clears the pause events, prevents leaks.
 * @private
 */
GFslideShow.prototype.clearPauseEvents = function() {
  this.container.onmouseover = null;
  this.container.onmouseout = null;
};

/**
 * Cleanup when we notice we have been removed or replaced. Try to be
 * as GC friendly as possible.
 * @private
 */
GFslideShow.prototype.cleanup = function() {
  // Try to be gc friendly.
  this.clearTransitionTimer();
  this.clearDisplayTimer();
  this.clearThumbTimer();
  this.clearPauseEvents();
  this.clearNode(this.container);
  this.container = null;
};

/**
 * Display the next appropriate photo if we can. Also determine if we
 * need to start transition animation if applicable.
 * @private
 */
GFslideShow.prototype.displayNextPhoto = function() {
  this.display_timer = null;

  if (!this.started) {
    return false;
  }

  // Just return if we are in a paused state.
  if (this.display_paused) return;

  // See if we have been orphaned and cleanup if needed.
  if ((!this.container || !this.container.parentNode) &&
      this.options.autoCleanup) {
    this.cleanup();
    return;
  }

  this.setNextPhoto();
  this.beginTransition();
};

/**
 * Helper method to snap to next photo
 * @private
 */
GFslideShow.prototype.snapToNextPhoto = function() {
  this.setOpacity(this.next, 1);
  this.setOpacity(this.current, 0);
  this.current = this.next;
  this.setDisplayTimer();
  if (this.options.transitionCallback) {
    this.options.transitionCallback(this.entries[this.photo_index],
                                    this.options.transitionTime);
  }
  if (this.options.fullControlPanel && this.options.fullControlPanelCursor) {
    var index = (this.photo_index+1) + ' / ' + this.images.length;
    this.fc.cursor.innerHTML = index;
  }
}

/**
 * Helper method to start transition to next selected photo.
 * Takes into account transition parameters.
 * @private
 */
GFslideShow.prototype.beginTransition = function() {
  if (!this.current || !this.next || (this.current == this.next)) {
    // Skip if we are missing something or trying to transition to
    // ourselves.
    this.setDisplayTimer();
    return;
  }
  if (this.options.transitionTime >= this.options.transitionStep) {
    this.setTransitionTimer();
  } else {
    this.snapToNextPhoto();
  }
};

/**
 * Helper method to finish the transition to next selected photo.
 * @private
 */
GFslideShow.prototype.finishTransition = function() {
  this.clearTransitionTimer();
  this.snapToNextPhoto();
};

/**
 * Helper method to set opacity for images.. Also takes into account
 * visibility in general.
 * @param {Element} image Image element.
 * @param {Number} opacity alpha level.
 * @private
 */
GFslideShow.prototype.setOpacity = function(image, opacity) {
   if (image == null) return;
   opacity = Math.max(0, Math.min(1, opacity));
   if (opacity == 0) {
     if (image.style.visibility != "hidden") {
       image.style.visibility = "hidden";
     }
   } else {
     if (image.style.visibility != "visible") {
       image.style.visibility = "visible";
     }
   }
   if (this.ie) image.style.filter = "alpha(opacity=" + opacity*100 + ")";
   image.style.opacity = image.opacity = opacity;
};
