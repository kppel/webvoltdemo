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
          voltmx.timer.schedule("delayAnimation_2" + i.toString(), function() {},  0.5, false);
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
    	voltmx.timer.schedule("delayAnimation_3", this.createAnimation,  1, true);
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
     	this.view.flxImage.height = '250px';
    	this.view.flxImage.width = '250px';
    	voltmx.timer.cancel("delayAnimation_flex");
    	voltmx.timer.cancel("delayAnimation_Images");
    	voltmx.timer.schedule("delayAnimation_Images", this.createAnimations,  ROTATE_SPEED, true);
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
  slider: function() {
    ROTATE_SPEED = this.view.slider.selectedValue/100;
	console.log(ROTATE_SPEED);
	voltmx.timer.cancel("delayAnimation_slider");
	voltmx.timer.schedule("delayAnimation_slider", this.rotateImages, ROTATE_SPEED, true);
  },
  rotateFlex: function() {
    	this.view.flxImage.height = '350px';
    	this.view.flxImage.width = '350px';
    	voltmx.timer.cancel("delayAnimation_Images");
    	voltmx.timer.cancel("delayAnimation_flex");
    	voltmx.timer.schedule("delayAnimation_flex", this.createAnimationFlex,  ROTATE_SPEED, true);
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
  setImagePersion: function() {
    this.view.browser.isVisible = true;
    this.view.browser.htmlString = "";
    var randnum = 1 + Math.floor( Math.random() * 10 );
	//var fileImage = "spaandroid/images/440/resources/common/p" + randnum + ".gif";
    var filePath = voltmx.store.getItem("p" + randnum);
    var gifSet = '<!DOCTYPE html><html><head><title>Animated GIF Example</title></head><body><div style="display:flex;justify-content:center;"><img id="dynamicImg" src="' + filePath + '" ' + 'alt="Animated GIF" style="width:115px;height:115px;"><div></body></html>';
    this.view.browser.htmlString = gifSet;
  },
  setImageAnimal: function() {
    this.view.browser.isVisible = true;
    this.view.browser.htmlString = "";
    var randnum = 1 + Math.floor( Math.random() * 10 );
	//var fileImage = "spaandroid/images/440/resources/common/ani" + randnum + ".gif";
    var filePath = voltmx.store.getItem("ani" + randnum);
    var gifSet = '<!DOCTYPE html><html><head><title>Animated GIF Example</title></head><body><div style="display:flex;justify-content:center;"><img id="dynamicImg" src="' + filePath + '" ' + 'alt="Animated GIF" style="width:115px;height:115px;"><div></body></html>';
    this.view.browser.htmlString = gifSet;
  },
  setImageEvent: function() {
    this.view.browser.isVisible = true;
    this.view.browser.htmlString = "";
    var randnum = 1 + Math.floor( Math.random() * 7 );
	//var fileImage = "spaandroid/images/440/resources/common/e" + randnum + ".gif";
    var filePath = voltmx.store.getItem("e" + randnum);
    var gifSet = '<!DOCTYPE html><html><head><title>Animated GIF Example</title></head><body><div style="display:flex;justify-content:center;"><img id="dynamicImg" src="' + filePath + '" ' + 'alt="Animated GIF" style="width:115px;height:115px;"><div></body></html>';
    this.view.browser.htmlString = gifSet;
  },
  setImageFood: function() {
    this.view.browser.isVisible = true;
    this.view.browser.htmlString = "";
    var randnum = 1 + Math.floor( Math.random() * 6 );
	//var fileImage = "spaandroid/images/440/resources/common/f" + randnum + ".gif";
    //var filePath = voltmx.store.getItem("ani1");
    var filePath = voltmx.store.getItem("f" + randnum);
    var gifSet = '<!DOCTYPE html><html><head><title>Animated GIF Example</title></head><body><div style="display:flex;justify-content:center;"><img id="dynamicImg" src="' + filePath + '" ' + 'alt="Animated GIF" style="width:115px;height:115px;"><div></body></html>';
    this.view.browser.htmlString = gifSet;
  },
  setLocalStorageImages: function() {
    var ani1 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f648/512.gif";
    voltmx.store.setItem("ani1", ani1);
    var ani2 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f984/512.gif";
    voltmx.store.setItem("ani2", ani2);
    var ani3 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f996/512.gif";
    voltmx.store.setItem("ani3", ani3);
    var ani4 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f422/512.gif";
    voltmx.store.setItem("ani4", ani4);
    var ani5 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f438/512.gif";
    voltmx.store.setItem("ani5", ani5);
    var ani6 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f415/512.gif";
    voltmx.store.setItem("ani6", ani6);
    var ani7 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f40e/512.gif";
    voltmx.store.setItem("ani7", ani7);
    var ani8 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f998/512.gif";
    voltmx.store.setItem("ani8", ani8);
    var ani9 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f405/512.gif";
    voltmx.store.setItem("ani9", ani9);
    var ani10 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f43f_fe0f/512.gif";
    voltmx.store.setItem("ani10", ani10);
    var p1 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f483_1f3fc/512.gif";
    voltmx.store.setItem("p1", p1);
    var p2 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f976/512.gif";
    voltmx.store.setItem("p2", p2);
    var p3 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f92b/512.gif";
    voltmx.store.setItem("p3", p3);
    var p4 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f609/512.gif";
    voltmx.store.setItem("p4", p4);
    var p5 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f601/512.gif";
    voltmx.store.setItem("p5", p5);
    var p6 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f973/512.gif";
    voltmx.store.setItem("p6", p6);
    var p7 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f921/512.gif";
    voltmx.store.setItem("p7", p7);
    var p8 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f47b/512.gif";
    voltmx.store.setItem("p8", p8);
    var p9 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1fa77/512.gif";
    voltmx.store.setItem("p9", p9);
    var p10 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f441_fe0f/512.gif";
    voltmx.store.setItem("p10", p10);
    var e1 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f38a/512.gif";
    voltmx.store.setItem("e1", e1);
    var e2 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f386/512.gif";
    voltmx.store.setItem("e2", e2);
    var e3 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1faa9/512.gif";
    voltmx.store.setItem("e3", e3);
    var e4 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3af/512.gif";
    voltmx.store.setItem("e4", e4);
    var e5 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f382/512.gif";
    voltmx.store.setItem("e5", e5);
    var e6 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f3bb/512.gif";
    voltmx.store.setItem("e6", e6);
    var e7 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1fa87/512.gif";
    voltmx.store.setItem("e7", e7);
    var f1 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f345/512.gif";
    voltmx.store.setItem("f1", f1);
    var f2 = "https://fonts.gstatic.com/s/e/notoemoji/latest/2615/512.gif";
    voltmx.store.setItem("f2", f2);
    var f3 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37b/512.gif";
    voltmx.store.setItem("f3", f3);
    var f4 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f377/512.gif";
    voltmx.store.setItem("f4", f4);
    var f5 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f37f/512.gif";
    voltmx.store.setItem("f5", f5);
    var f6 = "https://fonts.gstatic.com/s/e/notoemoji/latest/1f379/512.gif";
    voltmx.store.setItem("f6", f6);
  }
 });