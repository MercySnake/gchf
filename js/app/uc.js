require.config({
    paths:{
		"jquery":"../lib/jquery-1.9.0.min",
		"slider":"../lib/jquery.superslide.2.1.1"
	},
	shim:{
		slider:{
			deps:["jquery"]	
		}
	}
	
});
require(['jquery','slider'],function($,slider) {
	$(function(){
		
		/* 销量排行 */
		$("#sale_list_hover li").on("mouseenter",function(){
			$(this).addClass("sale_hover").siblings().removeClass("sale_hover");
		});
		
		
		
		
	});
});