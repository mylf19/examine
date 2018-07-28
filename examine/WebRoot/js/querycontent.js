$(function() {
	//设置一个全局变量来控制弹出框关闭
//	var closable = false;
	//弹出框的属性设置
	$("#contentdialog").dialog({
		modal : true,
		closable : true,
		closed : true,
		buttons : '#myDlg-buttons',
		resizable:true
	});
})


$(document).ready(function() {
	fLoadTable2();
	show2();
	radiolistener();
	
});
//单选框的监听事件
function radiolistener(){
    $('input[type=radio][name=leipiNewField]').change(function() {
        if (this.value == '正常') {
            alert("Allot Thai Gayo Bhai");
        }
        else if (this.value == '不正常') {
            alert("Transfer Thai Gayo");
        }
    });
}
//从后台异步获取记录表内容和表头
function show2() {
	var recordid=window.localStorage.getItem("recordid");
	
	var data = "data="+recordid;
	$.ajax({
		url : 'queryrecordtable2',
		data : data,
		datatype : "json",
		success : function(value2) {
//			alert(value2.toString());
			var t=eval('('+value2+')');
			$("#recordcontent").datagrid('loadData',t);
		},
		error : function(e) {
			alert(e.toString());
		}
	})
	$.ajax({
		url : 'queryrecordtable1',
		data : data,
		datatype : "json",
		success : function(value2) {
			alert(value2.toString());
			var t=eval('('+value2+')');
			var tt=t.rows[0];
			loadhead(tt);
		},
		error : function(e) {
			alert(e.toString());
		}
	})
}
//加载记录表表头的内容
function loadhead(myjson){
	
	var tablename=myjson.ctablename,
	table_type=myjson.type,
	machine_name=myjson.machinename,
	machine_location=myjson.machinelocal,
	machine_type=myjson.machinetype,
	examine_time=myjson.examinedate,
	examine_people=myjson.examineworker,
	examine_com=myjson.examineprocon,
	examine_checker=myjson.checker,
	examine_count=myjson.number,
	exmaine_result=myjson.result,
	department_master=myjson.headman;
	
	document.getElementById("tablename").value=tablename;
	document.getElementById("table_type").value=table_type;
	document.getElementById("machine_name").value=machine_name;
	document.getElementById("machine_location").value=machine_location;
	document.getElementById("machine_type").value=machine_type;
	document.getElementById("examine_time").value=examine_time;
	document.getElementById("examine_people").value=examine_people;
	document.getElementById("examine_com").value=examine_com;
	document.getElementById("examine_checker").value=examine_checker;
	document.getElementById("examine_count").value=examine_count;
	document.getElementById("exmaine_result").value=exmaine_result;
	document.getElementById("department_master").value=department_master;
	
	//这两句应该放到检修人员的角色中
	$("#tablename").attr("readOnly",true); 
	$("#table_type").attr("readOnly",true); 
}

function fLoadTable2() {
	var editRow = undefined;
	$('#recordcontent').datagrid({
		url : "",
		title : '记录表内容',
		//width :  function(){return document.body.clientWidth*0.9+200},
		height : 600,
		fitColumns : true,
		//对应json数据中的每一列
		columns : [ [ {
			field : 'checked',
			title : '选择',
			width : '20',
			checkbox : true
		},{
			field : 'num',
			title : '序号',
			width : '40',
			align : 'left',
			editor:'text'
		}, {
			field : 'content', //每一列的名字
			width : '300',
			title : '检修内容',
			align : 'left',
			editor:'text'
		},{
			field : 'requirement',
			title : '检修要求',
			width : '300',
			align : 'left',
			editor:'text'
		},{
			field : 'result2',
			title : '检修描述',
			width : '100',
			align : 'left',
			editor:'text'
		} , {
			field : 'result1',
			title : '是否正常',
			width : '100',
			align : 'left',
			editor:'text'
		}, {
			field : 'processed',
			title : '是否已处理',
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
				var total = $('#recordcontent').datagrid('getData').rows.length;
//				if (editRow != undefined) {
//					$("#recordcontent").datagrid('endEdit', editRow);
//				}
//				if (editRow == undefined) {
					$("#recordcontent").datagrid('insertRow', {
						index : total,
						row : {}
					});
//					$("#recordcontent").datagrid('beginEdit', total);
//					editRow = 0;
//				}
			}
		}, '-', {
			text : '保存',
			iconCls : 'icon-save',
			handler : function() {
				$("#recordcontent").datagrid('endEdit', editRow);
				var rows = $("#recordcontent").datagrid('getChanges');
				var rowstr = JSON.stringify(rows);
				var prow=$("#recordtable1").datagrid('getSelected');
				if(prow==null||prow==""){
					alert("表1未选中数据"+prow);
					return;
				}
//				alert(prow.id);
				$.ajax({
					url : 'updaterecord2',
					data : {'newdata':rowstr,'pid':prow.id},
					datatype : "json",
					success : function(value2) {
						$('#dg').datagrid('loadData', value2);
					},
					error : function(e) {
						alert("Ajax返回错误"+e.toString());
					}
				})
//				$.post('/Home/Create', rowstr, function(data) {});
			}
		}, '-', {
			text : '撤销',
			iconCls : 'icon-redo',
			handler : function() {
				editRow = undefined;
				$("#recordcontent").datagrid('rejectChanges');
				$("#recordcontent").datagrid('unselectAll');
			}
		}, '-', {
			text : '删除',
			iconCls : 'icon-remove',
			handler : function() {
				var row = $("#recordcontent").datagrid('getSelected');
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
						$('#recordcontent').datagrid({columns :columns2});
						if (editRow != undefined) {
							$("#recordcontent").datagrid('endEdit', editRow);
						}

						if (editRow == undefined) {
							$("#recordcontent").datagrid('beginEdit', rowIndex);
							editRow = rowIndex;
						}
					}else if(au==2){
						if (editRow != undefined) {
							$("#recordcontent").datagrid('endEdit', editRow);
						}

						if (editRow == undefined) {
							$("#recordcontent").datagrid('beginEdit', rowIndex);
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
			$('#contentdialog').dialog("open");
			var row = $("#recordcontent").datagrid('getSelected');
			document.getElementById("contenttextarea").value=row.content;
			document.getElementById("requiretextarea").value=row.requirement;
			//这两句应该写在检修人员的角色内
//			$("#contenttextarea").attr("readOnly",true); 
//			$("#requiretextarea").attr("readOnly",true); 
			
//			alert("单击:"+rowIndex+"  "+rowData.id);
		}
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
			$("#recordcontent").datagrid('loadData',t);
		},
		error : function(e) {
			alert(e.toString());
		}
	})
}
function confirm(){
	
}
function concel(){
	$('#contentdialog').dialog("close");
}


var columns2 = [ [ {
	field : 'checked',
	title : '选择',
	width : '20',
	checkbox : true
},{
	field : 'num',
	title : '序号',
	width : '40',
	align : 'left'
}, {
	field : 'content', //每一列的名字
	width : '200',
	title : '检修内容',
	align : 'left'
},{
	field : 'requirement',
	title : '检修要求',
	width : '100',
	align : 'left'
},{
	field : 'result2',
	title : '检修描述',
	width : '100',
	align : 'left',
	editor:'text'
} , {
	field : 'result1',
	title : '是否正常',
	width : '100',
	align : 'left',
	editor:'text'
}, {
	field : 'processed',
	title : '是否已处理',
	width : '100',
	align : 'left',
	editor:'text'
}
] ];
