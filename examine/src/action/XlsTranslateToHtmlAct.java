package action;

import java.io.File;
import java.io.FileWriter;

import com.opensymphony.xwork2.ActionSupport;

import service.XlsTranslateHtml;

public class XlsTranslateToHtmlAct extends ActionSupport {
	
	private static String filepath1="D:\\ttt.xls";
	private static String filepath2="D:\\test.txt";
	
	public static void main(String[] args){
		try {
			File file=new File(filepath1);
			String html=XlsTranslateHtml.getExcelInfo(file);
			FileWriter writer=new FileWriter(filepath2);
			writer.write(html);
			writer.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
