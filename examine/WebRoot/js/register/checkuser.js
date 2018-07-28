function check() {
	var username = $("#idloginusername").val();
	var password = $("#idloginpassword").val();
	$("#idloginpassword").text("");
	var objArray = [];
	var obj = new Object();
	var JSONObj = new Object();
	obj.username = username;
	obj.password = password;
	objArray.push(obj);
	JSONObj.jsonStr = JSON.stringify(objArray);
	//alert(JSONObj);
	if (username != null && username != "") {
		if (password != null && password != "") {
			$.ajax({
				url : 'checkuser',
				data : JSONObj,
				dataType : "json",
				success : function(data) {
					var d = eval("(" + data + ")");
					var au=d.authority;
					if(au==-1){
						alert("登录失败");
					}else {
						window.location.href="main.html";
					}
				},
				error : function(e) {
					alert("error");
				},
			});
		} else {
			$("#idloginpassword").text("密码不能为空！");
		}
	} else {
		$("#idloginpassword").text("用户名不能为空！");
	}
}