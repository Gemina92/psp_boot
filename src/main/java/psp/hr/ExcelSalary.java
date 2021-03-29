package psp.hr;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.BorderStyle;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFFont;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

@Service
public class ExcelSalary {
	
	public void createExcel(Map<String, Object> pMap) throws IOException {
		String empName = pMap.get("EMP_NAME").toString();
		String mon = pMap.get("SALARY_DATE").toString(); //월
		mon = mon.substring(4,6);
		
		String salary_no = pMap.get("SALARY_NO").toString(); //급여번호
		
		//.xls 확장자 지원                       			//.xlsx 확장자 지원                          
		HSSFWorkbook wb = null;       		XSSFWorkbook xssfWb = null; // .xlsx    
		HSSFSheet sheet = null;       		XSSFSheet xssfSheet = null; // .xlsx    
		Row row = null;          			XSSFRow xssfRow = null; // .xlsx        
		Cell cell = null;            		XSSFCell xssfCell = null;// .xlsx       
		
		// 행 갯수 
		int rowNo = 0; 
		
		//워크북 생성
		xssfWb = new XSSFWorkbook();
		
		//워크시트 이름
		xssfSheet = xssfWb.createSheet(mon + "월 급여명세서"); 
		
		//헤더용 폰트 스타일(00월 급여명세서)
		XSSFFont font = xssfWb.createFont();
		font.setFontName(HSSFFont.FONT_ARIAL); //폰트스타일
		font.setFontHeightInPoints((short)14); //폰트크기
		font.setBold(true); //Bold 유무
			
		//테이블 타이틀 스타일
		CellStyle cellStyle_Title = xssfWb.createCellStyle();
		
		//0부터 시작
		xssfSheet.setColumnWidth(2, (xssfSheet.getColumnWidth(2)) * 2); // 2번째 컬럼 넓이 조절
		xssfSheet.setColumnWidth(3, (xssfSheet.getColumnWidth(3)) * 2); 
		xssfSheet.setColumnWidth(5, (xssfSheet.getColumnWidth(5)) * 2); 
		xssfSheet.setColumnWidth(6, (xssfSheet.getColumnWidth(6)) * 2); 
		
		cellStyle_Title.setFont(font); // cellStyle_Title에 font를 적용
		cellStyle_Title.setAlignment(HorizontalAlignment.CENTER); // 가운데 정렬
		
		cellStyle_Title.setBorderTop(BorderStyle.THIN); //테두리 위쪽
		cellStyle_Title.setBorderBottom(BorderStyle.THIN); //테두리 아래쪽
		cellStyle_Title.setBorderLeft(BorderStyle.THIN); //테두리 왼쪽
		cellStyle_Title.setBorderRight(BorderStyle.THIN); //테두리 오른쪽
		
		//셀병합 ******************************************************
		xssfSheet.addMergedRegion(new CellRangeAddress(2, 2, 2, 6)); //첫행, 마지막행, 첫열, 마지막열
		//타이틀 생성 ***************************************************
		xssfRow = xssfSheet.createRow(rowNo++); //행 객체 추가 ##
		xssfRow = xssfSheet.createRow(rowNo++); //행 객체 추가 ##
		xssfRow = xssfSheet.createRow(rowNo++); //행 객체 추가 ##
		xssfCell = xssfRow.createCell((short) 2); // 추가한 행에 셀 객체 추가
		xssfCell.setCellStyle(cellStyle_Title); // 셀에 스타일 지정(헤더스타일)
		xssfCell.setCellValue(mon + "월 급여명세서"); // 데이터 입력
		xssfCell = xssfRow.createCell((short) 3); // 추가한 행에 셀 객체 추가
		xssfCell.setCellStyle(cellStyle_Title); // 셀에 스타일 지정(헤더스타일)
		xssfCell = xssfRow.createCell((short) 4); // 추가한 행에 셀 객체 추가
		xssfCell.setCellStyle(cellStyle_Title); // 셀에 스타일 지정(헤더스타일)
		xssfCell = xssfRow.createCell((short) 5); // 추가한 행에 셀 객체 추가
		xssfCell.setCellStyle(cellStyle_Title); // 셀에 스타일 지정(헤더스타일)
		xssfCell = xssfRow.createCell((short) 6); // 추가한 행에 셀 객체 추가
		xssfCell.setCellStyle(cellStyle_Title); // 셀에 스타일 지정(헤더스타일)
		
		//행 객체 추가 ##
		xssfRow = xssfSheet.createRow(rowNo++);  
		
		//바디부분 스타일
		CellStyle cellStyle_Body = xssfWb.createCellStyle(); 
		cellStyle_Body.setAlignment(HorizontalAlignment.LEFT); //왼쪽 정렬
		
		cellStyle_Body.setBorderTop(BorderStyle.THIN); //테두리 위쪽
		cellStyle_Body.setBorderBottom(BorderStyle.THIN); //테두리 아래쪽
		cellStyle_Body.setBorderLeft(BorderStyle.THIN); //테두리 왼쪽
		cellStyle_Body.setBorderRight(BorderStyle.THIN); //테두리 오른쪽
			
		//행 객체 추가 ##
		xssfRow = xssfSheet.createRow(rowNo++);  
		
		xssfCell = xssfRow.createCell((short) 2); //사번
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("사번");
		xssfCell = xssfRow.createCell((short) 3); //사번
		xssfCell.setCellStyle(cellStyle_Body);
		String empNo = pMap.get("EMP_NO").toString();
		xssfCell.setCellValue(empNo);
		
		xssfCell = xssfRow.createCell((short) 5);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("성명");
		xssfCell = xssfRow.createCell((short) 6);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue(empName);
		//행 객체 추가 ##
		xssfRow = xssfSheet.createRow(rowNo++);
		
		xssfCell = xssfRow.createCell((short) 2);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("부서");
		xssfCell = xssfRow.createCell((short) 3);
		xssfCell.setCellStyle(cellStyle_Body);
		String deptName = pMap.get("DEPT_NAME").toString();
		xssfCell.setCellValue(deptName);
		
		xssfCell = xssfRow.createCell((short) 5);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("직급");
		xssfCell = xssfRow.createCell((short) 6);
		xssfCell.setCellStyle(cellStyle_Body);
		String rankName = pMap.get("RANK_NAME").toString();
		xssfCell.setCellValue(rankName);
		
		//행 객체 추가 ##
		xssfRow = xssfSheet.createRow(rowNo++);
		//행 객체 추가 ##
		xssfRow = xssfSheet.createRow(rowNo++);
		
		xssfCell = xssfRow.createCell((short) 2);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("급여계좌");
		xssfCell = xssfRow.createCell((short) 3);
		xssfCell.setCellStyle(cellStyle_Body);
		String accName = pMap.get("EMP_ACCNAME").toString();
		xssfCell.setCellValue(accName);
		
		xssfCell = xssfRow.createCell((short) 5);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("계좌번호");
		xssfCell = xssfRow.createCell((short) 6);
		xssfCell.setCellStyle(cellStyle_Body);
		String accNum = pMap.get("EMP_ACCNUM").toString();
		xssfCell.setCellValue(accNum);
		
		//행 객체 추가 ##
		xssfRow = xssfSheet.createRow(rowNo++);
		//행 객체 추가 ##
		xssfRow = xssfSheet.createRow(rowNo++);
		//행 객체 추가 ##
		xssfRow = xssfSheet.createRow(rowNo++);
		
		//셀병합 ******************************************************
		xssfSheet.addMergedRegion(new CellRangeAddress(10, 10, 2, 3)); //첫행, 마지막행, 첫열, 마지막열
		xssfCell = xssfRow.createCell((short) 2);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("급여내역");
		xssfCell = xssfRow.createCell((short) 3);
		xssfCell.setCellStyle(cellStyle_Body);
		
		//셀병합 ******************************************************
		xssfSheet.addMergedRegion(new CellRangeAddress(10, 10, 5, 6)); //첫행, 마지막행, 첫열, 마지막열
		xssfCell = xssfRow.createCell((short) 5);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("공제내역");
		xssfCell = xssfRow.createCell((short) 6);
		xssfCell.setCellStyle(cellStyle_Body);
		
		//행 객체 추가 ##
		xssfRow = xssfSheet.createRow(rowNo++);
		
		xssfCell = xssfRow.createCell((short) 2);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("급여항목");
		xssfCell = xssfRow.createCell((short) 3);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("급액");
		
		xssfCell = xssfRow.createCell((short) 5);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("공제항목");
		xssfCell = xssfRow.createCell((short) 6);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("금액");
		
		//행 객체 추가 ##
		xssfRow = xssfSheet.createRow(rowNo++);
		
		xssfCell = xssfRow.createCell((short) 2);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("기본급");
		xssfCell = xssfRow.createCell((short) 3);
		xssfCell.setCellStyle(cellStyle_Body);
		String c100 = pMap.get("SALARY_C100").toString();
		xssfCell.setCellValue(c100);
		
		xssfCell = xssfRow.createCell((short) 5);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("소득세");
		xssfCell = xssfRow.createCell((short) 6);
		xssfCell.setCellStyle(cellStyle_Body);
		String d100 = pMap.get("SALARY_D100").toString();
		xssfCell.setCellValue(d100);
		
		//행 객체 추가 ##
		xssfRow = xssfSheet.createRow(rowNo++);
		
		xssfCell = xssfRow.createCell((short) 2);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("식대");
		xssfCell = xssfRow.createCell((short) 3);
		xssfCell.setCellStyle(cellStyle_Body);
		String c101 = pMap.get("SALARY_C101").toString();
		xssfCell.setCellValue(c101);
		
		xssfCell = xssfRow.createCell((short) 5);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("주민세");
		xssfCell = xssfRow.createCell((short) 6);
		xssfCell.setCellStyle(cellStyle_Body);
		String d101 = pMap.get("SALARY_D101").toString();
		xssfCell.setCellValue(d101);
		
		//행 객체 추가 ##
		xssfRow = xssfSheet.createRow(rowNo++);
		
		xssfCell = xssfRow.createCell((short) 2);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("상여");
		xssfCell = xssfRow.createCell((short) 3);
		xssfCell.setCellStyle(cellStyle_Body);
		String c102 = pMap.get("SALARY_C102").toString();
		xssfCell.setCellValue(c102);
		
		xssfCell = xssfRow.createCell((short) 5);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("국민연금");
		xssfCell = xssfRow.createCell((short) 6);
		xssfCell.setCellStyle(cellStyle_Body);
		String d102 = pMap.get("SALARY_D102").toString();
		xssfCell.setCellValue(d102);
		
		//행 객체 추가 ##
		xssfRow = xssfSheet.createRow(rowNo++);
		
		xssfCell = xssfRow.createCell((short) 2);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("월차수당");
		xssfCell = xssfRow.createCell((short) 3);
		xssfCell.setCellStyle(cellStyle_Body);
		String c103 = pMap.get("SALARY_C103").toString();
		xssfCell.setCellValue(c103);
		
		xssfCell = xssfRow.createCell((short) 5);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("건강보험");
		xssfCell = xssfRow.createCell((short) 6);
		xssfCell.setCellStyle(cellStyle_Body);
		String d103 = pMap.get("SALARY_D103").toString();
		xssfCell.setCellValue(d103);
		
		//행 객체 추가 ##
		xssfRow = xssfSheet.createRow(rowNo++);
		
		xssfCell = xssfRow.createCell((short) 2);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("기타수당");
		xssfCell = xssfRow.createCell((short) 3);
		xssfCell.setCellStyle(cellStyle_Body);
		String c104 = pMap.get("SALARY_C104").toString();
		xssfCell.setCellValue(c104);
		
		xssfCell = xssfRow.createCell((short) 5);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("장기요양보험");
		xssfCell = xssfRow.createCell((short) 6);
		xssfCell.setCellStyle(cellStyle_Body);
		String d104 = pMap.get("SALARY_D104").toString();
		xssfCell.setCellValue(d104);
		
		//행 객체 추가 ##
		xssfRow = xssfSheet.createRow(rowNo++);
		
		xssfCell = xssfRow.createCell((short) 2);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("자가운전보조금");
		xssfCell = xssfRow.createCell((short) 3);
		xssfCell.setCellStyle(cellStyle_Body);
		String c105 = pMap.get("SALARY_C105").toString();
		xssfCell.setCellValue(c105);
		
		//행 객체 추가 ##
		xssfRow = xssfSheet.createRow(rowNo++);
		
		//행 객체 추가 ##
		xssfRow = xssfSheet.createRow(rowNo++);
		
		xssfCell = xssfRow.createCell((short) 5);
		xssfCell.setCellStyle(cellStyle_Body);
		xssfCell.setCellValue("총 급여");
		xssfCell = xssfRow.createCell((short) 6);
		xssfCell.setCellStyle(cellStyle_Body);
		String amount = pMap.get("SALARY_AMOUNT").toString();
		xssfCell.setCellValue(amount);
		
		String localFile = "D:\\JAVA69\\excel\\" + empName + "_" + mon + "월 급여명세서_" + salary_no + ".xlsx";
	
		File file = new File(localFile);
		FileOutputStream fos = null;
		fos = new FileOutputStream(file);
		xssfWb.write(fos);

		if(xssfWb != null) xssfWb.close();
		if(fos != null) fos.close();
	
		//ctx.put("FILENAME", "입고상세출력_"+ mapList.get(0).get("PRINT_DATE"));
		//if(file != null) file.deleteOnExit();
	}
}
