var editRow = undefined;
var editRow2 = undefined;

function show() {
	var data = "data=data";
	$.ajax({
		url : 'queryannualplanlist',
		data : data,
		datatype : "json",
		success : function(value2) {
//			alert(value2.toString());
			var t=eval('('+value2+')');
			$("#annualplanlisttable").datagrid('loadData',t);
		},
		error : function(e) {
			alert(e.toString());
		}
	})
//	show();
}

function fLoadTable() {
	$('#annualplanlisttable').datagrid({
		url : "",
		title : '年计划表列表',
		width : 1000,
		height : 600,
		fitColumns : true,

		//对应json数据中的每一列
		columns : [ [ {
			field : 'checked',
			title : '选择',
			width : '20',
			checkbox : true
		},{
			field : 'cname', //每一列的名字
			width : '300',
			title : '中文表名',
			align : 'center',
			editor: 'text'
		}, {
			field : 'ename',
			title : '数据库表名',
			width : '100',
			align : 'center',
			editor: 'text'
		}, {
			field : 'teamname',
			title : '工队名称',
			width : '100',
			align : 'center',
			editor: 'text'
		}, {
			field : 'operationgroup',
			title : '作业组名称',
			width : '100',
			align : 'center',
			editor: 'text'
		}, {
			field : 'makeuppeople',
			title : '编制人',
			width : '100',
			align : 'center',
			editor: 'text'
		}, {
			field : 'makeupdate',
			title : '编制日期',
			width : '100',
			align : 'center',
			editor: 'text'
		}, {
			field : 'tabletype',
			title : '表格编号',
			width : '100',
			align : 'center',
			editor: 'text'
		}, {
			field : 'year',
			title : '对应年度',
			width : '100',
			align : 'center',
			editor: 'text'
		}, {
			field : 'id',
			title : 'ID',
			width : '100',
			align : 'center',
			editor: 'text'
		}
		] ],
		idField : 'id',
		loadMsg : 'Processing, please wait …',
		pagination : true,
		toolbar : [ {
			text : '添加',
			iconCls : 'icon-add',
			handler : function() {
				var total = $('#annualplanlisttable').datagrid('getData').rows.length;
//				if (editRow != undefined) {
//					$("#annualplanlisttable").datagrid('endEdit', editRow);
//				}
//				if (editRow == undefined) {
					$("#annualplanlisttable").datagrid('insertRow', {
						index : total,
						row : {}
					});
//
//					$("#annualplanlisttable").datagrid('beginEdit', total);
//					editRow = 0;
//				}
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
//				alert(rowstr);
				$.ajax({
					url : 'updateannualplanlist',
					data : {'newdata':rowstr},
					datatype : "json",
					success : function(value2) {
//						//alert(value2==null?'':value2.toString());
//						$('#dg').datagrid('loadData', value2);
						alert("保存返回成功");
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
						alert("对不起您没有修改权限！");
					}else if(au==2){
						if (editRow != undefined) {
							$("#annualplanlisttable").datagrid('endEdit', editRow);
						}
						if (editRow == undefined) {
							$("#annualplanlisttable").datagrid('beginEdit', rowIndex);
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
//		onClickRow:function(rowIndex,rowData){
//			alert("单击:"+rowIndex+"  "+rowData.ename);
//		},
//		onDblClickRow:function(rowIndex,rowData){
//			alert("双击："+rowIndex+"  "+rowData.ename);
//			window.location.href = "createannualplan.html";
//		},
//		onClickCell:function(rowIndex,field,value){
//			alert("列"+rowIndex+"  "+field+"  "+value);
//		},
//		singleSelect:false
	});
}
function createannualplan(){
	window.location.href="createannualplan.html"
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
function queryannualplan(){
	var selectedrow=$('#annualplanlisttable').datagrid('getSelected');
	if(selectedrow==undefined){
		return;
	}
	var ename=selectedrow.ename;
	window.localStorage.setItem("ename",selectedrow.ename);
	window.localStorage.setItem("tableid",selectedrow.id);
	window.location.href="queryannualplan.html";
	
}
