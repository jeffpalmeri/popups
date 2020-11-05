jQuery(".close").click(function () {
  jQuery(".InsiderOtherCookies").hide();
});

jQuery(".ie_line").click(function () {
  jQuery(".InsiderOtherCookies").hide();
});

jQuery(document).ready(function () {
  let show_cookieBox;
  let cookieNotificationST = sessionStorage.getItem("Cuts-Evergreen-2");
  // if (cookieNotificationST == null) {
  if (true) {
    setTimeout(function () {
      jQuery("#InsiderTovalaCookies").show();
      show_cookieBox = "YES";
    }, 1000);
    sessionStorage.setItem("Cuts-Evergreen-2", "YES");
  } else {
    jQuery("#InsiderTovalaCookies").hide();
  }
});
