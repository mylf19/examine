package action;

import java.util.Map;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

import model.UserMod;

public class AuthorityInterceptor extends ActionSupport {

	private String result;

	public String getAuthority() {
		Map session = ActionContext.getContext().getSession();
		try {
			UserMod u = (UserMod) session.get("user");
			if ( u==null ||u.equals("")) {
				result = "{\"authority\":\"-1\"}";
			} else {
				result = "{\"authority\":\"" + u.getAuthority() + "\"}";
			}
		} catch (Exception e) {
			result = "{\"authority\":\"-1\"}";
			e.printStackTrace();
		}
		return SUCCESS;

	}
	
	public String logout() {
		Map session = ActionContext.getContext().getSession();
		try {
			UserMod u = (UserMod) session.get("user");
			if (u.getAuthority() != null || u.getAuthority() != "") {
				session.remove("user");
				result = "{\"done\":\"" + 1 + "\"}";
			} else {
				result = "{\"done\":"+-1+"}";
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return SUCCESS;

	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

}
