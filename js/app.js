// app.js
(function (app, $) {

  // Initialization
  function init() {
    if (window.index) index.init();
    if (window.about) about.init();
    $(".back-button").on("click", function () {
      window.history.go(-1);
      return false;
    });
  }

  // Startup 
  if (window.cordova) { // We're in PhoneGap
    document.addEventListener("deviceready", init, false);
  } else {
    $(document).ready(init);
  }

})(window.app = window.app || {}, $);