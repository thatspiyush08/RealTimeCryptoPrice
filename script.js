

const light = document.querySelector("#light");

$(function() {
  function toggleWrapper(b, w, l) {
    if (w.hasClass('open')) {
      w.removeClass('open');
      w.height(0);
    } else {
      // Close any other open wrapper
      $(".wrapper").not(w).removeClass('open').height(0);

      w.addClass('open');
      w.height(l.outerHeight(true));
    }
  }

  $("#one").click(function() {
    var w = $("#wrapper1");
    toggleWrapper($(this), w, $("#list"));
  });

  $("#two").click(function() {
    var w = $("#wrapper2");
    toggleWrapper($(this), w, $("#list"));
  });

  $("#three").click(function() {
    var w = $("#wrapper3");
    toggleWrapper($(this), w, $("#list"));
  });

  $("#four").click(function() {
    var w = $("#wrapper4");
    toggleWrapper($(this), w, $("#list"));
  });

  $("#five").click(function() {
    var w = $("#wrapper5");
    toggleWrapper($(this), w, $("#list"));
  });

  $("#six").click(function() {
    var w = $("#wrapper6");
    toggleWrapper($(this), w, $("#list"));
  });
});


let click = 0;

function lightmode() {
  click++;
  console.log("light mode clicked", click);

  const topbar = document.querySelector(".topbar");
  const background3 = document.querySelector("#background3");

  if (click % 2 === 1) {
    topbar.style.backgroundColor = "#ccc";
    background3.style.backgroundColor = "#ccc";
  } else {
    topbar.style.backgroundColor = "#474d56";
    background3.style.backgroundColor = "#252a2e";
  }
}

light.addEventListener("click", lightmode);

var btc = document.querySelector("#btc");
var eth = document.querySelector("#eth");
var doge = document.querySelector("#doge");

var settings = {
  "async": true,
  "scrossDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  "method": "GET",
  "headers": {}
};

$.ajax(settings).done(function(response) {
  btc.innerHTML = "$" + response.bitcoin.usd;
  eth.innerHTML = "$" + response.ethereum.usd;
  doge.innerHTML = "$" + response.dogecoin.usd;
});
