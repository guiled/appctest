// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function closeB() {
    Ti.API.info('Close B');
};

function openCDelay() {
    Alloy.Globals.main.openWindow(Alloy.createController('winC').getView(), {animated: false});
    setTimeout(function () {$.winB.close({animated: false});}, 300);
}

function openC() {
    Alloy.Globals.main.openWindow(Alloy.createController('winC').getView(), {animated: false});
    $.winB.close({animated: false});
}
Alloy.Globals.winB = $.winB;
