define(function() {
  var voltmxLoggerModule = require('com/voltmx/carousel/voltmxLogger');
  var voltmxL = {};
  voltmxL.logger = new voltmxLoggerModule("Carousel");
  voltmxL.logger.setLogLevel("DEBUG");
  constants.TOPFLEX = 1;
  constants.MAXFLEX = 5;
  constants.GESTUREENABLED = false;
  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {
      this._topFlex = constants.TOPFLEX;
      this._maxFlex = constants.MAXFLEX;
      this._gestureEnabled = constants.GESTUREENABLED;
      this._imageCount = "";
      this._imageTemplate = [];
      this._scrollHorizontal = true;
      this.setGesture();
      this._imgSeperate = [];
      this.view.preShow=this.preShow;
      this.view.postShow=this.postShow;
    },
    //Logic for getters/setters of custom properties
    initGettersSetters: function() {
      defineGetter(this, "flexLeft", function() {
        voltmxL.logger.trace("----------Entering Flex Left Getter---------", voltmxL.logger.FUNCTION_ENTRY);
        return this._flexLeft;
      });
      defineSetter(this, "flexLeft", function(val) {
        voltmxL.logger.trace("----------Entering Flex Left Setter---------", voltmxL.logger.FUNCTION_ENTRY);
        try {
          this._flexLeft = val;

        } catch (exception) {
          voltmxL.logger.error("Exception in Flex Left settter : " + exception.message, voltmxL.logger.EXCEPTION);
          if (exception.Error === "Carousel Component")
            throw exception;
        }
      });
      defineGetter(this, "flexTop", function() {
        voltmxL.logger.trace("----------Entering Flex Top Getter---------", voltmxL.logger.FUNCTION_ENTRY);
        return this._flexTop;
      });
      defineSetter(this, "flexTop", function(val) {
        voltmxL.logger.trace("----------Entering Flex Top Setter---------", voltmxL.logger.FUNCTION_ENTRY);
        try {
          this._flexTop = val;
        } catch (exception) {
          voltmxL.logger.error("Exception in Flex Top settter : " + exception.message, voltmxL.logger.EXCEPTION);
          if (exception.Error === "Carousel Component")
            throw exception;
        }
      });
      defineGetter(this, "flexWidth", function() {
        voltmxL.logger.trace("----------Entering Flex Width Getter---------", voltmxL.logger.FUNCTION_ENTRY);
        return this._flexWidth;
      });
      defineSetter(this, "flexWidth", function(val) {
        voltmxL.logger.trace("----------Entering Flex Width Setter---------", voltmxL.logger.FUNCTION_ENTRY);
        try {
          this._flexWidth = val;
        } catch (exception) {
          voltmxL.logger.error("Exception in Flex Width settter : " + exception.message, voltmxL.logger.EXCEPTION);
          if (exception.Error === "Carousel Component")
            throw exception;
        }
      });
      defineGetter(this, "flexHeight", function() {
        voltmxL.logger.trace("----------Entering Flex Height Getter---------", voltmxL.logger.FUNCTION_ENTRY);
        return this._flexHeight;
      });
      defineSetter(this, "flexHeight", function(val) {
        voltmxL.logger.trace("----------Entering Flex Height Setter---------", voltmxL.logger.FUNCTION_ENTRY);
        try {
          this._flexHeight = val;
        } catch (exception) {
          voltmxL.logger.error("Exception in Flex Height settter : " + exception.message, voltmxL.logger.EXCEPTION);
          if (exception.Error === "Carousel Component")
            throw exception;
        }
      });
      defineGetter(this, "animationSpeed", function() {
        voltmxL.logger.trace("----------Entering Animation Speed Getter---------", voltmxL.logger.FUNCTION_ENTRY);
        return this._animationSpeed;
      });
      defineSetter(this, "animationSpeed", function(val) {
        voltmxL.logger.trace("----------Entering Animation Speed Setter---------", voltmxL.logger.FUNCTION_ENTRY);
        try {
          if(val === "Medium"){
            this._animationSpeed = 1;  
          }
          else if(val === "Slow"){
            this._animationSpeed = 3;
          }
          else{
            this._animationSpeed = 0.5;
          }
        }
        catch (exception) {
          voltmxL.logger.error("Exception in Animation Speed settter : " + exception.message, voltmxL.logger.EXCEPTION);
          if (exception.Error === "Carousel Component")
            throw exception;
        }
      });
      defineGetter(this, "data", function() {
        voltmxL.logger.trace("----------Entering Data Getter---------", voltmxL.logger.FUNCTION_ENTRY);
        return this._data;
      });
      defineSetter(this, "data", function(val) {
        voltmxL.logger.trace("----------Entering Data Setter---------", voltmxL.logger.FUNCTION_ENTRY);
        try {
          this._data = val.data;
          this._imageCount = ((val.data).length).toFixed();
          for(var i=0;i<this._imageCount;i++){
            this._imageTemplate.push(this._data[i].DefaultColumn);
          }
        }
        catch (exception) {
          voltmxL.logger.error("Exception in Data settter : " + exception.message, voltmxL.logger.EXCEPTION);
          if (exception.Error === "Carousel Component")
            throw exception;
        }
      });
      defineGetter(this, "animationDirection", function() {
        voltmxL.logger.trace("----------Entering Animation DIrection Getter---------", voltmxL.logger.FUNCTION_ENTRY);
        return this._animationDirection;
      });
      defineSetter(this, "animationDirection", function(val) {
        voltmxL.logger.trace("----------Entering Animation DIrection Setter---------", voltmxL.logger.FUNCTION_ENTRY);
        try {
          if(val === "Horizontal"){
            this._scrollHorizontal = true;
          }
          else{
            this._scrollHorizontal = false;
          }
          this._animationDirection = val;
        } catch (exception) {
          voltmxL.logger.error("Exception in Animation DIrection settter : " + exception.message, voltmxL.logger.EXCEPTION);
          if (exception.Error === "Carousel Component")
            throw exception;
        }
      });
      defineGetter(this, "autoScroll", function() {
        voltmxL.logger.trace("----------Entering Auto Scroll Getter---------", voltmxL.logger.FUNCTION_ENTRY);
        return this._autoScroll;
      });
      defineSetter(this, "autoScroll", function(val) {
        voltmxL.logger.trace("----------Entering Auto Scroll Setter---------", voltmxL.logger.FUNCTION_ENTRY);
        try {
          this._autoScroll = val;
        } catch (exception) {
          voltmxL.logger.error("Exception in Auto Scroll settter : " + exception.message, voltmxL.logger.EXCEPTION);
          if (exception.Error === "Carousel Component")
            throw exception;
        }
      });
      defineGetter(this, "autoScrollDelay", function() {
        voltmxL.logger.trace("----------Entering Auto Scroll Delay Getter---------", voltmxL.logger.FUNCTION_ENTRY);
        return this._autoScrollDelay;
      });
      defineSetter(this, "autoScrollDelay", function(val) {
        voltmxL.logger.trace("----------Entering Auto Scroll Delay Setter---------", voltmxL.logger.FUNCTION_ENTRY);
        try {
          this._autoScrollDelay = val;
        } catch (exception) {
          voltmxL.logger.error("Exception in Auto Scroll Delay settter : " + exception.message, voltmxL.logger.EXCEPTION);
          if (exception.Error === "Carousel Component")
            throw exception;
        }
      });
      defineGetter(this, "animateInLoop", function() {
        voltmxL.logger.trace("----------Entering Animate In Loop Getter---------", voltmxL.logger.FUNCTION_ENTRY);
        return this._animateInLoop;
      });
      defineSetter(this, "animateInLoop", function(val) {
        voltmxL.logger.trace("----------Entering Animate In Loop Setter---------", voltmxL.logger.FUNCTION_ENTRY);
        try {
          this._animateInLoop = val;
        } catch (exception) {
          voltmxL.logger.error("Exception in Animate In Loop settter : " + exception.message, voltmxL.logger.EXCEPTION);
          if (exception.Error === "Carousel Component")
            throw exception;
        }
      });
    },

    preShow: function(){
      this.create();
    },

    postShow: function(){
      if(this._autoScroll){
        this.autoScrolling();
      }
      this.setGesture();
    },
    /**
         * @function setGesture
         * @description This function is invoked to set Gesture
         * @private
         */
    setGesture : function(){
      try{
        voltmxL.logger.trace("----------Entering setGesture function---------", voltmxL.logger.FUNCTION_ENTRY);
        if(!this._gestureEnabled){
          this.view.flxMain.setGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {
            fingers : 1
          }, this.swipeAnimation);
          this._gestureEnabled = true;
        }
      }catch (exception) {
        voltmxL.logger.error("#####Exception in setGesture : " + exception.message, voltmxL.logger.EXCEPTION);
      }
      voltmxL.logger.trace("---------------Exiting setGesture function---------------", voltmxL.logger.FUNCTION_EXIT);
    },
    /**
         * @function swipeAnimation
         * @description This function is invoked as a callback for setGesture
         * @private
         * @param {JSON} eventObject, param as rowIndex
         */
    swipeAnimation : function(commonWidget, gestureInfo, context){
      try{
        voltmxL.logger.trace("----------Entering swipeAnimation function---------", voltmxL.logger.FUNCTION_ENTRY);
        if(!this._autoScroll){
          if (gestureInfo.swipeDirection == 1) {
            if(this._animateInLoop){
              this.animateInCircle();
            }
            else{
              this.animateFlex();
              if(this._topFlex < this._maxFlex)
                this._topFlex = this._topFlex+1;  
            }

          } else if (gestureInfo.swipeDirection == 2) {
            if(this._animateInLoop){
              this.reanimateInCircle();
            }
            else{
              this.reanimateFlex();
              if(this._topFlex >1)
                this._topFlex = this._topFlex-1;
            }

          }
          else if(gestureInfo.swipeDirection == 3){
            if(this._animateInLoop){
              this.animateTopInCircle();
            }
            else{
              this.animateToTop();
              if(this._topFlex < this._maxFlex)
                this._topFlex = this._topFlex+1; 
            }
          }
          else {
            if(this._animateInLoop){
              this.reanimateTopInCircle();
            }
            else{
              this.animateToBottom();
              if(this._topFlex >1)
                this._topFlex = this._topFlex-1; 
            }
          }
        }
      }
      catch (exception) {
        voltmxL.logger.error("#####Exception in swipeAnimation : " + exception.message, voltmxL.logger.EXCEPTION);
      }
      voltmxL.logger.trace("---------------Exiting swipeAnimation function---------------", voltmxL.logger.FUNCTION_EXIT);
    },
    /**
         * @function create
         * @description This function is invoked to create flexcontainers
         * @private
         */
    create : function(){
      try{
        voltmxL.logger.trace("----------Entering create function---------", voltmxL.logger.FUNCTION_ENTRY);

        var p1=voltmx.os.deviceInfo().name.toLowerCase();
        if(p1==="android"||p1==="iphone"||p1==="ipad"){

          this.view.flxMain.removeAll();
          this._topFlex = 1;
          this._maxFlex = this._imageCount;
          var flexOneTop = this._flexTop+"%";
          var flexOneLeft = this._flexLeft+"%";
          var flexOneWidth = this._flexWidth+"%";
          var flexOneHeight = this._flexHeight+"%";
          var flexTwoTop = (parseInt(this._flexTop))+5+"%";
          var flexTwoLeft = (parseInt(this._flexLeft))+10+"%";
          var flexTwoWidth = (parseInt(this._flexWidth))-7+"%";
          var flexTwoHeight = (parseInt(this._flexHeight))-10+"%";
          var flexThreeTop = (parseInt(this._flexTop))+10+"%";
          var flexThreeLeft = (parseInt(this._flexLeft))+20+"%";
          var flexThreeWidth = (parseInt(this._flexWidth))-14+"%";
          var flexThreeHeight = (parseInt(this._flexHeight))-20+"%";
          for(var i=0;i<this._imageCount;i++){
            if(i == 0){
              var productImage = new voltmx.ui.Image2({
                "id": "imgProduct"+(i+1),
                "isVisible": true,
                "width": "100%",
                "height": "100%",
                "imageWhileDownloading" : "voltmxmp_downloading_image.gif",
                "src": this._imageTemplate[i],
                "imageScaleMode": 1
              }, {}, {}); 
              var flxProd = new voltmx.ui.FlexContainer({
                "id": "flxInner"+(i+1),
                "top": flexOneTop,
                "left": flexOneLeft,
                "width": flexOneWidth,
                "height": flexOneHeight,
                "zIndex": (this._maxFlex-(i-1)),
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "isVisible": true,
                "clipBounds": true,
              }, {
                "padding": [0, 0, 0, 0]
              }, {});
              flxProd.add(productImage);
              this.view.flxMain.add(flxProd);
            }
            else if(i == 1){
              var productImage2 = new voltmx.ui.Image2({
                "id": "imgProduct"+(i+1),
                "isVisible": true,
                "width": "100%",
                "height": "100%",
                "imageWhileDownloading" : "konymp_default.png",
                "src": this._imageTemplate[i],
                "imageScaleMode": 1
              }, {}, {}); 
              var flxProd2 = new voltmx.ui.FlexContainer({
                "id": "flxInner"+(i+1),
                "top": flexTwoTop,
                "left": flexTwoLeft,
                "width": flexTwoWidth,
                "height": flexTwoHeight,
                "zIndex": (this._maxFlex-(i-1)),
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "isVisible": true,
                "clipBounds": true,
              }, {
                "padding": [0, 0, 0, 0]
              }, {});
              flxProd2.add(productImage2);
              this.view.flxMain.add(flxProd2);
            }
            else{
              var productImage3 = new voltmx.ui.Image2({
                "id": "imgProduct"+(i+1),
                "isVisible": true,
                "width": "100%",
                "height": "100%",
                "imageWhileDownloading" : "konymp_default.png",
                "src": this._imageTemplate[i],
                "imageScaleMode": 1
              }, {}, {}); 
              var flxProd3 = new voltmx.ui.FlexContainer({
                "id": "flxInner"+(i+1),
                "skin":"",
                "top": flexThreeTop,
                "left": flexThreeLeft,
                "width": flexThreeWidth,
                "height": flexThreeHeight,
                "zIndex": (this._maxFlex-(i-1)),
                "autogrowMode": voltmx.flex.AUTOGROW_HEIGHT,
                "isVisible": true,
                "clipBounds": true,
              }, {
                "padding": [0, 0, 0, 0]
              }, {});
              flxProd3.add(productImage3);
              this.view.flxMain.add(flxProd3);
            }
          }
        }
        else{
          this.view.vuecarousel.isVisible=true;
          this.view.vuecarousel;

        }
      }
      catch (exception) {
        voltmxL.logger.error("#####Exception in create : " + exception.message, voltmxL.logger.EXCEPTION);
      }
      voltmxL.logger.trace("---------------Exiting create function---------------", voltmxL.logger.FUNCTION_EXIT);
    },
    /**
         * @function animateFlex
         * @description This function is invoked when user left swipe the product containers in wishlist page
         * @private
         */
    animateFlex : function(){
      try{
        voltmxL.logger.trace("----------Entering animateFlex function---------", voltmxL.logger.FUNCTION_ENTRY);
        if(this._scrollHorizontal){
          var animationDuration = this._animationSpeed;
          var flxOneTop = this._flexTop+"%";
          var flxOneLeft = this._flexLeft+"%";
          var flxOneWidth = this._flexWidth+"%";
          var flxOneHeight = this._flexHeight+"%";
          var flxTwoTop = (parseInt(this._flexTop))+5+"%";
          var flxTwoLeft = (parseInt(this._flexLeft))+10+"%";
          var flxTwoWidth = (parseInt(this._flexWidth))-7+"%";
          var flxTwoHeight = (parseInt(this._flexHeight))-10+"%";
          var flxThreeTop = (parseInt(this._flexTop))+10+"%";
          var flxThreeLeft = (parseInt(this._flexLeft))+20+"%";
          var flxThreeWidth = (parseInt(this._flexWidth))-14+"%";
          var flxThreeHeight = (parseInt(this._flexHeight))-20+"%";
          if(this._topFlex< this._maxFlex){ 	
            this.view["flxInner"+this._topFlex].animate(
              voltmx.ui.createAnimation({
                "0": {
                  "left": flxOneLeft,
                  "top":flxOneTop,
                  "width": flxOneWidth,
                  "height":flxOneHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                },
                "100": {
                  "left": "-100%",
                  "top":flxOneTop,
                  "width":flxOneWidth,
                  "height":flxOneHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });  
          }
          if(this._topFlex+1 <= this._maxFlex){
            this.view["flxInner"+(this._topFlex+1)].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxOneLeft,
                  "top":flxOneTop,
                  "width":flxOneWidth,
                  "height":flxOneHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });  
          }
          if(this._topFlex+2 <= this._maxFlex){
            this.view["flxInner"+(this._topFlex+2)].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxTwoLeft,
                  "top":flxTwoTop,
                  "width":flxTwoWidth,
                  "height":flxTwoHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });
          }
        }
      }
      catch (exception) {
        voltmxL.logger.error("#####Exception in animateFlex : " + exception.message, voltmxL.logger.EXCEPTION);
      }
      voltmxL.logger.trace("---------------Exiting animateFlex function---------------", voltmxL.logger.FUNCTION_EXIT);
    },
    /**
         * @function reanimateFlex
         * @description This function is invoked when user right swipe the product containers in wishlist page
         * @private
         */
    reanimateFlex : function(){
      voltmxL.logger.trace("----------Entering reanimateFlex function---------", voltmxL.logger.FUNCTION_ENTRY);
      try{
        if(this._scrollHorizontal){
          var animationDuration = this._animationSpeed;
          var flxOneTop = this._flexTop+"%";
          var flxOneLeft = this._flexLeft+"%";
          var flxOneWidth = this._flexWidth+"%";
          var flxOneHeight = this._flexHeight+"%";
          var flxTwoTop = (parseInt(this._flexTop))+5+"%";
          var flxTwoLeft = (parseInt(this._flexLeft))+10+"%";
          var flxTwoWidth = (parseInt(this._flexWidth))-7+"%";
          var flxTwoHeight = (parseInt(this._flexHeight))-10+"%";
          var flxThreeTop = (parseInt(this._flexTop))+10+"%";
          var flxThreeLeft = (parseInt(this._flexLeft))+20+"%";
          var flxThreeWidth = (parseInt(this._flexWidth))-14+"%";
          var flxThreeHeight = (parseInt(this._flexHeight))-20+"%";
          if(this._topFlex-1 > 0){
            this.view["flxInner"+this._topFlex].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxTwoLeft,
                  "top":flxTwoTop,
                  "width":flxTwoWidth,
                  "height":flxTwoHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              }); 
            this.view["flxInner"+(this._topFlex-1)].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxOneLeft,
                  "top":flxOneTop,
                  "width":flxOneWidth,
                  "height":flxOneHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              }); 
            if(this._topFlex+1 <= this._maxFlex){
              this.view["flxInner"+(this._topFlex+1)].animate(
                voltmx.ui.createAnimation({
                  "100": {
                    "left": flxThreeLeft,
                    "top":flxThreeTop,
                    "width":flxThreeWidth,
                    "height":flxThreeHeight,
                    "stepConfig": {
                      "timingFunction": voltmx.anim.EASE
                    }
                  }
                }), {
                  "delay": 0,
                  "iterationCount": 1,
                  "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                  "duration": animationDuration
                }); 
            }
          }
        }
      }
      catch (exception) {
        voltmxL.logger.error("#####Exception in reanimateFlex : " + exception.message, voltmxL.logger.EXCEPTION);
      }
      voltmxL.logger.trace("---------------Exiting reanimateFlex function---------------", voltmxL.logger.FUNCTION_EXIT);
    },
    /**
         * @function animateToTop
         * @description This function is invoked when user  swipe up the product containers
         * @private
         */
    animateToTop : function(){
      voltmxL.logger.trace("----------Entering animateToTop function---------", voltmxL.logger.FUNCTION_ENTRY);
      try{
        if(!this._scrollHorizontal){
          var flxOneTop = this._flexTop+"%";
          var flxOneLeft = this._flexLeft+"%";
          var flxOneWidth = this._flexWidth+"%";
          var flxOneHeight = this._flexHeight+"%";
          var flxTwoTop = (parseInt(this._flexTop))+5+"%";
          var flxTwoLeft = (parseInt(this._flexLeft))+10+"%";
          var flxTwoWidth = (parseInt(this._flexWidth))-7+"%";
          var flxTwoHeight = (parseInt(this._flexHeight))-10+"%";
          var flxThreeTop = (parseInt(this._flexTop))+10+"%";
          var flxThreeLeft = (parseInt(this._flexLeft))+20+"%";
          var flxThreeWidth = (parseInt(this._flexWidth))-14+"%";
          var flxThreeHeight = (parseInt(this._flexHeight))-20+"%";
          if(this._topFlex< this._maxFlex){ 	
            this.view["flxInner"+this._topFlex].animate(
              voltmx.ui.createAnimation({
                "0": {
                  "left": flxOneLeft,
                  "top":flxOneTop,
                  "width": flxOneWidth,
                  "height":flxOneHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                },
                "100": {
                  "left": flxOneLeft,
                  "top":"-100%",
                  "width":flxOneWidth,
                  "height":flxOneHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": 1
              });  
          }
          if(this._topFlex+1 <= this._maxFlex){
            this.view["flxInner"+(this._topFlex+1)].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxOneLeft,
                  "top":flxOneTop,
                  "width":flxOneWidth,
                  "height":flxOneHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": 1
              });  
          }
          if(this._topFlex+2 <= this._maxFlex){
            this.view["flxInner"+(this._topFlex+2)].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxTwoLeft,
                  "top":flxTwoTop,
                  "width":flxTwoWidth,
                  "height":flxTwoHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": 1
              });
          }
        }
      }
      catch (exception) {
        voltmxL.logger.error("#####Exception in animateToTop : " + exception.message, voltmxL.logger.EXCEPTION);
      }
      voltmxL.logger.trace("---------------Exiting animateToTop function---------------", voltmxL.logger.FUNCTION_EXIT);
    },
    /**
         * @function animateToBottom
         * @description This function is invoked when user  swipe down the product containers
         * @private
         */
    animateToBottom : function(){
      voltmxL.logger.trace("----------Entering animateToBottom function---------", voltmxL.logger.FUNCTION_ENTRY);
      try{
        if(!this._scrollHorizontal){
          var flxOneTop = this._flexTop+"%";
          var flxOneLeft = this._flexLeft+"%";
          var flxOneWidth = this._flexWidth+"%";
          var flxOneHeight = this._flexHeight+"%";
          var flxTwoTop = (parseInt(this._flexTop))+5+"%";
          var flxTwoLeft = (parseInt(this._flexLeft))+10+"%";
          var flxTwoWidth = (parseInt(this._flexWidth))-7+"%";
          var flxTwoHeight = (parseInt(this._flexHeight))-10+"%";
          var flxThreeTop = (parseInt(this._flexTop))+10+"%";
          var flxThreeLeft = (parseInt(this._flexLeft))+20+"%";
          var flxThreeWidth = (parseInt(this._flexWidth))-14+"%";
          var flxThreeHeight = (parseInt(this._flexHeight))-20+"%";
          if(this._topFlex-1 > 0){
            this.view["flxInner"+this._topFlex].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxTwoLeft,
                  "top":flxTwoTop,
                  "width":flxTwoWidth,
                  "height":flxTwoHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": 1
              }); 
            this.view["flxInner"+(this._topFlex-1)].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxOneLeft,
                  "top":flxOneTop,
                  "width":flxOneWidth,
                  "height":flxOneHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": 1
              }); 
            if(this._topFlex+1 <= this._maxFlex){
              this.view["flxInner"+(this._topFlex+1)].animate(
                voltmx.ui.createAnimation({
                  "100": {
                    "left": flxThreeLeft,
                    "top":flxThreeTop,
                    "width":flxThreeWidth,
                    "height":flxThreeHeight,
                    "stepConfig": {
                      "timingFunction": voltmx.anim.EASE
                    }
                  }
                }), {
                  "delay": 0,
                  "iterationCount": 1,
                  "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                  "duration": 1
                }); 
            }
          }
        }
      }
      catch (exception) {
        voltmxL.logger.error("#####Exception in animateToBottom : " + exception.message, voltmxL.logger.EXCEPTION);
      }
      voltmxL.logger.trace("---------------Exiting animateToBottom function---------------", voltmxL.logger.FUNCTION_EXIT);
    },
    /**
         * @function autoScrolling
         * @description This function is invoked when user selects auto scrolling to ON
         * @private
         */
    autoScrolling : function(){
      voltmxL.logger.trace("----------Entering autoScrolling function---------", voltmxL.logger.FUNCTION_ENTRY);
      try{
        if(this._scrollHorizontal){
          if(this._animateInLoop){
            this.animateInCircle();
            voltmx.timer.schedule("timer1", this.scroll.bind(this), this._autoScrollDelay, true);
          }
          else{
            this.animateFlex();
            if(this._topFlex < this._maxFlex)
              this._topFlex = this._topFlex+1;
            voltmx.timer.schedule("timerOne", this.scroll.bind(this), this._autoScrollDelay, true);
          }        
        }
        else {
          if(this._animateInLoop){
            this.animateTopInCircle();
            voltmx.timer.schedule("timer2", this.scroll.bind(this), this._autoScrollDelay, true);
          }
          else{
            this.animateToTop();
            if(this._topFlex < this._maxFlex)
              this._topFlex = this._topFlex+1;
            voltmx.timer.schedule("timerOne", this.scroll.bind(this), this._autoScrollDelay, true);
          }
        }
      }
      catch (exception) {
        voltmxL.logger.error("#####Exception in autoScrolling : " + exception.message, voltmxL.logger.EXCEPTION);
      }
      voltmxL.logger.trace("---------------Exiting autoScrolling function---------------", voltmxL.logger.FUNCTION_EXIT);
    },
    /**
         * @function scroll
         * @description This function is invoked as a callback function to timer when auto scrolling is ON
         * @private
         */
    scroll : function(){
      voltmxL.logger.trace("----------Entering scroll function---------", voltmxL.logger.FUNCTION_ENTRY);
      try{
        if(this._scrollHorizontal){
          if(this._animateInLoop){
            if(this._topFlex === this._maxFlex){
              this._topFlex = this._maxFlex;
            }
            this.animateInCircle();
          }
          else{
            this.animateFlex();
            if(this._topFlex < this._maxFlex)
              this._topFlex = this._topFlex+1;
            if(this._maxFlex == this._topFlex){
              voltmx.timer.cancel("timerOne");
              voltmx.timer.schedule("timerTwo", this.scrollBack.bind(this), this._autoScrollDelay, true);
            }
          }
        }
        else{
          if(this._animateInLoop){
            if(this._topFlex === this._maxFlex){
              this._topFlex = this._maxFlex;
            }
            this.animateTopInCircle();
          }
          else{
            this.animateToTop();
            if(this._topFlex < this._maxFlex)
              this._topFlex = this._topFlex+1;
            if(this._maxFlex == this._topFlex){
              voltmx.timer.cancel("timerOne");
              voltmx.timer.schedule("timerTwo", this.scrollBack.bind(this), this._autoScrollDelay, true);
            }
          }        
        }
      }
      catch (exception) {
        voltmxL.logger.error("#####Exception in scroll : " + exception.message, voltmxL.logger.EXCEPTION);
      }
      voltmxL.logger.trace("---------------Exiting scroll function---------------", voltmxL.logger.FUNCTION_EXIT);
    },
    /**
         * @function scrollBack
         * @description This function is invoked to animate other side, once one side of animation is done when Auto Scrolling is ON
         * @private
         */
    scrollBack : function(){
      voltmxL.logger.trace("----------Entering scrollBack function---------", voltmxL.logger.FUNCTION_ENTRY);
      try{
        if(this._scrollHorizontal){
          this.reanimateFlex();
          if(this._topFlex >1)
            this._topFlex = this._topFlex-1;
          else if(this._topFlex == 1){
            voltmx.timer.schedule("timerOne", this.scroll.bind(this), this._autoScrollDelay, true);
            voltmx.timer.cancel("timerTwo");
          }  
        }
        else{
          this.animateToBottom();
          if(this._topFlex >1)
            this._topFlex = this._topFlex-1;
          else if(this._topFlex == 1){
            voltmx.timer.schedule("timerOne", this.scroll.bind(this), this._autoScrollDelay, true);
            voltmx.timer.cancel("timerTwo");
          }
        }
      }
      catch (exception) {
        voltmxL.logger.error("#####Exception in scrollBack : " + exception.message, voltmxL.logger.EXCEPTION);
      }
      voltmxL.logger.trace("---------------Exiting scrollBack function---------------", voltmxL.logger.FUNCTION_EXIT);
    },
    /**
         * @function animateInCircle
         * @description This function is invoked when user selects animate in Loop
         * @private
         */
    animateInCircle : function(){
      voltmxL.logger.trace("----------Entering animateInCircle function---------", voltmxL.logger.FUNCTION_ENTRY);
      try{
        if(this._scrollHorizontal){
          var animationDuration = this._animationSpeed;
          var flxOneTop = this._flexTop+"%";
          var flxOneLeft = this._flexLeft+"%";
          var flxOneWidth = this._flexWidth+"%";
          var flxOneHeight = this._flexHeight+"%";
          var flxTwoTop = (parseInt(this._flexTop))+5+"%";
          var flxTwoLeft = (parseInt(this._flexLeft))+10+"%";
          var flxTwoWidth = (parseInt(this._flexWidth))-7+"%";
          var flxTwoHeight = (parseInt(this._flexHeight))-10+"%";
          var flxThreeTop = (parseInt(this._flexTop))+10+"%";
          var flxThreeLeft = (parseInt(this._flexLeft))+20+"%";
          var flxThreeWidth = (parseInt(this._flexWidth))-14+"%";
          var flxThreeHeight = (parseInt(this._flexHeight))-20+"%";
          if(this._topFlex < this._maxFlex){
            this.view["flxInner"+this._topFlex].zIndex = this._maxFlex+1;
            this.view["flxInner"+this._topFlex].animate(
              voltmx.ui.createAnimation({
                "0": {
                  "left": flxOneLeft,
                  "top":flxOneTop,
                  "width": flxOneWidth,
                  "height":flxOneHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                },
                "50": {
                  "left": "-100%",
                  "top":flxOneTop,
                  "width":flxOneWidth,
                  "height":flxOneHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                },
                "100": {
                  "left": flxThreeLeft,
                  "top":flxThreeTop,
                  "width":flxThreeWidth,
                  "height":flxThreeHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });
            this.view["flxInner"+this._topFlex].zIndex = 1;
          }
          else if(this._topFlex == this._maxFlex){
            this.view["flxInner"+this._topFlex].zIndex = this._maxFlex+1;
            this.view["flxInner"+this._topFlex].animate(
              voltmx.ui.createAnimation({
                "0": {
                  "left": flxOneLeft,
                  "top":flxOneTop,
                  "width": flxOneWidth,
                  "height":flxOneHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                },
                "50": {
                  "left": "-100%",
                  "top":flxOneTop,
                  "width":flxOneWidth,
                  "height":flxOneHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                },
                "100": {
                  "left": flxThreeLeft,
                  "top":flxThreeTop,
                  "width":flxThreeWidth,
                  "height":flxThreeHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });
            this.view["flxInner"+this._topFlex].zIndex = 1;
            this._topFlex = 0;
          }
          if(this._topFlex+1 < this._maxFlex){
            this.view["flxInner"+(this._topFlex+1)].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxOneLeft,
                  "top":flxOneTop,
                  "width":flxOneWidth,
                  "height":flxOneHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });  
            this.view["flxInner"+(this._topFlex+1)].zIndex = this._maxFlex+1;
          }
          else if(this._topFlex+1 == this._maxFlex){
            this.view["flxInner"+(this._topFlex+1)].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxOneLeft,
                  "top":flxOneTop,
                  "width":flxOneWidth,
                  "height":flxOneHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });  
            this.view["flxInner"+(this._topFlex+1)].zIndex = this._maxFlex+1;
          }
          if(this._topFlex+2 < this._maxFlex){
            this.view["flxInner"+(this._topFlex+2)].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxTwoLeft,
                  "top":flxTwoTop,
                  "width":flxTwoWidth,
                  "height":flxTwoHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });
            this.view["flxInner"+(this._topFlex+2)].zIndex = this._maxFlex;
          }
          else if(this._topFlex+2 == this._maxFlex){
            this.view["flxInner"+(this._topFlex+2)].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxTwoLeft,
                  "top":flxTwoTop,
                  "width":flxTwoWidth,
                  "height":flxTwoHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });
            this.view["flxInner"+(this._topFlex+2)].zIndex = this._maxFlex;
          }
          else{
            var previousTopFlex = this._topFlex;
            this._topFlex = 1;
            this.view["flxInner"+(this._topFlex)].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxTwoLeft,
                  "top":flxTwoTop,
                  "width":flxTwoWidth,
                  "height":flxTwoHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });
            this.view["flxInner"+(this._topFlex)].zIndex = this._maxFlex;
            this._topFlex = previousTopFlex;
          }
          if((this._topFlex+1) < this._maxFlex){
            ++this._topFlex;  
          }
          else if((this._topFlex+1) == this._maxFlex){
            this._topFlex = this._maxFlex;
          }
          else{
            --this._topFlex;
          }
        }
      }
      catch (exception) {
        voltmxL.logger.error("#####Exception in animateInCircle : " + exception.message, voltmxL.logger.EXCEPTION);
      }
      voltmxL.logger.trace("---------------Exiting animateInCircle function---------------", voltmxL.logger.FUNCTION_EXIT);
    },
    /**
         * @function reanimateInCircle
         * @description This function is invoked to reanimate images when user selects animate in loop
         * @private
         */
    reanimateInCircle : function(){
      voltmxL.logger.trace("----------Entering reanimateInCircle function---------", voltmxL.logger.FUNCTION_ENTRY);
      try{
        if(this._scrollHorizontal){
          var initialFlex = false;
          var animationDuration = this._animationSpeed;
          var flxOneTop = this._flexTop+"%";
          var flxOneLeft = this._flexLeft+"%";
          var flxOneWidth = this._flexWidth+"%";
          var flxOneHeight = this._flexHeight+"%";
          var flxTwoTop = (parseInt(this._flexTop))+5+"%";
          var flxTwoLeft = (parseInt(this._flexLeft))+10+"%";
          var flxTwoWidth = (parseInt(this._flexWidth))-7+"%";
          var flxTwoHeight = (parseInt(this._flexHeight))-10+"%";
          var flxThreeTop = (parseInt(this._flexTop))+10+"%";
          var flxThreeLeft = (parseInt(this._flexLeft))+20+"%";
          var flxThreeWidth = (parseInt(this._flexWidth))-14+"%";
          var flxThreeHeight = (parseInt(this._flexHeight))-20+"%";
          if(this._topFlex == this._maxFlex){
            var previousTopFlex = this._topFlex;
            this._topFlex = (this._topFlex)-(this._topFlex-1);
            this.view["flxInner"+this._topFlex].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxThreeLeft,
                  "top":flxThreeTop,
                  "width":flxThreeWidth,
                  "height":flxThreeHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });
            this._topFlex = previousTopFlex;
          }
          else if(this._topFlex == 1){
            initialFlex = true;
            this.view["flxInner"+(this._topFlex+1)].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxThreeLeft,
                  "top":flxThreeTop,
                  "width":flxThreeWidth,
                  "height":flxThreeHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });
            this.view["flxInner"+(this._topFlex+1)].zIndex = 1;
          }
          else{
            this.view["flxInner"+(this._topFlex+1)].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxThreeLeft,
                  "top":flxThreeTop,
                  "width":flxThreeWidth,
                  "height":flxThreeHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });
            this.view["flxInner"+(this._topFlex+1)].zIndex = 1;
          }
          this.view["flxInner"+(this._topFlex)].animate(
            voltmx.ui.createAnimation({
              "100": {
                "left": flxTwoLeft,
                "top":flxTwoTop,
                "width":flxTwoWidth,
                "height":flxTwoHeight,
                "stepConfig": {
                  "timingFunction": voltmx.anim.EASE
                }
              }
            }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
              "duration": animationDuration
            });
          this.view["flxInner"+(this._topFlex)].zIndex = this._maxFlex;
          if(initialFlex){
            this._topFlex = parseInt(this._maxFlex)+1;
          }
          this.view["flxInner"+(this._topFlex-1)].animate(
            voltmx.ui.createAnimation({
              "0": {
                "left": "-100%",
                "top":flxThreeTop,
                "width": flxThreeWidth,
                "height":flxThreeHeight,
                "stepConfig": {
                  "timingFunction": voltmx.anim.EASE
                }
              },
              "100": {
                "left": flxOneLeft,
                "top":flxOneTop,
                "width":flxOneWidth,
                "height":flxOneHeight,
                "stepConfig": {
                  "timingFunction": voltmx.anim.EASE
                }
              }
            }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
              "duration": 1
            });
          this.view["flxInner"+(this._topFlex-1)].zIndex = this._maxFlex+1;
          if(initialFlex){
            this._topFlex = this._maxFlex;  
          }
          else{
            this._topFlex = (this._topFlex-1);  
          }
        }
      }
      catch (exception) {
        voltmxL.logger.error("#####Exception in reanimateInCircle : " + exception.message, voltmxL.logger.EXCEPTION);
      }
      voltmxL.logger.trace("---------------Exiting reanimateInCircle function---------------", voltmxL.logger.FUNCTION_EXIT);
    },
    /**
         * @function animateTopInCircle
         * @description This function is invoked to animate top in loop
         * @private
         */
    animateTopInCircle : function(){
      voltmxL.logger.trace("----------Entering animateTopInCircle function---------", voltmxL.logger.FUNCTION_ENTRY);
      try{
        if(!this._scrollHorizontal){
          var animationDuration = this._animationSpeed;
          var flxOneTop = this._flexTop+"%";
          var flxOneLeft = this._flexLeft+"%";
          var flxOneWidth = this._flexWidth+"%";
          var flxOneHeight = this._flexHeight+"%";
          var flxTwoTop = (parseInt(this._flexTop))+5+"%";
          var flxTwoLeft = (parseInt(this._flexLeft))+10+"%";
          var flxTwoWidth = (parseInt(this._flexWidth))-7+"%";
          var flxTwoHeight = (parseInt(this._flexHeight))-10+"%";
          var flxThreeTop = (parseInt(this._flexTop))+10+"%";
          var flxThreeLeft = (parseInt(this._flexLeft))+20+"%";
          var flxThreeWidth = (parseInt(this._flexWidth))-14+"%";
          var flxThreeHeight = (parseInt(this._flexHeight))-20+"%";
          if(this._topFlex < this._maxFlex){
            this.view["flxInner"+this._topFlex].animate(
              voltmx.ui.createAnimation({
                "0": {
                  "left": flxOneLeft,
                  "top":flxOneTop,
                  "width": flxOneWidth,
                  "height":flxOneHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                },
                "50": {
                  "left": flxOneLeft,
                  "top":"-100%",
                  "width":flxOneWidth,
                  "height":flxOneHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                },
                "100": {
                  "left": flxThreeLeft,
                  "top":flxThreeTop,
                  "width":flxThreeWidth,
                  "height":flxThreeHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });
            this.view["flxInner"+this._topFlex].zIndex = 1;
          }
          else if(this._topFlex == this._maxFlex){
            this.view["flxInner"+this._topFlex].animate(
              voltmx.ui.createAnimation({
                "0": {
                  "left": flxOneLeft,
                  "top":flxOneTop,
                  "width": flxOneWidth,
                  "height":flxOneHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                },
                "50": {
                  "left": flxOneLeft,
                  "top":"-100%",
                  "width":flxOneWidth,
                  "height":flxOneHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                },
                "100": {
                  "left": flxThreeLeft,
                  "top":flxThreeTop,
                  "width":flxThreeWidth,
                  "height":flxThreeHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });
            this.view["flxInner"+this._topFlex].zIndex = 1;
            this._topFlex = 0;
          }
          if(this._topFlex+1 < this._maxFlex){
            this.view["flxInner"+(this._topFlex+1)].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxOneLeft,
                  "top":flxOneTop,
                  "width":flxOneWidth,
                  "height":flxOneHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });  
            this.view["flxInner"+(this._topFlex+1)].zIndex = this._maxFlex+1;
          }
          else if(this._topFlex+1 == this._maxFlex){
            this.view["flxInner"+(this._topFlex+1)].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxOneLeft,
                  "top":flxOneTop,
                  "width":flxOneWidth,
                  "height":flxOneHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });  
            this.view["flxInner"+(this._topFlex+1)].zIndex = this._maxFlex+1;
          }
          if(this._topFlex+2 < this._maxFlex){
            this.view["flxInner"+(this._topFlex+2)].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxTwoLeft,
                  "top":flxTwoTop,
                  "width":flxTwoWidth,
                  "height":flxTwoHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });
            this.view["flxInner"+(this._topFlex+2)].zIndex = this._maxFlex;
          }
          else if(this._topFlex+2 == this._maxFlex){
            this.view["flxInner"+(this._topFlex+2)].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxTwoLeft,
                  "top":flxTwoTop,
                  "width":flxTwoWidth,
                  "height":flxTwoHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });
            this.view["flxInner"+(this._topFlex+2)].zIndex = this._maxFlex;
          }
          else{
            var previousTopFlex = this._topFlex;
            this._topFlex = 1;
            this.view["flxInner"+(this._topFlex)].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxTwoLeft,
                  "top":flxTwoTop,
                  "width":flxTwoWidth,
                  "height":flxTwoHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });
            this.view["flxInner"+(this._topFlex)].zIndex = this._maxFlex;
            this._topFlex = previousTopFlex;
          }
          if((this._topFlex+1) < this._maxFlex){
            ++this._topFlex;  
          }
          else if((this._topFlex+1) == this._maxFlex){
            this._topFlex = this._maxFlex;
          }
          else{
            --this._topFlex;
          }
        }
      }
      catch (exception) {
        voltmxL.logger.error("#####Exception in animateTopInCircle : " + exception.message, voltmxL.logger.EXCEPTION);
      }
      voltmxL.logger.trace("---------------Exiting animateTopInCircle function---------------", voltmxL.logger.FUNCTION_EXIT);
    },
    /**
         * @function reanimateTopInCircle
         * @description This function is invoked to animate images bottomwise when animate in loop is enabled
         * @private
         */
    reanimateTopInCircle : function(){
      voltmxL.logger.trace("----------Entering reanimateTopInCircle function---------", voltmxL.logger.FUNCTION_ENTRY);
      try{
        if(!this._scrollHorizontal){
          var initialFlex = false;
          var animationDuration = this._animationSpeed;
          var flxOneTop = this._flexTop+"%";
          var flxOneLeft = this._flexLeft+"%";
          var flxOneWidth = this._flexWidth+"%";
          var flxOneHeight = this._flexHeight+"%";
          var flxTwoTop = (parseInt(this._flexTop))+5+"%";
          var flxTwoLeft = (parseInt(this._flexLeft))+10+"%";
          var flxTwoWidth = (parseInt(this._flexWidth))-7+"%";
          var flxTwoHeight = (parseInt(this._flexHeight))-10+"%";
          var flxThreeTop = (parseInt(this._flexTop))+10+"%";
          var flxThreeLeft = (parseInt(this._flexLeft))+20+"%";
          var flxThreeWidth = (parseInt(this._flexWidth))-14+"%";
          var flxThreeHeight = (parseInt(this._flexHeight))-20+"%";
          if(this._topFlex == this._maxFlex){
            var previousTopFlex = this._topFlex;
            this._topFlex = (this._topFlex)-(this._topFlex-1);
            this.view["flxInner"+this._topFlex].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxThreeLeft,
                  "top":flxThreeTop,
                  "width":flxThreeWidth,
                  "height":flxThreeHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });
            this._topFlex = previousTopFlex;
          }
          else if(this._topFlex == 1){
            initialFlex = true;
            this.view["flxInner"+(this._topFlex+1)].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxThreeLeft,
                  "top":flxThreeTop,
                  "width":flxThreeWidth,
                  "height":flxThreeHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });
            this.view["flxInner"+(this._topFlex+1)].zIndex = 1;
          }
          else{
            this.view["flxInner"+(this._topFlex+1)].animate(
              voltmx.ui.createAnimation({
                "100": {
                  "left": flxThreeLeft,
                  "top":flxThreeTop,
                  "width":flxThreeWidth,
                  "height":flxThreeHeight,
                  "stepConfig": {
                    "timingFunction": voltmx.anim.EASE
                  }
                }
              }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
                "duration": animationDuration
              });
            this.view["flxInner"+(this._topFlex+1)].zIndex = 1;
          }
          this.view["flxInner"+(this._topFlex)].animate(
            voltmx.ui.createAnimation({
              "100": {
                "left": flxTwoLeft,
                "top":flxTwoTop,
                "width":flxTwoWidth,
                "height":flxTwoHeight,
                "stepConfig": {
                  "timingFunction": voltmx.anim.EASE
                }
              }
            }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
              "duration": animationDuration
            });
          this.view["flxInner"+(this._topFlex)].zIndex = this._maxFlex;
          if(initialFlex){
            this._topFlex = parseInt(this._maxFlex)+1;
          }
          this.view["flxInner"+(this._topFlex-1)].animate(
            voltmx.ui.createAnimation({
              "0": {
                "left": flxOneLeft,
                "top":"-100%",
                "width": flxThreeWidth,
                "height":flxThreeHeight,
                "stepConfig": {
                  "timingFunction": voltmx.anim.EASE
                }
              },
              "100": {
                "left": flxOneLeft,
                "top":flxOneTop,
                "width":flxOneWidth,
                "height":flxOneHeight,
                "stepConfig": {
                  "timingFunction": voltmx.anim.EASE
                }
              }
            }), {
              "delay": 0,
              "iterationCount": 1,
              "fillMode": voltmx.anim.FILL_MODE_FORWARDS,
              "duration": 1
            });
          this.view["flxInner"+(this._topFlex-1)].zIndex = this._maxFlex+1;
          if(initialFlex){
            this._topFlex = this._maxFlex;  
          }
          else{
            this._topFlex = (this._topFlex-1);  
          }
        }
      }
      catch (exception) {
        voltmxL.logger.error("#####Exception in reanimateTopInCircle : " + exception.message, voltmxL.logger.EXCEPTION);
      }
      voltmxL.logger.trace("---------------Exiting reanimateTopInCircle function---------------", voltmxL.logger.FUNCTION_EXIT);
    },
  };
});