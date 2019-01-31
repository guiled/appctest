// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function clickCloseB() {
   $.winC.close({animated: false});
}

function closeC() {
    Ti.API.info('Close C');
}
