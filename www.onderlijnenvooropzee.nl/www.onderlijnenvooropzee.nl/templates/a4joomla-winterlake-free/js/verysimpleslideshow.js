var VerySimpleSlideshow = new Class({
  options: {
	container: 'slideshow-container',
	elements: '#slideshow-container img',
	showControls: true,
    transDelay: 5000,
	transDuration: 1000
  },
  Implements: [Options,Events],
  initialize: function(options) {
    //settings
    this.setOptions(options);
	this.container = $(this.options.container);
    this.elements = $$(this.options.elements);
    this.currentIndex = 0;
    this.interval = '';
    // tween
	this.elements.set({
		tween: {
			duration: this.options.transDuration
		}
	});
    //assign
    this.elements.each(function(el,i){
      if(i > 0) el.setStyle('opacity',0);
    },this);

    //next,previous links
    if(this.options.showControls) {
	  this.slcontrol = $('slcontrol');
      this.createControls();
    }
	
    //events
    this.container.addEvents({
		mouseenter: function() { 
			this.stop(); 
			if(this.options.showControls) {
				this.slcontrol.set('style','z-index:2');
			}
		}.bind(this),
		mouseleave: function() { 
			this.start(); 
			if(this.options.showControls) {
				this.slcontrol.set('style','z-index:-1');
			}
		}.bind(this)
    });

  },
  showit: function(to) {
	this.elements[this.currentIndex].tween('opacity', '1', '0');
    this.currentIndex = to;
	this.elements[this.currentIndex].tween('opacity', '0', '1');
  },
  show: function() {
	this.elements[this.currentIndex].tween('opacity', '1', '0');
	this.currentIndex = (this.currentIndex < this.elements.length - 1 ? this.currentIndex + 1 : 0);
    this.elements[this.currentIndex].tween('opacity', '0', '1');
  },
  start: function() {
    this.interval = this.show.bind(this).periodical(this.options.transDelay);
  },
  stop: function() {
    $clear(this.interval);
  },
  //control
  createControls: function() {
	var next = new Element('a',{
      href: '#',
      id: 'slnext',
      text: '',
      events: {
        click: function(e) {
          if(e) e.stop();
          this.stop(); 
          this.show();
        }.bind(this)
      }
    }).inject(this.slcontrol);
    var previous = new Element('a',{
      href: '#',
      id: 'slprev',
      text: '',
      events: {
        click: function(e) {
          if(e) e.stop();
          this.stop(); 
          this.showit(this.currentIndex != 0 ? this.currentIndex -1 : this.elements.length-1);
        }.bind(this)
      }
    }).inject(this.slcontrol);
  }
});