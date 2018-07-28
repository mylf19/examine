var cId=true,cUsername=false,cPhone=false,cEmail=false;

function onsubmit2() {
		if(cId&&cUsername&&cPhone&&cEmail){
			return true;
		}else{
			alert("请完善表单内容");
			return false;
		}
}
//各个输入框的校验
$(function() {
	$("#idId").blur(function() {
		var reg = /^\d{2,}$/;
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

$(function() {
	//当username框失去焦点时触发此方法
	$("#idUsername").blur(function() {
		//获得当前username的输入值
		var info = $("#idUsername").val();
		var param = "usernameString=" + info;
		if (info != null && info != "") {
			$("#labelUsername").get(0).style.color = "green";
			$("#labelUsername").text("√");
			cUsername=true;
		} else {
			$("#labelUsername").get(0).style.color = "red";
			$("#labelUsername").text("用户名不能为空！");
			cUsername=false;
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
		var reg = /^\d{11}$/;
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
