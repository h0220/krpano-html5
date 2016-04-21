$(document).ready(function() {
	window.imageArray=[];
	var images=document.querySelectorAll('img');
	window.smallGuessLyrics=GuessLyrics();
	for(var i = 0; i < images.length; i++){
		imageArray.push(images[i].src);
	};
	new preLoader(imageArray, {
		onProgress:function(a,b,c,d){
			var h=(((100/imageArray.length)*0.01*c)*100).toFixed(0);
			$('#loadPer').html(h);
		},	
		onComplete: function(loaded, errors){
			$('#loading').hide();
			$('#warpper').css("opacity",1);
			window.smallGuessLyrics.initAll();
			$('#start').addClass("hover")
		}
	})
});

;function GuessLyrics(config){
	 return new GuessLyrics.prototype.init(config);
};


;$.extend(GuessLyrics.prototype, {
	config:function(){
		this.yourScore=0;
		this.addEvent();
	},
	init:function(){
		var that=this;
		this.getWXconfig();
		this.initPage();
		this.isHasShareId();
		$('.tipsWord').addClass("hover")
		window.setTimeout(function(){
			that.playThis();
			console.log('2333')
			//$('.touchLine').show();
			$('.overStone').addClass('hover');
			
		},3000);
	},
	initAll:function(config){
		this.config();
	},

	isHasShareId:function(){
		var that=this;
		var data=this.parseQueryString(window.location.href);
		if(data.hasOwnProperty('shareId')){
			
		};
	},
	parseQueryString:function (url){
	   var params = {};
	   var arr = url.split("?");
	   if (arr.length <= 1)
	      return params;
	   arr = arr[1].split("&");
	   for(var i=0, l=arr.length; i<l; i++){
	      var a = arr[i].split("=");
	      params[a[0]] = a[1];
	   }
	   return params;
	},
	getWXconfig:function(){
		 
		var that=this;
		$.ajax({
			url:'../api/weiChart.php',
			dataType:"json",
			type:"POST",
			data:{"url":encodeURIComponent(window.location.href)},
			success:function(json){
				wx.config({
				    debug: false, 
				    appId: json.appId, // 必填，公众号的唯一标识
				    timestamp: json.timestamp, // 必填，生成签名的时间戳
				    nonceStr: json.nonceStr,
					signature: json.signature,
				    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				});
			}
		});
		wx.ready(function(){
			that.wechatShare('','');
		});
	},
	wechatShare :function (title,data){
		var optionsFriend={
		      title:'梅赛德斯-奔驰360度设计科技展邀您一同出型！', // 分享标题
			  desc: '型出360度，梅赛德斯-奔驰线上设计科技日邀您一同领略！', // 分享描述
	          link:window.location.href, // 分享链接
	          imgUrl: $('#shareBg').get(0).src, // 分享图标
		      success: function () { 
		          window.alert('分享成功');
		      },
		      cancel: function () { 
		          
		      }
		};
		var options={
		      title: (title!='') ? title : '360度自由型格', // 分享标题
			  desc: '型出360度，梅赛德斯-奔驰线上设计科技日邀您一同领略！', // 分享描述
	          link:window.location.href, // 分享链接
	          imgUrl: $('#shareBg').get(0).src, // 分享图标
		      success: function () { 
		          window.alert('分享成功');
		      },
		      cancel: function () { 
		          
		      }
		};
		wx.onMenuShareAppMessage(options);//朋友
		wx.onMenuShareTimeline(optionsFriend);//朋友圈
	},
	getRandomNum:function (Min, Max) {
		Min=parseInt(Min);
		Max=parseInt(Max);
		var Range = Max - Min;
		var Rand = Math.random();
		return (Min + Math.round(Rand * Range));
	},	
	addEvent:function(){
		var that=this;

		window.addEventListener('touchmove',function(e){
			e.preventDefault();
		},false);

	


		$('#sendToFriend,#clickShare').on('touchstart',function(){
			$('#share').show();
		});
		$('#stone .touchLine').on('click',function(e){
			$(this).trigger("touchstart");
		});
		$('#stone .touchLine').on('touchmove',function(e){
			$(this).trigger("touchstart");
		});
		$('#stone .touchLine').on('touchstart',function(){
			that.yourCount++;
			if(that.yourCount==1){
				console.log(444)
				window.clearInterval(that.myTimer);
				$('#myBox').addClass("hover");
				$('.sword').hide();
				window.setTimeout(function(){
					$('#myBox').removeClass("hover");
					$('#stone').addClass("hover");
				},1500);
				return false;
			};
			/*$(this).hide();
			var index=$(this).attr("data-index");
			$('.sword[data-index='+index+']').hide();
			console.log(index);
			for(var i=that.array.length-1;i>=0;i--){
				if($(that.array[i]).attr('data-index')==index){
					console.log(11)
					that.array.splice(i,1);
					break;
				};
			};
			$(this).off('touchmove');
			$(this).off();
			that.max=that.max-1;*/
			return ;
		});

		// $('#line3Last').get(0).addEventListener('webkitAnimationEnd',function(){
			
		// 	$('.line3').hide();
		// 	$('.line4').show().addClass('hover');
		// },false);
		// $('#line4Last').get(0).addEventListener('webkitAnimationEnd',function(){
			
		// 	$('.line4').hide();
		// 	$('#stone').addClass('hover');
		// },false);

		// $('#imgsList').get(0).addEventListener('webkitTransitionEnd',function(){
		// 	$('#page1').parent().hide();
		// 	$('#page2').show().addClass("hover");
		// 	$('#arrow').show();
		// },false);

		// $('#lastIMgs').get(0).addEventListener('webkitAnimationEnd',function(){
		// 	window.setTimeout(function(){
		// 		$('#lastIMgs7').hide();
		// 		$('#lastIMgs8').show().addClass("hover");
		// 	},1200);
		// },false);
		
	},
	playThis:function(){
		//var all=document.getElementsByClassName('sword');
		var all=document.getElementsByClassName('swordFuck');
		var array=[];
		var count=-1;
		var that=this;
		for(var i=0;i<all.length;i++){
			array.push(all[i]);
		};
		this.array=array
		this.max=4;
		this.yourCount=0;
		return ;
		this.myTimer=window.setInterval(function(){
			count++;
			if(count>=that.max){
				count=-1;
			};
			for(var i=0;i<array.length;i++){
				$(array[i]).css('opacity',0)
			};
			$(array).eq(count).css('opacity',1)
		},600)
	},
	initPage:function(){
		$('#fullpage').fullpage({
			menu: '#menu',
			css3: true,
			loopBottom:false,
			afterLoad:function(a,index,c,d){
				console.log(a,index,c,d);
				if(index==2){
					$('#arrow').hide();
				}else if(index==1){
					$('#arrow').show();
				};
			},
			afterRender:function(b,index){
				
				// $.fn.fullpage.setAllowScrolling(false,'up') ;
				// $.fn.fullpage.setAllowScrolling(false,'down');
				// $('#fullpage .section').removeClass('active');
				$('#arrow').hide();
				window.setTimeout(function(){
					//$.fn.fullpage.moveTo(2);
				},100)
			},
			afterSlideLoad:function(a,b,c,d){
				//console.log(a,b);
			},
			onLeave:function(a,v,c){
				//console.log(a,v,c);
			}
		});
	}
});

GuessLyrics.prototype.init.prototype = GuessLyrics.prototype;

