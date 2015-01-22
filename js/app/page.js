require.config({
    paths:{
		"jquery":"../lib/jquery-1.9.0.min",
		"slider":"../lib/jquery.superslide.2.1.1",
		"times":"../module/time"
	},
	shim:{
		slider:{
			deps:["jquery"]	
		}
	}
	
});
require(['jquery','slider','times'],function($,slider,times) {
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
		
//		var at = new times();
//		at.init();

		/* 倒计时 */
		function gt(){
			var now = new Date();
			var later = new Date("2/18/2015 13:00:00");//倒计时基准时间
			var tim = (later.getTime() - now.getTime());
			if(tim > 0){
				$("#sale_status").removeClass("status_end");
				
				days = tim / 1000 / 60 / 60 / 24;
				daysRound = Math.floor(days);//剩余天
				hours = tim / 1000 / 60 / 60 - (24 * daysRound);
				hoursRound = Math.floor(hours);//剩余小时
				minutes = tim / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound);
				minutesRound = Math.floor(minutes);//剩余分钟
				seconds = tim / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
				secondsRound = Math.round(seconds);//剩余秒
				
				//console.log(secondsRound);
				
				$("#saleDay").text(daysRound);
				$("#saleHours").text(hoursRound);
				$("#saleMinutes").text(minutesRound);
				//$("#saleSeconds").text(secondsRound);
				
				setTimeout(gt,60000);
				
			}else{
				$("#sale_status").addClass("status_end");
			};
		};
		gt();
		
		
		/* 商品介绍切换 */
		$("#proIntroTab a").on("click",function(){
			var index = $(this).parent().index();
			var cArr = $(this).attr("data-wrap").split("|");
			
			$(this).parent().addClass("on").siblings().removeClass("on");

			$("#" + cArr[0]).show();
			if(cArr[1]){$("#" + cArr[1]).hide();}
			
			if(cArr[2]){
				$("#" + cArr[0] + " .switch_section:eq("+ index +")").show().siblings().hide();
			}
		});
		
		/* 商品评价切换 */
		$("#commentWrap").slide({
			mainCell : "#comments-list",
			titCell : ".ds_tit dd"
		})
		
		
		
		
	});
});