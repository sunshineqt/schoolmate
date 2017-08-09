$(document).ready(function () {
    var Util = (function () {
        var prefix = 'fxyb_';
// 封装localStorage存储，防止方法中命名冲突,
        var StorageGetter = function (key) {
            return localStorage.getItem(prefix + key);
        }
        var StorageSetter = function (key, val) {
            return localStorage.setItem(prefix + key, val);
        }
        return {
            StorageGetter: StorageGetter,
            StorageSetter: StorageSetter
        }
    })();

    $("#llist1").click(function () {
        $("#llist1").css("background", "pink");
        $("#llist2").css("background", "none");
        $("#llist3").css("background", "none");
        $("#llist4").css("background", "none");
        $("#llist5").css("background", "none");
    });
    $("#llist2").click(function () {
        $("#llist1").css("background", "none");
        $("#llist2").css("background", "pink");
        $("#llist3").css("background", "none");
        $("#llist4").css("background", "none");
        $("#llist5").css("background", "none");
    });
    $("#llist3").click(function () {
        $("#llist1").css("background", "none");
        $("#llist2").css("background", "none");
        $("#llist3").css("background", "pink");
        $("#llist4").css("background", "none");
        $("#llist5").css("background", "none");
    });
    $("#llist4").click(function () {
        $("#llist1").css("background", "none");
        $("#llist2").css("background", "none");
        $("#llist3").css("background", "none");
        $("#llist4").css("background", "pink");
        $("#llist5").css("background", "none");
    });
    $("#llist5").click(function () {
        $("#llist1").css("background", "none");
        $("#llist2").css("background", "none");
        $("#llist3").css("background", "none");
        $("#llist4").css("background", "none");
        $("#llist5").css("background", "pink");
    });

    $("#ll1").mouseover(function () {
        $(".info1").show();
        $(".info2").hide();
        $(".info3").hide();
        $(".info4").hide();
        /*$(this.li).css("color","white");*/
    });
    $("#ll2").mouseover(function () {
        $(".info2").show();
        $(".info1").hide();
        $(".info3").hide();
        $(".info4").hide();
    });
    $("#ll3").mouseover(function () {
        $(".info3").show();
        $(".info1").hide();
        $(".info2").hide();
        $(".info4").hide();
    });
    $("#ll4").mouseover(function () {
        $(".info4").show();
        $(".info1").hide();
        $(".info2").hide();
        $(".info3").hide();
    });

    $(".btn1").click(function () {
        $(".register").show();
        $(".login").hide();
        $('.btnReg').off('click').on('click', function () {
                var booluser = $('.register input')[0].value.length >= 8;
                var boolpwd = $('.register input')[1].value.length >= 6;
                var boolpwd1 = $('.register input')[1].value == $('.register input')[2].value;
                //var retel = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g;
                var retel = /^1[3|5|7|8][0-9]\d{4,8}$/g;
                var booltel = retel.test($('.register input')[3].value);
                var reemail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;
                var boolemail = reemail.test($('.register input')[4].value);
            //这里应该嵌套使if的,但是不是实际开发,这么写便于代码观看
            if ($('.register input')[0].value == $('.register input')[0].defaultValue &&
                $('.register input')[1].value == $('.register input')[1].defaultValue &&
                $('.register input')[2].value == $('.register input')[2].defaultValue &&
                $('.register input')[3].value == $('.register input')[3].defaultValue &&
                $('.register input')[4].value == $('.register input')[4].defaultValue) {
                    alert("请输入相应数据！");
                    return ;
                }
                if (!booluser) {
                    alert('user:不能少于8位');
                    return false;
                }
                if (!boolpwd) {
                    alert('pwd:不能少于6位');
                    return ;
                }
                if (!boolpwd1) {
                    alert('pwd1:两次输入密码不一致');
                    return ;
                }
                if (!booltel) {
                    alert('tel:请输入正确的电话号');
                    return ;
                }
                if (!boolemail) {
                    alert('email:请输入正确的邮箱格式');
                    return ;
                }

            if (booluser && boolpwd && boolpwd1 && booltel && boolemail) {
                $.ajax({
                    type: "get",
                    url: "js/data.json",
                    async: true,
                    data: {
                        user: $('.register input')[0].value,
                        psd: $('.register input')[1].value,
                        phone: $('.register input')[3].value,
                        email: $('.register input')[4].value
                    },
                    /*       success : function(data){
                     console.log(data);
                     }*/
                    success: function (data) {

                        if(checkAccount(data)){
                            alert("已存在，请重新输入");
                            return false;
                        }else{
                            alert("注册成功");
                            //console.log(data);
                            $(".register").hide();
                            Util.StorageSetter('loginName', $('.register input')[0].value);
                            Util.StorageSetter('loginPsd', $('.register input')[1].value);
                            Util.StorageSetter('loginPhone', $('.register input')[3].value);
                            Util.StorageSetter('loginEmail', $('.register input')[4].value);

                         //   storageAccount(data);
                           // console.log(data);

                 /*           var account1 = $('.register input')[0].value;
                            var psd1 = $('.register input')[1].value;
                            var phone1 = $('.register input')[3].value;
                            var email1 = $('.register input')[4].value;
                            var str = '{'+ 'account' + ':' + account1 + ',psd:'+ psd1 + ',phone:' + phone1 + ',email:' + email1 + '}';*/

                             /*   var fso, tf;
                                try{
                                    fso = new ActiveXObject("Scripting.FileSystemObject");
                                    tf = fso.CreateTextFile("D:\\xampp\\tomcat\\webapps\\webs\\fangxyb\\js\\data.json", true);
                                tf.WriteLine(str);
                            }catch(err){


                            }finally{
                               // tf.close();
                            }*/

                        }
                            $('.register input')[0].value = $('.register input')[0].defaultValue;
                            $('.register input')[1].value = $('.register input')[1].defaultValue;
                            $('.register input')[2].value = $('.register input')[2].defaultValue;
                            $('.register input')[3].value = $('.register input')[3].defaultValue;
                            $('.register input')[4].value = $('.register input')[4].defaultValue;

                        //   }
                        //  });
                    }
                })
            }
        })
        $(".btnCan").click(function () {
            $(".register").hide();
        })
      /*  $(".btn2").click(function () {
            $(".login").show();
            $(".register").hide();
            //var loginName = $('.login input')[0].value;
            //var loginPsd = $('.login input')[1].value;

            var logName = Util.StorageGetter('loginName');
            var logPsd = Util.StorageGetter('loginPsd');
            if (!logName || !logPsd) {
                $('.login input')[0].value = $('.login input')[0].defaultValue;
                $('.login input')[1].value = $('.login input')[1].defaultValue;
            }
            $('.login input')[0].value = logName;
            $('.login input')[1].value = logPsd;
            //RootContainer.css('background-color',bkColor);

            $('.btnLog').on('click', function () {
                var booluser = $('.login input')[0].value.length >= 8;
                var boolpwd = $('.login input')[1].value.length >= 6;
                //var boolpwd1 = $('.register input')[1].value == $('.register input')[2].value;
                //var retel = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g;

                if (!booluser) {
                    alert('user:不能少于8位');
                    return false;
                }
                if (!boolpwd) {
                    alert('pwd:不能少于6位');
                    return false;
                }

                if ($('.login input')[0].value == $('.login input')[0].defaultValue &&
                    $('.login input')[1].value == $('.login input')[1].defaultValue) {
                    alert("请输入用户数据！")
                    return false;
                }
                if (booluser && boolpwd ) {
                    $.ajax({
                        type: "get",
                        url: "js/data.json",
                        async: true,
                        data: {
                            user: $('.register input')[0].value,
                            psd: $('.register input')[1].value,
                        },
                        success: function (data) {
                            //console.log(data);
                            if(!checkLoginAccount(data)){
                                alert("账号不存在，请先注册！");
                                $(".register").show();
                                $(".login").hide();
                            }else if(checkAP(data)){
                                alert("登录成功！")
                                $(".login").hide();
                              /!*  $('.login input')[0].value = $('.login input')[0].defaultValue;
                                $('.login input')[1].value = $('.login input')[1].defaultValue;*!/
                            /!*    $('.login input')[0].value = "请输入账号";
                                $('.login input')[1].value = "请输入密码";*!/
                            }

                        }
                    })

                }
            })
            $(".btnCan").click(function () {
                $(".login").hide();
            })
        })*/

    })
    $(".btn2").click(function () {
        $(".login").show();
        $(".register").hide();
        //var loginName = $('.login input')[0].value;
        //var loginPsd = $('.login input')[1].value;

        var logName = Util.StorageGetter('loginName');
        var logPsd = Util.StorageGetter('loginPsd');
        if (!logName || !logPsd) {
            $('.login input')[0].value = $('.login input')[0].defaultValue;
            $('.login input')[1].value = $('.login input')[1].defaultValue;
        }
        $('.login input')[0].value = logName;
        $('.login input')[1].value = logPsd;
        //RootContainer.css('background-color',bkColor);


        $('.btnLog').off('click').on('click', function (e) {
            var booluser = $('.login input')[0].value.length >= 8;
            var boolpwd = $('.login input')[1].value.length >= 6;
            //var boolpwd1 = $('.register input')[1].value == $('.register input')[2].value;
            //var retel = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g;

            if (!booluser) {
                alert('user:不能少于8位');
                return false;
            }
            if (!boolpwd) {
                alert('pwd:不能少于6位');
                return false;
            }

            if ($('.login input')[0].value == $('.login input')[0].defaultValue &&
                $('.login input')[1].value == $('.login input')[1].defaultValue) {
                alert("请输入用户数据！")
                return false;
            }
            if (booluser && boolpwd ) {
                $.ajax({
                    type: "get",
                    url: "js/data.json",
                    async: true,
                    data: {
                        user: $('.register input')[0].value,
                        psd: $('.register input')[1].value,
                    },
                    success: function (data) {
                        //console.log(data);
                        if(!checkLoginAccount(data)){
                            alert("账号不存在，请先注册！");
                            $(".register").show();
                            $(".login").hide();
                            return ;
                        }else if(checkAP(data)){
                            alert("登录成功！")
                            $(".login").hide();
                            return false;
                            /*  $('.login input')[0].value = $('.login input')[0].defaultValue;
                             $('.login input')[1].value = $('.login input')[1].defaultValue;*/
                            /*    $('.login input')[0].value = "请输入账号";
                             $('.login input')[1].value = "请输入密码";*/
                        }else{
                            alert("密码错误，请重新输入！")
                            $('.login input')[1].value = "请重新输入";
                            return false;
                        }

                    }
                })

            }
/*
            e = window.event || e;
            if (e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancelBubble = true;
            }
*/

        })

        $(".btnCan").click(function () {
            $(".login").hide();
        })
    })
})
      function checkAccount(data){
          var objJson = eval(data);
          //var objJson = JSON.parse(data);
          for(var i = 0;i < objJson.length;i++){
              if($('.register input')[0].value == objJson[i].account ||$('.register input')[3].value ==objJson[i].phone ||$('.register input')[4].value ==objJson[i].email){

                  return true;
              }
          }
      }

    function checkLoginAccount(data){
        var objJson = eval(data);
        //var objJson = JSON.parse(data);
        for(var i = 0;i < objJson.length;i++){
            if($('.login input')[0].value == objJson[i].account){

                return true;
            }
        }
    }

    function checkAP(data){
        var objJson = eval(data);
        //var objJson = JSON.parse(data);
        for(var i = 0;i < objJson.length;i++){
            if($('.login input')[0].value == objJson[i].account && $('.login input')[1].value ==objJson[i].psd){
                //alert("已存在，请重新输入")
                return true;
            }
        }
    }

    function storageAccount(data){
        var objJson = eval(data);
        var account1 = $('.register input')[0].value;
        var psd1 = $('.register input')[1].value;
        var phone1 = $('.register input')[3].value;
        var email1 = $('.register input')[4].value;
        //var str = '{'+ 'account' + ':' + account1 + ',psd:'+ psd1 + ',phone:' + phone1 + ',email:' + email1 + '}';
        //var str1 = JSON.parse(str);
        var obj ={
            'account':account1,
            'psd':psd1,
            'phone':phone1,
            'email':email1
        }
        objJson.push(obj)
    }

/*function checkAPP(data){
    var lgaccount = $('.login input')[0].value;
    var lgpsd = $('.login input')[1].value;
    if()
}*/



    Vue.component("custom1", {
        /*    data(){
         return {
         message:data
         }
         },*/
        props: {
            type: {
                type: String,
                default: "info"
            },
            title: {
                type: String,
                default: "勇敢一点"
            },
            num: {
                type: Number,
                default: 1000
            },
            school: {
                type: String,
                default: "宁波大学"
            },
            time: {
                type: String,
                default: "2016-6-16"
            },
            money: {
                type: Number,
                default: 1000
            },
            per: {
                type: Number,
                default: 25
            },
            des: {
                type: String,
                default: "每2-3元，就可以为一个贫穷的还在提供一份营养早餐"
            }
        },
        template: `
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

    var vm = new Vue({
        el: "#demo",
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


    /*轮播图*/
    var imgs = document.getElementById('imgs').getElementsByTagName('li');
    var nums = document.getElementById("num").getElementsByTagName("li");
    var luanpo = document.getElementById("slideshow");
    var oimg = document.getElementById('imgs');
    var iNow = 0;
    var dt = null;
    oimg.style.width = imgs.length * imgs[0].offsetWidth + "px";

    function tab() {
        for (var i = 0; i < nums.length; i++) {
            nums[i].index = i;
            nums[i].onclick = function () {
                clearInterval(dt);
                iNow = this.index;
                for (var i = 0; i < nums.length; i++) {
                    nums[i].className = "b";
                }
                this.className = "a";
                oimg.style.left = -(imgs[0].offsetWidth * iNow) + "px";    //这边可以加上我前面所写的那个缓动框架
            }
            nums[i].onmouseout = function () {
                start();
            }
        }
    }

    function start() {
        clearInterval(dt);
        dt = setInterval(function () {
            if (iNow > nums.length - 2) {
                iNow = 0;
            } else {
                iNow++;
            }
            for (var k = 0; k < nums.length; k++) {
                if (iNow == nums[k].index) {
                    nums[k].className = 'a';
                } else {
                    nums[k].className = 'b';
                }
            }
            oimg.style.left = -(imgs[0].offsetWidth * iNow) + "px";
        }, 1000);
        tab();
    }

    start();
//})
