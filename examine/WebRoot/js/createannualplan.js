function createannualtable(){
	var cname = $("#cname").val();
	var ename = $("#ename").val();
	var teamname = $("#teamname").val();
	var operationgroup=$("#operationgroup").val();
	var makeuppeople = $("#makeuppeople").val();
	var makeupdate = $("#makeupdate").val();
	var tabletype = $("#tabletype").val();
	var year = $("#year").val();

//	alert("cname = "+cname+
//	 "\nename ="+ename+
//	 "\nteamname = "+teamname+
//	 "\noperationgroup="+operationgroup+
//	 "\nmakeuppeople = "+makeuppeople+
//	 "\nmakeupdate = "+makeupdate+
//	 "\ntabletype = "+tabletype+
//	 "\nyear = "+year);

	var postdata="cname="+cname+
	 "&ename="+ename+
	 "&teamname="+teamname+
	 "&operationgroup="+operationgroup+
	 "&makeuppeople="+makeuppeople+
	 "&makeupdate="+makeupdate+
	 "&tabletype="+tabletype+
	 "&year="+year;
	$.ajax({
		url:'createannualplan',
		data:postdata,
		datatype:"json",
		success:function(value2){
			alert(value2.toString()+"创建年表返回成功！");
			location.href="queryannualplanlist.html";
		},
		error:function(XMLHttpRequest, textStatus, errorThrown){
//			alert(e.toString()+"创建年表返回失败！");
            // 状态码
            console.log(XMLHttpRequest.status);
            // 状态
            console.log(XMLHttpRequest.readyState);
            // 错误信息   
            console.log(textStatus);
		}
	})
}
function ajaxtest(){
	var cname=$("#cname").val();
	var postdata="cname="+cname;
	$.ajax({
		url:'test',
		data:postdata,
		datatype:"json",
		success:function(value2){
			alert(value2.toString());
		},
		error:function(e){
			alert(e.toString());
		}
	})
	
	
}