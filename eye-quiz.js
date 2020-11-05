jQuery(document).on("click", ".question", function () {
  var id = jQuery(this).attr("id");
  var answer = jQuery("label[for='" + id + "']").text();
  var question = jQuery(this).parents(".quiz").find("h2").text();
  var rel = jQuery(this).parents(".quiz").find("h2").attr("class");
  var questionID = "QuizQuestion" + rel + "Completed";
  quizCusEventFire(questionID, question, answer);
  if (jQuery("#" + id).attr("name") == "question3") {
    var h4text = "A Natural Leader";
    var captionText =
      "You take charge and go after what you want. It doesn't mean you're bossy, but does mean you're the boss.";
    if (answer == "Bright/Eccentric") {
      var h4text = "Exceedingly Creative";
      var captionText =
        "You are a spark of inspiration no matter the situation. Continue to believe in yourself - thinking outside of the box is second nature to you!";
    } else if (answer == "Soft/Warm") {
      var h4text = "A True Romantic";
      var captionText =
        "You're still waiting for that special someone to sweep you off your feet. Don't listen to the nay-sayers, and hold onto your dreams.";
    }
    jQuery(".quizBox").find("h4").text(h4text);
    jQuery(".quizBox").find(".caption_description").text(captionText);
  }
  if (jQuery(".question:checked").length >= 5) {
    setTimeout(function () {
      jQuery(".quizBox").show();
    }, 100);
  }
  //console.log(answer, question)
});
function quizCusEventFire(queId, que, ans) {
  var utm_params = {};
  utm_params = getCommonUTMParms();
  utm_params["utm_quiz_question_id"] = queId;
  utm_params["utm_quiz_question"] = que;
  utm_params["utm_quiz_answer"] = ans;
  if (typeof ampt != "undefined") {
    ampt.track("quiz", utm_params);
  }
  if (typeof safariAmpt != "undefined") {
    safariAmpt.track("quiz", utm_params);
  }
  utm_params = {};
}
function getCommonUTMParms() {
  var q_params = {};
  q_params = getUtmParams("tracker", "Hubble");
  return q_params;
}
