define({ 

 //Type your controller code here 
	postShow11 : function(){
    var urlConf = {
      URL : "http://127.0.0.1:9989/TestMobApp1/kdw", //外部サイトのURL
      requestMethod : constants.BROWSER_REQUEST_METHOD_GET
    };
    this.view.browser.requestURLConfig = urlConf; //brwはBrowserWidgetのID名
  },
  bindBrower: function() {
    //var browserWidget = document.getElementById('browser');

    // Generate the HTML content you want to display
    var htmlContent = '<h1>Hello, Volt MX Iris!</h1><p>This is some content displayed in a browser widget.</p>';
	//var ifdoc =  browserWidget.contentWindow.document;
    //ifdoc.open();
    //ifdoc.close();
    // Inject the HTML content into the browser widget
    //ifdoc.body.innerHTML = htmlContent;
    var gifSet = '<!DOCTYPE html><html><head><title>Animated GIF Example</title></head><body><h1>Animated GIF Example</h1><img src="https://www.animatedimages.org/data/media/60/animated-angel-image-0010.gif" alt="Animated GIF"></body></html>';
    this.view.browser.htmlString = gifSet;
  },
  setImage: function(fileImage) {
    var gifSet = '<!DOCTYPE html><html><head><title>Animated GIF Example</title></head><body><div style="display:flex;justify-content:center;"><img id="dynamicImg" src="' + fileImage + '" ' + 'alt="Animated GIF" style="width:115px;height:115px;"><div></body></html>';
    this.view.browser.htmlString = gifSet;
  }
 });