$(document).ready(function() {
	fLoadTable1();
	show1();
});

function show1() {
	var data = "data=1";
	$.ajax({
		url : 'queryrecordtable1',
		data : data,
		datatype : "json",
		success : function(value2) {
//			alert(value2.toString());
			var t=eval('('+value2+')');
			$("#recordtable1").datagrid('loadData',t);
		},
		error : function(e) {
			alert(e.toString());
		}
	})
}
//$('#recordtable1').css("overflow-x","scroll");
function fLoadTable1() {
	var editRow = undefined;
	$('#recordtable1').datagrid({
		url : "",
		title : '记录表',
		//width : 1200,
		height : 600,
		fitColumns : true,
		//对应json数据中的每一列
		columns : [ [ {
			field : 'checked',
			title : '选择',
			width : '20',
			checkbox : true
		}, {
			field : 'ctablename',
			title : '记录表名',
			width : '200',
			align : 'left',
			editor:'text'			
		}, {
			field : 'type',
			title : '记录表格式',
			width : '100',
			align : 'left',
			editor:'text'
		},{
			field : 'machinename',
			title : '设备名称',
			width : '100',
			align : 'left',
			editor:'text'
		},{
			field : 'machinelocal',
			title : '设备所在地',
			width : '100',
			align : 'left',
			editor:'text'
		}, {
			field : 'number',
			title : '设备数量',
			width : '100',
			align : 'left',
			editor:'text'
		}, {
			field : 'machinetype',
			title : '设备类型',
			width : '100',
			align : 'left',
			editor:'text'
		},{
			field : 'examineworker',
			title : '检修人',
			width : '100',
			align : 'left',
			editor:'text'
		}, {
			field : 'examinedate',
			title : '检修日期',
			width : '100',
			align : 'left',
			editor:'text'
		}, {
			field : 'examineprocon',
			title : '检修配合人',
			width : '100',
			align : 'left',
			editor:'text'
		},{
			field : 'headman',
			title : '作业组长',
			width : '100',
			align : 'left',
			editor:'text'
		},{
			field : 'result',
			title : '检修结果',
			width : '100',
			align : 'left',
			editor:'text'
		}, {
			field : 'checker', //每一列的名字
			width : '100',
			title : '验收人',
			align : 'left',
			editor:'text'
		},  {
			field : 'checksuggestion',
			title : '验收意见',
			width : '100',
			align : 'left',
			editor:'text'
		}
		] ],
		idField : 'id',
		loadMsg : 'Processing, please wait …',
		pagination : true,
		toolbar : [ {
			text : '添加',
			iconCls : 'icon-add',
			handler : function() {
				var total = $('#recordtable1').datagrid('getData').rows.length;
//				if (editRow != undefined) {
//					$("#recordtable1").datagrid('endEdit', editRow);
//				}
//				if (editRow == undefined) {
					$("#recordtable1").datagrid('insertRow', {
						index : total,
						row : {}
					});
//
//					$("#recordtable1").datagrid('beginEdit', total);
//					editRow = 0;
//				}
			}
		}, '-', {
			text : '保存',
			iconCls : 'icon-save',
			handler : function() {
				$("#recordtable1").datagrid('endEdit', editRow);

				//如果调用acceptChanges(),使用getChanges()则获取不到编辑和新增的数据。

				//使用JSON序列化datarow对象，发送到后台。
				var rows = $("#recordtable1").datagrid('getChanges');
				var rowstr = JSON.stringify(rows);
//				alert(rowstr);
				
				$.ajax({
					url : 'updaterecord1',
					data : {'newdata':rowstr},
					datatype : "json",
					success : function(value2) {
//						//alert(value2==null?'':value2.toString());
						$('#dg').datagrid('loadData', value2);
					},
					error : function(e) {
						alert(e.toString());
					}
				})
//				$.post('/Home/Create', rowstr, function(data) {});
			}
		}, '-', {
			text : '撤销',
			iconCls : 'icon-redo',
			handler : function() {
				editRow = undefined;
				$("#recordtable1").datagrid('rejectChanges');
				$("#recordtable1").datagrid('unselectAll');
			}
		}, '-', {
			text : '删除',
			iconCls : 'icon-remove',
			handler : function() {
				var row = $("#recordtable1").datagrid('getSelected');

			}
		} ],
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
					}else if(au==1){
						$('#recordtable1').datagrid({columns :columns1});
						if (editRow != undefined) {
							$("#recordtable1").datagrid('endEdit', editRow);
						}

						if (editRow == undefined) {
							$("#recordtable1").datagrid('beginEdit', rowIndex);
							editRow = rowIndex;
						}
					}else if(au==2){
						if (editRow != undefined) {
							$("#recordtable1").datagrid('endEdit', editRow);
						}

						if (editRow == undefined) {
							$("#recordtable1").datagrid('beginEdit', rowIndex);
							editRow = rowIndex;
						}
					}
				},
				error : function(e) {
					alert("服务器出错……");
				},
			});
		},
		onClickRow:function(rowIndex,rowData){
//			alert("单击:"+rowIndex+"  "+rowData.id);
//			reloadcontent(rowData.id);
		},
	});
}

function reloadcontent(pid){
	var data = "data="+pid;
	$.ajax({
		url : 'queryrecordtable2',
		data : data,
		datatype : "json",
		success : function(value2) {
//			alert(value2.toString());
			var t=eval('('+value2+')');
			$("#recordtable2").datagrid('loadData',t);
		},
		error : function(e) {
			alert(e.toString());
		}
	})
}

var columns1= [ [ {
	field : 'checked',
	title : '选择',
	width : '20',
	checkbox : true
}, {
	field : 'ctablename',
	title : '记录表名',
	width : '100',
	align : 'left'			
}, {
	field : 'type',
	title : '记录表格式',
	width : '100',
	align : 'left'
},{
	field : 'machinename',
	title : '设备名称',
	width : '100',
	align : 'left',
	editor:'text'
},{
	field : 'machinelocal',
	title : '设备所在地',
	width : '100',
	align : 'left',
	editor:'text'
}, {
	field : 'number',
	title : '设备数量',
	width : '100',
	align : 'left',
	editor:'text'
}, {
	field : 'machinetype',
	title : '设备类型',
	width : '100',
	align : 'left',
	editor:'text'
},{
	field : 'examineworker',
	title : '检修人',
	width : '100',
	align : 'left',
	editor:'text'
}, {
	field : 'examinedate',
	title : '检修日期',
	width : '100',
	align : 'left',
	editor:'text'
}, {
	field : 'examineprocon',
	title : '检修配合人',
	width : '100',
	align : 'left',
	editor:'text'
},{
	field : 'headman',
	title : '作业组长',
	width : '100',
	align : 'left',
	editor:'text'
},{
	field : 'result',
	title : '检修结果',
	width : '100',
	align : 'left',
	editor:'text'
}, {
	field : 'checker', //每一列的名字
	width : '100',
	title : '验收人',
	align : 'left',
	editor:'text'
},  {
	field : 'checksuggestion',
	title : '验收意见',
	width : '100',
	align : 'left',
	editor:'text'
}
] ];