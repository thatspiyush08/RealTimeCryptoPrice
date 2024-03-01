const light = document.querySelector("#light");

$(function() {
    var b = $("#one");
    var w = $("#wrapper1");
    var l = $("#list");
  
    
  
    b.click(function() {
  
      if (w.hasClass('open')) {
        w.removeClass('open');
        w.height(0);
      } else {
        w.addClass('open');
        w.height(l.outerHeight(true));
      }
  
    });
  });



  $(function() {
    var b = $("#two");
    var w = $("#wrapper2");
    var l = $("#list");
  
    
  
    b.click(function() {
  
      if (w.hasClass('open')) {
        w.removeClass('open');
        w.height(0);
      } else {
        w.addClass('open');
        w.height(l.outerHeight(true));
      }
  
    });
  });
  $(function() {
    var b = $("#three");
    var w = $("#wrapper3");
    var l = $("#list");
  
    
  
    b.click(function() {
  
      if (w.hasClass('open')) {
        w.removeClass('open');
        w.height(0);
      } else {
        w.addClass('open');
        w.height(l.outerHeight(true));
      }
  
    });
  });
  $(function() {
    var b = $("#four");
    var w = $("#wrapper4");
    var l = $("#list");
  
    
  
    b.click(function() {
  
      if (w.hasClass('open')) {
        w.removeClass('open');
        w.height(0);
      } else {
        w.addClass('open');
        w.height(l.outerHeight(true));
      }
  
    });
  });
  $(function() {
    var b = $("#five");
    var w = $("#wrapper5");
    var l = $("#list");
  
    
  
    b.click(function() {
  
      if (w.hasClass('open')) {
        w.removeClass('open');
        w.height(0);
      } else {
        w.addClass('open');
        w.height(l.outerHeight(true));
      }
  
    });
  });
  $(function() {
    var b = $("#six");
    var w = $("#wrapper6");
    var l = $("#list");
  
    
  
    b.click(function() {
  
      if (w.hasClass('open')) {
        w.removeClass('open');
        w.height(0);
      } else {
        w.addClass('open');
        w.height(l.outerHeight(true));
      }
  
    });
  });
let click = 0;

function lightmode() {
    click++;
    console.log("light mode clicked", click);

   
    const topbar = document.querySelector(".topbar");
    const background3=document.querySelector("#background3");


    
    if (click % 2 === 1) {
        topbar.style.backgroundColor = "#ccc"; 
        background3.style.backgroundColor="#ccc"

    } else {
        topbar.style.backgroundColor = "#474d56"; 
        background3.style.backgroundColor="#252a2e"

    }
}

light.addEventListener("click", lightmode);


var btc=document.querySelector("#btc");
var eth=document.querySelector("#eth");
var doge=document.querySelector("#doge");

var settings={
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}
$.ajax(settings).done(function(response){
    btc.innerHTML="$"+response.bitcoin.usd;
    eth.innerHTML="$"+response.ethereum.usd;
    doge.innerHTML="$"+response.dogecoin.usd;
})
