package action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.alibaba.fastjson.JSON;
import com.opensymphony.xwork2.ActionSupport;

import db.Mydbconnection;
import freemarker.template.utility.Execute;
import model.DataModel;

public class TestAction extends ActionSupport {

	private String result;
	private String starttime;
	private String endtime;
	private String msisdn;

	@Override
	public String execute() throws Exception {
		Mydbconnection conn = new Mydbconnection();
		List<DataModel> list = conn.queryLineData("SELECT NEName,NEType,BrdID,PortNO,EndTime,`Value` from schedule_pfm_sdh_20170506084052476 "
				+ "WHERE EventName LIKE '输入光功率当前值' AND EndTime BETWEEN '"
				+ starttime+" 10:00:00+08:00' and '"+endtime+ " 10:00:00+08:00' ORDER BY EndTime");
		// String str = list.get(0).getDate();
		// System.out.println(str + "=======================");
 		result = JSON.toJSONString(list);
		System.out.println("1111111"+result + "\n" + starttime + "\n" + endtime + "\n" + msisdn);
		
		return SUCCESS;
	}
	// Map<String, String> o2j=new HashMap<String, String>();

	public static void main(String[] args) {
		TestAction t = new TestAction();
		try {
			t.execute();
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public String getStarttime() {
		return starttime;
	}

	public void setStarttime(String starttime) {
		this.starttime = starttime;
	}

	public String getEndtime() {
		return endtime;
	}

	public void setEndtime(String endtime) {
		this.endtime = endtime;
	}

	public String getMsisdn() {
		return msisdn;
	}

	public void setMsisdn(String msisdn) {
		this.msisdn = msisdn;
	}

}
