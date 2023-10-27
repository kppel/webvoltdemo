define(function(){ 

 //Type your controller code here 
    return {
      	initGettersSetters: function() {},
        isClosed: false,
      	closeWhenDone: function() {
            this.isClosed = true;
            //this.animateDescriptionScreen(100, "Behind The Scene", this.setUIAfterAnimation);
            this.setUIAfterAnimation(100, "Behind The Scene");
         },
         setUIAfterAnimation: function(left, headerText) {
            if (this.isClosed) {
                this.navigateToPreviousScreen();
                this.isClosed = false;
            }
        },
        navigateToPreviousScreen: function() {
          var prevForm = kony.application.getPreviousForm();
          var navObj = new kony.mvc.Navigation(prevForm.id);
          navObj.navigate();
        },
    }
 });