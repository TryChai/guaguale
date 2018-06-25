// JavaScript Document by peter
console.time('javascript2');
var win_h, win_w,sy_img_h;
$(document).ready(function (e) {
    rsize();
    function rsize() {
        win_w = $(window).width();
        win_h = $(window).height();
        sy_img_h = parseInt(win_w * 0.52);//首页图片高度
        $('.index_list li').height(sy_img_h);
        $('.my_zan,.my_sc,.my_pl,.all_pl').css('min-height', win_h);//三级页面最小高度
    }

    $(window).resize(function () {
        rsize();
    });
    $('.show_img ul').css('left', -win_w * 5);
    $('.big_img_show').height(win_h);
    var fl_main_w = win_w - win_w * 0.1;
    $('.fl_main').width(fl_main_w);
    sy_img_h = parseInt(win_w * 0.52);//首页图片高度
    $('.index_list li').height(sy_img_h);
//首页列表按钮
    $('.btn_div:nth-child(3n-1),.btn_div:nth-child(3n-2)').bind("touchstart", function (event) {
        if (!$(this).hasClass('click_v')) {//表明是否被点击了
            var shuzhi = parseInt($(this).find('span').text());//首页列表数值超出显示,超出99以后，变为99+
            $(this).addClass('click_v');
            $(this).find('.mainicon1').addClass('zan');
            $(this).find('.mainicon2').addClass('zhuang');
            shuzhi = shuzhi + 1;
            $(this).find('span').text(shuzhi);
            if ($(this).index() == 1) {//弹出已取消框 1秒后消失
                $('.m_sc_gou').height($('.m_sc_x').width()).css('top', (win_h - $('.m_sc_x').width()) / 2);
                $('.m_sc_gou').css('display', 'block');
                setTimeout(function () {
                    $('.m_sc_gou').animate({opacity: '0'}, 500, function () {
                        $(this).css({'display': 'none', 'opacity': '1'})
                    });
                }, 1000);
            }
            if (shuzhi > 99) {
                $(this).find('span').html('99+');
            }
        } else {
            var shuzhi = parseInt($(this).find('span').text());//首页列表数值超出显示,超出99以后，变为99+
            $(this).removeClass('click_v');
            $(this).find('.mainicon1').removeClass('zan');
            $(this).find('.mainicon2').removeClass('zhuang');
            shuzhi = shuzhi - 1;
            $(this).find('span').text(shuzhi);
            if ($(this).index() == 1) {//弹出已取消框 1秒后消失
                $('.m_sc_x').height($('.m_sc_gou').width()).css('top', (win_h - $('.m_sc_gou').width()) / 2);
                $('.m_sc_x').css('display', 'block');
                setTimeout(function () {
                    $('.m_sc_x').animate({opacity: '0'}, 500, function () {
                        $(this).css({'display': 'none', 'opacity': '1'})
                    });
                }, 1000);
            }
        }
    });
    $('.nav_bome').css('background-position', '50% 0');//设置底部导航条的函数
});
window.onload = function () {
    /*看图效果代码*/
    
    var show_index = 0, pos_l;
    var v_tes = 0;
    //var addLeft=0,addRight=0;


    function chang_img(fx) {                //左右运动函数
        if (!$('.show_img ul').is(':animated')) {
            if (fx == 1) {//左滑动
                $('.show_img ul').animate({left: start_L * 1 - win_w + 'px'}, 200, function () {
                    $('.show_img ul').css('left', start_L + 'px');
                    $('.show_img ul li:eq(0)').remove();
                    $('.show_img ul').append('<li>后面加入的</li>');
                    $('.show_img li').height($('.show_img ul li img').height()).width(win_w);
                });
            } else {//右滑动
                var null_number = $('.null_img').length;
                if (null_number >= 5) {
                    $('.show_img ul').animate({left: start_L * 1 + 'px'}, 300);
                } else {
                    $('.show_img ul').animate({left: start_L * 1 + win_w + 'px'}, 200, function () {
                        var null_number = $('.null_img').length;
                        $('.show_img ul').css('left', start_L + 'px');
                        $('.show_img ul li:eq(10)').remove();
                        $('.show_img ul').prepend('<li class = "null_img"><img src="images/null_img.png"></li>');
                        $('.show_img li').height($('.show_img').height()).width(win_w);
                    });

                }

            }
        }
        var ul_left = $('.show_img ul').css('left');
    }

    var oShowIimg = document.getElementById('show_img');
    var start_x1, end_x1, long_x1//第一个点参数
    var start_L;                //记录ul的left值
    var test = true //优化判断用到的
    oShowIimg.addEventListener('touchstart', function (event) { //触摸
        start_x1 = event.targetTouches[0].clientX;
        start_y1 = event.targetTouches[0].clientY;
        start_L = $('.show_img ul').position().left;
    });
    oShowIimg.addEventListener('touchmove', function (event) {  //滑动
        end_x1 = event.targetTouches[0].clientX;
        long_x1 = start_x1 - end_x1;
        event.preventDefault();             //锁定系统滑动
        var juli = start_L - long_x1;
        $('.show_img ul').css('left', juli);    //实时拖揪图片
    }, false);
    oShowIimg.addEventListener('touchend', function (event) {
        if (long_x1 >= 30) {
            chang_img(1);   //滑左
        } else if (long_x1 <= -30) {
            chang_img(0);   //滑右
        } else {
            $('.show_img ul').animate({left: start_L + 'px'}, 50);
        }
        var pos_max_r = -win_w * ($('.show_img ul li').length - 1); //滑动最后或第一张图的回弹效果
        if ($('.show_img ul').position().left > 0) {
            $('.show_img ul').animate({left: 0}, 300);
        }
        if ($('.show_img ul').position().left < pos_max_r) {
            $('.show_img ul').animate({left: pos_max_r}, 300);
        }
        long_x1 = 0;
        test = true;
    });
}
function my_zan() {
    $('.my_zan').css('display', 'block').siblings().css('display', 'none');
    $('.third').css('display', 'block').animate({top: '0'}, 500);
    var myXanLi = $('.my_zan li').width()
    $('.my_zan li').height(myXanLi * 145 / 281);
    myZan = true;
    mySc = false;
    myPl = false;
    myPlall = false;
    indexso = false;
};
function my_sc() {
    $('.my_sc').css('display', 'block').siblings().css('display', 'none');
    $('.third').css('display', 'block').animate({top: '0'}, 500);
    var myXanLi = $('.my_sc li').width()
    //$('.my_sc li').height(myXanLi*145/281);/*gai*/
    myZan = false;
    mySc = true;
    myPl = false;
    myPlall = false;
    indexso = false;
};
function my_pl() {
    $('.my_pl').css('display', 'block').siblings().css('display', 'none');
    $('.third').css('display', 'block').animate({top: '0'}, 500);
    var myXanLi = $('.my_pl_img').width()
    $('.my_pl_img').height(myXanLi * 281 / 145);
    myZan = false;
    mySc = false;
    myPl = true;
    myPlall = false;
    indexso = false;
};
var nav_in
function nav_bottom(t) {
    if (!$('.big_box article').is(':animated')) {
        if($(t).html == '美图'){
            myZan = false;
            mySc = false;
            myPl = false;
            myPlall = false;
            indexso = true;
        }else{
            myZan = false;
            mySc = false;
            myPl = false;
            myPlall = false;
            indexso = false;
        }
        var nav_in = $(t).index();
        var nav_index = ($(t).index()) * (-2);
        var bg_pos = '50%' + nav_index * 50 + 'px';
        var nav_index2 = ($(t).index() + 1) * (-2);
        var bg_pos2 = '50%' + nav_index2 * 50 + 'px';
        $(t).css('background-position', bg_pos).siblings().attr('style', '');
        //下面是跳转效果
        //$('.wrap_m').css('display','none');
        $('.big_box article').eq(nav_in).css({'z-index': '90','display': 'block','left':'0px'})
        if (nav_in == 3) {
            $('.bm_bottom').css('min-height',win_h -  $('.bm_header').height()-55 + 'px');
        }

        setTimeout(function () {
            $('.big_box article').eq(nav_in).css('z-index', '40').siblings().css({
                'left': '100%',
                'display': 'none',
                'z-index': '40'
            });
        }, 0);
    }
}
function lookImgSize() {        //初始化图片尺寸
    win_w = $(window).width();
    win_h = $(window).height();
    $('.show_img ul li').width(win_w);
    $('.show_img ul').width($('.show_img ul li').length * win_w);
    $('.show_img,.show_img li').height($('.show_img ul li img').height());
};
lookImgSize();

var timer1;
function li(t) {
    $('.nav_bome').trigger('click');
}
function all_pl() {     //进入是所有评论
    //$('.big_img_show').css('display','none');
    $('.third').css({'top': '100%', 'z-index': '130', 'display': 'block'});
    $('.third').animate({top: '0'}, 500);
    $('.all_pl').css('display', 'block');
};
function fanhui() {
    $('.third').css('z-index', '120').animate({top: win_h}, 500, function () {
        $('.third > div').css('display', 'none');
    });
}
function fanhui2() {
    if ($('.my_sc').css('display') != 'block') $('.wrap_m').css('display', 'block');
    $('.big_img_show').css('display', 'none');
}

function goLook() {
    $('.third').css('z-index', '120').animate({top: win_h}, 500, function () {
        $('.third > div').css('display', 'none');
        $('.nav_bome').trigger('click');
    });
}
function dingzhi_key() {
    $('.wrap_m').css('display', 'block');
    $('.big_img_show').css('display', 'none');
    $('.nav_dingzhi').trigger('click');
}
$(document).ready(function (e) {
    $('.b_c').click(function () {
        $('.pinglun,.pinglun *').css('display', 'block');
        $('.pinglun textarea').val('');
    });
    $('.pl_onkey').click(function () {
        $('.pinglun').css('background', 'none');
        $(this).css('display', 'none');
        $('.pinglun textarea').hide(100, function () {
            $('.pinglun').css({'background': 'rgba(0,0,0,0.7)', 'display': 'none'});
        });
        return false;//阻止冒泡行为
    });
    $('.pinglun textarea').click(function () {
        return false;//阻止冒泡行为
    });
    $('.pinglun').click(function () {
        $(this).css('display', 'none');
    });
    $('.index_list img').each(function (index, element) {
        index_img_top = win_w * 0.52 - $(this).height();
        $(this).css('top', index_img_top / 2);
    });
    $('.show_img').click(function () {
        if ($('.big_img_bottom').css('bottom') != '0px') {
            $('.big_img_bottom').animate({bottom: '0'}, 300);
        } else {
            $('.big_img_bottom').animate({bottom: '-40px'}, 300);
        }
    });
});
console.timeEnd('javascript2');
$(document).ready(function(){
   $('.nav_bottom div:eq(3)').trigger('click');
});

$('.href_dingzhi').click(function(){
    $('.nav_bottom div:eq(3)').trigger('click');
})