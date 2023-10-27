define(function(){ 

 //Type your controller code here 
	return ({
        postShow: function() {
          var WEBURL = "";
          if (URL.trim().length !== 0) {
            WEBURL = URL;
          } else {
            WEBURL = "https://www.google.co.jp/maps/@36.5626,136.362305,5z?hl=ja";
          }
          var urlConf = {
            URL : URL, //外部サイトのURL
            requestMethod : constants.BROWSER_REQUEST_METHOD_GET
          };
          this.view.browser.requestURLConfig = urlConf; //brwはBrowserWidgetのID名
      }
    })
 });