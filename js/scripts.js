// $(function(){
//   $("button#next").click(function() {
//     $("next").addClass();
//   });
//
//   $("button#back").click(function() {
//     $("body").removeClass();
//     $("body").addClass("");
//   });
// });
$(function(){
  var counter = 0;
  var text;
  $("#next").click(function() {
    counter++;
    if (counter === 0){
      text = "0";
    }
    else if (counter === 1) {
      text = "1";
    }
    else if (counter === 2){
      text = "2"
    }
    else if (counter === 3) {
      text = "3";
    }
    else if (counter === 4) {
      text = "4";
    }
    else if (counter === 5) {
      text = "5";
    }
    else if (counter === 6) {
      text = "6";
    }
    else if (counter === 7) {
      text = "7";
    }
    else if (counter === 8) {
      text = "8";
    }
    else if (counter === 9) {
      text = "9";
    }
    else if (counter === 10) {
      text = "10";
    }
    else if (counter === 11) {
      text = "11";
    }
    else if (counter === 12) {
      text = "12";
    }
    else if (counter === 13) {
      text = "13";
    }
    else if (counter === 14) {
      text = "14";
    }
    else if (counter === 15) {
      text = "15";
    }
    else if (counter === 16) {
      text = "16";
    }
    else if (counter === 17) {
      text = "17";
    }
    else if (counter === 18) {
      text = "18";
    }
    else if (counter > 18){
      counter = 0;
      text = "0"
    }
    else{
      counter = 0;
      text = "0"
    }
    $('#x').text(text);
  });


    $("#back").click(function(){
      counter--;

      if (counter === 0){
        text = "0";
      }
      else if (counter === 1) {
        text = "1";
      }
      else if (counter === 2){
        text = "2"
      }
      else if (counter === 3) {
        text = "3";
      }
      else if (counter === 4) {
        text = "4";
      }
      else if (counter === 5) {
        text = "5";
      }
      else if (counter === 6) {
        text = "6";
      }
      else if (counter === 7) {
        text = "7";
      }
      else if (counter === 8) {
        text = "8";
      }
      else if (counter === 9) {
        text = "9";
      }
      else if (counter === 10) {
        text = "10";
      }
      else if (counter === 11) {
        text = "11";
      }
      else if (counter === 12) {
        text = "12";
      }
      else if (counter === 13) {
        text = "13";
      }
      else if (counter === 14) {
        text = "14";
      }
      else if (counter === 15) {
        text = "15";
      }
      else if (counter === 16) {
        text = "16";
      }
      else if (counter === 17) {
        text = "17";
      }
      else if (counter === 18) {
        text = "18";
      }
      else if (counter < 0){
        counter = 18;
        text = "18"
      }
      else{
        counter = 0;
        text = "0"
      }
      $('#x').text(text);
    });

});

$(function() {
  $(".clickable").click(function() {
    $("#initial-hide").slideToggle();
    $("#initial-show").slideToggle();
  });
});
