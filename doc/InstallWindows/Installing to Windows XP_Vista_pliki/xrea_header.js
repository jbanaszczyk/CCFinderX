(function(){
  //add css
  // var newStyle = document.createElement("link");
  // newStyle.href = 'https://cache1.value-domain.com/xrea_header.css?5';
  // newStyle.type = 'text/css';
  // newStyle.rel = 'stylesheet';
  // document.getElementsByTagName('head')[0].insertBefore(newStyle, null);

  var func = function(){
    // var body = document.body;
    // if (body == undefined) {return false;}
    var parent = document.getElementsByTagName("body")[0];
    if (parent === null) {return false;}
    //console.log(body,parent);

    var elements = [
        '<a href="https://www.colorfulbox.jp/?utm_source=xrea&utm_medium=banner&utm_content=xrea_ad_colorfulbox_banner_468x60_001&utm_campaign=xrea_ad_colorfulbox&argument=DLHtsrgz&dmai=a5b5a809166ed7" target="_blank" rel="nofollow" style="display:inline-block!important;position:relative!important;top:0!important;left:0!important;margin:0!important;padding:0!important;"><img alt="カラフルボックス" src="https://www.colorfulbox.jp/common/img/bnr/colorfulbox_bnr01.png" style="display:inline-block!important;position:relative!important;top:0!important;left:0!important;margin:0!important;padding:0!important;width:100%!important;max-width:468px;max-height:60px;vertical-align:bottom;"></a>'//,
        //'<a href="https://wixstats.com/?a=19272&c=2510&s1=" target="_blank" rel="nofollow" style="display:inline-block!important;position:relative!important;top:0!important;left:0!important;margin:0!important;padding:0!important;"><img alt="wix" src="https://cache1.value-domain.com/wix_bnr.png" style="display:inline-block!important;position:relative!important;top:0!important;left:0!important;margin:0!important;padding:0!important;width:100%!important;max-width:468px;max-height:60px;vertical-align:bottom;"></a>'//
    ];
      var randElm = elements[Math.floor(Math.random() * elements.length)];

    var newBox = document.createElement("div");
    newBox.setAttribute('id', 'vdbanner');
    newBox.setAttribute("style","display:block!important;position:relative!important;top:0!important;left:0!important;margin:10px 0 !important;padding:0!important;text-align:center!important;");
    newBox.innerHTML = randElm;
    parent.insertBefore(newBox, parent.firstChild);
  };

  try {
    window.addEventListener("load", func, false);
  }
  catch(e) {
    window.attachEvent("onload", func);
  }
})();