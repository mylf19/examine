$(document).ready(function() {
	fLoadTable2();
	show2();
	//给某一行设置背景颜色
	$("#dg").datagrid({
		rowStyler:function(index,row){
			//条件就是：若这一行的count字段的值大于0，则设置背景颜色
			if(row.count>0){
//				return 'background-color:#d9d9c2;';
				return 'background-color:#00aa00;';
			}
		}
	});
})
//登录按钮的监听事件
function wel_btn_login() {
	location.href = 'login.html';
}
//注册按钮的监听事件
function wel_btn_register() {
	location.href = 'register.html';
}
//找回密码按钮的监听事件
function wel_btn_findpwd() {
	location.href = 'forgetpassword.html';
}
//注销按钮监听事件
function wel_btn_produce() {
	$.ajax({
		url : 'logout',
		data : null,
		dataType : "json",
		success : function(data) {
			var d = eval("(" + data + ")");
			var au=d.done;
			if(au==1){
				alert("注销成功！");
				window.location.href="login.html";
			}else if(au=-1){
				alert("注销失败！");
			}
		},
		error : function(e) {
			alert("服务器出错……");
		},
	});
}

function wel_btn_test() {
	var data = "data=data";
	fLoadTable();
	$.ajax({
		url : 'queryannualplanlist',
		data : data,
		datatype : "json",
		success : function(value2) {
			//			alert(value2.toString());
			var t = eval('(' + value2 + ')');
			$("#dg").datagrid('loadData', t);
		},
		error : function(e) {
			alert(e.toString()+"44444");
		}
	})
//	show();
}

//测试按钮的监听方法
function ggg() {
	var text = $("#testtext").val();
	var data = "logindata=" + text;
	$.ajax({
		url : 'loginw',
		data : data,
		datatype : "json",
		success : function(value2) {
			if (value2 == "success") {
				window.location.href = "adminmian.html";
			} else if (value2 == "failed") {
				window.location.href = "workermain.html";
			} else if (value2 == "admin") {
				window.location.href = "72.html";
			} else if (value2 == "worker") {
				window.location.href = "queryannualplanlist.html";
			}
			alert(value2.toString());
			$('#dg').datagrid('loadData', value2);
		},
		error : function(e) {
			alert(e.toString()+"6666");
		}
	})
}

function show2() {
	var data = "data=data";
	$.ajax({
		url : 'queryannpred',
		data : data,
		datatype : "json",
		success : function(value2) {
			//			alert(value2.toString());
			var t = eval('(' + value2 + ')');
			$("#dg").datagrid('loadData', t);

		},
		error : function(e) {
			alert(e.toString());
		}
	})
}

function fLoadTable2() {
	var editRow = undefined;
	$('#dg').datagrid({
		url : "",
		title : '本月计划项目',
		width : 1050,
		height : 500,
//		fitColumns : true,
		//对应json数据中的每一列
		columns : [ [ {
			field : 'checked',
			title : '选择',
			width : '20',
			checkbox : true
		}, {
			field : 'number', //每一列的名字
			width : '100',
			title : '顺号',
			align : 'center',
			editor : 'text'
		}, {
			field : 'machineid',
			title : '设备ID',
			width : '70',
			align : 'center',
			editor : 'text'
		}, {
			field : 'machinename',
			title : '设备名称',
			width : '100',
			align : 'center',
			editor : 'text'
		}, {
			field : 'machineposition',
			title : '设备所在地',
			width : '100',
			align : 'center',
			editor : 'text'
		}, {
			field : 'workcontent',
			title : '工作内容',
			width : '100',
			align : 'center',
			editor : 'text'
		}, {
			field : 'unit',
			title : '单位',
			width : '50',
			align : 'center',
			editor : 'text'
		}, {
			field : 'count',
			title : '数量',
			width : '50',
			align : 'center',
			editor : 'text'
		}, {
			field : 'frequency',
			title : '检修次数',
			width : '100',
			align : 'center',
			editor : 'text'
		}, {
			field : 'workmonth',
			title : '检修时间',
			width : '100',
			align : 'center',
			editor : 'text'
		}, {
			field : 'note',
			title : '备注',
			width : '100',
			align : 'center',
			editor : 'text'
		}, {
			field : 'record_table',
			title : '记录表格式',
			width : '100',
			align : 'center',
			editor : 'text'
		}
		] ],
		idField : 'id',
		loadMsg : 'Processing, please wait …',
		pagination : true,
		onAfterEdit : function(rowIndex, rowData, changes) {
			editRow = undefined;
		},
		onDblClickRow : function(rowIndex, rowData) {
			if (editRow != undefined) {
				$("#dg").datagrid('endEdit', editRow);
			}

			if (editRow == undefined) {
				$("#dg").datagrid('beginEdit', rowIndex);
				editRow = rowIndex;
			}
		},
		onClickRow : function(rowIndex, rowData) {
//			alert("单击:" + rowIndex + "  " + rowData.ename);
//			$("#dg").datagrid({
//				rowStyler:function(index,row){
//					//条件就是：若这一行的count字段的值大于0，则设置背景颜色
//					if(row.count>0){
////						return 'background-color:#d9d9c2;';
//						return 'background-color:#aaaaaa;';
//					}
//				}
//			});
			document.getElementById("testtext").value=999;
		}
	});
}