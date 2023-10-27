function AS_Image_b0b183d9d8264e869d4445529f2250fb(eventobject, x, y) {
    var self = this;

    function SHOW_ALERT_ide_onTouchStart_a07497b2e4da4f6e8457fe5e0a52c72c_True() {}
    function SHOW_ALERT_ide_onTouchStart_a07497b2e4da4f6e8457fe5e0a52c72c_False() {}
    function SHOW_ALERT_ide_onTouchStart_a07497b2e4da4f6e8457fe5e0a52c72c_Callback(response) {
        if (response === true) {
            SHOW_ALERT_ide_onTouchStart_a07497b2e4da4f6e8457fe5e0a52c72c_True();
        } else {
            SHOW_ALERT_ide_onTouchStart_a07497b2e4da4f6e8457fe5e0a52c72c_False();
        }
    }
    voltmx.ui.Alert({
        "alertType": constants.ALERT_TYPE_CONFIRMATION,
        "alertTitle": null,
        "yesLabel": null,
        "noLabel": null,
        "alertIcon": null,
        "message": "No3",
        "alertHandler": SHOW_ALERT_ide_onTouchStart_a07497b2e4da4f6e8457fe5e0a52c72c_Callback
    }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
    });
}