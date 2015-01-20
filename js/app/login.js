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
		/* 登录 */
		$("#login_wrap").slide({
			mainCell:".login_con",
			titCell:".login_tab li",
			autoPlay:false,
			vis:1
		});		
		
		/* 常规登录 验证 */
		var default_form = $("#default_form").Validform({
			tiptype:3,
			showAllError:false,
		});
		default_form.addRule([
		  {
			ele:"#t1",
			datatype:"m | e",
			nullmsg:"请输入注册邮箱或手机号",
			errormsg:"信息输入错误",
			sucmsg:""
		  },
		  {
			ele:"#t2",
			datatype:"*",
			nullmsg:"请输入密码",
			errormsg:"密码输入错误",
			sucmsg:""
		  }
		])
		
		/* 手机号登录 验证 */
		var phone_form = $("#phone_form").Validform({
			tiptype:3,
			showAllError:false,
		});
		phone_form.addRule([
		  {
			ele:"#p1",
			datatype:"m",
			nullmsg:"请输入手机号",
			errormsg:"信息输入错误",
			sucmsg:""
		  },
		  {
			ele:"#p2",
			datatype:"*",
			nullmsg:"请输入动态密码",
			errormsg:"动态密码输入错误",
			sucmsg:"",
			// url 做动态密码验证
			url:''
		  }
		])
		
		/* 注册 验证 */
		var reg_form = $("#reg_form").Validform({
			tiptype:3,
			showAllError:false,
		});
		reg_form.addRule([
		  {
			ele:"#t1",
			datatype:"m | e",
			nullmsg:"请输册邮箱或手机号",
			errormsg:"信息输入错误",
			sucmsg:" "
		  },
		  {
			ele:"#t2",
			datatype:"*",
			nullmsg:"请输入密码",
			errormsg:"密码输入错误",
			sucmsg:" "
		  },
		  {
			ele:"#t3",
			datatype:"*",
			nullmsg:"请输入密码",
			errormsg:"密码输入不一致",
			sucmsg:" ",
			recheck:"regPwd"
		  },
		  {
			ele:"#agreenment",
			datatype:"*",
			nullmsg:"请选择协议",
			errormsg:"请选择协议",
			sucmsg:" "
		  }
		  
		])
		
		
		
	});
});