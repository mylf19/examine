package action;

import java.util.List;

import com.alibaba.fastjson.JSONObject;
import com.opensymphony.xwork2.ActionSupport;

import service.DepartmentService;

public class DepartmentAction extends ActionSupport {
	private String level;
	private String departmentname;
	private String result;
	private String pid;
	private String id;

	public String getdepartment() {
		System.out.println("接收到的level为："+level+"\t pid为："+pid+"\t id为："+id);
		if (null != level && !level.equals("")) {
			int lev =1,id2=-1,pid2=-1;
			try {
				lev=Integer.parseInt(level);
				id2=Integer.parseInt(id);
				pid2=Integer.parseInt(pid);
			} catch (Exception e) {
//				e.printStackTrace();
				System.out.println("string转int出错！");
				result="{\"data\":\"error:level 不能被抓换为int\"}";
			}
			List list=new DepartmentService().getDepartmentMods(pid2,id2,lev);
			result=JSONObject.toJSONString(list);
		}
		return SUCCESS;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public String getDepartmentname() {
		return departmentname;
	}

	public void setDepartmentname(String departmentname) {
		this.departmentname = departmentname;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public String getPid() {
		return pid;
	}

	public void setPid(String pid) {
		this.pid = pid;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

}
