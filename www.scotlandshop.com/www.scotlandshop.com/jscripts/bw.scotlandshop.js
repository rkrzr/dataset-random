
///
/// watermark search box
///
j$.fn.watermark = function(opts) {
    return this.each(function() {
        var sValue = j$(this).val();
        if (typeof opts != 'undefined')
            sValue = opts;
        var obj = j$(this);

        obj.addClass("watermarkOn").val(sValue);
        obj.focus(function() {
            j$(this).filter(function() {

                // We only want this to apply if there’s not
                // something actually entered
                return j$(this).val() == "" || j$(this).val() == sValue;

            }).removeClass("watermarkOn").val("");
        });
        
        obj.blur(function() {
            j$(this).filter(function() {

                // We only want this to apply if there’s not
                // something actually entered
                return j$(this).val() == ""
            }).addClass("watermarkOn").val(sValue);
        });
        
    });
};

///
/// Main Feature Carousel Prev\Next buttons
function featureCarousel_initCallback(carousel) {
    jQuery('#bw_carousel_prev_btn img').bind('click', function() {
        carousel.prev();
        return false;
    });
    jQuery('#bw_carousel_next_btn img').bind('click', function() {
        carousel.next();
        return false;
    });
}

//
//
var j$ = jQuery.noConflict();
j$(document).ready(function() {

    // alert('loaded...');

    // watermark the searchbox
    j$('.searchField').watermark();

    // watermark the email signup box
    j$('.bw_signup_input').watermark('email address');

    // js available, remove any 'hidden' carousel images
    j$('ul.bw_carousel_list a.hide').removeClass('hide');

    // home page carousel
    if (j$('ul.bw_carousel_list').length) {
        j$('ul.bw_carousel_list').jcarousel({
            scroll: 1,
            wrap: 'circular',
            auto: 5,
            initCallback: featureCarousel_initCallback,
            buttonNextHTML: null,
            buttonPrevHTML: null
        });
    }

    j$('#tartan-finder-swatch').corner();
});