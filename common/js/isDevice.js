/**
 * Created by apple on 14-6-17.
 */





var phoneWidth = parseInt(window.screen.width);
var phoneScale = phoneWidth / 640;
var ua = navigator.userAgent;
if (/Android (\d+\.\d+)/.test(ua)) {
    var version = parseFloat(RegExp.$1);
    // andriod 2.3
    if (version > 2.3) {
        document.write('<meta name="viewport" content="width=640, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
        // andriod 2.3以上
    } else {
        document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
    }
    // 其他系统
} else {
    document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
}
//微信去掉下方刷新栏
if (RegExp("MicroMessenger").test(navigator.userAgent)) {
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        WeixinJSBridge.call('hideToolbar');
    });
}
/*var newNodeH = $(window).height();
$(window).resize(function () {
    newNodeH = $(window).height();
});


function orient() {
    if (window.orientation == 0 || window.orientation == 180) {
        $("body").children().removeClass('Dn');
        return false;
    }
    else if (window.orientation == 90 || window.orientation == -90) {
        $("body").children().addClass('Dn');
        alert('请竖屏浏览');
        return false;
    }
}*/

// $(window).bind('orientationchange', function (e) {
//     orient();
// });





//	.videoM{width:32px; height:32px; bottom:20px; right:53px; position:fixed; z-index:2999;}
//.videoD{width:0; height:0px; overflow:hidden; position:fixed; z-index:-100;}
//
//var imgUrl = 'http://svn.mhttt.com/gamechange/images/ShareImg.png';
//var lineLink = 'http://svn.mhttt.com/gamechange/';
//var descContent = "全新梅赛德斯-奔驰长轴距C级车，诠释“新豪华主义”美学，为驾驭改变而生！";
//var shareTitle = '全新长轴距C级车驾驭改变';
//var appid = '';
//
//function shareFriend() {
//    WeixinJSBridge.invoke('sendAppMessage',{
//        "appid": appid,
//        "img_url": imgUrl,
//        "img_width": "640",
//        "img_height": "640",
//        "link": lineLink,
//        "desc": descContent,
//        "title": shareTitle
//    }, function(res) {
//        _report('send_msg', res.err_msg);
//    })
//}
//function shareTimeline() {
//    WeixinJSBridge.invoke('shareTimeline',{
//        "img_url": imgUrl,
//        "img_width": "640",
//        "img_height": "640",
//        "link": lineLink,
//        "desc": descContent,
//        "title": descContent
//    }, function(res) {
//        _report('timeline', res.err_msg);
//    });
//}
//function shareWeibo() {
//    WeixinJSBridge.invoke('shareWeibo',{
//        "content": descContent,
//        "url": lineLink,
//    }, function(res) {
//        _report('weibo', res.err_msg);
//    });
//}
//// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
//document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
//    WeixinJSBridge.call('hideToolbar');
//
//    // 发送给好友
//    WeixinJSBridge.on('menu:share:appmessage', function(argv){
//        shareFriend();
//    });
//
//    // 分享到朋友圈
//    WeixinJSBridge.on('menu:share:timeline', function(argv){
//        shareTimeline();
//    });
//
//    // 分享到微博
//    WeixinJSBridge.on('menu:share:weibo', function(argv){
//        shareWeibo();
//    });
//}, false);

var isVideo = 0;
var video = '';
function videoK(){
    video = document.getElementById('video');
    if (isVideo < 1){
        $("#videoM").html('<img src="images/sound.png"/>');
        video.play();
        isVideo = 1;
    }else{
        $("#videoM").html('<img src="images/sound_off.png"/>');
        video.pause();
        isVideo = 0;
    }
}