var _fxrt_bp = '';

if (fxrt_url == 'local'){
    _fxrt_bp = "http://foxrate.local";
} else if (fxrt_url == 'dev'){
    _fxrt_bp = "http://fb.dev.foxrate.de";
} else{
    _fxrt_bp = "https://foxrate.de";
}

if (_fxrt_bp == "https://foxrate.de") {
    var widgetsCurrentUrl = window.location.href;
    var httpMeans = 'http://'

    if ((widgetsCurrentUrl.indexOf(httpMeans) > -1 ? 1 : 0) == '1') {
        _fxrt_bp = _fxrt_bp.replace(/https:\/\//, "http://");
    }
}

var getAliasData = function (obj) {
    if (obj)document.getElementsByTagName('head')[0].appendChild(obj);
}

var aliasData = document.createElement('script');
aliasData.type = "text/javascript";
aliasData.src = _fxrt_bp+"/cli/getAliasUser.php?sf_login_id="+fxrt_login_id;
getAliasData(aliasData);

var getUserAlias = function (data) {
    var globalAliasUser  = data.alias;
    var globalDomainUser  = data.domain;
    var inactiveUser  = data.inactiveUser;
    var fileWidgetImage = '';

    if (_fxrt_bp == "http://foxrate.de") {
        if (globalDomainUser != 'de') {
            _fxrt_bp = _fxrt_bp.replace(/\.de/, "."+globalDomainUser);
        }
    }

    if (inactiveUser == 'inactiveUser') {
        var code =  "<img src='"+_fxrt_bp+"/WidgetImage/"+globalAliasUser+"/"+fxrt_order_type_design+"/"+fxrt_lang+".png' style='border: none;'>";
    } else {
        if ((fxrt_order_type_design >= 12) && (fxrt_order_type_design <= 21)) {
            fileWidgetImage = 'WidgetImage';
        } else {
            fileWidgetImage = 'WidgetImages';
        }

        var code =  "<a href='"+_fxrt_bp+"/"+globalAliasUser+"-"+profileWord+".html' title='"+decodeURIComponent(ratingsAndReviews)+' '+globalAliasUser+"' target='_blank' onclick='orderWidgetStatisticsClick(\""+_fxrt_bp+"\", \""+fxrt_login_id+"\", \""+fxrt_order_type_design+"\");' style='display: block; width: "+widgetWidth+"px;'>"+
                        "<img src='"+_fxrt_bp+"/"+fileWidgetImage+"/"+globalAliasUser+"/"+fxrt_order_type_design+"/"+fxrt_lang+".png' style='border: none;'>"+
                    "</a>";
    }

    document.getElementById('fxrt_w_c_order').innerHTML = code;
}

var orderWidgetStatisticsClick = function(sendURL, sendUserLogin,sendWidgetType) {
    var getStatisticsClick = function (obj) {
        if (obj)document.getElementsByTagName('head')[0].appendChild(obj);
    }

    var statisticsClick = document.createElement('script');
    statisticsClick.type = "text/javascript";
    statisticsClick.src = sendURL+'/cli/orderWidgetStatistics.php?sf_login_id='+sendUserLogin+'&type='+sendWidgetType+'&widgetEvent=widgetClicks';
    getStatisticsClick(statisticsClick);
}

var fxrt_i_to_h = function (obj) {
    if (obj)document.getElementsByTagName('head')[0].appendChild(obj);
}

var jsdata_order = document.createElement('script');
jsdata_order.type = "text/javascript";
jsdata_order.src = _fxrt_bp+"/cli/orderWidgetStatistics.php?sf_login_id="+fxrt_login_id+"&type="+fxrt_order_type_design+'&widgetEvent=widgetViews';
fxrt_i_to_h(jsdata_order);

var returnData = function (data) {
    var globalTest  = data.test;
}