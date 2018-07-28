package action;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

import model.UserMod;
import service.UserServer;

public class UserAction extends ActionSupport {
	private String result;
	private String jsonStr;	
	private String usernameString;
	private UserMod user;
	
	// 注册
	public String regist() {
		// Mydbconnection conn = new Mydbconnection();
		//
		// boolean i = conn.insertUser(user);
		// if (i) {
		// return SUCCESS;
		// } else {
		// return ERROR;
		// }
		UserServer userservice = new UserServer();
		if (userservice.insertUser(user)) {
			return SUCCESS;
		} else {
			return ERROR;
		}
	}
	
	public String check() {
		try {
			System.out.println("check()" + jsonStr);
			jsonStr = jsonStr.substring(1, jsonStr.length() - 1);
		
			JSONObject js =JSON.parseObject(jsonStr);
			
			UserMod user = new UserMod();
			user.setUsername((String) js.get("username"));
			user.setPassword((String) js.get("password"));

			// Mydbconnection conn = new Mydbconnection();
			// boolean isTrue = conn.usercheck(user);
			UserServer userservice = new UserServer();
			int au = userservice.usercheck(user);
//
//			if (isTrue) {
//				System.out.println("登陆成功！" + "\n===========\n============\n");
//				result = "{\"isTrue\":\"true\"}";
//			} else {
//				System.out.println("登录失败！" + "\n===========\n============\n");
//				result = "{\"isTrue\":\"false\"}";
//			}
			result="{\"authority\":"+au+"}";
			if(au>0){
				UserMod u=new UserMod();
				u.setAuthority(au+"");
				u.setUsername(user.getUsername());
				ActionContext.getContext().getSession().put("user", u);
			}
			return SUCCESS;
		} catch (Exception e) {
			e.printStackTrace();
			return SUCCESS;
		}
	}


	public String checkUsername() {
		try {
			// 获取数据库操作对象
			// Mydbconnection conn = new Mydbconnection();
			Map<String, Object> map = new HashMap<String, Object>();
			System.out.println(usernameString + "\n===========\n============\n");
			// 调用数据库操作并获取返回值
			// boolean isExist = conn.userexist(usernameString);//
			// 还需要改成检测是否存在的sql语句
			UserServer userservice = new UserServer();
			boolean isExist = userservice.userexist(usernameString);

			if (isExist) {
				map.put("isExist", true);
				System.out.println("用户名已存在" + "\n===========\n============\n");
				result = "{\"isExist\":\"false\"}";
			} else {
				map.put("isExist", false);
				System.out.println("用户名可用" + "\n===========\n============\n");
				result = "{\"isExist\":\"true\"}";
			}
			// JSONObject json = JSONObject.fromObject(map);// 将map对象转换成json类型数据
			// result = json.toString();// 给result赋值，传递给页面
			return SUCCESS;

		} catch (Exception e) {
			e.printStackTrace();
			return SUCCESS;
		}
	}


	public String findpassword() {
		// Mydbconnection conn = new Mydbconnection();
		UserServer userservice = new UserServer();
		boolean isFound = false;
		try {
			isFound = userservice.findpassword(user);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		if (isFound) {
			return SUCCESS;
		} else {
			return ERROR;
		}
	}

	public UserMod getUser() {
		return user;
	}

	public void setUser(UserMod user) {
		this.user = user;
	}



	
	
	
	
	
	public String getUsernameString() {
		return usernameString;
	}

	public void setUsernameString(String usernameString) {
		this.usernameString = usernameString;
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public String getJsonStr() {
		return jsonStr;
	}

	public void setJsonStr(String jsonStr) {
		this.jsonStr = jsonStr;
	}
	
}
