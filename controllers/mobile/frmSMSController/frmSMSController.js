define({ 

 //Type your controller code here 
	callSMS: function callSMS(eventobject) {
        var self = this;
      	var telNo = "+" + this.view.lCountryNo.selectedKey + this.view.txtPhoneNo.text;
        var message = this.view.txtAreaMessage.text;
      	//self.callSMS.call(this);
        voltmx.phone.sendSMS(telNo, message);
    }
 });