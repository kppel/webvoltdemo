define({
  
    isZenkakukana: function(str) {
      if (str) {
        return str.match(/[^ァ-ヶー　]+$/) ? false : true;
      }
    },
    isObjEmpty: function (obj) {
    	return Object.keys(obj).length === 0;
  	}
});