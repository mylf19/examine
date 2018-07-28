package service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.jsp.jstl.sql.Result;

import db.Mydbconnection;
import model.AnnPlanMod;
import model.AnnPlanTabMod;

public class QueryAnnualList {

	public List<AnnPlanTabMod> queryAnnPlanTabMod(){
		Mydbconnection conn=new Mydbconnection();
		List<AnnPlanTabMod> list=new ArrayList<AnnPlanTabMod>();
		Result re = conn.queryGetResultSet2("select * from annual_plan_list");
		if (re != null && re.getRowCount() != 0) {
			for (int i = 0; i < re.getRowCount(); i++) {
				Map row = re.getRows()[i];
				AnnPlanTabMod ap=new AnnPlanTabMod();
				ap.setCname(row.get("cname")==null? "":row.get("cname").toString());
				ap.setEname(row.get("dbname")==null? "":row.get("dbname").toString());
				ap.setTeamname(row.get("team")==null? "":row.get("team").toString());
				ap.setOperationgroup(row.get("operation_group")==null? "":row.get("operation_group").toString());
				ap.setMakeuppeople(row.get("madeup_people")==null? "":row.get("madeup_people").toString());
				ap.setMakeupdate(row.get("madeup_date")==null? "":row.get("madeup_date").toString());
				ap.setTabletype(row.get("table_type")==null? "":row.get("table_type").toString());
				ap.setYear(row.get("year")==null? "":row.get("year").toString());
				ap.setResult(row.get("result")==null? "":row.get("result").toString());
				ap.setId(row.get("tableid")==null? "":row.get("tableid").toString());
				list.add(ap);
			}
		}
		return list;
	}
}
