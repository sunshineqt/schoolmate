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
            default:"�¸�һ��"
        },
        num:{
            type:Number,
            default:1000
        },
        school:{
            type:String,
            default:"������ѧ"
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
             <img src="images/1.jpg" style="display:block" />ÿ2-3Ԫ���Ϳ���Ϊһ��ƶ��Ļ����ṩһ��Ӫ�����
             <span style="display:block">��{{num}}�˾���</span>
           </figure>

          <div>
             <img src="images/head.png" />
             <img src="images/headImag.png" />
             <span>{{school}}</span>
             <span>{{time}}</span>
          </div>

          <div>
             <div>�����ǽ�����������ѡ����ͼƬ����</div>
             <span style="display:block">����Ŀ�껹��{{money}}Ԫ</span>
             <span style="display:block">�����{{per}}%</span>
         </div>
        </div>
    `
});

var vm=new Vue({
   el:"#demo",
    data:{

 /* message:"���Ǹ��������"  */
    list: [
       {
         title:"������С�ƴ󰮶�һ�ݰ��Ķ�һ�ݺ�ƽ�밲��",
         num:"1000",
         school:"������ѧ",
         time:"2016-3-16",
         money:"1000",
         per:"25%"
       },
       {
           title:"������С�ƴ�",
           num:"1600",
           school:"���",
           time:"2016-8-16",
           money:"1200",
           per:"22%"
       },
       {
           title:"��һ�ݹ��Ķ�һ�ݰ���",
           num:"2000",
           school:"�㹤��",
           time:"2017-3-16",
           money:"900",
           per:"21%"
       }
   ]
    }
});
