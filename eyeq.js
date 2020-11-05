var cdn_url = "https://static.insiderenvy.com/store";

var questions = {
  quizStep1: {
    question: "What do you see?",
    qimg: cdn_url + "/images/temp-img/temp-img1.jpg",
    answers: ["A2", "Many dots", "42", "ZG"],
    loader: "15%",
    class: "mobDesk",
    answer: "42",
  },
  quizStep2: {
    question: "Which blue circle is bigger?",
    qimg: cdn_url + "/images/temp-img/temp-img2.jpg",
    answers: ["Both are the same", "Left", "Right"],
    loader: "30%",
    class: "",
    answer: "Right",
  },
  quizStep3: {
    question: "Spell the last row!",
    qimg: cdn_url + "/images/temp-img/temp-img4.jpg",
    answers: ["VSONSITE", "USOMSLTE", "VSONSITC", "USONSITE"],
    loader: "60%",
    class: "mobDesk",
    answer: "USONSITE",
  },
  quizStep4: {
    question: "Is the cat going up or down?",
    answers: ["Up", "Down"],
    qimg: cdn_url + "/images/temp-img/temp-img7.jpg",
    loader: "80%",
    class: "",
    answer: "Down",
  },
  quizStep5: {
    question: "What do you see?",
    answers: ["A number", "Red square", "Something strange in the middle"],
    qimg: cdn_url + "/images/temp-img/temp-img9.jpg",
    loader: "100%",
    class: "",
    answer: "A number",
  },
};

var Quiz = jQuery("#quizDom");
var selectedAnswersQuizD = {};
var total_ques = Object.keys(questions).length;
jQuery(document).ready(function () {
  checkcookiefunctionality(getCookie("selectedAnswersQuizD"));
  preload([
    cdn_url + "/images/temp-img/temp-img1.jpg",
    cdn_url + "/images/temp-img/temp-img2.jpg",
    cdn_url + "/images/temp-img/temp-img3.jpg",
    cdn_url + "/images/temp-img/temp-img4.jpg",
    cdn_url + "/images/temp-img/temp-img7.jpg",
    cdn_url + "/images/temp-img/temp-img9.jpg",
  ]);
});
function preload(arrayOfImages) {
  jQuery(arrayOfImages).each(function () {
    jQuery("<img />").attr("src", this).appendTo("body").css("display", "none");
  });
}
jQuery("a.quiz-btn-q").on("click", function () {
  jQuery("#quiz").hide();
  if (Object.keys(selectedAnswersQuizD).length <= 0) {
    preFetchQ(1, "hide");
    jQuery("#quizStep1").show();
    jQuery("#quizStep1")
      .find(".steps")
      .html("1 OF " + total_ques);
    preFetchQ(2, "hide");
    customGlobalEventFire("QuizStarted");
  }
});

jQuery(".quizComplate").on("click", function () {
  customGlobalEventFire("QuizToSubscribePage");
  customGlobalEventFire("QuizToRxStart");
});

function preFetchQ(id, type) {
  displayQuiz(id, type);
}
jQuery(document).on("click", "label.singleQues", function () {
  var id = jQuery(this).attr("for");
  var step = parseInt(jQuery("#" + id).attr("name"));
  console.log("step", step);
  if (jQuery(this).attr("data-id") == "correct") {
    jQuery("#" + id).attr("class", "correct");
  } else {
    if (jQuery("#quizStep" + step).find(".correct").length > 0)
      jQuery("#quizStep" + step)
        .find(".correct")
        .removeClass("correct");
  }
  var questionID = "QuizQuestion" + inWords(step) + "Completed";
  var quesTitle = jQuery("#quizStep" + step + " .quesTitle").html();
  var ansLabel = jQuery("#" + id).val();
  var checkedElement = jQuery("#quizStep" + step).find("input[type='radio']");
  jQuery.each(checkedElement, function (index) {
    if (jQuery(this).val() == ansLabel) {
      selectedAnswersQuizD["quizStep" + step] = ansLabel;
      document.cookie =
        "selectedAnswersQuizD=" +
        JSON.stringify(selectedAnswersQuizD) +
        ";  path=/";
      return false;
    }
  });
  quizCusEventFire(questionID, quesTitle, ansLabel);
  if (step == total_ques) customGlobalEventFire("QuizCompleted");
  Quiz.fadeOut(function () {
    jQuery("#quizStep" + step).hide();
    jQuery(".back-btn").show();
    jQuery(".back-btn").attr("rel", step);
    displayQuiz(step + 1, "show");
  });
});
jQuery(".back-btn").on("click", function () {
  if (jQuery(this).attr("rel") == 1) {
    jQuery(".back-btn").hide();
  }
  jQuery(".quizSteps").hide();
  var back_step = jQuery(this).attr("rel");
  jQuery("#quizStep" + back_step).show();
  jQuery(this).attr("rel", back_step - 1);
});
var displayQuiz = function (index, type) {
  if (index <= total_ques) {
    if (jQuery("#quizStep" + index).length > 0) {
      Quiz.fadeIn();
    } else {
      var nextQuestion = createQuestionElement(index);
      Quiz.append(nextQuestion).fadeIn();
    }
    jQuery("#quizStep" + index)
      .find(".steps")
      .html(index + " OF " + total_ques);
    if (type == "show") {
      jQuery("#quizStep" + index).show();
      preFetchQ(index + 1, "hide");
    } else {
      jQuery("#quizStep" + index).hide();
    }
  } else {
    if (type == "show") {
      var res = jQuery("input[class='correct']").length;
      var text = "Congratulations!";
      var resSet = res + "/" + total_ques;
      jQuery(".CongratsText").html("Congratulations!<br />");
      if (res == total_ques) {
        text =
          "Congratulations!&nbsp;You&nbsp;got&nbsp;" + resSet + "&nbsp;right!";
        jQuery(".CongratsText").html("");
      } else if (res >= 4 && res < total_ques) {
        text =
          "Great&nbsp;job!&nbsp;You&nbsp;got&nbsp;" + resSet + "&nbsp;right!";
      } else if (res >= 1 && res < 4) {
        text = "Nice&nbsp;work!&nbsp;You&nbsp;got&nbsp;" + res + "&nbsp;right!";
      } else {
        text = "Thanks for taking this quiz!";
      }
      //jQuery(".thanksTitle").html(text + "<br/>You've won a FREE box of daily contact lenses!");
      //jQuery(".thanksChangeDes").html(text);
      jQuery(".thanksTitle").html(text);
      jQuery(".footerQuizText").html(
        "<br />While we only promote products that we love, Insider Envy receives a small compensation per subscription."
      );
      jQuery("#quizThanks").show();
      jQuery(".back-btn").hide();
    }
  }
};

function createQuestionElement(index) {
  var qsstep = "quizStep" + index;
  //jQuery('#' + qsstep).remove();
  var qElement =
    '<div id="' +
    qsstep +
    '" class="quizSteps"><div class="quizHead"><div class="loaderStrip"><span style="width: ' +
    questions[qsstep].loader +
    '"></span></div><div class="steps"></div></div>';
  qElement +=
    '<div class="quizFrame"><h2 class="quesTitle animated fadeIn">' +
    questions[qsstep].question +
    '</h2><h3 class="animated2 fadeIn">- choose one -</h3></div>';
  // Qimages
  qElement +=
    '<div class="quizBg animated zoomIn"><img src="' +
    questions[qsstep].qimg +
    '" alt=""/></div>';
  qElement += '<div class="quizQuestion ' + questions[qsstep].class + '"><ul>';
  var answers = "";
  jQuery(questions[qsstep].answers).each(function (index1, value1) {
    var animate = [0.1, 0.3, 0.5, 0.7];
    var detect = value1 == questions[qsstep].answer ? "correct" : "";
    answers +=
      '<li class="animated2 slideInUp">' +
      '          <input type="radio" value="' +
      value1 +
      '" id="' +
      index +
      "_" +
      index1 +
      '_ans" name=' +
      index +
      " rel='1' />" +
      '          <label data-id="' +
      detect +
      '" class="hc-Q-ques singleQues" for="' +
      index +
      "_" +
      index1 +
      '_ans">' +
      '          <div class="pad20 ansLabel">' +
      value1 +
      "</div>" +
      "          </label>" +
      "          </li>";
  });

  //Options
  qElement += answers;
  qElement += "</ul></div>";
  qElement += "</div>";
  return qElement;
}

function inWords(num) {
  var a = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  var b = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  if ((num = num.toString()).length > 9) return "overflow";
  n = ("000000000" + num)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})jQuery/);
  if (!n) return;
  var str = "";

  str +=
    n[5] != 0
      ? (str != "" ? "and " : "") +
        (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]])
      : "";
  return str;
}

function quizCusEventFire(queId, que, ans) {
  if (typeof ampt != "undefined")
    ampt.track(queId, {
      question: que,
      answer: ans,
    });
  if (typeof safariAmpt != "undefined")
    safariAmpt.track(queId, {
      question: que,
      answer: ans,
    });
  if (typeof fbq != "undefined" && fbq) fbq("trackCustom", queId);
  if (typeof ga != "undefined" && ga) {
    ga("send", "event", {
      eventCategory: queId,
      eventAction: "click",
      eventLabel: queId,
    });
  }
}
function checkcookiefunctionality(answers) {
  if (typeof answers != "undefined" && answers != "") {
    jQuery("a.quiz-btn-q").click();
    var answers = JSON.parse(answers);
    selectedAnswersQuizD = answers;
    var ansLen = Object.keys(answers).length;
    preFetchQ(ansLen, "hide");
    for (i = ansLen - 1; i >= 1; i--) {
      preFetchQ(i, "hide");
      jQuery("#quizStep" + i)
        .find("input[type='radio']")
        .each(function () {
          if (jQuery(this).val() == answers["quizStep" + i]) {
            jQuery(this).prop("checked", true);
            if (jQuery(this).next().attr("data-id") === "correct")
              jQuery(this).attr("class", "correct");
          }
        });
    }
    jQuery(jQuery("#quizStep" + ansLen).find("label.singleQues")).each(
      function () {
        if (
          jQuery(this).parent().find("input[type='radio']").val() ==
          answers["quizStep" + ansLen]
        ) {
          jQuery(".quizSteps").hide();
          jQuery(this).click();
        }
      }
    );
  }
  setTimeout(function () {
    jQuery("#quiz").removeClass("hide");
  }, 20);
}
