
$(function(){
  $(".panel").hide();
  $(".panel.JS").show();
  $(".panel.JS").click(function(){
    $("p.JS").toggle();
  });
  $(".panel.operators").click(function(){
    $("p.operators").toggle();
  });
  $(".panel.variables").click(function(){
    $("p.variables").toggle();
  });
  $(".panel.variableNamingConventions").click(function(){
    $("p.variableNamingConventions").toggle();
  });
  $(".panel.functions").click(function(){
    $("p.functions").toggle();
  });
  $(".panel.methods").click(function(){
    $("p.methods").toggle();
  });
  $(".panel.arguments").click(function(){
    $("p.arguments").toggle();
  });
  $(".panel.parameters").click(function(){
    $("p.parameters").toggle();
  });
  $(".panel.return").click(function(){
    $("p.return").toggle();
  });
  $(".panel.chainingMethods").click(function(){
    $("p.chainingMethods").toggle();
  });
  $(".panel.strings").click(function(){
    $("p.strings").toggle();
  });
  $(".panel.booleans").click(function(){
    $("p.booleans").toggle();
  });
  $(".panel.undefined").click(function(){
    $("p.undefined").toggle();
  });
  $(".panel.NaN").click(function(){
    $("p.NaN").toggle();
  });
  $(".panel.escape").click(function(){
    $("p.escape").toggle();
  });
  $(".panel.alert").click(function(){
    $("p.alert").toggle();
  });
  $(".panel.comments").click(function(){
    $("p.comments").toggle();
  });
  $(".panel.jQuery").click(function(){
    $("p.jQuery").toggle();
  });
  $(".panel.attributes").click(function(){
    $("p.attributes").toggle();
  });


  var counter = 0;
  $("#next").click(function() {
    $(".content").hide();
    $(".cardLabel").show();

    counter++;
    switch (counter) {

      case 0:
      $(".panel").hide();
      $(".panel.JS").show();
      break;

      case 1:
      $(".panel").hide();
      $(".panel.operators").show();
      break;

      case 2:
      $(".panel").hide();
      $(".panel.variables").show();
      break;

      case 3:
        $(".panel").hide();
        $(".panel.variableNamingConventions").show();
      break;

      case 4:
        $(".panel").hide();
        $(".panel.functions").show();

      case 5:
        $(".panel").hide();
        $(".panel.methods").show();
      break;

      case 6:
        $(".panel").hide();
        $(".panel.arguments").show();
      break;

      case 7:
        $(".panel").hide();
        $(".panel.parameters").show();
      break;

      case 8:
        $(".panel").hide();
        $(".panel.return").show();
      break;

      case 9:
        $(".panel").hide();
        $(".panel.chainingMethods").show();
      break;

      case 10:
        $(".panel").hide();
        $(".panel.strings").show();
      break;

      case 11:
        $(".panel").hide();
        $(".panel.booleans").show();
      break;

      case 12:
        $(".panel").hide();
        $(".panel.undefined").show();
      break;

      case 13:
        $(".panel").hide();
        $(".panel.NaN").show();
      break;

      case 14:
        $(".panel").hide();
        $(".panel.escape").show();
      break;

      case 15:
        $(".panel").hide();
        $(".panel.alert").show();
      break;

      case 16:
        $(".panel").hide();
        $(".panel.comments").show();
      break;

      case 17:
        $(".panel").hide();
        $(".panel.jQuery").show();
      break;

      case 18:
        $(".panel").hide();
        $(".panel.attributes").show();
      break;

       default:
         counter = 0;
         $(".panel").hide();
         $(".panel.JS").show();
       };
});



  /*  if (counter === 0){
      $(".panel").hide();
      $(".panel.JS").show();
    }
    else if (counter === 1) {
      $(".panel").hide();
      $(".panel.operators").show();
    }
    else if (counter === 2){
      $(".panel").hide();
      $(".panel.variables").show();
    }
    else if (counter === 3) {
      $(".panel").hide();
      $(".panel.variableNamingConventions").show();
    }
    else if (counter === 4) {
      $(".panel").hide();
      $(".panel.functions").show();
    }
    else if (counter === 5) {
      $(".panel").hide();
      $(".panel.methods").show();
    }
    else if (counter === 6) {
      $(".panel").hide();
      $(".panel.arguments").show();
    }
    else if (counter === 7) {
      $(".panel").hide();
      $(".panel.parameters").show();
    }
    else if (counter === 8) {
      $(".panel").hide();
      $(".panel.return").show();
    }
    else if (counter === 9) {
      $(".panel").hide();
      $(".panel.chainingMethods").show();
    }
    else if (counter === 10) {
      $(".panel").hide();
      $(".panel.strings").show();
    }
    else if (counter === 11) {
      $(".panel").hide();
      $(".panel.booleans").show();
    }
    else if (counter === 12) {
      $(".panel").hide();
      $(".panel.undefined").show();
    }
    else if (counter === 13) {
      $(".panel").hide();
      $(".panel.NaN").show();
    }
    else if (counter === 14) {
      $(".panel").hide();
      $(".panel.escape").show();
    }
    else if (counter === 15) {
      $(".panel").hide();
      $(".panel.alert").show();
    }
    else if (counter === 16) {
      $(".panel").hide();
      $(".panel.comments").show();
    }
    else if (counter === 17) {
      $(".panel").hide();
      $(".panel.jQuery").show();
    }
    else if (counter === 18) {
      $(".panel").hide();
      $(".panel.attributes").show();
    }

     else{
       counter = 0;
       $(".panel").hide();
       $(".panel.JS").show();
     };
  });
*/
    $("#back").click(function(){
      $(".content").hide();
      $(".cardLabel").show();
      counter--;

      if (counter === 0){
        $(".panel").hide();
        $(".panel.JS").show();
      }
      else if (counter === 1) {
        $(".panel").hide();
        $(".panel.operators").show();
      }
      else if (counter === 2){
        $(".panel").hide();
        $(".panel.variables").show();
      }
      else if (counter === 3) {
        $(".panel").hide();
        $(".panel.variableNamingConventions").show();
      }
      else if (counter === 4) {
        $(".panel").hide();
        $(".panel.functions").show();
      }
      else if (counter === 5) {
        $(".panel").hide();
        $(".panel.methods").show();
      }
      else if (counter === 6) {
        $(".panel").hide();
        $(".panel.arguments").show();
      }
      else if (counter === 7) {
        $(".panel").hide();
        $(".panel.parameters").show();
      }
      else if (counter === 8) {
        $(".panel").hide();
        $(".panel.return").show();
      }
      else if (counter === 9) {
        $(".panel").hide();
        $(".panel.chainingMethods").show();
      }
      else if (counter === 10) {
        $(".panel").hide();
        $(".panel.strings").show();
      }
      else if (counter === 11) {
        $(".panel").hide();
        $(".panel.booleans").show();
      }
      else if (counter === 12) {
        $(".panel").hide();
        $(".panel.undefined").show();
      }
      else if (counter === 13) {
        $(".panel").hide();
        $(".panel.NaN").show();
      }
      else if (counter === 14) {
        $(".panel").hide();
        $(".panel.escape").show();
      }
      else if (counter === 15) {
        $(".panel").hide();
        $(".panel.alert").show();
      }
      else if (counter === 16) {
        $(".panel").hide();
        $(".panel.comments").show();
      }
      else if (counter === 17) {
        $(".panel").hide();
        $(".panel.jQuery").show();
      }
      else if (counter === 18) {
        $(".panel").hide();
        $(".panel.attributes").show();
      }

       else{
         counter = 18;
         $(".panel").hide();
         $(".panel.attributes").show();
       };
    });
});
