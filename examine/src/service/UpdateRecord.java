package service;

import db.Mydbconnection;
import model.AnnPlanMod;
import model.RecordAnnualMod;
import model.RecordContentMod;

public class UpdateRecord {
	
	
	public int updateRecord1(RecordAnnualMod ra){
		Mydbconnection conn=new Mydbconnection();
		String sql;
		if(ra.getPid()==null){
			sql="update record_annual_2018_shwg set "
					+"ctable_name='"+ra.getCtablename()
					+"',machine_name='"+ra.getMachinename()
					+"',machine_local='"+ra.getMachinelocal()
					+"',machine_type='"+ra.getMachinetype()
					+"',examine_date='"+ra.getExaminedate()
					+"',examine_worker='"+ra.getExamineworker()
					+"',headman='"+ra.getHeadman()
					+"',check_suggestion='"+ra.getChecksuggestion()
					+"',checker='"+ra.getChecker()
					+"',type='"+ra.getType()
					+"',number='"+ra.getNumber()
					+"',examine_procon='"+ra.getExamineprocon()
					+"',result='"+ra.getResult()
					+ "' where id="+ra.getId();
		}else {
			sql="update record_annual_2018_shwg set "
					+"pid="+ra.getPid()
					+",ctable_name='"+ra.getCtablename()
					+"',machine_name='"+ra.getMachinename()
					+"',machine_local='"+ra.getMachinelocal()
					+"',machine_type='"+ra.getMachinetype()
					+"',examine_date='"+ra.getExaminedate()
					+"',examine_worker='"+ra.getExamineworker()
					+"',headman='"+ra.getHeadman()
					+"',check_suggestion='"+ra.getChecksuggestion()
					+"',checker='"+ra.getChecker()
					+"',type='"+ra.getType()
					+"',number='"+ra.getNumber()
					+"',examine_procon='"+ra.getExamineprocon()
					+"',result='"+ra.getResult()
					+ "' where id="+ra.getId();
		}
		System.out.println(sql);
		int influence=conn.update(sql);
		return influence;
	}
	
	public int updateRecord2(RecordContentMod ra){
		Mydbconnection conn=new Mydbconnection();
		String sql="";
		if(ra.getPid()==""||ra.getPid()==null){
			sql="update record_content_annual_2018_shwg set "
					+"content='"+ra.getContent()
					+"',num="+ra.getNum()
					+",processed='"+ra.getProcessed()
					+"',record_table='"+ra.getRecordtable()
					+"',requirement='"+ra.getRequirement()
					+"',result1='"+ra.getResult1()
					+"',result2='"+ra.getResult2()
					+ "' where id="+ra.getId();			
		}else {
			sql="update record_content_annual_2018_shwg set "
				+"content='"+ra.getContent()
				+"',num="+ra.getNum()
				+",pid="+ra.getPid()
				+",processed='"+ra.getProcessed()
				+"',record_table='"+ra.getRecordtable()
				+"',requirement='"+ra.getRequirement()
				+"',result1='"+ra.getResult1()
				+"',result2='"+ra.getResult2()
				+ "' where id="+ra.getId();
		}
		System.out.println(sql);
		int influence=conn.update(sql);
		return influence;
	}
	
	public int insertRecord2(RecordContentMod ra){
		Mydbconnection conn=new Mydbconnection();
		String sql="";
		if(ra.getPid()==""||ra.getPid()==null){
			sql="insert into record_content_annual_2018_shwg (content,num,processed,record_table,requirement,result1,result2)"
					+"values ('"+ra.getContent()+"',"
					+ ""+ra.getNum()+","
					+ "'"+ra.getProcessed()+"',"
					+ "'"+ra.getRecordtable()+"',"
					+ "'"+ra.getRequirement()+"',"
					+ "'"+ra.getResult1()+"',"
					+ "'"+ra.getResult2()+ "')";			
		}else {
			sql="insert into record_content_annual_2018_shwg (content,num,pid,processed,record_table,requirement,result1,result2)"
					+"values ('"+ra.getContent()+"',"
					+ ""+ra.getNum()+","
					+ ""+ra.getPid()+","
					+ "'"+ra.getProcessed()+"',"
					+ "'"+ra.getRecordtable()+"',"
					+ "'"+ra.getRequirement()+"',"
					+ "'"+ra.getResult1()+"',"
					+ "'"+ra.getResult2()+ "')";
		}
		System.out.println(sql);
		int influence=conn.update(sql);
		return influence;
//		return 0;
	}
}
