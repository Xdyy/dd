// JavaScript Document

	$(document).ready(function(){
		
		$('.dataTables_length,.dataTables_filter,.dataTables_info').parent().hide()
		$('.dataTables_paginate').parent().attr('class','col-xs-12')
		$('.dataTables_paginate').css({'float':'none','text-align':'center'})
		
		
		$('.hint textarea').focus(function(e) {
            $('.hint').addClass('shine')
        });
		$('.hint textarea').blur(function(e) {
            $('.hint').removeClass('shine')
        });
		
		$('.user-list').click(function(e){
            $('.user-menu').slideToggle(300)
			e?e.stopPropagation():event.cancelBubble = true;
        })
		$('.user-menu').click(function(e){
			e?e.stopPropagation():event.cancelBubble = true;
        })
		$('body').click(function(e){
            $('.user-menu').slideUp(300)
        })
		
		$('.menu>li,.li-im').click(function(e) {
			
			if($(this).find('ul').is(':hidden')){
				
            	$(this).addClass('expanded').siblings().removeClass('expanded')
				$('.menu>li').find('ul').slideUp(160)
           		$(this).find('ul').slideDown(300)
				
			}else{
				
            	$(this).removeClass('expanded')
           		$(this).find('ul').slideUp(300)
			}
			
        })
		
		$('.menu ul li').addClass('li-im')
		
		$('.li-im').click(function(e){
			
            $($(this).parents('li')).addClass('active').siblings().removeClass('active')
            $(this).addClass('active').siblings().removeClass('active')
			$('.menu').find('a').removeClass('title')
            $(this).find('a').addClass('title')
        })
		
		$('.menu ul li').click(function(e){
    	    e?e.stopPropagation():event.cancelBubble = true;
			
        })
	
		$('.site li').first().siblings().find('span').before('>')
	
	})