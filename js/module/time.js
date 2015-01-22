define(['jquery'],function($) {
	function times(){};
	
	times.prototype = {
		/* 倒计时 */
		init : function(){
			var now = new Date();
			var later = new Date("2/18/2015 13:00:00");//倒计时基准时间
			var tim = (later.getTime() - now.getTime());
			var _this = this;
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
				
				console.log(secondsRound);
				
				$("#saleDay").text(daysRound);
				$("#saleHours").text(hoursRound);
				$("#saleMinutes").text(minutesRound);
				$("#saleSeconds").text(secondsRound);
				
				//setTimeout(_this.init,1000);
				
			}else{
				$("#sale_status").addClass("status_end");
			};
		}

	}
	return times;
})