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
  $(".panel").hide();
  $(".panel.JS").show();
  $(".panel.JS").click(function(){
    $("p.JS").toggle();
  });
  var counter = 0;
  var text;
  $("#next").click(function() {
    counter++;
    console.log(counter)
    if (counter >= 18) {
      counter = 0;
      $(".panel").hide();
       $(".panel.JS").show();
       $(".panel.JS").click(function(){
         $("p.JS").toggle();
     })};
    if (counter === 0){
      $(".panel").hide();
      $(".panel.JS").show();
      $(".panel.JS").click(function(){
        $("p.JS").toggle();
      });
    }
    else if (counter === 1) {
      $(".panel").hide();
      $(".panel.operators").show();
      $(".panel.operators").click(function(){
        $("p.operators").toggle();
      });
    }
    else if (counter === 2){
      $(".panel").hide();
      $(".panel.variables").show();
      $(".panel.variables").click(function(){
        $("p.variables").toggle();
      });
    }
    else if (counter === 3) {
      $(".panel").hide();
      $(".panel.variableNamingConventions").show();
      $(".panel.variableNamingConventions").click(function(){
        $("p.variableNamingConventions").toggle();
      })
    }
    else if (counter === 4) {
      $(".panel").hide();
      $(".panel.functions").show();
      $(".panel.functions").click(function(){
        $("p.functions").toggle();
      })
    }
    else if (counter === 5) {
      $(".panel").hide();
      $(".panel.methods").show();
      $(".panel.methods").click(function(){
        $("p.methods").toggle();
      })
    }
    else if (counter === 6) {
      $(".panel").hide();
      $(".panel.arguments").show();
      $(".panel.arguments").click(function(){
        $("p.arguments").toggle();
      })
    }
    else if (counter === 7) {
      $(".panel").hide();
      $(".panel.parameters").show();
      $(".panel.parameters").click(function(){
        $("p.parameters").toggle();
      })
    }
    else if (counter === 8) {
      $(".panel").hide();
      $(".panel.return").show();
      $(".panel.return").click(function(){
        $("p.return").toggle();
      })
    }
    else if (counter === 9) {
      $(".panel").hide();
      $(".panel.chainingMethods").show();
      $(".panel.chainingMethods").click(function(){
        $("p.chainingMethods").toggle();
      })
    }
    else if (counter === 10) {
      $(".panel").hide();
      $(".panel.strings").show();
      $(".panel.strings").click(function(){
        $("p.strings").toggle();
      })
    }
    else if (counter === 11) {
      $(".panel").hide();
      $(".panel.booleans").show();
      $(".panel.booleans").click(function(){
        $("p.booleans").toggle();
      })
    }
    else if (counter === 12) {
      $(".panel").hide();
      $(".panel.undefined").show();
      $(".panel.undefined").click(function(){
        $("p.undefined").toggle();
      })
    }
    else if (counter === 13) {
      $(".panel").hide();
      $(".panel.NaN").show();
      $(".panel.NaN").click(function(){
        $("p.NaN").toggle();
      })
    }
    else if (counter === 14) {
      $(".panel").hide();
      $(".panel.escape").show();
      $(".panel.escape").click(function(){
        $("p.escape").toggle();
      })
    }
    else if (counter === 15) {
      $(".panel").hide();
      $(".panel.alert").show();
      $(".panel.alert").click(function(){
        $("p.alert").toggle();
      })
    }
    else if (counter === 16) {
      $(".panel").hide();
      $(".panel.comments").show();
      $(".panel.comments").click(function(){
        $("p.comments").toggle();
      })
    }
    else if (counter === 17) {
      $(".panel").hide();
      $(".panel.jQuery").show();
      $(".panel.jQuery").click(function(){
        $("p.jQuery").toggle();
      })
    }
    else if (counter === 18) {
      $(".panel").hide();
      $(".panel.attributes").show();
      $(".panel.attributes").click(function(){
        $("p.attributes").toggle();
      })
    }

    // else{
    //   counter = 0;
    //   $(".panel").hide();
    //   $(".panel.JS").show();
    //   $(".panel.JS").click(function(){
    //     $("p.JS").toggle();
    //   })
    // };
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
      else {
        counter = 18;
        text = "18"
      }
    });
});

$(function() {
  $(".clickable").click(function() {
    $("#initial-hide").slideToggle();
    $("#initial-show").slideToggle();
  });
});
