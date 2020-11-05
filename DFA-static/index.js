jQuery(".close").click(function () {
  jQuery("#DFAStaticCookie").hide();
});

jQuery(".ie_line").click(function () {
  jQuery("#DFAStaticCookie").hide();
});

jQuery(document).ready(function () {
  let show_cookieBox;
  let cookieNotificationST = sessionStorage.getItem("DFA-popup");
  // if (cookieNotificationST == null) {
  if (true) {
    setTimeout(function () {
      jQuery("#DFAStaticCookie").show();
      show_cookieBox = "YES";
    }, 1000);
    sessionStorage.setItem("DFA-popup", "YES");
  } else {
    jQuery("#DFAStaticCookie").hide();
  }
});
