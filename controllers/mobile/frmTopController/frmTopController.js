define({ 

 //Type your controller code here 
  onTextChange : function(){
      let textBox = this.view.txtPostCode;
      if (textBox.text.length > 7) {  
        textBox.text = textBox.text.substr(0, 2);
      }
  },
  checkValidation: function() {
      let textBox = this.view.txtPostCode;
      // check zenkakukana
      if (!require(['common'])(textBox.text)) {
        alert("全角カタカナで入力してください。");
      }
  }
 });