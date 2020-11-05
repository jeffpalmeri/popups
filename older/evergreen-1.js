jQuery(".close").click(function () {
  jQuery(".InsiderOtherCookies").hide();
});

jQuery(".ie_line").click(function () {
  jQuery(".InsiderOtherCookies").hide();
});

jQuery(document).ready(function () {
  let show_cookieBox;
  let cookieNotificationST = sessionStorage.getItem("Cuts-Evergreen-1");
  if (cookieNotificationST == null) {
    setTimeout(function () {
      jQuery("#InsiderCutsCookies").show();
      show_cookieBox = "YES";
    }, 8000);
    sessionStorage.setItem("Cuts-Evergreen-1", "YES");
  } else {
    jQuery("#InsiderCutsCookies").hide();
  }
});
