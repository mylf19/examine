package service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.jsp.jstl.sql.Result;

import db.Mydbconnection;
import model.AnnPlanMod;

public class PredictionServer {

	public List<AnnPlanMod> queryAnnPred(int currentmonth) {
		Mydbconnection conn = new Mydbconnection();
		List<AnnPlanMod> list = new ArrayList<AnnPlanMod>();
		Result re = conn.queryGetResultSet2("select * from annual_plan_2018_shwg where workmonth like '%"+currentmonth+"%'");
		if (re != null && re.getRowCount() != 0) {
			for (int i = 0; i < re.getRowCount(); i++) {
				Map row = re.getRows()[i];
				AnnPlanMod ap = new AnnPlanMod();
				// System.out.println(row.get("projectid") + "--" +
				// row.get("number") + "--" + row.get("machineid") + "--"
				// + row.get("machinename") + "--" + row.get("machineposition")
				// + "--" + row.get("workcontent") + "--"
				// + row.get("unit") + "--" + row.get("count") + "--" +
				// row.get("frequency") + "--"
				// + row.get("workmonth") + "--" + row.get("note") + "--" +
				// row.get("record_table"));
				ap.setProjectid(row.get("projectid") == null ? "" : row.get("projectid").toString());
				ap.setNumber(row.get("number") == null ? "" : row.get("number").toString());
				ap.setMachineid(row.get("machineid") == null ? "" : row.get("machineid").toString());
				ap.setMachinename(row.get("machinename") == null ? "" : row.get("machinename").toString());
				ap.setMachineposition(row.get("machineposition") == null ? "" : row.get("machineposition").toString());
				ap.setMachineposition(row.get("machineposition") == null ? "" : row.get("machineposition").toString());
				ap.setWorkcontent(row.get("workcontent") == null ? "" : row.get("workcontent").toString());
				ap.setUnit(row.get("unit") == null ? "" : row.get("unit").toString());
				ap.setCount(row.get("count") == null ? "" : row.get("count").toString());
				ap.setFrequency(row.get("frequency") == null ? "" : row.get("frequency").toString());
				ap.setWorkmonth(row.get("workmonth") == null ? "" : row.get("workmonth").toString());
				ap.setNote(row.get("note") == null ? "" : row.get("note").toString());
				ap.setRecord_table(row.get("record_table") == null ? "" : row.get("record_table").toString());
				list.add(ap);
			}
		}
		return list;
	}
}
