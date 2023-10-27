
function showOnCanvas(){

  var localData = {

    "data": [
      {
        "image": "https://cdn.corporatefinanceinstitute.com/assets/professional-corporation.jpeg",
      },
      {
        "image": "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
      },
      {
        "image": "https://cms.qut.edu.au/__data/assets/image/0003/1037316/for-you-feature.jpg",
      },
      {
        "image": "https://wi.wallpapertip.com/wsimgs/159-1598482_entrepreneurship-business-mindset-professional-professional-man.jpg",
      },

      {
        "image": "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
      },
    ]
  };


  Vue.use(Carousel3d);
  new Vue({
    el: '#example',
    data: {
      slides:localData.data

    },

    methods:{

      onAfterSlideChange(index) {
//         console.log('@onAfterSlideChange Callback Triggered', 'Slide Index ' + index);
      },
      onBeforeSlideChange(index) {
//         console.log('@onBeforeSlideChange Callback Triggered', 'Slide Index ' + index);
      },
      onLastSlide(index) {
//         console.log('@onLastSlide Callback Triggered', 'Slide Index ' + index);
      },
    },

    components: {
      'carousel-3d': Carousel3d.Carousel3d,
      'slide': Carousel3d.Slide
    }


  });
}

/**
   * @function setData
   * @exposed
   * @param  Data given by the user
   * @description: Calls the vue method
   **/
var vue={};

function initializeVueMenu(data, isNative){

//   var isNative = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//   var iOS13_iPad = (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  var dynWidth = 360;
// alert('isNative: ' + isNative + '\n agent: ' + navigator.userAgent);
  if (document.body.clientWidth < 400) {
    dynWidth = 200;
  }

  Vue.use(Carousel3d);
  vue =new Vue({
    el: '#example',
    data: {
      slides:data,
      cWidth: dynWidth,
    },
    methods: {
      onAfterSlideChange(index) {
//         console.log('@onAfterSlideChange Callback Triggered', 'Slide Index ' + index);
        var arr = [];
        //First Argument
        arr.push("onAfterSlideChange");
        //Second Argument
        arr.push("" + index);

        // different sync for native and web
        if (isNative) {
//         var p1=window.location.href.substring(0,4);        
//     if (p1==="file") {
          voltmx.evaluateJavaScriptInNativeContext("carousel_defined_global", JSON.stringify(arr));
        } else {
          voltmx.evaluateJavaScriptInNativeContext("carousel_defined_global('onAfterSlideChange','"+index+"')");
        }
      },
      onBeforeSlideChange(index) {
//         console.log('@onBeforeSlideChange Callback Triggered', 'Slide Index ' + index);
        var arr = [];
        //First Argument
        arr.push("onBeforeSlideChange");
        //Second Argument
        arr.push("" + index);
        // different sync for native and web
        if (isNative) {
//         var p1=window.location.href.substring(0,4);        
//     if (p1==="file") {
          voltmx.evaluateJavaScriptInNativeContext("carousel_defined_global", JSON.stringify(arr));
        } else {
          voltmx.evaluateJavaScriptInNativeContext("carousel_defined_global('onBeforeSlideChange','"+index+"')" ); 
        }
      },
      onLastSlide(index) {
//         console.log('@onLastSlide Callback Triggered', 'Slide Index ' + index);
        var arr = [];
        //First Argument
        arr.push("onLastSlide");
        //Second Argument
        arr.push("" + index);
        // different sync for native and web
        if (isNative) {
//         var p1=window.location.href.substring(0,4);        
//     if (p1==="file") {
          voltmx.evaluateJavaScriptInNativeContext("carousel_defined_global", JSON.stringify(arr));
        } else {
          voltmx.evaluateJavaScriptInNativeContext("carousel_defined_global('onLastSlide','"+index+"')" ); 
        }
      },

      setData(data){
        if (typeof data == 'object' && data !== null) {
          this.slides = data;
        }
      },
      
      methodThatForceUpdate(){
        this.$forceUpdate();
      },
    },
    components: {
      'carousel-3d': Carousel3d.Carousel3d,
      'slide': Carousel3d.Slide
    }
  });
}


function setData(data){
  vue.setData(data); 
  vue.methodThatForceUpdate();
  
}

window.addEventListener("DOMContentLoaded", function () {
  setTimeout(onbodyload, 200);
}.bind(this), false);

onbodyload = function () {
  if (typeof voltmx !== "undefined") {
    var isNative = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var p1=window.location.href.substring(0,4);        
    if (p1==="file") {
      var state = [];
	state.push("ready");
	voltmx.evaluateJavaScriptInNativeContext("carousel_defined_global",JSON.stringify(state));     
    }
    else{
     voltmx.evaluateJavaScriptInNativeContext("carousel_defined_global('ready')"); 
    }
  } else {
    showOnCanvas();
  }
}.bind(this);