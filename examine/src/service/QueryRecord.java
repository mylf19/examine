package service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.jsp.jstl.sql.Result;

import db.Mydbconnection;
import model.AnnPlanMod;
import model.RecordAnnualMod;
import model.RecordContentMod;

public class QueryRecord {

	public List<RecordAnnualMod> queryrecord1(int pid) {
		Mydbconnection conn = new Mydbconnection();
		List<RecordAnnualMod> list = new ArrayList<RecordAnnualMod>();
		Result re = conn.queryGetResultSet2("select * from record_annual_2018_shwg");
		if(pid<0){
			re = conn.queryGetResultSet2("select * from record_annual_2018_shwg");
		}else {
			re = conn.queryGetResultSet2("select * from record_annual_2018_shwg where pid="+pid);
		}
		if (re != null && re.getRowCount() != 0) {
			for (int i = 0; i < re.getRowCount(); i++) {
				Map row = re.getRows()[i];
				RecordAnnualMod ap=new RecordAnnualMod();
//				System.out.println(row.get("projectid") + "--" + row.get("number") + "--" + row.get("machineid") + "--"
//						+ row.get("machinename") + "--" + row.get("machineposition") + "--" + row.get("workcontent") + "--"
//						+ row.get("unit") + "--" + row.get("count") + "--" + row.get("frequency") + "--"
//						+ row.get("workmonth") + "--" + row.get("note") + "--" + row.get("record_table"));
				ap.setChecker(row.get("checker")==null? "":row.get("checker").toString());
				ap.setChecksuggestion(row.get("check_suggestion")==null? "":row.get("check_suggestion").toString());
				ap.setCtablename(row.get("ctable_name")==null? "":row.get("ctable_name").toString());
				ap.setExaminedate(row.get("examine_date")==null? "":row.get("examine_date").toString());
				ap.setExamineprocon(row.get("examine_procon")==null? "":row.get("examine_procon").toString());
				ap.setExamineworker(row.get("examine_worker")==null? "":row.get("examine_worker").toString());
				ap.setHeadman(row.get("headman")==null? "":row.get("headman").toString());
				ap.setId(row.get("id")==null? "":row.get("id").toString());
				ap.setMachinelocal(row.get("machine_local")==null? "":row.get("machine_local").toString());
				ap.setMachinename(row.get("machine_name")==null? "":row.get("machine_name").toString());
				ap.setMachinetype(row.get("machine_type")==null? "":row.get("machine_type").toString());
				ap.setNumber(row.get("number")==null? "":row.get("number").toString());
				ap.setPid(row.get("pid")==null? "":row.get("pid").toString()); 
				ap.setResult(row.get("result")==null? "":row.get("result").toString()); 
				ap.setType(row.get("type")==null? "":row.get("type").toString()); 
				list.add(ap);
			}
		}
		return list;
	}
	public List<RecordContentMod> queryrecord2(int pid) {
		Mydbconnection conn = new Mydbconnection();
		List<RecordContentMod> list = new ArrayList<RecordContentMod>();
		Result re = conn.queryGetResultSet2("select * from record_content_annual_2018_shwg where pid="+pid);
		if (re != null && re.getRowCount() != 0) {
			for (int i = 0; i < re.getRowCount(); i++) {
				Map row = re.getRows()[i];
				RecordContentMod ap=new RecordContentMod();
//				System.out.println(row.get("projectid") + "--" + row.get("number") + "--" + row.get("machineid") + "--"
//						+ row.get("machinename") + "--" + row.get("machineposition") + "--" + row.get("workcontent") + "--"
//						+ row.get("unit") + "--" + row.get("count") + "--" + row.get("frequency") + "--"
//						+ row.get("workmonth") + "--" + row.get("note") + "--" + row.get("record_table"));
				ap.setContent(row.get("content")==null? "":row.get("content").toString());
				ap.setId(row.get("id")==null? "":row.get("id").toString());
				ap.setNum(row.get("num")==null? "":row.get("num").toString());
				ap.setPid(row.get("pid")==null? "":row.get("pid").toString());
				ap.setProcessed(row.get("processed")==null? "":row.get("processed").toString());
				ap.setRecordtable(row.get("record_table")==null? "":row.get("record_table").toString());
				ap.setRequirement(row.get("requirement")==null? "":row.get("requirement").toString());
				ap.setResult1(row.get("result1")==null? "":row.get("result1").toString());
				ap.setResult2(row.get("result2")==null? "":row.get("result2").toString()); 
				list.add(ap);
			}
		}
		return list;
	}
}
