package service;

import java.sql.SQLException;
import java.util.Map;

import javax.servlet.jsp.jstl.sql.Result;

import db.Mydbconnection;
import model.UserMod;

public class UserServer {
	
	// 查询用户名是否已经存在
		public boolean userexist(String username) throws SQLException {
			Mydbconnection db = new Mydbconnection();
			String sql = "select count(*) from register where username = '" + username + "'";
			boolean isExit = db.queryExist(sql);
			if (isExit) {
				return true;
			} else {
				return false;
			}
		}
		public int usercheck(UserMod user) throws SQLException {
			Mydbconnection db = new Mydbconnection();
			String sql = "select count(*) from register where username = '" + user.getUsername() + "' and license=MD5('"
					+ user.getPassword() + "')";
			boolean isRegisted = db.queryExist(sql);
			if (isRegisted) {
				int authority=0;
				sql="select authority from register where username = '" + user.getUsername() + "' and license=MD5('"
						+ user.getPassword() + "')";
				Result rs=db.queryGetResultSet2(sql);
				
				if(rs!=null&&rs.getRowCount()!=0){
					Map row=rs.getRows()[0];
					authority=Integer.parseInt(row.get("authority").toString());
				}
				return authority;
//				return true;
			} else {
				return -1;
//				return false;
			}
		}

		public boolean findpassword(UserMod user) throws SQLException {
			Mydbconnection db = new Mydbconnection();

			String sql = "update register set license=MD5('123456') where username='" + user.getUsername() + "' and id="
					+ user.getId() + "  and email='" + user.getEmail() + "' and phone='" + user.getPhone()
					+ "' and department='" + user.getDepartment() + "'";
			int count = db.update(sql);
			if (count >= 1) {
				return true;
			} else {
				return false;
			}
		}

		// 注册时插入用户数据
		public boolean insertUser(UserMod user) {
			Mydbconnection db = new Mydbconnection();
			String sql = "insert into register (id,username,license,email,phone,department,authority) values ("
					+ user.getId() + ",'" + user.getUsername() + "',MD5('" + user.getPassword() + "'),'" + user.getEmail()
					+ "','" + user.getPhone() + "','" + user.getDepartment() + "' ,'0')";
			System.out.println(sql);
			int count = db.update(sql);
			if (count == 1) {
				return true;
			} else {
				return false;
			}
		}
	

}
