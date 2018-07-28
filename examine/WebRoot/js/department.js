var selectData1,selectData2,selectData3;
$(document).ready(function(){
	var data="level=1";
	
	$.ajax({
		url : 'getdepartment',
		data : data,
		datatype : "json",
		success : function(value) {
			//alert(value2.toString());
			var t = eval('(' + value + ')');
			selectData1=t;
			alert(t[0].id);
			for(var i=0;i<t.length;i++){
				$("#selector1").append("<option value='"+t[i].departmentname+"'>"+t[i].departmentname+"</option>");
			}
		},
		error : function(e) {
			alert(e.toString());
		}
	})
	
	//给select添加监听事件
	var obj1=document.getElementById("selector1");
	var obj2=document.getElementById("selector2");
	var select1=obj1.options;
	var select2=obj2.options;
	obj1.onchange=function(){
		var index=obj1.selectedIndex;
		if(index>0){
			console.log(select1[index].value);
			var pid=selectData1[index-1].pid;
			var data="level=2&pid="+pid;
			$.ajax({
				url : 'getdepartment',
				data : data,
				datatype : "json",
				success : function(value) {
					var t = eval('(' + value + ')');
					selectData2=t;
					for(var i=0;i<t.length;i++){
						$("#selector2").append("<option value='"+t[i].departmentname+"'>"+t[i].departmentname+"</option>");
					}
				},
				error : function(e) {
					alert(e.toString());
				}
			})
		}
	}
	obj2.onchange=function(){
		var index=obj2.selectedIndex;
		if(index>0){
			console.log(select2[index].value);
			var pid=selectData2[index-1].pid;
			var data="level=3&pid="+pid;
			$.ajax({
				url : 'getdepartment',
				data : data,
				datatype : "json",
				success : function(value) {
					var t = eval('(' + value + ')');
					selectData3=t;
					for(var i=0;i<t.length;i++){
						$("#selector3").append("<option value='"+t[i].departmentname+"'>"+t[i].departmentname+"</option>");
					}
				},
				error : function(e) {
					alert(e.toString());
				}
			})
		}
	}
});

function getworkteam(){
	
}
function getoperationgroup(){
	
}