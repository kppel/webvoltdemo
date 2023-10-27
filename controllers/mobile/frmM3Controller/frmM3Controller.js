define(function() { 

 //Type your controller code here 
	return ({
        postShow: function(){
        var urlConf = {
          URL : URL, //外部サイトのURL
          requestMethod : constants.BROWSER_REQUEST_METHOD_GET
        };
        this.view.browser.requestURLConfig = urlConf; //brwはBrowserWidgetのID名
      }
    })
 });