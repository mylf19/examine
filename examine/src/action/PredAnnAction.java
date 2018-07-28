package action;

import java.util.Calendar;

import com.alibaba.fastjson.JSON;
import com.opensymphony.xwork2.ActionSupport;

import service.PredictionServer;
import service.QueryAnnual;

public class PredAnnAction extends ActionSupport {
	
	private int currentmonth=4;
	private int currentyear=2018;
	private String result;

	public String queryannpred() throws Exception {
		result=JSON.toJSONString(new PredictionServer().queryAnnPred(currentmonth));
//		result=JSON.toJSONString("success");
		result="{\"total\":1,\"rows\":"+result+"}";
		System.out.println(result);
		return SUCCESS;
	}
	public PredAnnAction(){

		Calendar cal=Calendar.getInstance();
		int year=cal.get(Calendar.YEAR);
		int month=cal.get(Calendar.MONTH)+1;
		currentmonth=month;
		currentyear=year;
		System.out.println("当前时间是："+currentyear+"-"+currentmonth);
	}
	
//	public static void main(String [] args){
//		PredYearAction p=new PredYearAction();
//	}
	
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
}
