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
	
	DataSet out_ds = new DataSet("out_empList");
	out_ds.addColumn("EMP_NO" 	  ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("EMP_NAME"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("EMP_BIRTH"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("EMP_NUM"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("EMP_ADDRESS"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("EMP_EMAIL"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("EMP_ACCNUM"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("EMP_ACCNAME"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("EMP_ACCHOLDER"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("RANK_NO"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("POSITION_NO"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("DEPT_NO"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("ENT_NO"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("EMP_PW"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("EMP_NOTE"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("EMP_ENDATE"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("EMP_ADDRCODE"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("EMP_BEFORE_NO"      ,DataTypes.STRING  ,(short)50 );
	
	for(int i=0; i<size; i++) {
		Map<String,Object> rMap = reqList.get(i);
		int row = out_ds.newRow();
		out_ds.set(row ,"EMP_NO" 	   ,rMap.get("EMP_NO" 	 	));
		out_ds.set(row ,"EMP_NAME"     ,rMap.get("EMP_NAME"  	));
		out_ds.set(row ,"EMP_BIRTH"     ,rMap.get("EMP_BIRTH"  	));
		out_ds.set(row ,"EMP_NUM"     ,rMap.get("EMP_NUM"  	));
		out_ds.set(row ,"EMP_ADDRESS"     ,rMap.get("EMP_ADDRESS"  	));
		out_ds.set(row ,"EMP_EMAIL"     ,rMap.get("EMP_EMAIL"  	));
		out_ds.set(row ,"EMP_ACCNUM"     ,rMap.get("EMP_ACCNUM"  	));
		out_ds.set(row ,"EMP_ACCNAME"     ,rMap.get("EMP_ACCNAME"  	));
		out_ds.set(row ,"EMP_ACCHOLDER"     ,rMap.get("EMP_ACCHOLDER"  	));
		out_ds.set(row ,"RANK_NO"    ,rMap.get("RANK_NO" 	));
		out_ds.set(row ,"POSITION_NO"    ,rMap.get("POSITION_NO" 	));
		out_ds.set(row ,"DEPT_NO"    ,rMap.get("DEPT_NO" 	));
		out_ds.set(row ,"ENT_NO"    ,rMap.get("ENT_NO" 	));
		out_ds.set(row ,"EMP_PW"    ,rMap.get("EMP_PW" 	));
		out_ds.set(row ,"EMP_NOTE"    ,rMap.get("EMP_NOTE" 	));
		out_ds.set(row ,"EMP_ENDATE"    ,rMap.get("EMP_ENDATE" 	));
		out_ds.set(row ,"EMP_ADDRCODE"    ,rMap.get("EMP_ADDRCODE" 	));
		out_ds.set(row ,"EMP_BEFORE_NO"    ,rMap.get("EMP_BEFORE_NO" 	));
	}
	out_pData.addDataSet(out_ds);
	VariableList varList = out_pData.getVariableList();
	nErrorCode  = 0;
	strErrorMsg = "empUSelect SUCC";
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
