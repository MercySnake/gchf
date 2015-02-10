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
			vis:1,
			trigger:"click"
		});
		
		/* 典型案例 */
		$("#hover_wrap .case_con").on("mouseenter",function(){
			$(this).find(".case_text").show();
		});
		$("#hover_wrap .case_con").on("mouseleave",function(){
			$(this).find(".case_text").hide();
		});
		
		/* 关于我们 显示二维码 */
		$(".show-wx-code").on("mouseenter",function(){
			var top = $(this).parent().offset().top + $(this).parent().height();
			var left = $(this).parent().offset().left;
			var url = $(this).attr("data-url");
			if($("#show-wx-code").size() > 0){
				$("#show-wx-code").show();
				$("#show-wx-code").css({"top":top,"left":left});
			}else{
				var str = '<div id="show-wx-code" style="width:100px; height:100px; background-color:#fff; position:absolute; z-index:99;"><img src='+url+' width="100" /></div>';
				$("body").append(str);
				$("#show-wx-code").css({"top":top,"left":left});
			}
		});
		$(".show-wx-code").on("mouseleave",function(){
			$("#show-wx-code").hide();
		})
		
		
	});
});