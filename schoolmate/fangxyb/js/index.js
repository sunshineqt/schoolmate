/* Created by DELL on 2017/4/6.*/
$(document).ready(function(){
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
        }
    },
  template:`
        <div class="fig">
            <figure>
             <figcaption>{{title}}</figcaption>
             <img src="images/1.jpg" style="display:block" />每2-3元，就可以为一个贫穷的还在提供一份营养早餐
             <span style="display:block">共{{num}}人捐助</span>
           </figure>

          <div>
             <img src="images/head.png" />
             <img src="images/headImag.png" />
             <span>{{school}}</span>
             <span>{{time}}</span>
          </div>

          <div>
             <div>这里是进度条，可以选择用图片代替</div>
             <span style="display:block">距离目标还差{{money}}元</span>
             <span style="display:block">已完成{{per}}%</span>
         </div>
        </div>
    `
});

var vm=new Vue({
   el:"#demo",
    data:{

 /* message:"我是父组件数据"  */
    list: [
       {
         title:"免费午餐小善大爱多一份爱心多一份和平与安详",
         num:"1000",
         school:"宁波大学",
         time:"2016-3-16",
         money:"1000",
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
    }
});
