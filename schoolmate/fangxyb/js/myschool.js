Vue.component("custom2",{
    props:{
        info:{
            type:String,
            default:"20"
        },
        text:{
            type:String,
            default:"一起去欣赏世界美景"
        }
    },
    template:`
  <div class="pho">
        <div class="adver">{{info}}人报名</div>
        <span class="destxt">{{text}}</span>
  <div >

  <div class="clear"></div>
`
});

var vm1=new Vue({
    el:"#demoside"
});
