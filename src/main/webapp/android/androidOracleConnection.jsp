<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="java.sql.*"%>
<%@page import="java.util.*"%>
<%@page import="psp.util.DBConnectionMgr"%>
<%
	/* 로그인 시 셀렉트 */
	
	DBConnectionMgr dbMgr = null;
	Connection con = null;				// 데이터 베이스와 연결을 위한 객체
	PreparedStatement pstmt = null;	 	// SQL 문을 데이터베이스에 보내기위한 객체
	ResultSet rs = null;	 			// SQL 질의에 의해 생성된 테이블을 저장하는 객체


	//안드로이드에서 보낸 값을 받기
	String emp_no = request.getParameter("emp_no");
	String emp_pw = request.getParameter("emp_pw");
	
	System.out.println("emp_no  >>  "+emp_no);
	System.out.println("emp_pw  >>  "+emp_pw);
	
	
	//오라클에 다녀온 값을 넣기	
	String emp_name = "";
	
	String getEmp_no ="";
	String getEmp_pw ="";
	
	
	
	/*
	SELECT emp_no, emp_pw, emp_name from emp 
	WHERE emp_no = :x
	AND emp_pw = :y	
	*/
	//SELECT emp_name, emp_no, emp_pw FROM emp WHERE emp_no = '1' AND emp_pw = '4'
	
	StringBuilder sql = new StringBuilder();
	sql.append("SELECT emp_no, emp_pw, emp_name FROM emp WHERE emp_no = ? AND emp_pw = ?");
	
	System.out.println(sql.toString());
	
	
	try{
		dbMgr = new DBConnectionMgr();
		con = dbMgr.getConnection();
		
		pstmt = con.prepareStatement(sql.toString());
		pstmt.setString(1, emp_no);
		pstmt.setString(2, emp_pw);
		
		rs = pstmt.executeQuery();		//<select resultType="map">
		if(rs.next()){
			getEmp_no = rs.getString(1);
			getEmp_pw = rs.getString(2);
			emp_name  = rs.getString(3);
			
			
			if(emp_no.equals(getEmp_no)){
				if(emp_pw.equals(getEmp_pw)){
					System.out.println("emp_name   >>>   " + emp_name);
					System.out.println(rs.getString(1) + "," + rs.getString(2) + "," + rs.getString(3));
					out.print(emp_name);
				}
				else{
					out.print("비밀번호를 확인해 주세요!");
				}
			}
			else{
				out.print("사원번호를 확인해 주세요!");
			}
			
			
		}
		else{
			out.print("로그인 정보를 확인해 주세요!");
			
		}
 

	} catch (SQLException se) {
		out.print(se.toString());

	} catch (Exception e) {
		out.print(e.toString());

	} finally { //자원반납 하기  -------없으면 오라클 서버가 다운된다.
		try {
	dbMgr.freeConnection(con, pstmt);
		} catch (Exception e) {
	out.print("close() Exception >> " + e.toString());
		}

	}
%>