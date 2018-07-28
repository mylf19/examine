package service;

import java.sql.SQLException;

import javax.mail.Flags.Flag;

import db.Mydbconnection;
import model.AnnPlanTabMod;

public class CrtAnnPlanSe {

	public boolean insertAnnualPlan(AnnPlanTabMod mod){
		String cname=mod.getCname();
		String ename=mod.getEname();
		String teamname=mod.getTeamname();
		String makeuppeople=mod.getMakeuppeople();
		String makeupdate=mod.getMakeupdate();
		String tabletype=mod.getTabletype();
		String year=mod.getYear();
		String operationgroup=mod.getOperationgroup();
		String sql="insert into annual_plan_list(cname,dbname,team,operation_group,madeup_people,madeup_date,table_type,year) values "
				+ "('"+cname+"','"+ename+"','"+teamname+"','"+operationgroup+"','"+makeuppeople+"','"+makeupdate+"','"+tabletype+"','"+year+"');";
//		boolean d=new Mydbconnection().insert(sql);
//		String sql2="CREATE TABLE `"+ename+"` ("+
//		  "`projectid` int(11) NOT NULL AUTO_INCREMENT,"+
//		  "`number` varchar(10) DEFAULT NULL,"+
//		  "`machineid` varchar(20) DEFAULT NULL,"+
//		  "`machinename` varchar(20) DEFAULT NULL,"+
//		  "`machineposition` varchar(20) DEFAULT NULL,"+
//		  "`workcontent` text,"+
//		  "`unit` varchar(10) DEFAULT NULL,"+
//		  "`count` int(11) DEFAULT NULL,"+
//		  "`frequency` int(11) DEFAULT NULL,"+
//		  "`workmonth` varchar(50) DEFAULT NULL,"+
//		  "`note` text,"+
//		  "`record_table` varchar(20) DEFAULT NULL,"+
//		  "PRIMARY KEY (`projectid`)"+
//		  ") ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;";
//		boolean t=new Mydbconnection().insert(sql2);
		int success=0;
		success=new Mydbconnection().update(sql);
		if(success>0){
			return true;
		}else {
			return false;
		}
//		return d&t;
	}
}
