<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="java.sql.*"%>
<%@page import="java.util.*"%>
<%@page import="com.google.gson.Gson"%>  
<%@page import="psp.util.DBConnectionMgr"%>

<%@page import ="org.json.simple.JSONObject"%>
<%@page import="org.json.simple.JSONArray" %> 
<%@page import ="org.json.simple.parser.JSONParser"%>


<%
	/* 거래처 조회 */
	DBConnectionMgr dbMgr = null;
	Connection con = null;
	PreparedStatement pstmt = null;
	ResultSet rs = null;
 
    JSONParser parser = new JSONParser();
  
 	//리턴값 받기 
 	List<Map<String, Object>> list = new ArrayList<>();	//그 안에 있는 Map은 한개의 로우만 담게된다.
	Map<String, Object> rMap = null;
  
	StringBuilder sql = new StringBuilder();
	// SELECT account_name, account_rep FROM account
	sql.append("SELECT account_name, account_addr FROM account");
	 
	try{
		dbMgr = new DBConnectionMgr();
		con = dbMgr.getConnection();
		
		pstmt = con.prepareStatement(sql.toString());
		rs = pstmt.executeQuery();		 
		
		System.out.println("     >>>     ");
	 
		String imsi = null;
		while(rs.next()){
		  
			rMap = new HashMap<>();
			rMap.put("ACCOUNT_NAME", rs.getString("ACCOUNT_NAME"));
			rMap.put("ACCOUNT_ADDR", rs.getString("ACCOUNT_ADDR"));
			list.add(rMap);
		
		}
		
		 
		
		 
		Gson g = new Gson();
		System.out.println("list >> "+list);
		
		String result = g.toJson(list);
		System.out.println("result  >>  "+result);
		
		JSONArray jsonArray = (JSONArray) parser.parse(result);
		System.out.println("jsonArray  >>  "+jsonArray);
		
		out.print(jsonArray);
		
	 
		
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
	//System.out.println(list);
	
	
	
%>