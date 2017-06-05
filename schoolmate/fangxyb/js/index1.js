/*轮播图*/  
var imgs=document.getElementById('imgs').getElementsByTagName('li');
       var nums=document.getElementById("num").getElementsByTagName("li");
       var luanpo=document.getElementById("luanpo");
       var oimg=document.getElementById('imgs');
       var iNow=0;
       var dt=null;
       oimg.style.width=imgs.length*imgs[0].offsetWidth+"px";

       function tab(){
           for(var i=0;i<nums.length;i++){
               nums[i].index=i;
               nums[i].onclick=function(){
                   clearInterval(dt);
                   iNow=this.index;
                   for(var i=0;i<nums.length;i++){
                       nums[i].className="b";
                   }
                   this.className="a";
                   oimg.style.left=-(imgs[0].offsetWidth*iNow)+"px";  
               }
               nums[i].onmouseout=function(){
                   start();
               }
           }
       }

       function start(){
           clearInterval(dt);
           dt=setInterval(function(){
               if(iNow>nums.length-2){
                   iNow=0;
               }else{
                   iNow++;
               }
               for(var k=0;k<nums.length;k++){
                   if(iNow==nums[k].index){nums[k].className='a';}else{nums[k].className='b';}
               }
               oimg.style.left=-(imgs[0].offsetWidth*iNow)+"px";    //这边可以加上我前面所写的那个缓动框架
           },1000);
           tab();
       }
       start();

$(document).ready(function(){
  $("#llist1").click(function(){
    $("#llist1").css("background","pink");
    $("#llist2").css("background","none");
    $("#llist3").css("background","none");
    $("#llist4").css("background","none");
    $("#llist5").css("background","none");
  });
    $("#llist2").click(function(){
        $("#llist1").css("background","none");
        $("#llist2").css("background","pink");
        $("#llist3").css("background","none");
        $("#llist4").css("background","none");
        $("#llist5").css("background","none");
    });
    $("#llist3").click(function(){
        $("#llist1").css("background","none");
        $("#llist2").css("background","none");
        $("#llist3").css("background","pink");
        $("#llist4").css("background","none");
        $("#llist5").css("background","none");
    });
    $("#llist4").click(function(){
        $("#llist1").css("background","none");
        $("#llist2").css("background","none");
        $("#llist3").css("background","none");
        $("#llist4").css("background","pink");
        $("#llist5").css("background","none");
    });
    $("#llist5").click(function(){
        $("#llist1").css("background","none");
        $("#llist2").css("background","none");
        $("#llist3").css("background","none");
        $("#llist4").css("background","none");
        $("#llist5").css("background","pink");
    });

  $("#ll1").mouseover(function(){
    $(".info1").show();
    $(".info2").hide();
    $(".info3").hide();
    $(".info4").hide();
/*$(this.li).css("color","white");*/
});
  $("#ll2").mouseover(function(){
   $(".info2").show();
   $(".info1").hide();
   $(".info3").hide();
   $(".info4").hide();
});
  $("#ll3").mouseover(function(){
   $(".info3").show();
   $(".info1").hide();
   $(".info2").hide();
   $(".info4").hide();
});
  $("#ll4").mouseover(function(){
   $(".info4").show();
   $(".info1").hide();
   $(".info2").hide();
   $(".info3").hide();
});
})

Vue.component("custom1",{
/*    data(){
return {
message:data
}
},*/
  props:{
   type:{
     type:String,
     default:"info"
},
   title:{
     type:String,
     default:"勇敢一点"
},
   num:{
     type:Number,
     default:1000
},
   school:{
     type:String,
     default:"宁波大学"
},
   time:{
     type:String,
     default:"2016-6-16"
},
   money:{
     type:Number,
     default:1000
},
   per:{
     type:Number,
     default:25
},
  des:{
      type:String,
      default:"每2-3元，就可以为一个贫穷的还在提供一份营养早餐"
  }
},
template:`
  <div class="fig">
    <figure>
        <figcaption class="tit">{{title}}</figcaption>
        <slot name="imgtit">
          <a href="#"><img src="images/1.jpg" style="display:block;" /></a>
        </slot>
        <span class="spantxt">{{des}}</span>
        <div >
        <span class="spantext">共{{num}}人捐助</span>
        <img class="spantext" src="images/heart.jpg" style="width:20px;height:20px;" />
        </div>
    </figure>
    <div class="clear"></div>
    <hr />
    <div class="headtit">
        <img src="images/head.png" style="width:30px;height:26px;" />
        <img src="images/headImag.png" style="width:26px;height:26px;" />
        <span class="spantext">{{time}}</span>
        <span class="spantext">{{school}}</span>
    </div>
    <hr />
    <div>
        <slot name="img">
         <div><img src="./images/probar1.png" style="width:300px;height:16px;" /></div>
        </slot>
        <span>距离目标还差{{money}}元</span>
        <span class="spantext">已完成{{per}}%</span>
    </div>
     <div class="clear"></div>
  </div>
  <div class="clear"></div>
`
});

var vm=new Vue({
  el:"#demo",
  /*data:{

/!* message:"我是父组件数据"  *!/
   list: [
      {
     title:"免费午餐小善大爱多一份爱心多一份和平与安详",
     num:"1000",
     school:"宁波大学",
     time:"2016-3-16",
     money:"900",
     per:"25%"
},
    {
     title:"免费午餐小善大爱",
     num:"1600",
     school:"浙大",
     time:"2016-8-16",
     money:"1200",
     per:"22%"
},
    {
     title:"多一份关心多一份安详",
     num:"2000",
     school:"浙工大",
     time:"2017-3-16",
     money:"900",
     per:"21%"
}
]
}*/
});
