package action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.enterprise.inject.New;
import javax.servlet.jsp.jstl.sql.Result;

import com.alibaba.fastjson.JSON;
import com.opensymphony.xwork2.ActionSupport;

import db.Mydbconnection;
import model.AnnPlanMod;
import model.AnnPlanTabMod;
import service.QueryAnnual;
import service.QueryAnnualList;
import service.QueryApply;
import service.QueryRecord;

public class QueryData extends ActionSupport {
	private String data=null;
	private String result;
	private String logindata;
	
	public String queryannualplanlist() throws Exception {
		result=JSON.toJSONString(new QueryAnnualList().queryAnnPlanTabMod());
//		result=JSON.toJSONString("success");
		result="{\"total\":1,\"rows\":"+result+"}";
		System.out.println(result);
		return SUCCESS;
	}
	public String queryannualplanlist2() throws Exception {
		List<AnnPlanTabMod> list=new QueryAnnualList().queryAnnPlanTabMod();
		Map<String, String> map=new HashMap<String, String>();
		for(int i=0;i<list.size();i++){
			map.put(""+i, list.get(i).getCname());
		}
		result=JSON.toJSONString(map);
		System.out.println(result);
		return SUCCESS;
	}
	public String queryannualplan() throws Exception {
		System.out.println(data);
		if(data!="undefined"&&data!=null&&!data.equals("null")){
			result=JSON.toJSONString(new QueryAnnual().queryAnnPlanMod(data,"*",null));
		}else {
			result=JSON.toJSONString(new QueryAnnual().queryAnnPlanMod());
	//		result=JSON.toJSONString("success");
			result="{\"total\":1,\"rows\":"+result+"}";
			System.out.println(result);
		}
		return SUCCESS;
	}
	public String queryannualplan2() throws Exception {
		System.out.println(data);
//		List<AnnPlanMod> list=new QueryAnnual().queryAnnPlanMod();
//		Map<String, String> map=new HashMap<String, String>();
//		for(int i=0;i<list.size();i++){
//			map.put(""+i, list.get(i).getMachinename());
//			i++;
//		}
//		result=JSON.toJSONString(map);
//		System.out.println(result);
		String s="";
		Result r=new Mydbconnection().queryGetResultSet2("select ename from annual_plan_list where cname='"+data+"';");
		if (r != null && r.getRowCount() != 0) {
			s= r.getRows()[0].get("cname").toString();
			System.out.println(s+"7777");
		}
		Map<String, String> map=new QueryApply().queryApply(s, "machinename");
		
		return SUCCESS;
	}
	public String queryrecord1() throws Exception {
		System.out.println("接收到的pid为："+data);
		int pid=0;
		try {
			pid=Integer.parseInt(data);
		} catch (Exception e) {
			e.printStackTrace();
			pid=0;
		}
		List list=new QueryRecord().queryrecord1(pid);
		result=JSON.toJSONString(list);
//		result=JSON.toJSONString("success");
		result="{\"total\":"+list.size()+",\"rows\":"+result+"}";
		list.clear();
		System.out.println("queryrecord1:"+result);
		return SUCCESS;
	}
	public String queryrecord2() throws Exception {
		int pid=0;
		try {
			if(data!=null){
				pid=Integer.parseInt(data);
			}
		} catch (Exception e) {
			e.printStackTrace();
			pid=0;
		}
		result=JSON.toJSONString(new QueryRecord().queryrecord2(pid));
//		result=JSON.toJSONString("success");
		result="{\"total\":1,\"rows\":"+result+"}";
		System.out.println(result);
		return SUCCESS;
	}
	public String loginchecker(){
		switch (logindata) {
		case "1":
			result="success";
			break;
		case "2":
			result="failed";
			break;
		case "3":
			result="admin";
			break;
		case "4":
			result="worker";
			break;

		default:
			break;
		}
		return SUCCESS;
	}
	public static void main(String[] arg){
//		System.out.println(JSON.toJSON(new));
		
	}
	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public String getLogindata() {
		return logindata;
	}

	public void setLogindata(String logindata) {
		this.logindata = logindata;
	}
	
	
}
