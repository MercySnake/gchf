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
		
		/* 大图切换 */
		$("#slide_wrap").slide({
			mainCell:".slide_con",
			titCell:".slide_point",
			autoPage:true,
			effect:"left",
			autoPlay:false,
			vis:1
		});
		
		/* 大图里的小图切换 */
		$(".sub_slide_wrap").slide({
			mainCell:".sub_slide_con",
			titCell:".sub_slide_point li",
			effect:"left",
			autoPlay:false,
			vis:1
		});
		
		/* 一周期标准装 */
		$(".slide_con_wrap").slide({
			mainCell:".slide_con_a",
			titCell:".slide_con_p li",
			effect:"top",
			autoPlay:false,
			vis:1
		});		
		
		/*  */
		$("#slide_tab_wrap").slide({
			mainCell:".slide_tab_con",
			titCell:".slide_tab_handler li",
			autoPlay:false,
			vis:1
		});
		
		/* 典型案例 */
		$("#hover_wrap .case_con").on("mouseenter",function(){
			$(this).find(".case_text").show();
		});
		$("#hover_wrap .case_con").on("mouseleave",function(){
			$(this).find(".case_text").hide();
		});
		
		
	});
});