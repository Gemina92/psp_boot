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
	PlatformData out_pData = new PlatformData();
	
	int    nErrorCode  = 0;
	String strErrorMsg = "START";
	
	DataSet out_ds = new DataSet("out_rankList");
	out_ds.addColumn("RANK_CK" 	  ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("RANK_NO" 	  ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("RANK_NAME"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("RANK_USE"       ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("RANK_NOTE"      ,DataTypes.STRING  ,(short)50 );

	for(int i=0; i<size; i++) {
		Map<String,Object> rMap = reqList.get(i);
		int row = out_ds.newRow();
		out_ds.set(row ,"RANK_CK"       ,0);
		out_ds.set(row ,"RANK_NO"     ,rMap.get("RANK_NO"));
		out_ds.set(row ,"RANK_NAME"     ,rMap.get("RANK_NAME"));
		out_ds.set(row ,"RANK_USE"      ,rMap.get("RANK_USE"));
		out_ds.set(row ,"RANK_NOTE"     ,rMap.get("RANK_NOTE"));
	}
	out_pData.addDataSet(out_ds);

	VariableList varList = out_pData.getVariableList();
	nErrorCode  = 0;
	strErrorMsg = "rankSelect SUCC";
	varList.add("ErrorCode", nErrorCode);
	varList.add("ErrorMsg" , strErrorMsg);
	
	HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
	pRes.setData(out_pData);
 	try {
		//Send data. 이 코드가 있어야 데이터를 쏴줌.
		pRes.sendData(); //응답객체를 넥사크로에 쏴줌.
	} catch (PlatformException e) {
		e.printStackTrace();
	}
	
%>
