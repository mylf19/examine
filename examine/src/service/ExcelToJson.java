package service;

import jxl.Cell;  
import jxl.Sheet;  
import jxl.Workbook;  
import jxl.read.biff.BiffException;

import java.io.File;
import java.io.FilenameFilter;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.io.FileUtils;  
  
import com.alibaba.fastjson.JSONObject;  
  
public class ExcelToJson {  
  
    public static void main(String[] args) {  
        // d盘下的xls目录  
        File dir = new File("D:\\");  
        // 用于文件过滤  
        FilenameFilter searchSuffix = new FilenameFilter() {  
            @Override  
            public boolean accept(File dir, String name) {  
                return name.endsWith(".xls");  
            }  
        };  
        // 获取xls目录下的所有文件列表  
//        File[] list = dir.listFiles();  
//        System.out.println(list.length);
//        for(int jj=0;jj<list.length;jj++){
//        	File file=list[jj];
////        for (File file : list) {  
//            File dest = new File("D:\\json_" + jj + ".json");  
//            if (dest.exists()) {  
//                dest.delete();  
//            }  
//            // 获取xls目录下的文件名  
//            String fileName = file.getName();  
//            // 获取文件后缀  
//            int lastindexofdao=fileName.lastIndexOf(".");
//            if(lastindexofdao<0){
//	            String suffix = fileName.substring(lastindexofdao);  
//	            // 如果不是以xls为结尾的文件跳过  
//	            if (!searchSuffix.accept(file, suffix)) {  
//	                continue;  
//	            }  
//            }
        File dest=new File("D:\\ttt.xls");
        File file=new File("D:\\test.txt");
            try {  
                Workbook wb = Workbook.getWorkbook(file); // 从文件流中获取Excel工作区对象（WorkBook）  
                Sheet sheet = wb.getSheet(0); // 从工作区中取得页（Sheet）  
                Cell[] header = sheet.getRow(0);  
                for (int i = 0; i < sheet.getRows(); i++) { // 循环打印Excel表中的内容  
                    Map hashMap = new HashMap();  
                    for (int j = 0; j < sheet.getColumns(); j++) {  
                        Cell cell = sheet.getCell(j, i);  
                        hashMap.put(header[j].getContents(), cell.getContents());  
                    }  
                    // 这个json字符串就是我们想要的，实际应用中可以直接返回该字符串  
                    String json = JSONObject.toJSONString(hashMap);  
                    // 将转换后的json字符串写到文件当中  
                    FileUtils.writeStringToFile(dest, json + "\n", "UTF-8");  
                }  
            } catch (BiffException e) {  
                e.printStackTrace();  
            } catch (IOException e) {  
                e.printStackTrace();  
            }  
  
//        }  
    }  
}  