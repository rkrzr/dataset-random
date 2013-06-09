/*config matchtable version 2*/

var xto_force = '';

var xt_SEC_MatchTable = {

    "google": 2,

    "sanoma": 3,

    "default": 100

}

/* recherche ref + affectation*/

for (p in xt_SEC_MatchTable) {
    xt_SEC_MatchTable[p.toLowerCase()] = xt_SEC_MatchTable[p]
}

try {
    xt_qs = document.location.href;
} catch (e) {
    xt_qs = window.location.href;
}

xt_qsn = xt_qs.toLowerCase().replace(/%3d/g, '=').replace(/%3C/g, '<').replace(/%3E/g, '>').replace(/[<>]/g, '');

try {
    var _x_id = new RegExp("ref=([a-zA-Z0-9]*)_").exec(xt_qsn.substring(xt_qsn.indexOf('?') + 1))[1]
} catch (ex) {
    var _x_id = ''
}

try {
    var _x_lbl = (new RegExp("label=([a-zA-Z0-9+_\-]*)").exec(xt_qsn.substring(xt_qsn.indexOf('?') + 1))[1]) || ''
} catch (ex) {
    var _x_lbl = ''
}

try {
    var _x_nwk = (_x_id == 'google' ? 'GOO' : '')
} catch (ex) {
    var _x_nwk = ''
}

if (_x_id && _x_id != undefined) {
    _x_id = xt_SEC_MatchTable[_x_id] ? xt_SEC_MatchTable[_x_id] : xt_SEC_MatchTable["default"]
}

if (_x_id) {
    xto_force = 'SEC-' + _x_id + '-' + _x_nwk + '-[]-[]-C-[' + _x_lbl + ']'
}