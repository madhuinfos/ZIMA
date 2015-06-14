// about.js
(function (about, $) {

  about.init = function () {

      if (window.cardova) {
        navigator.notification.alert("in cardova")
      } else {
        alert("in browser")
      }
  };

})(window.about = window.about || {}, $);

function Toggle(){
}