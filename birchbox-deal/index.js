jQuery(".close").click(function () {
  jQuery(".InsiderOtherCookies").hide();
});

jQuery(".ie_line").click(function () {
  jQuery(".InsiderOtherCookies").hide();
});

jQuery(document).ready(function () {
  let show_cookieBox;
  let cookieNotificationST = sessionStorage.getItem("Birchbox_deal_offer_pop");
  // if (cookieNotificationST == null) {
  if (true) {
    setTimeout(function () {
      jQuery("#InsiderBirchboxDealCookies").show();
      show_cookieBox = "YES";
      sessionStorage.setItem("Birchbox_deal_offer_pop", "YES");
    }, 1000);
  } else {
    jQuery("#InsiderBirchboxDealCookies").hide();
  }
});
