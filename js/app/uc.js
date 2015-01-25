require.config({
    paths:{
		"jquery":"../lib/jquery-1.9.0.min",
		"slider":"../lib/jquery.superslide.2.1.1",
		"valid":"../lib/Validform_v5.3.2_min"
	},
	shim:{
		slider:{
			deps:["jquery"]	
		},
		valid:{
			deps:["jquery"]
		}
	}
	
});
require(['jquery','slider',"valid"],function($,slider,valid) {
	$(function(){
		
		/* 销量排行 */
		$("#sale_list_hover li").on("mouseenter",function(){
			$(this).addClass("sale_hover").siblings().removeClass("sale_hover");
		});
		
		/* 个人资料 验证 */
		var profile_form = $("#profile_form").Validform({
			tiptype:3,
			showAllError:false,
		});
		profile_form.addRule([
		  {
			ele:"#t1",
			datatype:"m | e",
			nullmsg:"必填项",
			errormsg:"输入有误",
			sucmsg:" "
		  },
		  {
			ele:"#t2",
			datatype:"*",
			nullmsg:"必填项",
			errormsg:"输入有误",
			sucmsg:" "
		  }
		]);
		
		/* 修改密码 */
		var pwd_form = $("#pwd_form").Validform({
			tiptype:3,
			showAllError:false,
		});
		pwd_form.addRule([
		  {
			ele:"#t1",
			datatype:"m | e",
			nullmsg:"必填项",
			errormsg:"输入有误",
			sucmsg:" "
		  },
		  {
			ele:"#t2",
			datatype:"*",
			nullmsg:"必填项",
			errormsg:"输入有误",
			sucmsg:" "
		  },
		  {
			ele:"#t3",
			datatype:"*",
			nullmsg:"必填项",
			errormsg:"输入有误",
			sucmsg:" ",
			recheck:"newPwd"
		  }
		]);
		
		/* 收货地址 */
		var addressForm = $("#addressForm").Validform({
			tiptype:3,
			showAllError:false,
		});
		addressForm.addRule([
		  {
			ele:"#addName",
			datatype:"*",
			nullmsg:"（必填）",
			errormsg:"输入有误",
			sucmsg:" "
		  },
		  {
			ele:"#addF1",
			datatype:"*",
			nullmsg:"（必填）",
			errormsg:"输入有误",
			sucmsg:" "
		  },
		  {
			ele:"#addWhere",
			datatype:"*",
			nullmsg:"（必填）",
			errormsg:"输入有误",
			sucmsg:" ",
			recheck:"newPwd"
		  }
		  ,
		  {
			ele:"#addPhone",
			datatype:"m",
			nullmsg:"（必填）",
			errormsg:"输入有误",
			sucmsg:" ",
		  }
		]);
		
		
		
		
	});
});