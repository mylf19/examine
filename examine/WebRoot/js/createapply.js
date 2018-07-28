var s1=undefined,s2=undefined,s3=undefined;
function createapply(){
	
	var select1=document.getElementById('selector1');
	var select2=document.getElementById('selector2');
	var select3=document.getElementById('selector3');
	alert(select.selectedIndex);
	
}
function onchange1(){	
	$.ajax({
		url:'queryannualplanlist2',
		data:null,
		datatype:"json",
		success:function(data){
			$("#selector2").html("");
			var t = eval('(' + data + ')');
			$.each(t,function(key,values){
				$("#selector2").append('<option>' + values + '</option>');
			})
		},
		error:function(e){
			alert(e.toString());
		}
	});
}
function onchange2(){
//	s2=$("#selector2").val();
	var data="data="+$("#selector2").val();
	$.ajax({
		url:'queryannualplan2',
		data:data,
		datatype:"json",
		success:function(data){
			$("#selector3").html("");
			var t = eval('(' + data + ')');
			$.each(t,function(key,values){
				$("#selector3").append('<option value="'+ key +'">' + values + '</option>');
			})
		},
		error:function(e){
			alert(e.toString());
		}
	});
}
function onchange3(){
	s3=$("#selector3").val();
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