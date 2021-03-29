<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="java.sql.*"%>
<%@page import="psp.util.DBConnectionMgr"%>

<%
/* 퇴근 기록시 업데이트 */
	DBConnectionMgr dbMgr = null;
	Connection con = null;
	PreparedStatement pstmt = null;	 
	ResultSet rs = null;	 

	String coummute_on = request.getParameter("coummute_on");	
	String commute_off = request.getParameter("commute_off");	
	String commute_day = request.getParameter("commute_day");
	
	 
	StringBuilder sql = new StringBuilder();


	/*
	update commute
	set commute_off = :x
	where commute_day = '2021년 01월 21일'
	*/
	
	sql.append("UPDATE commute");
	sql.append("	SET commute_off = ?");
	sql.append("	WHERE commute_day = ?");
	sql.append("	AND coummute_on = ?");
 


	try{
		dbMgr = new DBConnectionMgr();
		con = dbMgr.getConnection();
		
		//System.out.println("null ?  "+commute_off);
		//System.out.println("null ?  "+coummute_on);
		//System.out.println("null ?  "+commute_day);
		
		
		//pstmt = con.createStatement();	//SqlSession || SqlSessionTemplate.selectOne | insert | delete | update
		
		pstmt = con.prepareStatement(sql.toString());
		 
		pstmt.setString(1, commute_off);
		pstmt.setString(2, commute_day);
		pstmt.setString(3, coummute_on);
		
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