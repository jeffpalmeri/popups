// jQuery("#InsiderCutsCookies").show();
// jQuery(window).on("load", function () {
//   var deadline = new Date("Aug 24, 2020 20:59:25").getTime();

//   var x = setInterval(function () {
//     var now = new Date().getTime();
//     var t = deadline - now;
//     var days = Math.floor(t / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((t % (1000 * 60)) / 1000);
//     document.getElementById("day").innerHTML = days;
//     document.getElementById("hour").innerHTML = hours;
//     document.getElementById("minute").innerHTML = minutes;
//     document.getElementById("second").innerHTML = seconds;
//     if (t < 0) {
//       clearInterval(x);
//       document.getElementById("up").innerHTML = "TIME'S UP";
//       document.getElementById("day").innerHTML = "0";
//       document.getElementById("hour").innerHTML = "0";
//       document.getElementById("minute").innerHTML = "0";
//       document.getElementById("second").innerHTML = "0";
//     }
//   }, 1000);
// });

jQuery(".close").click(function () {
  jQuery(".InsiderOtherCookies").hide();
});

jQuery(".ie_line").click(function () {
  jQuery(".InsiderOtherCookies").hide();
});

jQuery(document).ready(function () {
  let show_cookieBox;
  let cookieNotificationST = localStorage.getItem("Birchbox_offer_pop");
  // if (cookieNotificationST == null) {
  if (true) {
    setTimeout(function () {
      jQuery("#InsiderBirchboxCookies").show();
      show_cookieBox = "YES";
    }, 1500);
    localStorage.setItem("Birchbox_offer_pop", "YES");
  } else {
    jQuery("#InsiderBirchboxCookies").hide();
  }
});
