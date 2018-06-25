<?php 
?>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta charset="utf-8"/>
    <title>刮刮乐</title>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1.0" name="viewport"/>
    <!-- <meta name="keywords" content=""> -->
    <meta content="yes" name="apple-mobile-web-app-capable"/>
    <meta content="black" name="apple-mobile-web-app-status-bar-style"/>
    <meta content="telephone=no" name="format-detection"/>
    <meta property="wb:webmaster" content="ff73a1b1dc1d3c2d"/>
    <meta property="qc:admins" content="21162256266751016416375"/>
    <meta name="baidu-site-verification" content="00Ba64V77BzhXpxs"/>
    <meta name="360-site-verification" content="b57c9f7cf9a06ad3cab7306dd4ae4ea4"/>
    <meta name="ujianVerification" content="6b6ff258fe95bdc9623f0d2131e989bc"/>
    <!-- <link rel="stylesheet" type="text/css" href="<?php echo $cdn_path; ?>css/css.css?type=19l"/> -->
    <link rel="stylesheet" type="text/css" href="css/css.css?type=19l"/>
    <script language="javascript" src="<?=$cdn_path?>js/jquery-1.8.3.min.js?_t=<?=date("G");?>"></script>
    <script type="html/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script>
        new function () {
            var _self = this;
            _self.width = 640;//设置默认最大宽度
            _self.fontSize = 100;//默认字体大小
            _self.widthProportion = function () {
                var p = document.getElementsByTagName("html")[0].offsetWidth / _self.width;
                return p > 1 ? 1 : p < 0.5 ? 0.5 : p;
            };
            _self.changePage = function () {
                document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + _self.widthProportion() * _self.fontSize + "px !important");
            };
            _self.changePage();
            window.addEventListener("resize", function () { _self.changePage(); }, false);
        };
    </script>
    <style type="text/css">
    
</style>
</head>
<body>
    <img src="images/img_01.jpg" alt="">
    <!-- 滚动 -->
    <div class="relative">
        <img src="images/img_02.jpg" alt="">
        <div class="show_info">
             <ul >
                 <span>李小姐：135xxxx4866获得吐司机一个</span> 
                 <span>徐先生：186xxxx3245获得吐司机一个</span>
                 <span>唐女士：156xxxx2251获得吐司机一个</span> 
                 <span>吴先生：177xxxx4574获得吐司机一个</span>
                 <span>陈先生：130xxxx2606获得吐司机一个</span> 
                 <span>赖小姐：188xxxx3226获得吐司机一个</span>
                 <span>莫女士：156xxxx4049获得吐司机一个</span> 
                 <span>郑先生：156xxxx3932获得吐司机一个</span>
                 <span>何小姐：189xxxx9456获得吐司机一个</span> 
                 <span>胡女士：152xxxx0384获得吐司机一个</span>
             </ul>
        </div>
    </div>
    <!-- 刮奖区 -->
    <div id="prise">
        <div id="main">
          <!-- 定位的盒子-->
            <div class="canvasBox">
              <!-- 放内容的盒子-->
               <div class="prize">恭喜获得10颗宅豆！</div>
              <!-- 蒙版画布-->
              <canvas id="canvas"></canvas>
              <div class="prise_state" style="display: none">
                    <p>今日免费刮奖:3次</p>
                    <div class="gua_btn">开始刮奖</div>
                    <div class="ungua_btn">开始刮奖</div>
              </div>
            </div>
         </div>
    </div>
    <div class="relative">
        <img src="images/img_04.jpg" alt="">
        <div class="rule_btn"></div>
    </div>
    
     <section class="tan tan_mark" style="display: none">
        <div class="tan_box">
          <div class="tan_close"><img src="images/close.png" alt=""></div>
          <p class="tan_note">亲，该商品只能兑换x次呦~</p>
          <div class="tan_btn">确&nbsp;定</div>
        </div>
    </section>
    <!-- 规则 -->
    <section class="tan tan_rule" style="display: none">
        <div class="rule">
          <div class="rule_close tan_close"><img src="images/close.png" alt=""></div>
          <p class="rule_title">活动规则</p>
          <ul>
            <li>•参与次数：每位用户每日有3次免费刮奖机会，3次宅豆刮奖机会，用户需消耗10颗宅豆获取宅豆刮奖机会一次。</li>

            <li>•奖品发放：刮奖区显示“恭喜获得吐司机”字样即为中奖。中奖用户正确填写相关资料即可领取奖品。活动结束后45个工作日内包邮发放奖品。</li>

            <li>•领奖需知：1个ID，1个微信号，1个手机号仅限领取1份礼品。若活动中发现用户有刷奖或其他作弊行为，则取消该用户的领奖资格。中奖者若未及时填写相关信息或者因信息填写错误导致无法寄送奖品且未在20个工作日联系客服完善信息的，视为自动放弃领奖资格。</li>

            <li>•主办方：本次活动由1100w业主共同信赖的定制家具领导品牌尚品宅配主办。</li>
          </ul>
        </div>
    </section>
    <!-- 中奖提示 -->
    <section class="tan tan_zhong" style="display: none">
        <div class="zhong">
          <div class="tan_close"><img src="images/close.png" alt=""></div>
          <p class="rule_title" >已中奖</p>
          <ul>
            <li>
                <div>刮奖游戏-抽中吐司机</div>
                <p>2017-9-25  17:17</p>
            </li>
          </ul>
          <div class="zhong_btn">填写中奖资料</div>
        </div>
    </section>
    <!-- 中奖信息填写 -->
    <section class="tan tan_form" style="display: none">
        <div class="form">
          <div class="tan_close"><img src="images/close.png" alt=""></div>
          <p class="rule_title" style="font-weight: 900;font-family: '黑体'">恭喜你中奖啦！</p>
          <p class="form_note">按要求填写收件信息<br>就能收到奖品啦，奖品包邮哦！</p>
          <div class="input_group">
                <label for="name" class="label">姓名</label>
                <input type="text" id="name">
          </div>
           <div class="input_group">
                <label for="tel">联系<br>方式</label>
                <input type="tel" id="tel" maxlength="11">
          </div>
          <div class="input_group">
                <label for="address">收件<br>地址</label>
                <textarea name="address" id="address" cols="30" rows="3"></textarea>
          </div>
          <div class="form_btn">提&nbsp;交</div>
        </div>
    </section>
</body>
<script>
$(function(){
    //滚动播报
     var GD = (function(){
       var $word_box = $('.show_info');
       var state = {
          current : 0,
          target : 0,
          time : 0,
          timer : null,
          init : function(data){
             $('.show_info ul').html(data)
             //目标值
             var span_size = $('.show_info ul span').size(); 
             var span_width = $('.show_info ul span').width(); 
             $('.show_info ul').css('width',span_width*span_size);
             this.target = $('.show_info ul').width();
             this.current = 50-Math.random()*this.target;
             //滚动事件
             this.gundong(data);
          },
          gundong : function(){
             function move(){
                this.current = (this.current-=0.6) < -this.target+280 ? $word_box.width()-100 : this.current ;
                $('.show_info ul').css('-webkit-transform','translate3d('+this.current+'px,0,0)')
                window.requestAnimationFrame(move.bind(this));
             }
             window.requestAnimationFrame(move.bind(this));
          }
       }
       return {
          start : state.init.bind(state)
       }
    })();
    GD.start();
    var Canvas = (function(){
         var canvas = document.getElementById("canvas");
         var canvasBox = document.querySelector('.canvasBox');
         var prize = document.querySelector('.prize');
         var ctx = canvas.getContext('2d');
         /* 画布偏移量，下面用到的时候再介绍*/
         var states = {
             
            init:function(){
                 var arr = this.getOffset(canvas);
                 var oLeft = arr[0];
                 var oTop = arr[1];
                 var pc = this.browserRedirect();
                 var isUp = true;
                 var isMark = false;
                 var markX = [];
                 var markY = [];
                 var markPcX = [];
                 var markPcY = [];
                /* 初始化画布*/
                 ctx.beginPath();
                 ctx.fillStyle = '#ccc';
                 ctx.fillRect(0,0,canvas.width,canvas.height);
                 ctx.closePath();
                  /* 画笔粗细*/
                  ctx.lineWidth = 30;
                  /* 设置组合效果*/
                  ctx.globalCompositeOperation = 'destination-out';
                  /* 移动画笔原点*/
                 /* 增加触摸监听*/
                 if(pc == 1){
                      var t = this;
                      var bbox = canvas.getBoundingClientRect();
                      canvas.addEventListener("mouseover",function(){
                          /* 初始化画笔*/
                          ctx.beginPath();
                          /* 画笔粗细*/
                          ctx.lineWidth = 30;
                          /* 设置组合效果*/
                        ctx.globalCompositeOperation = 'destination-out';
                        var ev = ev || window.event;
                        var markPc = {
                             x :  (ev.clientX - bbox.left)* (canvas.width/bbox.width),
                             y : (ev.clientY - bbox.top)* (canvas.height/bbox.height),     
                        }
                        // console.log('oLeft'+oLeft+',oTop'+oTop)
                        ctx.moveTo(markPc.x,markPc.y);
                    },false);
                     canvas.addEventListener("mousemove",function(){
                        /* 根据手指移动画线，使之变透明*/
                          var ev = ev || window.event;
                          
                          // console.log('left'+left);
                          var markPc = {
                             x :  (ev.clientX - bbox.left)* (canvas.width/bbox.width),
                             y : (ev.clientY - bbox.top)* (canvas.height/bbox.height),     
                        }
                         console.log('mousemove'+markPc.x+','+markPc.y);
                          // console.log('2'+ev.pageX-oLeft,ev.pageY-oTop);
                          ctx.lineTo(markPc.x,markPc.y);
                          ctx.stroke();
                          markPcX.push(markPc.x);
                          markPcY.push(markPc.y);
                          markPcX.sort(function(a,b){return a-b});
                          markPcY.sort(function(a,b){return a-b})
                          if(markPcX[0]<=39&&markPcX[markPcX.length-1] >=200&&markPcY[0]<=73&&markPcY[markPcY.length-1]>=75){
                                t.guaEnd();
                            }
                        // ctx.lineTo(event.touches[0].pageX-oLeft,event.touches[0].pageY-oTop);
                        /* 填充*/
                       
                      })
                 } else{
                       var t = this;
                       canvas.addEventListener("touchstart",function(){
                        /* 初始化画笔*/
                        ctx.beginPath();
                        /* 画笔粗细*/
                        ctx.lineWidth = 30;
                        /* 设置组合效果*/
                        ctx.globalCompositeOperation = 'destination-out';
                        /* 移动画笔原点*/
                        ctx.moveTo(event.touches[0].pageX-oLeft,event.touches[0].pageY-oTop);
                        // console.log('touchstart '+event.touches[0].pageX+','+event.touches[0].pageY);
                      },false)
                       canvas.addEventListener("touchmove",function(){
                          /* 根据手指移动画线，使之变透明*/
                              ctx.lineTo(event.touches[0].pageX-oLeft,event.touches[0].pageY-oTop);
                              // console.log('touchmove '+event.touches[0].pageX+','+event.touches[0].pageY);
                          // ctx.lineTo(event.touches[0].pageX-oLeft,event.touches[0].pageY-oTop);
                          /* 填充*/
                          var xmark = event.touches[0].pageX;
                          var ymark = event.touches[0].pageY;
                          ctx.stroke();
                          markX.push(xmark);
                          markY.push(ymark);
                        })
                       canvas.addEventListener("touchend",function(){
                        markX.sort(function(a,b){return a-b});
                        markY.sort(function(a,b){return a-b})
                        /*将手指的坐标排序 */
                        if(markX[0]<=110&&markX[markX.length-1] >=270&&markY[0]<=430&&markY[markY.length-1]>=420){
                            t.guaEnd();
                        }
                       })
                       
                 }
            },
            /* 之所以会用到下面的那个函数getOffset（obj）
          * 是因为event.touches[0].pageX、pageY获取的是相对于可视窗口的距离
          * 而lineTo画笔的定位是根据画布位置定位的
          * 所以就要先获取到画布(canvas)相对于可视窗口的距离，然后计算得出触摸点相对于画布的距离 
          * */
          /* 获取该元素到可视窗口的距离*/
            getOffset:function(obj){
                var valLeft = 0,valTop = 0;
                function get(obj){
                  valLeft += obj.offsetLeft;
                  valTop += obj.offsetTop;
                  /* 不到最外层就一直调用，直到offsetParent为body*/
                  if (obj.offsetParent.tagName!='BODY') {
                   get(obj.offsetParent);
                 }
                 return [valLeft,valTop];
               }
               return get(obj);
            },
             browserRedirect:function() {
                var sUserAgent = navigator.userAgent.toLowerCase();
                var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
                var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
                var bIsMidp = sUserAgent.match(/midp/i) == "midp";
                var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
                var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
                var bIsAndroid = sUserAgent.match(/android/i) == "android";
                var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
                var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
                if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
                    return 1;
                } else{
                  return 0;
                }
            },
            guaEnd:function(){
                //  ctx.beginPath();
                //  ctx.fillStyle = '#ccc';
                //  ctx.globalCompositeOperation = 'source-over';
                //  console.log(canvas.height);
                //  ctx.fillRect(0,0,canvas.width,canvas.height);
                //  ctx.closePath();
                // $('.prise_state').show();

            },
        };
        return{
            star:states.init.bind(states),
        }
    })();
    Canvas.star();
    $('.gua_btn').click(function(){
        $('.prise_state').hide();
        // $.ajax({
        //     url:'',
        //     type:'post',
        //     dataType:'json',
        //     success:function(){

        //     },
        // })
    })
    $('.rule_btn').click(function(){
        $('.tan_rule').fadeIn();
    })
    $('.tan_close').click(function(){
        $('.tan').fadeOut();
    })
    $('.tan_mark ').on('click','.back_from',function(){
        $(this).removeClass('back_from');
        $('.tan_mark').fadeOut();
        $('.tan_form').fadeIn();
    })
    $('.form_btn').on('click',function(){
        var username = $('#name').val();
        var tel = $('#tel').val();
        var address = $('#address').val();
        if (username == '' || username == '请输入您的姓名'||!isChinese1(username) || username.length > 10||tel == '' || !isTel(tel) || !isNum(tel)||address == '') {
            $('.tan_note').html('好像有些地方填写错误<br>再检查看看吧~');
            $('.tan_form').fadeOut();
            $('.tan_mark .tan_close').hide();
            $('.tan_mark .tan_btn').addClass('back_from');
            $('.tan_mark').fadeIn();
            return false;
          }
          // $.ajax({
        //     url:'',
        //     type:'post',
        //     dataType:'json',
        //     success:function(){

        //     },
        // })
    })
    function isNum(str) {
      var reg = /^[0-9_-]+$/;
      if (!reg.test(str)) {
        return false;
      }
      return true;
    }

    function isTel(str) {
      var reg = /^1[34578]\d{9}$/;
      if (!reg.test(str) || str.length != 11) {
        return false;
      }
      return true;
    }
    function isChinese1(temp) {
      var re = /[^\u4e00-\u9fa5]/;
      if (re.test(temp)) return false;
      return true;
    }

    
})
</script>
</html>