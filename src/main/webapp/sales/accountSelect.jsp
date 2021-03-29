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
	//out_ds 선언 및 생성
	DataSet out_ds = new DataSet("out_accountList");
	out_ds.addColumn("ACCOUNT_CK" 	  ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("ACCOUNT_CODE" 	  ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("ACCOUNT_NAME"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("ACCOUNT_REPNUM"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("ACCOUNT_REP"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("ACCOUNT_NUM"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("ACCOUNT_ADDR"      ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("EMP_NAME"      		,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("ACCOUNT_USE"      ,DataTypes.STRING  ,(short)50 );
	//컬럼 생성
	
	//컬럼이 생성된 빈 out_dataset에다가 data를 넣어야함.
	//out_ds에 rmap값 넣기
	//1줄 추가 == newRow()
	for(int i=0; i<size; i++) {
		Map<String,Object> rMap = reqList.get(i);
		int row = out_ds.newRow();
		out_ds.set(row ,"ACCOUNT_CK" 	   	,0);
		out_ds.set(row ,"ACCOUNT_CODE" 	   	,rMap.get("ACCOUNT_CODE" 	));
		out_ds.set(row ,"ACCOUNT_NAME"     	,rMap.get("ACCOUNT_NAME"  	));
		out_ds.set(row ,"ACCOUNT_REPNUM"   	,rMap.get("ACCOUNT_REPNUM"	));
		out_ds.set(row ,"ACCOUNT_REP"   	,rMap.get("ACCOUNT_REP"		));
		out_ds.set(row ,"ACCOUNT_NUM"      	,rMap.get("ACCOUNT_NUM"   	));
		out_ds.set(row ,"ACCOUNT_ADDR"      ,rMap.get("ACCOUNT_ADDR"   	));
		out_ds.set(row ,"EMP_NAME"      	,rMap.get("EMP_NAME"      	));
		out_ds.set(row ,"ACCOUNT_USE"      	,rMap.get("ACCOUNT_USE"   	));
	}
	//여기까지가 out_dataset에 값넣기 끝
	
	//플랫폼데이터에 out_dataset 넣어주기
	out_pData.addDataSet(out_ds);

	//out_pData의 Variable목록을 읽어와서 varList에 담음.
	//varList에 변수들이 추가되면 out_pData에도 추가됨. 반환과 연동까지 되는거같음.
	//PlatForm(Object) DataSet(테이블), Variable(변수)
	
	VariableList varList = out_pData.getVariableList();
	nErrorCode  = 0;
	strErrorMsg = "login SUCC";
	//varList에 아래 두 변수들을 담음.
	varList.add("ErrorCode", nErrorCode);
	varList.add("ErrorMsg" , strErrorMsg);
	
	//넥사크로에서 제공하는 <응답객체>. 
	HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
	//응답객체에 out_pData(PlatFormData)를 담음.
	pRes.setData(out_pData);
	//담기까지 끝
	
 	try {
		//Send data. 이 코드가 있어야 데이터를 쏴줌.
		pRes.sendData(); //응답객체를 넥사크로에 쏴줌.
	} catch (PlatformException e) {
		e.printStackTrace();
	}

	
	
%>
