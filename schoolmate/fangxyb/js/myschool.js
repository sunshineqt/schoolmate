Vue.component("custom2",{
    props:{
        info:{
            type:String,
            default:"20"
        },
        text:{
            type:String,
            default:"һ��ȥ������������"
        }
    },
    template:`
  <div class="pho">
        <div class="adver">{{info}}�˱���</div>
        <span class="destxt">{{text}}</span>
  <div >

  <div class="clear"></div>
`
});

var vm1=new Vue({
    el:"#demoside"
});
