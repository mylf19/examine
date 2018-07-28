package db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.jsp.jstl.sql.Result;
import javax.servlet.jsp.jstl.sql.ResultSupport;

import model.AnnPlanTabMod;
import model.DataModel;

public class Mydbconnection {

	private Connection getConnection() {
		Connection conn = null;
		try {
			Class.forName("com.mysql.jdbc.Driver");
			String msUrl = "jdbc:mysql://127.0.0.1:3306/examine";
//			String msUrl = "jdbc:mysql://202.112.147.27:3306/examine";
//			String msUrl = "jdbc:mysql://localhost:3306/examine";
			String password = "123456";
			String user = "root";
			conn = DriverManager.getConnection(msUrl, user, password);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return conn;
	}

//	public List<Object> query(String sql) {
//		List<Object> list = new ArrayList<Object>();
//		Connection conn = this.getConnection();
//		PreparedStatement ps = null;
//		ResultSet rs = null;
//		try {
//			ps = conn.prepareStatement(sql);
//			rs = ps.executeQuery();
//			ResultSetMetaData rsmd = rs.getMetaData();
//			int columnNum = rsmd.getColumnCount();
//			while (rs.next()) {
//				Object[] objects = new Object[columnNum];
//				for (int i = 0; i < objects.length; i++) {
//					objects[i] = rs.getObject(i + 1);
//				}
//				list.add(objects);
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		} finally {
//			try {
//				conn.close();
//			} catch (SQLException e) {
//				e.printStackTrace();
//			}
//		}
//		return list;
//	}

//	public List<AnnPlanTabMod> queryGetResultSet(String sql) {
//		Connection conn = this.getConnection();
//		PreparedStatement ps = null;
//		ResultSet rs = null;
//		List<AnnPlanTabMod> list = new ArrayList<AnnPlanTabMod>();
//
//		try {
//			ps = conn.prepareStatement(sql);
//			rs = ps.executeQuery();
//			while (rs.next()) {
//				AnnPlanTabMod ap = new AnnPlanTabMod();
//				ap.setCname(rs.getString("cname"));
//				ap.setEname(rs.getString("dbname"));
//				ap.setId(rs.getString("tableid"));
//				ap.setMakeupdate(rs.getString("madeup_date"));
//				ap.setMakeuppeople(rs.getString("madeup_people"));
//				ap.setOperationgroup(rs.getString("operation_group"));
//				ap.setTabletype(rs.getString("table_type"));
//				ap.setTeamname(rs.getString("team"));
//				ap.setYear(rs.getString("year"));
//				list.add(ap);
//			}
//			conn.close();
//			ps.close();
//			return list;
//		} catch (Exception e) {
//			e.printStackTrace();
//		} finally {
//			try {
//				conn.close();
//				ps.close();
//				return list;
//			} catch (SQLException e) {
//				e.printStackTrace();
//			}
//		}
//		return list;
//	}

	public Result queryGetResultSet2(String sql) {
		Connection conn = this.getConnection();
		PreparedStatement ps = null;
		ResultSet rs = null;
		// List<AnnPlanTabMod> list=new ArrayList<AnnPlanTabMod>();
		Result re = null;
		try {
			ps = conn.prepareStatement(sql);
			rs = ps.executeQuery();
			re = ResultSupport.toResult(rs);
			conn.close();
			ps.close();
			return re;
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				conn.close();
				ps.close();
				return re;
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return re;
	}

	public List<DataModel> queryLineData(String sql) {
		List<DataModel> list = new ArrayList<DataModel>();
		Connection conn = this.getConnection();
		PreparedStatement ps = null;
		ResultSet rs = null;
		try {
			ps = conn.prepareStatement(sql);
			rs = ps.executeQuery();
			// ResultSetMetaData rsmd = rs.getMetaData();
			// int columnNum = rsmd.getColumnCount();
			while (rs.next()) {
				// String[] strings = new String [columnNum];
				DataModel dm = new DataModel();
				dm.setDate(rs.getString("EndTime").substring(0, 10));
				dm.setValue1(rs.getString("Value"));
				dm.setBrdid(rs.getString("BrdID"));
				dm.setNename(rs.getString("NEName"));
				dm.setNetype(rs.getString("NEType"));
				dm.setPortno(rs.getString("PortNO"));
				// for (int i = 0; i < columnNum; i++) {
				// strings[i] = rs.getString(i + 1);
				// }
				list.add(dm);
				// System.out.println(dm.getDate()+"\n" +dm.getValue()+"\n");
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return list;
	}

	public static void main(String[] args) {
		Mydbconnection mydb = new Mydbconnection();
		Connection conn = mydb.getConnection();
		try {
			PreparedStatement ps = conn.prepareStatement("select * from mycount");
			ResultSet rs = ps.executeQuery();
			// rs.last();
			// System.out.println(rs.getRow()+"");
			while (rs.next()) {
				// System.out.println(rs.getInt(0)+"\n"+rs.getString(1)+"=========\n=======\n==============\n");
				System.out.println("1111" + rs.getInt("id") + "\n" + rs.getString("name1")
						+ "\n=========\n=======\n==============\n");
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public boolean insert(String sql) {
		Mydbconnection db = new Mydbconnection();
		System.out.println("insert:-"+sql);
		int count = db.update(sql);
		if (count == 1) {
			return true;
		} else {
			return false;
		}
	}

	public int update(String sql) {
		int i = 0;
		Connection conn = getConnection();
		Statement stmt = null;
		if (null == conn) {
			return 0;
		}
		try {
			stmt = conn.createStatement();
			i = stmt.executeUpdate(sql);
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
		try {
			if (stmt != null) {
				stmt.close();
			}
			if (conn != null) {
				conn.close();
			}
		} catch (Exception e) {
			e.printStackTrace();
			return 0;
		}
		// System.out.println(i);
		return i;
	}

	// 查询数据是否已经存在
	public boolean queryExist(String sql) {
		Connection conn = this.getConnection();
		PreparedStatement ps = null;
		ResultSet rs = null;
		boolean isExist = false;
		try {
			ps = conn.prepareStatement(sql);
			rs = ps.executeQuery();
		} catch (Exception e) {
			e.printStackTrace();
		}
		try {
			if (rs.next() && rs.getInt(1) > 0) {
				isExist = true;
			} else {
				isExist = false;
			}
			if (null != rs) {
				rs.close();
			}
			if (null != ps) {
				ps.close();
			}
			if (null != conn) {
				conn.close();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return isExist;
	}

}
