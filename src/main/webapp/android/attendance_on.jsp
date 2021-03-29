<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="java.sql.*"%>
<%@page import="psp.util.DBConnectionMgr"%>

<%
	/* 출근 기록시 인서트 */
	DBConnectionMgr dbMgr = null;
	Connection con = null;
	PreparedStatement pstmt = null;
	ResultSet rs = null;

	 
 
	String emp_no = request.getParameter("emp_no");
	String commute_day = request.getParameter("commute_day");
	String coummute_on = request.getParameter("coummute_on");	///////////////////// u 붙음..
	
	//System.out.println(commute_no); 
	StringBuilder sql = new StringBuilder();


	//INSERT INTO COMMUTE (commute_no, coummute_on, commute_day, emp_no)
	//VALUES ('cmt01','12:12:12','2021년 1월 1일',210101)
	
	sql.append("INSERT INTO COMMUTE (commute_no, coummute_on, emp_no, commute_day) VALUES (seq_attendance.nextval,?,?,?)");
	 
	try{
		dbMgr = new DBConnectionMgr();
		con = dbMgr.getConnection();
		
		System.out.println("null ?"+emp_no);
		//System.out.println("null ?"+commute_no);
		System.out.println("null ?"+commute_day);
		System.out.println("null ?"+coummute_on);
		
		//pstmt = con.createStatement();	//SqlSession || SqlSessionTemplate.selectOne | insert | delete | update
		
		pstmt = con.prepareStatement(sql.toString());
		pstmt.setString(1, coummute_on);
		pstmt.setString(2, emp_no);
		pstmt.setString(3, commute_day);
		 
		int result = pstmt.executeUpdate();	
		System.out.println(" result >> "+result); 
		con.commit();
		out.print(result);
				 
	}catch(SQLException se){
		out.print(se.toString());
		se.printStackTrace();
		
	}catch(Exception e){
		out.print(e.toString());
		e.printStackTrace();
		
	}finally{	//자원반납 하기  -------없으면 오라클 서버가 다운된다.
		try{
			dbMgr.freeConnection(con, pstmt);
		}catch(Exception e){
			out.print("close() Exception >> "+e.toString());
		}
		
	}
	
%>