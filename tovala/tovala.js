jQuery(".exit").click(function () {
  jQuery(".InsiderOtherCookies").hide();
});

jQuery(".ie_line").click(function () {
  jQuery(".InsiderOtherCookies").hide();
});

jQuery(document).ready(function () {
  let show_cookieBox;
  let cookieNotificationST = sessionStorage.getItem("Tovala-popup-1");
  // if (cookieNotificationST == null) {
  if (true) {
    setTimeout(function () {
      jQuery("#InsiderTovalaCookies").show();
      show_cookieBox = "YES";
    }, 1000);
    sessionStorage.setItem("Tovala-popup-1", "YES");
  } else {
    jQuery("#InsiderTovalaCookies").hide();
  }
});
