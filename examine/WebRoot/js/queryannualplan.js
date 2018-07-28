$(function() {
	//设置一个全局变量来控制弹出框关闭
	var closable = false;
	//弹出框的属性设置
	$("#myDlg").dialog({
		modal : true,
		closable : true,
		closed : true,
		buttons : '#myDlg-buttons'
//		onBeforeClose : function() { //关闭弹出框之前动作-弹出提示
//			if (!closable) {
//				$.messager.confirm("提醒", "确定关闭该窗口?", function(r) {
//					if (r) {
//						closable = true; //标记可以退出  
//						$("#myDlg").dialog("close");
//					}
//				});
//			}
//			return closable; //通过全局变量来控制是否关闭窗口  
//		}
	});

	$('#modelconcel').click(function() {

		$('#myDlg').dialog("close");
	});
})

$(document).ready(function() {

//	var thisURL = document.URL;
//	var getval,
//		showval;
	var ename = window.localStorage.getItem("enam");
	var tableid=window.localStorage.getItem("tableid");

	fLoadTable();
	if(tableid==undefined){
		alert("未获得表名");
	}else{
		show(tableid);
	}
	
});

function show(tableid) {
	var data = "data=" + tableid;
	$.ajax({
		url : 'queryannualplan',
		data : data,
		datatype : "json",
		success : function(value2) {
			//			alert(value2.toString());
			var t = eval('(' + value2 + ')');
			$("#annualplantable").datagrid('loadData', t);
		},
		error : function(e) {
			alert(e.toString());
		}
	})
}

function fLoadTable() {
	var editRow = undefined;
	$('#annualplantable').datagrid({
		url : "",
		title : '年计划表',
		width : 1200,
		height : 500,
		fitColumns : true,
		//对应json数据中的每一列
		columns : column1,
		idField : 'id',
		loadMsg : 'Processing, please wait …',
		pagination : true,
		toolbar : [ {
			text : '添加',
			iconCls : 'icon-add',
			handler : function() {
				initNullModel();
				$('#myDlg').dialog("open");
				//点击保存,假定保存成功
				$('#modelsave').click(function() {
					addData();
//					$.messager.alert("提示信息", "操作成功!", "info");
//					//这里在后面加true,将会绕过onBeforeClose事件,弹出框直接关闭
//					$('#myDlg').dialog("close", true);
				});
			}
		}, '-', {
			text : '删除',
			iconCls : 'icon-remove',
			handler : function() {
//				var row = $("#annualplantable").datagrid('getSelections');
				deleteData();
			}
		}, '-', {
			text : '修改',
			iconCls : 'icon-edit',
			handler : function() {
				var row = $("#annualplantable").datagrid('getSelected');
				if (row == null) {
					alert("请选择要修改的数据！");
					return;
				} else {
					initModel(row);
					$('#myDlg').dialog("open");
				}
				//点击保存,假定保存成功
				$('#modelsave').click(function() {
					updateData();
//					$.messager.alert("提示信息", "操作成功!", "info");
//					//这里在后面加true,将会绕过onBeforeClose事件,弹出框直接关闭
//					$('#myDlg').dialog("close", true);
				});
			}
		} , '-', {
			text : '查看',
			iconCls : 'icon-edit',
			handler : function() {
				var row = $("#annualplantable").datagrid('getSelected');
				if (row == null) {
					alert("请选择要查看的内容！");
					return;
				} else {
					var id=row.projectid;
					if(id==undefined){
						return;
					}
					window.localStorage.setItem("recordid",id);
					window.location.href="querycontent.html";
					
				}

			}
		}],
		onAfterEdit : function(rowIndex, rowData, changes) {
			editRow = undefined;
		},
		onDblClickRow : function(rowIndex, rowData) {
			$.ajax({
				url : 'getauthority',
				data : null,
				dataType : "json",
				success : function(data) {
					var d = eval("(" + data + ")");
					var au = d.authority;
					if (au == -1) {
						alert("请先登录！");
						window.location.href = "login.html";
						return;
					} else if (au == 1) {
						alert("对不起您没有修改的权限！");
					} else if (au == 2) {
						if (editRow != undefined) {
							$("#annualplantable").datagrid('endEdit', editRow);
						}
						if (editRow == undefined) {
							$("#annualplantable").datagrid('beginEdit', rowIndex);
							editRow = rowIndex;
						}
					}
					return d.authority;
				},
				error : function(e) {
					alert("服务器出错……");
				},
			});
		}
	});
}
function deleteData(){
	var rows=$("#annualplantable").datagrid('getSelected');
	var projectid=rows.projectid;
	
	var data = "deleteprojectid="+projectid;
//	alert(rowstr);
	$.ajax({
		url : 'updateannualplan',
		data : data,
		datatype : "json",
		success : function(value2) {
			alert(value2==null? "return null":value2.toString());
//			$('#dg').datagrid('loadData', value2);
			alert("删除返回成功");
		},
		error : function(e) {
			alert(e.toString());
		}
	})
	
}
function updateData(){
	var rows=$("#annualplantable").datagrid('getSelected');
	var row=[{
		"count":document.getElementById("shebeishuliang").value,
		"frequency":document.getElementById("jianxiucishu").value,
		"machineid":document.getElementById("shebeiid").value,
		"machinename":document.getElementById("shebeimingcheng").value,
		"machineposition":document.getElementById("shebeisuozaidi").value,
		"note":document.getElementById("beizhu").value,
		"number":document.getElementById("shunhao").value,
		"projectid":document.getElementById("shunhao").value,
		"record_table":document.getElementById("jilubiaogeshi").value,
		"unit":document.getElementById("danwei").value,
		"workcontent":document.getElementById("gongzuoneirong").value,
		"workmonth":document.getElementById("jianxiushijian").value,
		"projectid":rows.projectid
	}];
	var rowstr = JSON.stringify(row);
//	alert(rowstr);
	$.ajax({
		url : 'updateannualplan',
		data : {'newdata':rowstr},
		datatype : "json",
		success : function(value2) {
//			//alert(value2==null?'':value2.toString());
//			$('#dg').datagrid('loadData', value2);
			alert("保存返回成功");
		},
		error : function(e) {
			alert(e.toString());
		}
	})
}

function addData(){
	var tableid=window.localStorage.getItem("tableid");
//	$("#annualplanlisttable").datagrid('endEdit', editRow);
	//如果调用acceptChanges(),使用getChanges()则获取不到编辑和新增的数据。
	//使用JSON序列化datarow对象，发送到后台。
	var row=[{
		"count":document.getElementById("shebeishuliang").value,
		"frequency":document.getElementById("jianxiucishu").value,
		"machineid":document.getElementById("shebeiid").value,
		"machinename":document.getElementById("shebeimingcheng").value,
		"machineposition":document.getElementById("shebeisuozaidi").value,
		"note":document.getElementById("beizhu").value,
		"number":document.getElementById("shunhao").value,
		"projectid":document.getElementById("shunhao").value,
		"record_table":document.getElementById("jilubiaogeshi").value,
		"unit":document.getElementById("danwei").value,
		"workcontent":document.getElementById("gongzuoneirong").value,
		"workmonth":document.getElementById("jianxiushijian").value,
		"pid":tableid
	}];
	var rowstr = JSON.stringify(row);
//	alert(rowstr);
	$.ajax({
		url : 'updateannualplan',
		data : {'newdata':rowstr},
		datatype : "json",
		success : function(value2) {
//			//alert(value2==null?'':value2.toString());
//			$('#dg').datagrid('loadData', value2);
			alert("保存返回成功");
		},
		error : function(e) {
			alert(e.toString());
		}
	})
}

function getAuthority() {
	$.ajax({
		url : 'getauthority',
		data : null,
		dataType : "json",
		success : function(data) {
			var d = eval("(" + data + ")");
			return d.authority;
		},
		error : function(e) {
			alert("服务器出错……");
		},
	});
}

function initModel(row){
	document.getElementById("shunhao").value = row.number;
	document.getElementById("shebeiid").value = row.machineid;
	document.getElementById("shebeimingcheng").value = row.machinename;
	document.getElementById("shebeisuozaidi").value = row.machineposition;
	document.getElementById("gongzuoneirong").value = row.workcontent;
	document.getElementById("danwei").value = row.unit;
	document.getElementById("shebeishuliang").value = row.count;
	document.getElementById("jianxiucishu").value = row.frequency;
	document.getElementById("jianxiushijian").value = row.workmonth;
	document.getElementById("jilubiaogeshi").value = row.record_table;
	document.getElementById("beizhu").value = row.note;
}

function initNullModel(){
	document.getElementById("shunhao").value = "";
	document.getElementById("shebeiid").value = "";
	document.getElementById("shebeimingcheng").value = "";
	document.getElementById("shebeisuozaidi").value = "";
	document.getElementById("gongzuoneirong").value = "";
	document.getElementById("danwei").value = "";
	document.getElementById("shebeishuliang").value = "";
	document.getElementById("jianxiucishu").value = "";
	document.getElementById("jianxiushijian").value = "";
	document.getElementById("jilubiaogeshi").value = "";
	document.getElementById("beizhu").value = "";
}

var column1=[ [ {
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
	width : '100',
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
	width : '100',
	align : 'center',
	editor : 'text'
}, {
	field : 'count',
	title : '数量',
	width : '100',
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
] ];

var column = [ [ {
	field : 'checked',
	title : '选择',
	width : '20',
	checkbox : true
}, {
	field : 'number', //每一列的名字
	width : '100',
	title : '顺号',
	align : 'center'
}, {
	field : 'machineid',
	title : '设备ID',
	width : '100',
	align : 'center'
}, {
	field : 'machinename',
	title : '设备名称',
	width : '100',
	align : 'center'
}, {
	field : 'machineposition',
	title : '设备所在地',
	width : '100',
	align : 'center'
}, {
	field : 'workcontent',
	title : '工作内容',
	width : '100',
	align : 'center'
}, {
	field : 'unit',
	title : '单位',
	width : '100',
	align : 'center'
}, {
	field : 'count',
	title : '数量',
	width : '100',
	align : 'center'
}, {
	field : 'frequency',
	title : '检修次数',
	width : '100',
	align : 'center'
}, {
	field : 'workmonth',
	title : '检修时间',
	width : '100',
	align : 'center'
}, {
	field : 'note',
	title : '备注',
	width : '100',
	align : 'center'
}, {
	field : 'record_table',
	title : '记录表格式',
	width : '100',
	align : 'center'
}
] ]