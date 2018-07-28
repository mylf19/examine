package service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.jsp.jstl.sql.Result;

import db.Mydbconnection;
import model.DepartmentMod;

public class DepartmentService {
	
	public List<DepartmentMod> getDepartmentMods(int pid,int id,int level){
		Mydbconnection con=new Mydbconnection();
		List<DepartmentMod> list=new ArrayList<DepartmentMod>();
		int countzero=0;
		String sql="select * from department where ";
		//若不为空，则将条件追加到查询语句中
		if(pid!=-1){
			if(countzero==0){
				sql=sql+" pid="+pid;
			}else {
				sql=sql+"and pid="+pid;
			}
			countzero++;
		}
		if(id!=-1){
			if(countzero==0){
				sql=sql+" id="+id;
			}else {
				sql=sql+"and id="+id;
			}
			countzero++;
		}
		if(level!=-1){
			if(countzero==0){
				sql=sql+" level="+level;
			}else {
				sql=sql+"and level="+level;
			}
			countzero++;
		}
		//判断是否全都为空，若全都为空，则返回空
		if(countzero==0){
			return null;
		}
		System.out.println("Department sql:"+sql);
		Result re=con.queryGetResultSet2(sql);
		if(re!=null&&re.getRowCount()!=0){
			for(int i=0;i<re.getRowCount();i++){
				Map row=re.getRows()[i];
				DepartmentMod d=new DepartmentMod();
				d.setId(row.get("id").toString());
				d.setPid(row.get("pid").toString());
				d.setDepartmentname(row.get("departmentname").toString());
				d.setLevel(row.get("level").toString());
				list.add(d);
			}
		}
		return list;
	}
}
