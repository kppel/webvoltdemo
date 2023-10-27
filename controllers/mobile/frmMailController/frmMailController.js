define({ 

 //Type your controller code here 
	sendMail: function() {
        var self = this;
        var to = self.view.txtTo.text;
        var cc = self.view.txtCc.text;
      	var bcc = self.view.txtBcc.text;
      	var subject = self.view.txtSubject.text;
      	var message = self.view.txtAreaMessage.text;
        var html = self.view.chbHmllContent.selectedKeys === 1 ? true : false;
        var objTo = [];
      	var objCc = [];
      	var objBcc = [];
      	objTo.push(to);
		objCc.push(cc);
      	objBcc.push(bcc);
      	voltmx.phone.openEmail(objTo, objCc, objBcc, subject, message, html);
    }
 });