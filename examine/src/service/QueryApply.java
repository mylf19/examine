package service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.jsp.jstl.sql.Result;

import db.Mydbconnection;
import model.AnnPlanMod;

public class QueryApply {
	
	
	public Map<String, String> queryApply(String tablename,String column) {
		Mydbconnection conn = new Mydbconnection();
		Map<String, String> my=new HashMap<String, String>();
		Result re = conn.queryGetResultSet2("select "+column+" from "+tablename+"annual_plan_2018_shwg");
		if (re != null && re.getRowCount() != 0) {
			for (int i = 0; i < re.getRowCount(); i++) {
				Map row = re.getRows()[i];
				AnnPlanMod ap=new AnnPlanMod();
				ap.setProjectid(row.get("projectid")==null? "":row.get("projectid").toString());
				my.put(i+"", row.get(column).toString());
			}
		}
		return my;
	}

}
