function popupTest() {
  let startDate = new Date("Oct 31, 2020 00:00:00").getTime();
  let endDate = new Date("Oct 31, 2020 23:59:59").getTime();
  let rightNow = new Date();
  let testStarted = parseFloat(startDate - rightNow) < 0;
  let testOver = parseFloat(endDate - rightNow) < 0;
  if (!testStarted || testOver) {
    console.log("no test");
    return;
  } else {
    let popup;
    let random = Math.random() * 100;
    console.log(random);
    if (random < 45) popup = "timer";
    if (random > 45 && random < 90) popup = "static";
    if (random > 90) popup = false;
    if (popup === "timer") {
      let masterDiv = document.getElementById("DFATimerCookie");
      let allOfTheHTML = `      <style>#container {
  /* width: 15%; */
  overflow: hidden;
  background-color: #fff;
  position: relative;
}
.edge_text {
  color: #fff;
  transform: rotate(-45deg);
  font-size: 12px;
  top: 15px;
  left: 0;
  position: absolute;
  text-transform: uppercase;
  margin-bottom: 7px;
  letter-spacing: 1px;
  line-height: 18px;
  font-weight: 800;
  padding-left: 5px;
  margin-top: 8px;
}
#triangle-topleft {
  width: 0;
  height: 0;
  border-top: 130px solid #f2674b;
  border-right: 130px solid transparent;
  font-weight: 500;
  font-size: 11px;
  color: #fff;
  text-transform: uppercase;
  z-index: 10;
  top: 0;
  left: 0;
}
.pop_head {
  width: 100%;
}
.ie_popup {
  width: 700px;
  height: 700px;
  margin: 0 auto;
  background: #ffffff;
  text-align: center;
  border-radius: 1px;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.4);
}
.logo-container {
  position: relative;
  bottom: 100px;
}
.logo-container .logo {
  width: 92px;
  /* height: 63px; */
}
.ie_img {
  margin-top: -45px;
  background-image: url("https://static.insiderenvy.com/images/images/Birchbox+PNG/Asset+1+1.png");
  width: 150px;
  background-repeat: no-repeat;
}
.ie_sub {
  font-weight: 500;
  font-size: 14px;
  line-height: 26px;
  color: #848484;
  margin: 10px 0px;
}
.ie_pop_h {
  font-weight: bold;
  font-size: 17px;
  line-height: 25px;
  text-align: center;
  color: #6d6d6d;
  margin: 10px 0px;
  width: 62%;
  display: inline-block;
  position: relative;
  bottom: 22px;
  margin-bottom: 0px;
}
#clockdiv {
  display: flex;
  justify-content: center;
  font-weight: 100;
  text-align: center;
  font-size: 38px !important;
  margin: 20px 0px;
  margin-top: 0;
  box-sizing: content-box !important;
}
#clockdiv > div {
  padding: 10px;
  border-radius: 3px;
  background: #e2f2e5;
  display: inline-block;
}
#clockdiv div > span {
  color: #fff;
  padding: 15px;
  border-radius: 3px;
  display: inline-block;
  font-weight: 500;
  font-size: 55px;
}
#container3 {
  position: relative;
}
.smalltext {
  font-weight: 300;
  font-size: 15px;
  line-height: 14px;
  padding-top: 5px;
  text-align: center;
  color: #153a33;
}
.get_started_pop {
  text-align: center;
  color: #fff;
  display: flex;
  font-family: MuseoSans-900, sans-serif;
  font-size: 25px;
  padding: 10px 40px;
  transition: background 1s, color 1s;
  background: #f2674b;
  cursor: pointer;
  min-width: 420px;
  font-weight: bold;
  text-decoration: none;
  height: 56px;
  width: 300px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.cta_pop {
  padding: 10px 10px;
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 15px;
  box-sizing: content-box !important;
}
.get_started_pop:hover {
  text-shadow: 0 0 2px #000;
  color: #fff !important;
  background-color: #f35333;
}
.master-wrapper {
  position: relative;
  bottom: 62px;
}
.ie_line {
  font-weight: 700 !important;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  text-decoration: underline;
  color: #153a33;
}
.link {
  padding: 10px 10px;
  padding-bottom: 50px;
}
.ie_line:hover {
  text-decoration: underline;
}
.closetext {
  clear: both;
}
.close {
  color: #153a33;
  font-size: 25px;
  font-weight: 300;
  float: right;
  line-height: 1;
  text-shadow: 0 1px 0 #fff;
  filter: alpha(opacity=20);
  opacity: 1.2;
  margin-right: 15px;
  margin-top: 10px;
  cursor: pointer;
}

/* .InsiderOtherCookies { */
#DFATimerCookie {
  display: none;
  line-height: 1.4;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  text-align: center;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  color: #ffffff;
  text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: center;
  z-index: 1000;
}
#container2 img {
  width: 129px;
  position: relative;
  top: -20px;
}
#container2 {
  margin: auto;
  display: flex;
  justify-content: center;
}
#container3 .redeemed h3 {
  color: #153a33 !important;
  font-size: 37px;
  line-height: 46px;
  font-weight: 700 !important;
  margin-top: 0;
}
.free_emphasis {
  background-color: #00779b;
  color: white;
  padding: 2px 4px;
}
/* #clockdiv div .timer-box {
  width: 45px !important;
} */
#clockdiv div .timer-box {
  color: #153a33;
}
#clockdiv div {
  margin: 3px;
}
#clockdiv .time-container {
  width: 100px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.colon-p {
  color: #00779b;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-size: 50px !important;
  font-weight: 400 !important;
}
@media all and (max-width: 767px) {
  .ie_popup {
    width: 350px;
    height: 525px;
  }
  #container {
    width: 35%;
    z-index: 0;
  }
  #container3 {
    top: -40px;
  }
  .ie_img {
    margin-top: -70px;
    background-image: url("https://static.insiderenvy.com/images/images/Birchbox+PNG/Asset+1l+1.png");
    background-repeat: no-repeat;
    width: 15px;
    height: 40px;
  }
  #container2 img {
    width: 100px;
  }
  .logo-container .logo {
    width: 63px;
  }
  .ie_sub {
    font-size: 13px;
    line-height: 18px;
    margin: 15px 1px;
    font-weight: 400;
  }
  .redeemed h3 {
    margin: 0;
    font-size: 23px !important;
    line-height: 29px !important;
  }
  .ie_pop_h {
    font-size: 11px;
    line-height: 16px;
    margin: 12px 0px;
    width: 80%;
    display: inline-block;
    margin-bottom: 0;
    top: -10px;
  }
  #clockdiv {
    margin: 20px 0px;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
  }
  #clockdiv div .timer-box {
    height: 75px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 0; */
  }
  master-wrapper {
    bottom: 50px;
  }
  #clockdiv > div {
    padding: 5px;
  }
  #clockdiv div > span {
    padding: 5px;
    font-size: 45px;
  }
  .smalltext {
    font-size: 15px;
    line-height: 14px;
    padding-top: 0px;
    padding-bottom: 2px;
  }
  .cta_pop {
    padding: 10px 10px;
    bottom: 40px;
  }
  .get_started_pop {
    font-size: 20px;
    padding: 10px 15px;
    min-width: 250px;
    font-weight: 600;
    line-height: 10px;
    margin-top: 0px;
  }
  .ie_line {
    font-weight: 300;
    font-size: 13px;
    line-height: 26px;
  }
  .link {
    position: relative;
    bottom: 40px;
  }
  #clockdiv .time-container {
    width: 60px !important;
  }
  .colon-p {
    font-size: 35px !important;
  }
  #triangle-topleft {
    border-top: 110px solid #f2674b;
    border-right: 110px solid transparent;
  }
}
</style>
<div class="ie_popup">
  <div class="closetext dismiss_cookie"><span class="close">×</span></div>
  <div class="pop_head">
    <div id="container">
      <h2 class="edge_text">Limited<br />Time Offer</h2>
      <div id="triangle-topleft"></div>
    </div>
  </div>
  <div class="logo-container">
    <img
      class="logo"
      src="https://static.insiderenvy.com/images/images/DFA/TFD-Logo-Desktop.png"
    />
  </div>
  <div class="master-wrapper">
    <div id="container3">
      <h1 class="ie_pop_h">
        The Farmer’s Dog is extending a surprise Halloween offer <br />
        for our fans on Insider Envy.
      </h1>
      <div class="redeemed">
        <h3>
          The Farmer’s Dog <br />
          Secret Surprise Offer Ends in
        </h3>
      </div>

      <div id="clockdiv">
        <!-- <div class="time-container">
        <span class="hours timer-box" id="day"></span>
        <div class="smalltext">Days</div>
      </div> -->
        <!-- <p class="colon-p">:</p> -->
        <div class="time-container">
          <span class="hours timer-box" id="hour"></span>
          <div class="smalltext">Hours</div>
        </div>
        <p class="colon-p">:</p>
        <div class="time-container">
          <span class="minutes timer-box" id="minute"></span>
          <div class="smalltext">Minutes</div>
        </div>
        <p class="colon-p">:</p>
        <div class="time-container">
          <span class="seconds timer-box" id="second"></span>
          <div class="smalltext">Seconds</div>
        </div>
      </div>
      <p id="up"></p>
    </div>
    <div class="cta_pop">
      <a
        class="get_started_pop"
        href="https://www.thefarmersdog.com/ampush"
        target="_blank"
        >Unlock Offer</a
      >
    </div>
    <div class="link">
      <a class="ie_line" href="#">No thanks, I’ll “ruff” it out</a>
    </div>
  </div>
</div>`;

      masterDiv.innerHTML = allOfTheHTML;

      jQuery(window).on("load", function () {
        var delay = 7000;
        var threeMinutes = 1000 * 60 * 3;
        // var deadline = new Date().getTime() + threeMinutes + delay;
        var deadline = new Date("Oct 31, 2020 23:59:59").getTime();
        console.log(new Date("Oct 31, 2020 23:59:59"));

        var x = setInterval(function () {
          var now = new Date().getTime();
          var t = deadline - now;
          // var days = Math.floor(t / (1000 * 60 * 60 * 24));
          // var days = 0;
          var hours = Math.floor(
            (t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
          // var minutes = 3;
          var seconds = Math.floor((t % (1000 * 60)) / 1000);
          // var milliseconds = Math.floor((t % (100 * 6 * 2)) / 100);
          // var milliseconds = Math.floor((t % (100 * 6 * 2)) / 100);
          // document.getElementById("day").innerHTML = days;
          document.getElementById("hour").innerHTML = hours;
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
        jQuery("#DFATimerCookie").hide();
      });

      jQuery(".ie_line").click(function () {
        jQuery("#DFATimerCookie").hide();
      });

      jQuery(document).ready(function () {
        let show_cookieBox;
        let cookieNotificationST = sessionStorage.getItem("DFA-popup");
        if (cookieNotificationST == null) {
          setTimeout(function () {
            jQuery("#DFATimerCookie").show();
            show_cookieBox = "YES";
            atrack("pageview", { utm_exp_pop: "pop1_timer" });
          }, 6000);
          sessionStorage.setItem("DFA-popup", "YES");
        } else {
          jQuery("#DFATimerCookie").hide();
        }
      });
    } else if (popup === "static") {
      let masterDiv = document.getElementById("DFAStaticCookie");
      let allOfTheHTML = `<style>#DFAStaticCookie {
    line-height: 1.4;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    text-align: center;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-align: center;
    align-items: center;
    color: #ffffff;
    text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: center;
    z-index: 1000;
  }
  .ie_popup {
    width: 700px;
    height: 450px;
    /* height: auto; */
    margin: 0 auto;
    background: #fff;
    text-align: center;
    border-radius: 1px;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.4);
    display: flex;
  }
  
  .exit {
    color: #111111;
    position: relative;
    left: 95%;
    top: 0px;
    font-size: 30px;
    font-weight: lighter;
    cursor: pointer;
  }
  .today-only {
    color: #153a33;
    padding-bottom: 15px;
    font-size: 17px;
  }
  
  .surprise-offer {
    color: #153a33;
    margin: 0;
    font-size: 42px;
    font-weight: 800 !important;
    margin: 10px;
  }
  .secret-shh {
    color: #959595;
    margin: 0;
  }
  
  .logo-container .logo {
    width: 80px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  
  .discount-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
  }
  
  .discount-container .special-offer-text {
    color: #1d1d1d;
    letter-spacing: 1.9px;
  }
  
  .discount-container .offer-description {
    color: #1d1d1d;
    width: 70%;
    font-size: 14px;
    padding-bottom: 8px;
    line-height: 20px !important;
    margin-top: 20px;
  }
  
  .discount-container .offer-description .bold-text {
    font-weight: 700;
  }
  
  /* .discount-container .discount-button {
  color: white;
  background-color: #202020;
  width: 200px;
  height: 40px;
  border: none;
  box-shadow: 0px 4px 10px rgba(39, 39, 39, 0.2),
  0px 4px 50px rgba(39, 39, 39, 0.2);
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  } */
  
  .discount-container a {
    color: white;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #202020; */
    background: #f2674b;
    width: 200px;
    height: 40px;
    border: none;
    box-shadow: 0px 4px 10px rgba(39, 39, 39, 0.2),
      0px 4px 50px rgba(39, 39, 39, 0.2);
    font-size: 18px;
    cursor: pointer;
  }
  
  .discount-15-off-pic {
    width: 225px;
    padding-bottom: 8px;
  }
  
  .model-img-container {
    width: 50%;
    background-image: url("https://static.insiderenvy.com/images/images/DFA/Desktop-Dog.png");
    background-position: center;
    background-size: cover;
  }
  
  @media all and (max-width: 767px) {
    .ie_popup {
      width: 340px;
      flex-direction: column;
      height: 650px;
      padding: 0;
      margin: 0;
    }
    .exit {
      color: #111111;
      position: relative;
      left: 45%;
      top: 3px;
      font-size: 20px;
    }
    .logo-container .logo {
      padding-top: 0;
    }
    .discount-container {
      width: auto;
    }
  
    .model-img-container {
      height: 100%;
      width: 270px;
      background-size: contain;
      background-repeat: no-repeat;
      background-image: url("https://static.insiderenvy.com/images/images/DFA/Desktop-Dog.png");
      background-position: 0% 100%;
      padding: 0;
      /* margin: 0; */
      margin-left: 70px;
    }
  
    .discount-container .offer-description {
      margin: 0;
      width: 73%;
      margin: 10px;
    }
    .today-only {
      padding-bottom: 0;
    }
  }
  </style>
  <div class="ie_popup">
        <div class="exit close">&times</div>
        <div class="copy-container">
          <div class="logo-container">
            <img
              class="logo"
              src="https://static.insiderenvy.com/images/images/DFA/TFD-Logo-Desktop.png"
            />
          </div>
          <div class="discount-container">
            <div class="today-only">Today Only</div>
            <div>
              <p class="surprise-offer">SURPRISE</p>
            </div>
            <div>
              <p class="secret-shh">(secret! shh)</p>
            </div>
            <div>
              <p class="surprise-offer">OFFER</p>
            </div>
            <p class="offer-description">
              The Farmer’s Dog is extending a surprise <br />
              offer for our fans on Insider Envy.
            </p>
            <!-- <button class="discount-button"> -->
            <a
              href="https://www.thefarmersdog.com/ampush"
              target="_blank"
              >Unlock Offer</a
            >
            <!-- </button> -->
          </div>
        </div>
        <div class="model-img-container"></div>
      </div>`;
      masterDiv.innerHTML = allOfTheHTML;
      jQuery(".close").click(function () {
        jQuery("#DFAStaticCookie").hide();
      });

      jQuery(".ie_line").click(function () {
        jQuery("#DFAStaticCookie").hide();
      });

      jQuery(document).ready(function () {
        let show_cookieBox;
        let cookieNotificationST = sessionStorage.getItem("DFA-popup");
        if (cookieNotificationST == null) {
          setTimeout(function () {
            jQuery("#DFAStaticCookie").show();
            show_cookieBox = "YES";
            atrack("pageview", { utm_exp_pop: "pop1_static" });
          }, 6000);
          sessionStorage.setItem("DFA-popup", "YES");
        } else {
          jQuery("#DFAStaticCookie").hide();
        }
      });
    } else if (!popup) {
      setTimeout(function () {
        console.log("no popup today");
        atrack("pageview", { utm_exp_pop: "pop1_nopop" });
      }, 6000);
    }
  }
}
popupTest();
