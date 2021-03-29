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
	
	DataSet out_ds = new DataSet("out_salaryList");
	out_ds.addColumn("SALARY_CK" 	  	,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("EMP_NO" 	  		,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("EMP_NAME"      	,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("DEPT_NAME"      	,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("RANK_NAME"      	,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("SALARY_AMOUNT"    ,DataTypes.INT     ,(short)50 );
	out_ds.addColumn("EMP_ENDATE"      	,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("SALARY_NOTE"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("SALARY_NO"      	,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("SALARY_DATE"      ,DataTypes.STRING  ,(short)50 );
	//
	out_ds.addColumn("SALARY_C100"      ,DataTypes.INT  ,(short)50 );
	out_ds.addColumn("SALARY_C101"      ,DataTypes.INT  ,(short)50 );
	out_ds.addColumn("SALARY_C102"      ,DataTypes.INT  ,(short)50 );
	out_ds.addColumn("SALARY_C103"      ,DataTypes.INT  ,(short)50 );
	out_ds.addColumn("SALARY_C104"      ,DataTypes.INT  ,(short)50 );
	out_ds.addColumn("SALARY_C105"      ,DataTypes.INT  ,(short)50 );
	//                                               
	out_ds.addColumn("SALARY_D100"      ,DataTypes.INT  ,(short)50 );
	out_ds.addColumn("SALARY_D101"      ,DataTypes.INT  ,(short)50 );
	out_ds.addColumn("SALARY_D102"      ,DataTypes.INT  ,(short)50 );
	out_ds.addColumn("SALARY_D103"      ,DataTypes.INT  ,(short)50 );
	out_ds.addColumn("SALARY_D104"      ,DataTypes.INT  ,(short)50 );
	
	for(int i=0; i<size; i++) {
		Map<String,Object> rMap = reqList.get(i);
		int row = out_ds.newRow();
		out_ds.set(row ,"SALARY_CK" 	  	,0);
		out_ds.set(row ,"EMP_NO" 	  	  	,rMap.get("EMP_NO" 	  		));
		out_ds.set(row ,"EMP_NAME"       	,rMap.get("EMP_NAME"     	));
		out_ds.set(row ,"DEPT_NAME"      	,rMap.get("DEPT_NAME"    	));
		out_ds.set(row ,"RANK_NAME"      	,rMap.get("RANK_NAME"    	));
		out_ds.set(row ,"SALARY_AMOUNT"  	,rMap.get("SALARY_AMOUNT"	));
		out_ds.set(row ,"EMP_ENDATE"     	,rMap.get("EMP_ENDATE"   	));
		out_ds.set(row ,"SALARY_NOTE"    	,rMap.get("SALARY_NOTE"  	));
		out_ds.set(row ,"SALARY_NO"			,rMap.get("SALARY_NO"  		));
		out_ds.set(row ,"SALARY_DATE"		,rMap.get("SALARY_DATE"  	));
		
		out_ds.set(row ,"SALARY_C100"		,rMap.get("SALARY_C100"  	));
		out_ds.set(row ,"SALARY_C101"		,rMap.get("SALARY_C101"  	));
		out_ds.set(row ,"SALARY_C102"		,rMap.get("SALARY_C102"  	));
		out_ds.set(row ,"SALARY_C103"		,rMap.get("SALARY_C103"  	));
		out_ds.set(row ,"SALARY_C104"		,rMap.get("SALARY_C104"  	));
		out_ds.set(row ,"SALARY_C105"		,rMap.get("SALARY_C105"  	));
		
		out_ds.set(row ,"SALARY_D100"		,rMap.get("SALARY_D100"  	));
		out_ds.set(row ,"SALARY_D101"		,rMap.get("SALARY_D101"  	));
		out_ds.set(row ,"SALARY_D102"		,rMap.get("SALARY_D102"  	));
		out_ds.set(row ,"SALARY_D103"		,rMap.get("SALARY_D103"  	));
		out_ds.set(row ,"SALARY_D104"		,rMap.get("SALARY_D104"  	));
	}
	out_pData.addDataSet(out_ds);

	VariableList varList = out_pData.getVariableList();
	nErrorCode  = 0;
	strErrorMsg = "salarySelect SUCC";
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
