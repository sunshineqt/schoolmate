
$(document).ready(function(){
  $(".person").click(function(){
     /* $(".person").show();
      $(".company").hide();*/
      $(".person").css({"background":"deepskyblue","color":"white"});
      $(".company").css({"background":"none","color":"black"});

  });
  $(".company").click(function(){
      $(".company").css({"background":"deepskyblue","color":"white"});
      $(".person").css({"background":"none","color":"black"});
  });

});