// JavaScript Document
$(function(){

	//根据图片个数，循环出所有的span
	for (var i = 0; i < $('.banner li').length; i++) {
		var n=$('.banner li').eq(i).attr('name')
		$('.banner li').eq(i).css('background','url(./images/'+n+') no-repeat left bottom' )
		$('.btn').append('<span></span>')
	};



	var c=$('.banner li').eq(0).attr('data-hover')
	$('.banner-color').css('background-color',c)
		
	$('.btn span').mouseover(function() {
		var i=$(this).index();
		var c=$('.banner li').eq(i).attr('data-hover')
		$('.banner-color').css('background-color',c)
		$('.banner li').eq(i).fadeIn(600).siblings().fadeOut(0)
		$(this).addClass('cur').siblings().removeClass('cur')
		clearInterval(timer)
	}).mouseleave(function(event) {
		autoPlay()
	});

	var i=0;
	var timer=null;
	$('.btn span').eq(0).addClass('cur')
	function autoPlay()
	{		
			clearInterval(timer)
			timer=setInterval(function()
		{
			if(i>$('.banner li').length-1)
			{
				i=0;
			}
			else
			{
				var c=$('.banner li').eq(i).attr('data-hover')
				$('.banner-color').css('background-color',c)
				$('.banner li').eq(i).fadeIn(600).siblings().fadeOut(0)
				$('.btn span').eq(i).addClass('cur').siblings().removeClass('cur')
				i++;
			}
		}
	,2000)
	}

	autoPlay()
})