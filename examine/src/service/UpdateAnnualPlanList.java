package service;

import db.Mydbconnection;
import model.AnnPlanTabMod;

public class UpdateAnnualPlanList {

	public int updateannualplanlist(AnnPlanTabMod ap){
		Mydbconnection conn=new Mydbconnection();
		String sql="update annual_plan_list set "
				+ "cname='"+ap.getCname()
				+"',dbname='"+ap.getEname()
				+"',team='"+ap.getTeamname()
				+"',operation_group='"+ap.getOperationgroup()
				+"',madeup_people='"+ap.getMakeuppeople()
				+"',madeup_date='"+ap.getMakeupdate()
				+"',table_type='"+ap.getTabletype()
				+"',year='"+ap.getYear()
				+"',result='"+ap.getResult()
				+ "' where tableid="+ap.getId();
		System.out.println(sql);
		int influence=conn.update(sql);
		return influence;
	}
	
	public int insertannualplanlist(AnnPlanTabMod ap){
		Mydbconnection conn=new Mydbconnection();
		String sql="insert into annual_plan_list (cname,dbname,team,operation_group,madeup_people,madeup_date,"
				+ "table_type,year,result) values("
				+ "'"+ap.getCname()+"',"
				+ "'"+ap.getEname()+"',"
				+ "'"+ap.getTeamname()+"',"
				+ "'"+ap.getOperationgroup()+"',"
				+ "'"+ap.getMakeuppeople()+"',"
				+ "'"+ap.getMakeupdate()+"',"
				+ "'"+ap.getTabletype()+"',"
				+ "'"+ap.getYear()+"',"
				+ "'"+ap.getResult()+ "')";
		System.out.println(sql);
		int influence=conn.update(sql);
		return influence;
	}
}
