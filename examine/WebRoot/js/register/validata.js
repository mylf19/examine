//定义各个输入框的正确标识，默认都是false
var cId=false,cUsername=false,cPassword=false,cPasswordconf=false,cPhone=false,cEmail=false;
//当点击提交时执行此方法，用来检查所有的输入是否正确，若存在错误，则弹出提示框并阻止表单提交
function checkinfo() {
		if(cId&&cUsername&&cPassword&&cPasswordconf&&cPhone&&cEmail){
			return true;
		}else{
			alert("请完善表单内容");
			return false;
		}
}
//各个输入框的校验
$(function() {
	$("#idId").blur(function() {
		var reg = /^\d{3,}$/;
		if (!reg.test($("#idId").val())) {
			$("#labelId").get(0).style.color = "red";
			$("#labelId").text("请输入正确工号！");
			cId=false;
		} else {
			$("#labelId").get(0).style.color = "green";
			$("#labelId").text("√");
			cId=true;
		}
	})
})
//用ajax框架来验证用户名是否存在
$(function() {
	//当username框失去焦点时触发此方法
	$("#idUsername").blur(function() {
		//获得当前username的输入值
		var info = $("#idUsername").val();
		var param = "usernameString=" + info;
		if (info != null && info != "") {
			$.ajax({
				url : 'checkUsername',
				data : param,
				dataType : "json",
				success : function(data) {
					var d = eval("(" + data + ")"); //将数据转换成json类型
					var r = d.isExist;
					//alert(""+r);
					if (r == "false") {
						$("#labelUsername").get(0).style.color = "red";
						$("#labelUsername").text("用户名已被注册！");
						cUsername=false;
					} else if(r=="true") {
						$("#labelUsername").get(0).style.color = "green";
						$("#labelUsername").text("√");
						cUsername=true;
					}else{
						//用户名验证失败
						$("#labelUsername").get(0).style.color = "red";
						$("#labelUsername").text("服务器繁忙！");
						cUsername=false;
					}
				},
				error : function(e) {
					//用户名验证失败
					$("#labelUsername").get(0).style.color = "red";
					$("#labelUsername").text("服务器繁忙！");
					cUsername=false;
				}
			});
		} else {
			$("#labelUsername").get(0).style.color = "red";
			$("#labelUsername").text("用户名不能为空！");
			cUsername=false;
		}
	})
})

$(function() {
	$("#idPassword").blur(function() {
		var reg = /^[A-Za-z0-9]+$/;
		if (!reg.test($("#idPassword").val())) {
			$("#labelPassword").get(0).style.color = "red";
			$("#labelPassword").text("请输入有效密码！");
			cPassword=false;
		} else {
			$("#labelPassword").get(0).style.color = "green";
			$("#labelPassword").text("√");
			cPassword=true;
		}
	})
})

$(function() {
	$("#idPasswordconf").blur(function() {
		var reg = /^[A-Za-z0-9]+$/;
		var password1 = $("#idPassword").val();
		var password2 = $("#idPasswordconf").val();
		//当第一次输入的密码符合规定的时候再检查两次密码输入是否一致，否则不检查
		if (reg.test(password1)) {
			if (password1 != password2) {
				$("#labelPasswordconf").get(0).style.color = "red";
				$("#labelPasswordconf").text("两次密码输入不一致！");
				cPasswordconf=false;
			} else {
				$("#labelPasswordconf").get(0).style.color = "green";
				$("#labelPasswordconf").text("√");
				cPasswordconf=true;
			}
		}else{
			$("#labelPasswordconf").text("");
			cPasswordconf=false;
		}
	})
})

$(function() {
	$("#idEmail").blur(function() {
		var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		if (!reg.test($("#idEmail").val())) {
			$("#labelEmail").get(0).style.color = "red";
			$("#labelEmail").text("请输入正确邮箱！");
			cEmail=false;
		} else {
			$("#labelEmail").get(0).style.color = "green";
			$("#labelEmail").text("√");
			cEmail=true;
		}
	})
})

$(function() {
	$("#idPhone").blur(function() {
		var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
		if (!reg.test($("#idPhone").val())) {
			$("#labelPhone").get(0).style.color = "red";
			$("#labelPhone").text("请输入正确手机号！");
			cPhone=false;
		} else {
			$("#labelPhone").get(0).style.color = "green";
			$("#labelPhone").text("√");
			cPhone=true;
		}
	})
})

function resetinf() {
	$("#labelId").text("");
	$("#labelUsername").text("");
	$("#labelDepartment").text("");
	$("#labelPhone").text("");
	$("#labelEmail").text("");
	$("#labelPassword").text("");
	$("#labelPasswordconf").text("");
}