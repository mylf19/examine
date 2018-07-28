package action;

import com.alibaba.fastjson.JSON;
import com.opensymphony.xwork2.ActionSupport;

import model.AnnPlanTabMod;
import service.CrtAnnPlanSe;

public class CrtAnnPlanAct extends ActionSupport {

	private String cname;
	private String ename;
	private String teamname;
	private String operationgroup;
	private String makeuppeople;
	private String makeupdate;
	private String tabletype;
	private String year;
	private String result;

	public String execute() throws Exception {
		System.out.println(ename);
		AnnPlanTabMod an=new AnnPlanTabMod();
		an.setCname(cname);
		an.setEname(ename);
		an.setTeamname(teamname);
		an.setOperationgroup(operationgroup);
		an.setMakeupdate(makeupdate);
		an.setMakeuppeople(makeuppeople);
		an.setTabletype(tabletype);
		an.setYear(year);
		if(new CrtAnnPlanSe().insertAnnualPlan(an)){
			result="{\"data\":\"success\"}";
		}else {
			result="{\"data\":\"error\"}";
		}
		System.out.println("返回result："+result);
		return SUCCESS;
	}

	public String getResult() {
		return result;
	}

	public String getOperationgroup() {
		return operationgroup;
	}

	public void setOperationgroup(String operationgroup) {
		this.operationgroup = operationgroup;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public String getTeamname() {
		return teamname;
	}

	public void setTeamname(String teamname) {
		this.teamname = teamname;
	}

	public String getMakeuppeople() {
		return makeuppeople;
	}

	public void setMakeuppeople(String makeuppeople) {
		this.makeuppeople = makeuppeople;
	}

	public String getMakeupdate() {
		return makeupdate;
	}

	public void setMakeupdate(String makeupdate) {
		this.makeupdate = makeupdate;
	}

	public String getTabletype() {
		return tabletype;
	}

	public void setTabletype(String tabletype) {
		this.tabletype = tabletype;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}
	
	
}
