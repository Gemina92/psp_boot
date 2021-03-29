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

<%
	List<Map<String,Object>> reqList = (List<Map<String,Object>>)request.getAttribute("reqList");
	System.out.println("reqList : " + reqList);	
	int size = 0; 
	if(reqList!=null) {
		size = reqList.size();
	}
		
	//넥사크로로 out_dataset을 만들어서 전달하는 과정
	PlatformData out_pData = new PlatformData();
	
	int    nErrorCode  = 0;
	String strErrorMsg = "START";
	
	//out_ds 선언 및 생성
	DataSet out_ds = new DataSet("out_positionList");
	out_ds.addColumn("PS_CK" 	  ,DataTypes.STRING  ,(short)10 );
	out_ds.addColumn("PS_NO" 	  ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("PS_NAME"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("PS_USE"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("PS_NOTE"      ,DataTypes.STRING  ,(short)50 );
	//컬럼 생성
	
	//컬럼이 생성된 빈 out_dataset에다가 data를 넣어야함.
	//out_ds에 rmap값 넣기
	//1줄 추가 == newRow()
	for(int i=0; i<size; i++) {
		Map<String,Object> rMap = reqList.get(i);
		int row = out_ds.newRow();
		out_ds.set(row ,"PS_CK"     ,0);
		out_ds.set(row ,"PS_NO"     ,rMap.get("POSITION_NO"));
		out_ds.set(row ,"PS_NAME"     ,rMap.get("POSITION_NAME"));
		out_ds.set(row ,"PS_USE"      ,rMap.get("POSITION_USE"));
		out_ds.set(row ,"PS_NOTE"     ,rMap.get("POSITION_NOTE"));
	}
	//여기까지가 out_dataset에 값넣기 끝
	
	out_pData.addDataSet(out_ds);
	nErrorCode  = 0;
	strErrorMsg = "positionSelect SUCC";
	VariableList varList = out_pData.getVariableList();
	varList.add("ErrorCode", nErrorCode);
	varList.add("ErrorMsg" , strErrorMsg);
	HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
	pRes.setData(out_pData);
 	try {
		pRes.sendData(); //응답객체를 넥사크로에 쏴줌.
	} catch (PlatformException e) {
		e.printStackTrace();
	}

	System.out.println(reqList);
%>
