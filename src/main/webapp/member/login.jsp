<%@page import="java.util.Map"%>
<%@page import="java.util.List"%>
<%@page import="com.nexacro17.xapi.tx.PlatformType"%>
<%@page import="com.nexacro17.xapi.tx.PlatformException"%>
<%@page import="com.nexacro17.xapi.tx.HttpPlatformResponse"%>
<%@page import="com.nexacro17.xapi.data.VariableList"%>
<%@page import="com.nexacro17.xapi.data.DataTypes"%>
<%@page import="com.nexacro17.xapi.data.DataSet"%>
<%@page import="com.nexacro17.xapi.data.PlatformData"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!-- member/login.psp에서 넘어오는 화면 -->

<%
	//List<Map<String,Object>> reqList = (List<Map<String,Object>>)session.getAttribute("reqList");
	List<Map<String,Object>> reqList = (List<Map<String,Object>>)request.getAttribute("reqList");
	System.out.println("reqList : " + reqList);
	int size = 0;
	if(reqList!=null) size = reqList.size();
	System.out.println("reqList size : " + size);
	
	//넥사크로로 out_dataset을 만들어서 전달하는 과정
	PlatformData out_pData = new PlatformData();
	int    nErrorCode  = -1;
	String strErrorMsg = "START";
	
	DataSet out_ds = new DataSet("out_login");
	out_ds.addColumn("EMP_NO" 	  ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("EMP_PW" 	  ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("EMP_NAME"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("DEPT_NAME"      ,DataTypes.STRING  ,(short)50 );
	
	
	Map<String,Object> rMap = reqList.get(0);
	int row = out_ds.newRow();
	out_ds.set(row ,"EMP_NO"       	  ,rMap.get("p_empno"));
	out_ds.set(row ,"EMP_PW"       , rMap.get("p_emppw"));
	out_ds.set(row ,"EMP_NAME"       ,rMap.get("r_empname"));
	out_ds.set(row ,"DEPT_NAME"    ,rMap.get("r_deptname"));
		
	out_pData.addDataSet(out_ds);
	
	VariableList varList = out_pData.getVariableList(); //넥사크로에서 제공하는 변수값이나 정보 담기
	if(rMap.get("r_empname").equals("비밀번호가 틀립니다.")) {
		nErrorCode  = -1;
		strErrorMsg = "비밀번호가 틀립니다.";
	}
	else if(rMap.get("r_empname").equals("사번이 존재하지 않습니다.")) {
		nErrorCode  = -2;
		strErrorMsg = "사번이 존재하지 않습니다.";
	}
	else {
		nErrorCode  = 0;
		strErrorMsg = rMap.get("r_empname").toString();
	}
	
	System.out.println("nErrorCode : " + nErrorCode);
	System.out.println("strErrorMsg : " + strErrorMsg);
	
	//varList에 아래 두 변수들을 담음.
	varList.add("ErrorCode", nErrorCode);
	varList.add("ErrorMsg" , strErrorMsg);
	
	HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
	pRes.setData(out_pData);
	pRes.sendData(); //응답객체를 넥사크로에 쏴줌.
	
%>
