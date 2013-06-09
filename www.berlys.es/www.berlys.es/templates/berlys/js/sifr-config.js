var franklin = {src: '../templates/berlys/fonts/Franklin_Gothic_Medium.swf'};
sIFR.useDomLoaded = false;
sIFR.activate(franklin);
sIFR.replace(franklin, {
	  selector: '.sld_tit_claro',
	  css: [
	        '.sIFR-root { color: #BE2D24; cursor:pointer; font-size:31px; text-align:right; leading: -10; width:305px; line-height:20px;background:transparent; }',
	        '.sIFR-root strong { font-size:49px; font-weight:900; line-height:20px}'
	  ],
	  wmode: 'transparent',
	  opaque: true,
	  transparent: true,
	  preventWrap: true,
	  forceWidth: true,
	  fitExactly: false,
	  forceSingleLine: false,
	  flashvars: 'textalign=right'
});