function setIframe(address) {
	$('#frameBord').attr('src', address);
}
var setting = {
	view : {
		dblClickExpand : false,
		showLine : false
	},
	data : {
		simpleData : {
			enable : true
		}
	},
	callback : {
		onClick : onClick
	}
};

var zNodes = [
	{
		id : 1,
		pId : 0,
		name : "检修信息系统",
		open : true,
		iconOpen : "css/zTreeStyle/img/diy/1_close.png",
		iconClose : "css/zTreeStyle/img/diy/1_open.png",
		url : "welcome.html",
		target : "frameBord"
	},
	{
		id : 11,
		pId : 1,
		name : "查看信息",
		open : true,
		url : "reportSystem.html",
		target : "frameBord",
		icon : "css/zTreeStyle/img/diy/13.png"
	},
	{
		id : 111,
		pId : 11,
		name : "年表",
		open : false,
		url : "queryannualplanlist.html",
		target : "frameBord",
		icon : "css/zTreeStyle/img/diy/3.png"
	},
	{
		id : 1111,
		pId : 111,
		name : "计划表",
		open : true,
		url : "queryannualplan.html",
		target : "frameBord",
		icon : "css/zTreeStyle/img/diy/2.png"
	},
	{
		id : 1112,
		pId : 111,
		name : "记录表",
		open : true,
		url : "queryrecord.html",
		target : "frameBord",
		icon : "css/zTreeStyle/img/diy/2.png"
	},
	{
		id : 112,
		pId : 11,
		name : "月表",
		open : false,
		url : "",
		target : "frameBord",
		icon : "css/zTreeStyle/img/diy/4.png"
	},
	{
		id : 1121,
		pId : 112,
		name : "计划表",
		open : true,
		url : "",
		target : "frameBord",
		icon : "css/zTreeStyle/img/diy/2.png"
	},
	{
		id : 1122,
		pId : 112,
		name : "记录表",
		open : true,
		url : "",
		target : "frameBord",
		icon : "css/zTreeStyle/img/diy/2.png"
	},{
		id : "13",
		pId : "1",
		name : "完成信息统计",
		open : true,
		url : "",
		target : "frameBord",
		icon : "css/zTreeStyle/img/diy/8.png"
	},{
		id : 14,
		pId : 1,
		name : "过期申请",
		open : true,
		url : "createapply.html",
		target : "frameBord",
		icon : "css/zTreeStyle/img/diy/2.png"
	}
];

function onClick(e, treeId, treeNode) {
	var zTree = $.fn.zTree.getZTreeObj("treeDemo");
//	zTree.expandNode(treeNode);
}
$(document).ready(function() {
	$.ajax({
		url : 'getauthority',
		data : null,
		dataType : "json",
		success : function(data) {
			var d = eval("(" + data + ")");
			var au=d.authority;
			if(au==-1){
				alert("请先登录！");
				window.location.href="login.html";
			}else{
				$.fn.zTree.init($("#treeDemo"), setting, zNodes);
			}
		},
		error : function(e) {
			alert("服务器出错……");
		},
	});
});