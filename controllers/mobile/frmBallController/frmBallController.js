define({ 

 //Type your controller code here 
	rotateImage: function() {
        var self = this;
      var delayInMilliseconds = 500; //1 second
      var trans100 = voltmx.ui.makeAffineTransform();
      function callback() {}
      	for (let d=90; d<=90; d=d+10) {
            trans100.rotate(d);
            console.log("delayAnimation_" + d.toString());
            voltmx.timer.schedule("delayAnimation_" + d.toString(), createAnimation, delayInMilliseconds, true);
         	//setTimeOut(createAnimation, delayInMilliseconds, trans100);
        }
      
      function createAnimation(trans100) {
        self.view.Image0f6c513a48de249.animate(
                voltmx.ui.createAnimation({
                      "100": {
                        "stepConfig": {
                              "timingFunction": voltmx.anim.LINEAR
                          },
                          "transform": trans100
                      }
                  }), {
                         "delay": 0,
            			"iterationCount": 1,
                        "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                        "duration": 0.25
                  }, {
                      "animationEnd": callback
                });
      }      
    },
  rotateImage2: function() {
      var self = this;
        function TRANSFORM_ACTION_NEW_h927e54739054fba8dbbabfc5fabdb7f_Callback() {}
        var trans100 = voltmx.ui.makeAffineTransform();
    	var i = 1;
    	for (let d=10; d <=360; d=d+10) {
          trans100.rotate(d);
          trans100.translate(0, 0);
          voltmx.timer.schedule("delayAnimation_" + i.toString(), function() {},  0.5, false);
          self.view.Image0f6c513a48de249.animate(
          voltmx.ui.createAnimation({
              "100": {
                  "stepConfig": {
                      "timingFunction": voltmx.anim.EASE
                  },
                  "opacity": 1,
                  "displayAnimationId": "",
                  "duration": 0.25,
                  "delay": 0,
                  "iterationCount": "1",
                  "transform": trans100
              }
          }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
              "duration": 0.25
          }, {
              "animationEnd": TRANSFORM_ACTION_NEW_h927e54739054fba8dbbabfc5fabdb7f_Callback
          });
          
          ++i; 
          if (d == 360) {
            d = 10;
          }
        }
    	
  },
  rotateImage3: function() {
    	var i = 1;
    	var d = 10;
    	voltmx.timer.schedule("delayAnimation_", this.createAnimation,  1, true);
  },
  createAnimation: function() {
    	  var self = this;
    	  ROTATE_DEGREE += 10; 
    	  var trans100 = voltmx.ui.makeAffineTransform();
    	  function TRANSFORM_ACTION_NEW_h927e54739054fba8dbbabfc5fabdb7f_Callback() {}
		  trans100.rotate(ROTATE_DEGREE);
          trans100.translate(0, 0);
          self.view.Image0f6c513a48de249.animate(
          voltmx.ui.createAnimation({
              "100": {
                  "stepConfig": {
                      "timingFunction": voltmx.anim.EASE
                  },
                  "opacity": 1,
                  "displayAnimationId": "",
                  "duration": 0.25,
                  "delay": 0,
                  "iterationCount": "1",
                  "transform": trans100
              }
          }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
              "duration": 0.25
          }, {
              "animationEnd": TRANSFORM_ACTION_NEW_h927e54739054fba8dbbabfc5fabdb7f_Callback
          });
    
    	if (ROTATE_DEGREE == 360) {
          ROTATE_DEGREE = 10;
        }
  },
  rotateImages: function() {
    	voltmx.timer.schedule("delayAnimation_", this.createAnimations,  ROTATE_SPEED, true);
  },
  createAnimations: function() {
    	  var self = this;
    	  ROTATE_DEGREE += 10; 
    	  var trans100_1 = voltmx.ui.makeAffineTransform();
    	  var trans100_2 = voltmx.ui.makeAffineTransform();
    	  var trans100_3 = voltmx.ui.makeAffineTransform();
    	  var trans100_4 = voltmx.ui.makeAffineTransform();
    	  function TRANSFORM_ACTION_NEW_img1_Callback() {}
    	  function TRANSFORM_ACTION_NEW_img2_Callback() {}
    	  function TRANSFORM_ACTION_NEW_img3_Callback() {}
    	  function TRANSFORM_ACTION_NEW_img4_Callback() {}
		  trans100_1.rotate(ROTATE_DEGREE);
          trans100_1.translate(0, 0);
    	  trans100_2.rotate(ROTATE_DEGREE);
          trans100_2.translate(0, 0);
    	  trans100_3.rotate(ROTATE_DEGREE);
          trans100_3.translate(0, 0);
    	  trans100_4.rotate(ROTATE_DEGREE);
          trans100_4.translate(0, 0);
          self.view.img1.animate(
            voltmx.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": voltmx.anim.EASE
                    },
                    "opacity": 1,
                    "displayAnimationId": "",
                    "duration": 0.25,
                    "delay": 0,
                    "iterationCount": "1",
                    "transform": trans100_1
                }
          }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
              "duration": 0.25
          }, {
              "animationEnd": TRANSFORM_ACTION_NEW_img1_Callback
          });
    	
    	self.view.img2.animate(
            voltmx.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": voltmx.anim.EASE
                    },
                    "opacity": 1,
                    "displayAnimationId": "",
                    "duration": 0.25,
                    "delay": 0,
                    "iterationCount": "1",
                    "transform": trans100_2
                }
          }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
              "duration": 0.25
          }, {
              "animationEnd": TRANSFORM_ACTION_NEW_img2_Callback
          });
    
    	self.view.img3.animate(
            voltmx.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": voltmx.anim.EASE
                    },
                    "opacity": 1,
                    "displayAnimationId": "",
                    "duration": 0.25,
                    "delay": 0,
                    "iterationCount": "1",
                    "transform": trans100_3
                }
          }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
              "duration": 0.25
          }, {
              "animationEnd": TRANSFORM_ACTION_NEW_img3_Callback
          });
    
    	self.view.img4.animate(
            voltmx.ui.createAnimation({
                "100": {
                    "stepConfig": {
                        "timingFunction": voltmx.anim.EASE
                    },
                    "opacity": 1,
                    "displayAnimationId": "",
                    "duration": 0.25,
                    "delay": 0,
                    "iterationCount": "1",
                    "transform": trans100_4
                }
          }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
              "duration": 0.25
          }, {
              "animationEnd": TRANSFORM_ACTION_NEW_img4_Callback
          });
    
    	if (ROTATE_DEGREE == 360) {
          ROTATE_DEGREE = 10;
        }
  },
  rotateFlex: function() {
    	voltmx.timer.schedule("delayAnimation_", this.createAnimationFlex,  ROTATE_SPEED, true);
  },
  createAnimationFlex: function() {
    	  var self = this;
    	  ROTATE_DEGREE += 10; 
    	  var trans100 = voltmx.ui.makeAffineTransform();
    	  function TRANSFORM_ACTION_NEW_flex_Callback() {}
		  trans100.rotate(ROTATE_DEGREE);
          trans100.translate(0, 0);
          self.view.flxBall.animate(
          voltmx.ui.createAnimation({
              "100": {
                  "stepConfig": {
                      "timingFunction": voltmx.anim.EASE
                  },
                  "opacity": 1,
                  "displayAnimationId": "",
                  "duration": 0.25,
                  "delay": 0,
                  "iterationCount": "1",
                  "transform": trans100
              }
          }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
              "duration": 0.25
          }, {
              "animationEnd": TRANSFORM_ACTION_NEW_flex_Callback
          });
    
    	if (ROTATE_DEGREE == 360) {
          ROTATE_DEGREE = 10;
        }
  },
    //This function is called when you schedule the timer
  generateAlert: function(){
    alert("You have generated an alert after 1 seconds ");
  },
  //To schedule a timer to display an alert after 3 seconds use the below snippet.
  scheduleTimer: function(){  
    voltmx.timer.schedule("timer4",this.generateAlert, 1, true);
  },
 });