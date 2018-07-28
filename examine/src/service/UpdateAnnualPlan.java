package service;

import javax.ejb.Init;

import db.Mydbconnection;
import model.AnnPlanMod;

public class UpdateAnnualPlan {

	public int updateannualplan(AnnPlanMod ap){
		Mydbconnection conn=new Mydbconnection();
		String sql="update annual_plan_2018_shwg set "
				+ "number='"+ap.getNumber()
				+"',machineid='"+ap.getMachineid()
				+"',machinename='"+ap.getMachinename()
				+"',machineposition='"+ap.getMachineposition()
				+"',workcontent='"+ap.getWorkcontent()
				+"',unit='"+ap.getUnit()
				+"',count="+ap.getCount()
				+",frequency="+ap.getFrequency()
				+",workmonth='"+ap.getWorkmonth()
				+"',note='"+ap.getNote()
				+"',record_table='"+ap.getRecord_table()
				+ "' where projectid="+ap.getProjectid();
		System.out.println(sql);
		int influence=conn.update(sql);
		return influence;
	}
	
	public int deleteannualplan(int projectid,String tablename){
		Mydbconnection conn=new Mydbconnection();
		String sql="delete from "+tablename+" where projectid="+projectid;
		System.out.println(sql);
		int influence=conn.update(sql);
		return influence;
	}
	
	public int insertannualplan(AnnPlanMod ap){
		Mydbconnection conn=new Mydbconnection();
		String sql="insert into annual_plan_2018_shwg (number,machineid,machinename,machineposition,workcontent,unit,count,"
				+ "frequency,workmonth,note,record_table,pid) values("
				+ "'"+ap.getNumber()+"',"
				+ "'"+ap.getMachineid()	+"',"
				+ "'"+ap.getMachinename()+"',"
				+ "'"+ap.getMachineposition()+"',"
				+ "'"+ap.getWorkcontent()+"',"
				+ "'"+ap.getUnit()+"',"
				+ ""+ap.getCount()+","
				+ ""+ap.getFrequency()+","
				+ "'"+ap.getWorkmonth()+"',"
				+ "'"+ap.getNote()+"',"
				+ "'"+ap.getRecord_table()+ "',"
				+ ""+ap.getPid()+ ")";
		System.out.println(sql);
		int influence=conn.update(sql);
		return influence;
	}
}
