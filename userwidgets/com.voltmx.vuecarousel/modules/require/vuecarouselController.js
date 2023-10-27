define(['./controllerImplementation'], function(controllerImplementation) {
  carouselGlobalController = {};
  var voltmxLoggerModule = require('com/voltmx/vuecarousel/voltmxLogger');
  var voltmxL = {};
  voltmxL.logger = (new voltmxLoggerModule("Vue carousel Component")) || function() {};
  voltmxL.logger.setLogLevel("DEBUG");
  voltmxL.logger.enableServerLogging = true;

  return {
    constructor: function(baseConfig, layoutConfig, pspConfig) {

      voltmxL.logger.trace("------Entering constructor------", voltmxL.logger.FUNCTION_ENTRY);
      this._localMode = true;
      this._commonExceptionCode = 90005;
      this.handler = new controllerImplementation(this, baseConfig.id);
      this._masterData=null;
      this._deviceName = voltmx.os.deviceInfo()["name"];

      carousel_defined_global = function(callbackStatus, index){
        this.carouselGlobalEventEmmiter(callbackStatus, index);
      }.bind(this);

      this.view.browserCarousel.onPageFinished = this.setMasterDataValue.bind(this);

      voltmxL.logger.trace("------Exiting constructor------", voltmxL.logger.FUNCTION_EXIT);
    },

    /**
       * @function carouselGlobalEventEmmiter 
       * @description : This function is called when custom event triggered from the browser widget.
       * @global
       * @param { string }  callbackStatus
       * @param { string }  index
       */ 
    carouselGlobalEventEmmiter : function(callbackStatus, index) {
      switch (callbackStatus) {
        case "ready":
          this.setMasterDataValue();
          break;
        case "onAfterSlideChange":
          if(this.onAfterSlideChange) this.onAfterSlideChange(index);
          break;
        case "onBeforeSlideChange":
          if(this.onBeforeSlideChange) this.onBeforeSlideChange(index);
          break;
        case "onLastSlide":
          if(this.onLastSlide) this.onLastSlide(index);
          break;
      }
    },

    //Logic for getters/setters of custom properties
    initGettersSetters: function() {

      defineSetter(this, "masterData", function(value) {
        if(typeof value == 'object' && value !== null){
          if(Array.isArray(value.data)){
            this._masterData = value.data;
          }else{
            this._masterData=[];
          }
        }else{
          this._masterData=[];
        }

      });
    },

    /**
   * @function setData
   * @exposed
   * @param  Data given by the user through API
   * @description: When user calls the setDAta API 
   */
    setData: function(data) {
      var self=this;
      voltmxL.logger.trace("------Entering setData Function------", voltmxL.logger.FUNCTION_ENTRY);
      try {
        self.handler.setData(data);
      } catch (exception) {
        voltmxL.logger.error(JSON.stringify(exception), voltmxL.logger.EXCEPTION);
      }
      voltmxL.logger.trace("------Exiting setData Function------", voltmxL.logger.FUNCTION_EXIT);

    },

    /**
   * @function setMasterData
   * @exposed
   * @param  Data given by the user master data property
   * @description: When user gives master data through the component which call set data of the app.js
   */
    setMasterData: function(){
      var self=this;
      voltmxL.logger.trace("------Entering setMasterData Function------", voltmxL.logger.FUNCTION_ENTRY);

      try {
        if(Array.isArray(this._masterData)){
          var isNative = this._deviceName !== 'thinclient';
          self.view.browserCarousel.evaluateJavaScript("initializeVueMenu("+JSON.stringify(self._masterData)+"," + isNative +");");
        }

      } catch (exception) {
        voltmxL.logger.error(JSON.stringify(exception), voltmxL.logger.EXCEPTION);
        this.handler.errorCallback(this.handler.componentInstance._commonExceptionCode, exception.message);
      }
      voltmxL.logger.trace("------Exiting setMasterData Function------", voltmxL.logger.FUNCTION_EXIT);

    },

    /**
   * @function setMasterDataValue
   * @exposed
   * @description: Invoked in  setter of the component.
   */
    setMasterDataValue:function(){
      var self = this;
      voltmxL.logger.trace("------Entering setMasterDataValue Function------", voltmxL.logger.FUNCTION_ENTRY);
      self.setMasterData();
      voltmxL.logger.trace("------Exiting setMasterDataValue Function------", voltmxL.logger.FUNCTION_EXIT);
    },


  };
});