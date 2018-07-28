function show() {
	var data = "data=data";
	$.ajax({
		url : 'queryannualplanlist',
		data : data,
		datatype : "json",
		success : function(value2) {
			//			alert(value2.toString());
			var t = eval('(' + value2 + ')');
			$("#annualplanlisttable").datagrid('loadData', t);
		},
		error : function(e) {
			alert(e.toString());
		}
	})
//	show();
}

function fLoadTable() {
	var editRow = undefined;
	$('#annualplanlisttable').datagrid({
		url : "",
		title : '年计划表列表',
		width : 1000,
		height : 300,
		fitColumns : true,
		//对应json数据中的每一列
		columns : [ [ {
			field : 'checked',
			title : '选择',
			width : '20',
			checkbox : true
		}, {
			field : 'cname', //每一列的名字
			width : '100',
			title : '中文表名',
			align : 'center',
			editor:'text'
		}, {
			field : 'ename',
			title : '数据库表名',
			width : '100',
			align : 'center'
		}, {
			field : 'teamname',
			title : '工队名称',
			width : '100',
			align : 'center'
		}, {
			field : 'operationgroup',
			title : '作业组名称',
			width : '100',
			align : 'center'
		}, {
			field : 'makeuppeople',
			title : '编制人',
			width : '100',
			align : 'center'
		}, {
			field : 'makeupdate',
			title : '编制日期',
			width : '100',
			align : 'center'
		}, {
			field : 'tabletype',
			title : '表格编号',
			width : '100',
			align : 'center'
		}, {
			field : 'year',
			title : '对应年度',
			width : '100',
			align : 'center'
		}, {
			field : 'id',
			title : 'ID',
			width : '100',
			align : 'center'
		}
		] ]
	});
}
function createannualplan() {
	window.location.href = "createannualplan.html"
}
function show2() {
	var data = "data=data"
	$.ajax({
		url : 'test2',
		data : data,
		datatype : "json",
		success : function(value2) {
			alert(value2.toString());
			$('#dg').datagrid('loadData', value2);
		},
		error : function(e) {
			alert(e.toString());
		}
	})
}
function addRow() {
	$('#annualplanlisttable').datagrid('insertRow', {
		index : 0,
		row : {
			name : 'new name'
		}
	})

}
var editindex = undefined;
function onclickRow(index) //这是触发行事件
{
	if (endediting()) {
		$('#annualplanlisttable').datagrid('selectRow', index).datagrid('beginedit', index) //其中beginEdit方法为datagrid的方法，具体可以参看api
		editIndex = index; //给editIndex对象赋值，index为当前行的索引
	} else {
		$('#annualplanlisttable').datagrid('selectRow', edtiIndex);
	}
}

function endediting() {
	if (editIndex == undefined) {
		return true;
	} //如果为undefined的话，为真，说明可以编辑
	if ($('#annualplanlisttable').datagrid('validateRow', editIndex)) {
		$('#annualplanlisttable').datagrid('endEdit', editIndex); //当前行编辑事件取消
		editIndex = undefined; return true; //重置编辑行索引对象，返回真，允许编辑
	} else {
		return false;
	} //否则，为假，返回假，不允许编辑
}

function fLoadTable2() {
	var editRow = undefined;
	$('#annualplanlisttable').datagrid({
		url : "",
		title : '年计划表列表',
		width : 1000,
		height : 300,
		fitColumns : true,
		//对应json数据中的每一列
		columns : [ [ {
			field : 'checked',
			title : '选择',
			width : '20',
			checkbox : true
		}, {
			field : 'cname', //每一列的名字
			width : '100',
			title : '中文表名',
			align : 'center',
			editor:'text'
		}, {
			field : 'ename',
			title : '数据库表名',
			width : '100',
			align : 'center',
			editor:'text'
		}, {
			field : 'teamname',
			title : '工队名称',
			width : '100',
			align : 'center',
			editor:'text'
		}, {
			field : 'operationgroup',
			title : '作业组名称',
			width : '100',
			align : 'center',
			editor:'text'
		}, {
			field : 'makeuppeople',
			title : '编制人',
			width : '100',
			align : 'center',
			editor:'text'
		}, {
			field : 'makeupdate',
			title : '编制日期',
			width : '100',
			align : 'center',
			editor:'text'
		}, {
			field : 'tabletype',
			title : '表格编号',
			width : '100',
			align : 'center',
			editor:'text'
		}, {
			field : 'year',
			title : '对应年度',
			width : '100',
			align : 'center',
			editor:'text'
		}, {
			field : 'id',
			title : 'ID',
			width : '100',
			align : 'center'
		}
		] ],
		idField : 'id',
		loadMsg : 'Processing, please wait …',
		pagination : true,
		onClickRow:function(rowIndex,rowData){
//			alert("单击:"+rowIndex+"  "+rowData.ename);
			window.location.href("");
		},
//		onDblClickRow : function(rowIndex, rowData) {
//			alert("双击：" + rowIndex + "  " + rowData.ename);
//			window.location.href = "createannualplan.html";
//		},
		//		onClickCell : function(rowIndex, field, value) {
		//			alert("列" + rowIndex + "  " + field + "  " + value);
		//		},
		//		singleSelect:false
		toolbar : [ {
			text : '添加',
			iconCls : 'icon-add',
			handler : function() {
				var total = $('#annualplanlisttable').datagrid('getData').rows.length;
				if (editRow != undefined) {
					$("#annualplanlisttable").datagrid('endEdit', editRow);
				}
				if (editRow == undefined) {
					$("#annualplanlisttable").datagrid('insertRow', {
						index : total,
						row : {}
					});

					$("#annualplanlisttable").datagrid('beginEdit', 0);
					editRow = 0;
				}
			}
		}, '-', {
			text : '保存',
			iconCls : 'icon-save',
			handler : function() {
				$("#annualplanlisttable").datagrid('endEdit', editRow);

				//如果调用acceptChanges(),使用getChanges()则获取不到编辑和新增的数据。

				//使用JSON序列化datarow对象，发送到后台。
				var rows = $("#annualplanlisttable").datagrid('getChanges');

				var rowstr = JSON.stringify(rows);
				alert(rowstr);
				
				$.ajax({
					url : 'updateannualplanlist',
					data : {'newdata':rowstr},
					datatype : "json",
					success : function(value2) {
						alert(value2.toString());
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
				$("#annualplanlisttable").datagrid('rejectChanges');
				$("#annualplanlisttable").datagrid('unselectAll');
			}
		}, '-', {
			text : '删除',
			iconCls : 'icon-remove',
			handler : function() {
				var row = $("#annualplanlisttable").datagrid('getSelections');

			}
		}, '-', {
			text : '修改',
			iconCls : 'icon-edit',
			handler : function() {
				var row = $("#annualplanlisttable").datagrid('getSelected');
				//				if (row != null) {
				//					if (editRow != undefined) {
				//						$("#annualplanlisttable").datagrid('endEdit', editRow);
				//					}
				//
				//					if (editRow == undefined) {
				//						var index = $("#annualplanlisttable").datagrid('getRowIndex', row);
				//						$("#annualplanlisttable").datagrid('beginEdit', index);
				//						editRow = index;
				//						$("#annualplanlisttable").datagrid('unselectAll');
				//					}
				//				} else {
				//
				//				}
//				$("#annualplanlisttable").datagrid('beginEdit', getRowIndex(row));
				onclickRow(row);
			}
		} ],
		onAfterEdit : function(rowIndex, rowData, changes) {
			editRow = undefined;
		},
		onDblClickRow : function(rowIndex, rowData) {
			if (editRow != undefined) {
				$("#annualplanlisttable").datagrid('endEdit', editRow);
			}

			if (editRow == undefined) {
				$("#annualplanlisttable").datagrid('beginEdit', rowIndex);
				editRow = rowIndex;
			}
		}
	//		,
	//		onClickRow : function(rowIndex, rowData) {
	//			if (editRow != undefined) {
	//				$("#annualplanlisttable").datagrid('endEdit', editRow);
	//
	//			}
	//
	//		}
	});
}