// JavaScript Document by peter
$(function(){
var win_h,win_w;
rsize();
var sy_img_h;

function rsize(){
	win_w = $(window).width();
	win_h = $(window).height();
	sy_img_h = parseInt(win_w*0.52);//首页图片高度
	$('.index_list li').height(sy_img_h);
	$('.my_zan,.my_sc,.my_pl').css('min-height',win_h);//三级页面最小高度		
}
$(window).resize(function(){
	rsize();
});


//首页列表按钮

$('.btn_div').bind("touchstart",function(event){
	if(!$(this).hasClass('click_v')){//表明是否被点击了
		var shuzhi = parseInt($(this).find('span').text());//首页列表数值超出显示,超出99以后，变为99+
		$(this).addClass('click_v');
		$(this).find('.mainicon1').addClass('zan');
		$(this).find('.mainicon2').addClass('zhuang');
		shuzhi = shuzhi+1;
		$(this).find('span').text(shuzhi);
		if($(this).index()==1){//弹出已取消框 1秒后消失
			$('.m_sc_gou').height($('.m_sc_x').width()).css('top',(win_h-$('.m_sc_x').width())/2);
			$('.m_sc_gou').css('display','block');
			setTimeout(function(){		
				$('.m_sc_gou').animate({opacity:'0'},500,function(){
					$(this).css({'display':'none','opacity':'1'})	
				});	
			},1000)	;	
		};
		if(shuzhi>99){
			$(this).find('span').html('99+');	
		}		
	}else{
		var shuzhi = parseInt($(this).find('span').text());//首页列表数值超出显示,超出99以后，变为99+
		$(this).removeClass('click_v');	
		$(this).find('.mainicon1').removeClass('zan');
		$(this).find('.mainicon2').removeClass('zhuang');
		shuzhi = shuzhi-1;
		$(this).find('span').text(shuzhi);	
		if($(this).index()==1){//弹出已取消框 1秒后消失
			$('.m_sc_x').height($('.m_sc_gou').width()).css('top',(win_h-$('.m_sc_gou').width())/2);
			$('.m_sc_x').css('display','block');
			setTimeout(function(){		
				$('.m_sc_x').animate({opacity:'0'},500,function(){
					$(this).css({'display':'none','opacity':'1'})	
				});	
			},1000)	;	
		};
	};
});


//底部导航条效果
var nav_in
$('.nav_bome').css('background-position','50% 0');
})
window.onload=function(){
	/*看图效果代码*/
	var show_index=0;
	$('.img_number span:eq(0)').text(show_index+1)	
		function chang_img(fx){				//左右运动函数
			if(!$('.show_img ul').is(':animated')){
				if(fx==1){
					show_index++;	
				}else{
					show_index--;
			};
			var img_size=$('.show_img ul li').length;
			if(show_index>=0 && show_index<img_size){
					pos_l=win_w*show_index;
					$('.show_img ul').animate({left:-pos_l},300);
				}else{
					if(show_index==-1){show_index=0};
					if(show_index==img_size){show_index=img_size-1};
			};
		};
	};	
	var oShowIimg=document.getElementById('show_img');
	var start_x1,end_x1,start_y1,end_y1,long_x1,long_y1;//第一个点参数
	var start_L;				//记录ul的left值
	var test=true,go_x=false;	//优化判断用到的	
	oShowIimg.addEventListener('touchstart',function(event){	//触摸
			start_x1 = event.targetTouches[0].clientX;
			start_y1 = event.targetTouches[0].clientY;
			start_L=$('.show_img ul').position().left;
	});
	oShowIimg.addEventListener('touchmove',function(event){	//滑动
			end_x1 = event.targetTouches[0].clientX;
			end_y1 = event.targetTouches[0].clientY;
			$('span:eq(0)').text(end_x1);
			$('span:eq(1)').text(end_y1);
			long_x1 = start_x1 - end_x1;
			long_y1 = start_y1 - end_y1;
			if(Math.abs(long_x1)>=10&&test==true){	//判断垂直和水平方向滑动谁先到达10px,如果水平方向先到达，触发以后代码并且阻止默认行为，否者只能在垂直上滑动页面
				test=false;
				go_x=true;
			};
			if(Math.abs(long_y1)>=10&&test==true){	//判断垂直和水平方向滑动谁先到达10px
				test=false;
			};
			if(go_x==true){							//水平滑动超过10px时
				event.preventDefault(); 			//锁定系统滑动
				var juli=start_L-long_x1;
				$('.show_img ul').css('left',juli);	//实时拖揪图片
			};
	},false)	
	oShowIimg.addEventListener('touchend',function(event){
		if(go_x==true){
			if(long_x1>=10){
				chang_img(1);	//滑左
				}else if(long_x1<=-10){
				chang_img(0);	//滑右
			};
			var pos_max_r=-win_w*($('.show_img ul li').length-1);	//滑动最后或第一张图的回弹效果
			if($('.show_img ul').position().left>0){
				$('.show_img ul').animate({left:0},300);
			};
			if($('.show_img ul').position().left<pos_max_r){
				$('.show_img ul').animate({left:pos_max_r},300);
			};	
			long_y1=0;long_x1=0;go_x=false;	
			$('.img_number span:eq(0)').text(show_index+1)
		};
	test=true;	
	});

	
}

function my_zan(){
	$('.my_zan').css('display','block').siblings().css('display','none');
	$('.third').css('display','block').animate({top:'0'},500);
	var myXanLi=$('.my_zan li').width()
	$('.my_zan li').height(myXanLi*145/281);
	
	myZan=true;
	mySc=false;
	myPl=false;
	myPlall=false;
};
function my_sc(){
	$('.my_sc').css('display','block').siblings().css('display','none');
	$('.third').css('display','block').animate({top:'0'},500);
	var myXanLi=$('.my_sc li').width()
	$('.my_sc li').height(myXanLi*145/281);
	myZan=false;
	mySc=true;
	myPl=false;
	myPlall=false;
	
};
function my_pl(){
	$('.my_pl').css('display','block').siblings().css('display','none');
	$('.third').css('display','block').animate({top:'0'},500);
	$('.my_pl_img')
	var myXanLi=$('.my_pl_img').width()
	$('.my_pl_img').height(myXanLi*145/281);
	myZan=false;
	mySc=false;
	myPl=true;
	myPlall=false;
};
function nav_bottom(t){
	if(!$('.big_box article').is(':animated')){
		var nav_in=$(t).index();
		var nav_index=($(t).index())*(-2);
		var bg_pos='50%'+nav_index*50+'px';
		var nav_index2=($(t).index()+1)*(-2);
		var bg_pos2='50%'+nav_index2*50+'px';
		$(t).css('background-position',bg_pos).siblings().attr('style','');
		//下面是跳转效果
		//$('.wrap_m').css('display','none');
		$('.big_box article').eq(nav_in).css({'z-index':'90','display':'block'}).animate({left:'0'},500);
		setTimeout(function(){
			$('.big_box article').eq(nav_in).css('z-index','40').siblings().css({'left':'100%','display':'none','z-index':'40'});	
		},500);
	}
};

function lookImgSize(){		//初始化图片尺寸
	win_w = $(window).width();
	win_h = $(window).height();
	$('.show_img ul li').width(win_w);
	$('.show_img ul').width($('.show_img ul li').length*win_w);
	$('.show_img').height($('.show_img ul').height());
	//alert($("#img").height());
	$('.img_number span:eq(1)').text($('.show_img ul li').length)
	/*滚动开始*/
	oGund=document.getElementById('gund');
	var oGund_h=oGund.offsetHeight;
	var pand=-1
	timer1=setInterval(function(){
		oGund.style.top=oGund.offsetTop+pand+'px';
		if(oGund.offsetTop<=-oGund_h+104){
			oGund.style.top=0;
		};
	},30);

};
function bigImg(){
	$('.big_img_show').css('display','block');	
	lookImgSize();
}




























