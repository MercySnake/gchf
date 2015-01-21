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
		
		/* 产品大图切换 */
		$("#proImgWrap").slide({
			mainCell : '.bigImg',
			titCell : '.pro_img_tab li'
		});
		/* 小图滚动切换 */
		$("#proImgWrap .pro_img_list").slide({
			mainCell : 'ul',
			vis : 5,
			effect : "left",
			autoPage : true,
			prevCell : ".pro_img_prev",
			nextCell : ".pro_img_next"
		});
		/* 购买数量 */
		var minus = $("#pMinus");
		var plus =  $("#pPlus");
		var sum = $("#pSum");
		var sum_min = 1;
		var sum_max = 100; // 最大值（库存量）
		// 输入数据暂时不能手动填写
		sum.attr("readonly","readonly");	
		
		// 减
		minus.on("click",function(){
			var num = parseInt(sum.val()) - 1;
			if(num < sum_max && num > sum_min){
				sum.val(num);
				plus.removeClass("disabled");
			}else if(num == sum_min){
				sum.val(num);
				minus.addClass("disabled");
			}
		});	
		// 加
		plus.on("click",function(){
			var num = parseInt(sum.val()) + 1;
			if(num < sum_max && num > sum_min){
				sum.val(num);
				minus.removeClass("disabled");
			}else if(num == sum_max){
				sum.val(num);
				plus.addClass("disabled");
			}
		});	
		
		
	});
});