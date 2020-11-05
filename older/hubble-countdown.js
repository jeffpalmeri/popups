jQuery(window).on("load", function () {
  var delay = 7000;
  var threeMinutes = 1000 * 60 * 3;
  var deadline = new Date().getTime() + threeMinutes + delay;

  var x = setInterval(function () {
    var now = new Date().getTime();
    var t = deadline - now;
    // var days = Math.floor(t / (1000 * 60 * 60 * 24));
    // var days = 0;
    // var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    // var minutes = 3;
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    // var milliseconds = Math.floor((t % (100 * 6 * 2)) / 100);
    // var milliseconds = Math.floor((t % (100 * 6 * 2)) / 100);
    // document.getElementById("day").innerHTML = days;
    // document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
    // document.getElementById("millisecond").innerHTML = milliseconds;
    if (t < 0) {
      clearInterval(x);
      // document.getElementById("up").innerHTML = "TIME'S UP";
      // document.getElementById("day").innerHTML = "0";
      // document.getElementById("hour").innerHTML = "0";
      document.getElementById("minute").innerHTML = "0";
      document.getElementById("second").innerHTML = "0";
    }
  }, 1000);
});

jQuery(".close").click(function () {
  jQuery(".InsiderOtherCookies").hide();
});

jQuery(".ie_line").click(function () {
  jQuery(".InsiderOtherCookies").hide();
});

jQuery(document).ready(function () {
  let show_cookieBox;
  let cookieNotificationST = sessionStorage.getItem("Hubble_offer_pop");
  if (cookieNotificationST == null) {
    setTimeout(function () {
      jQuery("#InsiderHubbleCookies").show();
      show_cookieBox = "YES";
    }, 7000);
    sessionStorage.setItem("Hubble_offer_pop", "YES");
  } else {
    jQuery("#InsiderHubbleCookies").hide();
  }
});
