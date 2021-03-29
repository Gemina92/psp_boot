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
	System.out.println("reqList size : " + size);
	//넥사크로로 out_dataset을 만들어서 전달하는 과정
	PlatformData out_pData = new PlatformData();
	int    nErrorCode  = 0;
	String strErrorMsg = "START";
	
	DataSet out_ds = new DataSet("out_zipList");
	out_ds.addColumn("ZIP_CODE" 	  ,DataTypes.INT  ,(short)50 );
	out_ds.addColumn("ZIP_ADDRESS" 	  ,DataTypes.STRING  ,(short)50 );
	
	for(int i=0; i<size; i++) {
		Map<String,Object> rMap = reqList.get(i);
		int row = out_ds.newRow();
		out_ds.set(row ,"ZIP_CODE" 	   		,rMap.get("ZIP_CODE" 	 	));
		out_ds.set(row ,"ZIP_ADDRESS"			,rMap.get("ZIP_ADDRESS" 	 	));
	}
	out_pData.addDataSet(out_ds);

	VariableList varList = out_pData.getVariableList();
	nErrorCode  = 0;
	strErrorMsg = "ZipSearch SUCC";
	varList.add("ErrorCode", nErrorCode);
	varList.add("ErrorMsg" , strErrorMsg);
	
	HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
	pRes.setData(out_pData);
	
 	try {
		pRes.sendData(); //응답객체를 넥사크로에 쏴줌.
	} catch (PlatformException e) {
		e.printStackTrace();
	}

%>
