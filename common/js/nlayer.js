/**
 * Created by Administrator on 2014/10/31.
 */
$('html,body,.body,.loading,.poplayer').css({height:$(window).height()});
var layer = $('#poplayer');
var $lay = $('.poplayer');
var objIdx = 0;
function xmlcallback(obj,flag) {
    var n = parseInt(obj.substr(4));
    objIdx = n;
    console.log(n);
    if (n == 1) {
        $lay.removeClass('Dn').animate({opacity:1},400, function () {
            $('.pop').eq(n-1).removeClass('Dn');
            $('.pop').eq(n-1).find('img').animate({opacity:1},500);
            // $('.poplayer').bind('click',function(){
            //     $('.poplayer').addClass("Dn").find('.pop').addClass("Dn")
            // });
           $('.closedes').show();
        });
        return false;
    } else if (n == 2) {
        console.log(flag)
        if(flag){
            window.parent.document.getElementById('poplayer1').style.display="block";
        }else{
            $lay.removeClass('Dn').animate({opacity:1},400, function () {
                $('.pop').eq(n-1).removeClass('Dn');
                $('.pop').eq(n-1).find('img').animate({opacity:1},500);
                // $('.poplayer').bind('click',function(){
                //     $('.poplayer').addClass("Dn").find('.pop').addClass("Dn")
                // });
               $('.closedes').show();

            });
        }
        return false;
    } else if (n == 3) {
        $lay.removeClass('Dn').animate({opacity:1},400, function () {
            $('.pop').eq(n-1).removeClass('Dn');
            $('.pop').eq(n-1).find('img').animate({opacity:1},500);
            // $('.slideBox').bind('click',function(){
            //     $('.poplayer').addClass("Dn").find('.pop').addClass("Dn")
            // });
            $('.closedes').show();
            var video=$('.pop').eq(n-1).find('video');
            if(video.length!=0){
                video.eq(0).get(0).play();
                video.eq(0).show();
            }
        });
        return false;
    }else if (n == 4) {
        $lay.removeClass('Dn').animate({opacity:1},400, function () {
            $('.pop').eq(n-1).removeClass('Dn');
            $('.pop').eq(n-1).find('img').animate({opacity:1},500);
            // $('.slideBox').bind('click',function(){
            //     $('.poplayer').addClass("Dn").find('.pop').addClass("Dn")
            // });
            // 
            $('.closedes').show();
        });
        return false;
    }else if (n == 5) {
        if(flag=='fuck'){
            window.location.href="http://v.qq.com/page/v/q/e/v0166c4grqe.html";
        }else{
            $lay.removeClass('Dn').animate({opacity:1},400, function () {
                $('.pop').eq(n-1).removeClass('Dn');
                $('.pop').eq(n-1).find('img').animate({opacity:1},500);
                // $('.slideBox').bind('click',function(){
                //     $('.poplayer').addClass("Dn").find('.pop').addClass("Dn")
                // });
               $('.closedes').show();
            });
        }
        return false;
    }
}

$(function(){
    $('.closedes').bind('click',function(){
        $('.poplayer').addClass("Dn").find('.pop').addClass("Dn")
        $('.closedes').hide();
        if($('.pop').find('video').length!=0){
            $('.pop').find('video').eq(0).get(0).pause();
            $('.pop').find('video').eq(0).hide();
        }
    });

    $('.closedesfuck').bind('click',function(){
        var parent=$(this).parent();
        parent.find('video').eq(0).get(0).pause();
        window.parent.document.getElementById('ring').play();
        parent.hide();
    });
});


function playVideo(index){
    $('#videoLay'+index).show();
    $('#videoLay'+index).find('video').eq(0).get(0).play();
    window.parent.document.getElementById('ring').pause();
}