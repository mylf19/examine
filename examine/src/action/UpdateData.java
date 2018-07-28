package action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.opensymphony.xwork2.ActionSupport;

import model.AnnPlanMod;
import model.AnnPlanTabMod;
import model.RecordAnnualMod;
import model.RecordContentMod;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import service.UpdateAnnualPlan;
import service.UpdateAnnualPlanList;
import service.UpdateRecord;

public class UpdateData extends ActionSupport {

	private String newdata;
	private String result;
	private String pid="";
	private String deleteprojectid=null;

	public String updateannualplanlist() {
		List<Map<String, String>> maplist = new ArrayList<Map<String, String>>();
		if ("" == newdata || null == newdata)
			result = "";
		try {
			maplist = jsonStringToList(newdata);
		} catch (Exception e) {
			System.out.println("json数据解析失败");
			e.printStackTrace();
		}
		int successcount = 0;
		for (int i = 0; i < maplist.size(); i++) {
			AnnPlanTabMod ap = new AnnPlanTabMod();
			Map<String, String> map = maplist.get(i);
			System.out.println(map.toString());
			ap.setCname(map.get("cname") == null ? "" : map.get("cname"));
			ap.setEname(map.get("ename") == null ? "" : map.get("ename"));
			ap.setId(map.get("id") == null ? "" : map.get("id"));
			ap.setMakeupdate(map.get("makeupdate") == null ? "" : map.get("makeupdate"));
			ap.setMakeuppeople(map.get("makeuppeople") == null ? "" : map.get("makeuppeople"));
			ap.setOperationgroup(map.get("operationgroup") == null ? "" : map.get("operationgroup"));
			ap.setResult(map.get("result") == null ? "" : map.get("result"));
			ap.setTabletype(map.get("tabletype") == null ? "" : map.get("tabletype"));
			ap.setTeamname(map.get("teamname") == null ? "" : map.get("teamname"));
			ap.setYear(map.get("year") == null ? "" : map.get("year"));
			if (ap.getId()== "" || ap.getId()== null) {
				if ((new UpdateAnnualPlanList().insertannualplanlist(ap)) > 0) {
					successcount++;
				}
			} else {
				if ((new UpdateAnnualPlanList().updateannualplanlist(ap)) > 0) {
					successcount++;
				}
			}
		}
		result = com.alibaba.fastjson.JSONArray.toJSONString(successcount);
		System.out.println("返回的字符串为" + result);
		return SUCCESS;
	}

	public String updateannualplan() {
		System.out.println("----projectid="+deleteprojectid);
		int successcount = 0;
		if(deleteprojectid!=null){
			if(new UpdateAnnualPlan().deleteannualplan(Integer.parseInt(deleteprojectid), "annual_plan_2018_shwg")>0){
				successcount++;
			}
			result = com.alibaba.fastjson.JSONArray.toJSONString(successcount);
			return SUCCESS;
		}
		List<Map<String, String>> maplist = new ArrayList<Map<String, String>>();
		if ("" == newdata || null == newdata)
			result = "";
		try {
			maplist = jsonStringToList(newdata);
		} catch (Exception e) {
			System.out.println("json数据解析失败");
			e.printStackTrace();
		}
		for (int i = 0; i < maplist.size(); i++) {
			AnnPlanMod ap = new AnnPlanMod();
			Map<String, String> map = maplist.get(i);
			System.out.println("first data to update: "+map.toString());
			ap.setCount(map.get("count") == null ? "" : map.get("count"));
			ap.setFrequency(map.get("frequency") == null ? "" : map.get("frequency"));
			ap.setMachineid(map.get("machineid") == null ? "" : map.get("machineid"));
			ap.setMachinename(map.get("machinename") == null ? "" : map.get("machinename"));
			ap.setMachineposition(map.get("machineposition") == null ? "" : map.get("machineposition"));
			ap.setNote(map.get("note") == null ? "" : map.get("note"));
			ap.setNumber(map.get("number") == null ? "" : map.get("number"));
			ap.setProjectid(map.get("projectid") == null ? "" : map.get("projectid"));
			ap.setRecord_table(map.get("record_table") == null ? "" : map.get("record_table"));
			ap.setUnit(map.get("unit") == null ? "" : map.get("unit"));
			ap.setWorkcontent(map.get("workcontent") == null ? "" : map.get("workcontent"));
			ap.setWorkmonth(map.get("workmonth") == null ? "" : map.get("workmonth"));
			ap.setPid(map.get("pid") == null ? "" : map.get("pid"));
			if (ap.getProjectid() == "" || ap.getProjectid() == null) {
				if ((new UpdateAnnualPlan().updateannualplan(ap)) > 0) {
					successcount++;
				}
			} else {
				if ((new UpdateAnnualPlan().insertannualplan(ap)) > 0) {
					successcount++;
				}
			}
		}
		result = com.alibaba.fastjson.JSONArray.toJSONString(successcount);
		System.out.println("返回前台的字符串为" + result);
		return SUCCESS;
	}
	
	public String updaterecord1() {
		List<Map<String, String>> maplist = new ArrayList<Map<String, String>>();
		if ("" == newdata || null == newdata)
			result = "";
		try {
			maplist = jsonStringToList(newdata);
		} catch (Exception e) {
			System.out.println("json数据解析失败");
			e.printStackTrace();
		}
		int successcount = 0;
		for (int i = 0; i < maplist.size(); i++) {
			RecordAnnualMod ra = new RecordAnnualMod();
			Map<String, String> map = maplist.get(i);
			System.out.println("data to update: "+map.toString());
			ra.setPid(map.get("pid") == null ? "" : map.get("pid"));
			ra.setCtablename(map.get("ctablename") == null ? "" : map.get("ctablename"));
			ra.setMachinename(map.get("machinename") == null ? "" : map.get("machinename"));
			ra.setMachinelocal(map.get("machinelocal") == null ? "" : map.get("machinelocal"));
			ra.setMachinetype(map.get("machinetype") == null ? "" : map.get("machinetype"));
			ra.setExaminedate(map.get("examinedate") == null ? "" : map.get("examinedate"));
			ra.setExamineworker(map.get("examineworker") == null ? "" : map.get("examineworker"));
			ra.setHeadman(map.get("headman") == null ? "" : map.get("headman"));
			ra.setChecksuggestion(map.get("checksuggestion") == null ? "" : map.get("checksuggestion"));
			ra.setChecker(map.get("checker") == null ? "" : map.get("checker"));
			ra.setType(map.get("type") == null ? "" : map.get("type"));
			ra.setNumber(map.get("number") == null ? "" : map.get("number"));
			ra.setExamineprocon(map.get("examineprocon") == null ? "" : map.get("examineprocon"));
			ra.setResult(map.get("result") == null ? "" : map.get("result"));
			ra.setId(map.get("id") == null ? "" : map.get("id"));
			if (ra.getId() == "" || ra.getId() == null) {
				if ((new UpdateRecord().updateRecord1(ra)) > 0) {
					successcount++;
				}
			} else {
				if ((new UpdateRecord().updateRecord1(ra)) > 0) {
					successcount++;
				}
			}
		}
		result = com.alibaba.fastjson.JSONArray.toJSONString(successcount);
		System.out.println("返回前台的字符串为" + result);
		return SUCCESS;
	}

	public String updaterecord2() {
//		String ppp=pid;
		int successcount = 0;
		List<Map<String, String>> maplist = new ArrayList<Map<String, String>>();
		if ("" == newdata || null == newdata)
			result = "";
		try {
			maplist = jsonStringToList(newdata);
		} catch (Exception e) {
			System.out.println("json数据解析失败");
			e.printStackTrace();
		}
		if(pid==""||pid==null){
			System.out.println("insert--");
		}else {
			System.out.println("update--");
		}
		for (int i = 0; i < maplist.size(); i++) {
			RecordContentMod ra = new RecordContentMod();
			Map<String, String> map = maplist.get(i);
			System.out.println("要更新的数据是: pid:"+pid+" data:"+map.toString());

			ra.setContent(map.get("content") == null ? "" : map.get("content"));
			ra.setNum(map.get("num") == null ? "" : map.get("num"));
			ra.setProcessed(map.get("processed") == null ? "" : map.get("processed"));
			ra.setRecordtable(map.get("recordtable") == null ? "" : map.get("recordtable"));
			ra.setRequirement(map.get("requirement") == null ? "" : map.get("requirement"));
			ra.setResult1(map.get("result1") == null ? "" : map.get("result1"));
			ra.setResult2(map.get("result2") == null ? "" : map.get("result2"));
			
			if(map.get("id")==null||map.get("id")==""){
				if (map.get("pid")==null||map.get("pid")=="") {
					if(pid==null||pid==""){
						if ((new UpdateRecord().insertRecord2(ra)) > 0){successcount++;}
						//insert插入一条没有id,没有旧pid，没有新pid的记录
					}else {
						ra.setPid(pid);
						if ((new UpdateRecord().insertRecord2(ra)) > 0){successcount++;}
						//insert插入一条没有id，没有旧pid，有新pid的记录
					}
				}else {
					ra.setPid(map.get("pid"));
					if ((new UpdateRecord().insertRecord2(ra)) > 0){successcount++;}
					//insert插入一条没有id,有旧pid的记录
				}
			}else {
				ra.setId(map.get("id"));
				if (map.get("pid")==null||map.get("pid")=="") {
					if(pid==null||pid==""){
						if((new UpdateRecord().updateRecord2(ra))>0){successcount++;}
						//update一个有id，没有旧pid，没有新pid的记录
					}else {
						ra.setPid(pid);
						if((new UpdateRecord().updateRecord2(ra))>0){successcount++;}
						//update更新一个有id，没有旧pid，有新pid的记录
					}
				}else {
					ra.setId(map.get("id"));
					if((new UpdateRecord().updateRecord2(ra))>0){successcount++;}
					//update更新一个有id，有旧pid的记录
				}
			}
//			if (ra.getId() == "" || ra.getId() == null) {
//				if ((new UpdateRecord().insertRecord22(ra)) > 0) {
//					successcount++;
//				}
//			} else {
//				if ((new UpdateRecord().updateRecord2(ra)) > 0) {
//					successcount++;
//				}
//			}
		}
		result = com.alibaba.fastjson.JSONArray.toJSONString(successcount);
		System.out.println("返回前台的字符串为:" + result);
		return SUCCESS;
	}
	
	public String getNewdata() {
		return newdata;
	}

	public void setNewdata(String newdata) {
		this.newdata = newdata;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	private static List<Map<String, String>> jsonStringToList(String rsContent) throws Exception {
		JSONArray arry = JSONArray.fromObject(rsContent);
//		System.out.println("json字符串内容如下");
		// System.out.println(arry);
		List<Map<String, String>> rsList = new ArrayList<Map<String, String>>();
		for (int i = 0; i < arry.size(); i++) {
			JSONObject jsonObject = arry.getJSONObject(i);
			Map<String, String> map = new HashMap<String, String>();
			for (Iterator<?> iter = jsonObject.keys(); iter.hasNext();) {
				String key = (String) iter.next();
				String value = jsonObject.get(key).toString();
				map.put(key, value);
			}
			rsList.add(map);
		}
		return rsList;
	}

	public String getPid() {
		return pid;
	}

	public void setPid(String pid) {
		this.pid = pid;
	}

	public String getDeleteprojectid() {
		return deleteprojectid;
	}

	public void setDeleteprojectid(String deleteprojectid) {
		this.deleteprojectid = deleteprojectid;
	}
}
