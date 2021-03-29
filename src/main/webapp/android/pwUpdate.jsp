<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="java.sql.*"%>
<%@page import="psp.util.DBConnectionMgr"%>
<%
	/* 비밀번호 변경시 업데이트 */
	DBConnectionMgr dbMgr = null;
	Connection con = null;
	PreparedStatement pstmt = null;
	ResultSet rs = null;

	
	String emp_no = request.getParameter("emp_no");
	String first_pw = request.getParameter("first_pw");
	String emp_pw = request.getParameter("emp_pw");
	String emp_name = request.getParameter("emp_name");
	
	System.out.println("emp_no >>  "+emp_no);
	System.out.println("first_pw >>  "+first_pw);
	System.out.println("emp_pw >>  "+emp_pw);
	System.out.println("emp_name >>  "+emp_name);
	
	
	/*
	UPDATE 테이블명
	SET 
	컬럼1 = 변경할 값,
	컬럼2 = 변경할 값
	.....
	WHERE
	조건;
	*/
	/*
		UPDATE EMP
		SET emp_pw = :x
		WHERE emp_no = '1'
		AND emp_name = '이주성'

	*/
	
	//입력한 두 비밀번호가 일치 한다면.
	if(first_pw.equals(emp_pw)){

		StringBuilder sql = new StringBuilder();
		
		sql.append("UPDATE emp SET emp_pw = ? WHERE emp_no = ? AND emp_name = ?");
		//sql.append("UPDATE emp SET emp_pw = ? WHERE emp_no = ? ");
		
		System.out.println("sql.toString()  >>  "+sql.toString());
		
		 
		 
		try{
			dbMgr = new DBConnectionMgr();
			con = dbMgr.getConnection();
			
			pstmt = con.prepareStatement(sql.toString());
			pstmt.setString(1, emp_pw);
			pstmt.setString(2, emp_no);
			pstmt.setString(3, emp_name);
			
			
			int result = pstmt.executeUpdate();	
			System.out.println("result >> "+result);
			
			if(result == 1){
				con.commit();
			}
			else{
				System.out.println(" 커밋실패");
			}
			
			
		}catch(SQLException se){
			out.print(se.toString());
			
		}catch(Exception e){
			out.print(e.toString());
			
		}finally{	//자원반납 하기  -------없으면 오라클 서버가 다운된다.
			try{
				dbMgr.freeConnection(con, pstmt);
			}catch(Exception e){
				out.print("close() Exception >> "+e.toString());
			}
			
		}
	}
	
	//일치하지 않으면 실패
	else{
		System.out.println("비번이 같지않음");
		return;
	}
	
	
	
	
	
%>