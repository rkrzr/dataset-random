ad_url = "http://bumerang.hurriyet.com.tr/showadvert.aspx?";
document.write('<iframe name="ads_frame" width=' + window.ad_width + " height=" + window.ad_height + " frameborder=0 src=" + G() + ' marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" target="_main">');
document.write("</iframe>");

function G() {
    var retVal = ad_url;
    retVal = retVal + "clientid=" + window.ad_client + "&ctype=" + window.ad_format;
    return retVal;
}