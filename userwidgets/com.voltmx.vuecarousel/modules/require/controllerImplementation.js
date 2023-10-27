/** 
 *  Created by Team Kony.
 *  Copyright (c) 2019 Kony Inc. All rights reserved.
 */

define(['./voltmxLogger'], function(voltmxLoggerModule) {
  var voltmxL = {};
  voltmxL.logger = (new voltmxLoggerModule("Vue carousel Component")) || function() {};
  voltmxL.logger.setLogLevel("DEBUG");
  voltmxL.logger.enableServerLogging = true;

  /**
  * @function controllerImplementation.js
  * @private
  * @description: factory module
  */
  var controllerImplementation = function(componentInstance, componentName) {
    var self = this;
    this.componentInstance = componentInstance;
    /**
   * @function errorCallback
   * @private
   * @param {number} expCode
   * @param {string} expMesg
   * @description: invokes onErrorCallback event
   */
    this.errorCallback = function(expCode, expMesg) {
      voltmxL.logger.trace("----------Entering errorCallback Function---------", voltmxL.logger.FUNCTION_ENTRY);
      if (this.componentInstance.onErrorCallback) {
        var errObj = voltmxL.logger.getErrorObject(expCode, expMesg);
        this.componentInstance.onErrorCallback(errObj);
        voltmxL.logger.trace("------Exiting errorCallback Function------", voltmxL.logger.FUNCTION_EXIT);
      } else {
        throw {
          "errorCode": expCode,
          "message": expMesg
        };
      }
    };

   /**
   * @function setData
   * @exposed
   * @param  Data given by the user through API
   * @description: When user calls the setDAta API 
   */
    this.setData = function(data) {
      voltmxL.logger.trace("------Entering setData Function------", voltmxL.logger.FUNCTION_ENTRY);
      try {
        if (typeof data !== 'object' && data === null && data ===undefined) {

          throw {
            "errorCode": expCode,
            "message": expMesg
          };
        }else{
          this.componentInstance.view.browserCarousel.evaluateJavaScript("setData("+JSON.stringify(data)+");");
        }

        
      } catch (exception) {
        this.errorCallback(this.componentInstance._commonExceptionCode, exception.message);
        voltmxL.logger.error(JSON.stringify(exception), voltmxL.logger.EXCEPTION);
      }
      voltmxL.logger.trace("------Exiting setData Function------", voltmxL.logger.FUNCTION_EXIT);
    };

  };
  return controllerImplementation;
});