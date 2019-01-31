function closeA() {
    Ti.API.info('Close A');
}

function openB() {
    Alloy.Globals.main.openWindow(Alloy.createController('winB').getView(), {animated: false});
}

$.index.open();

Alloy.Globals.main = $.index;
