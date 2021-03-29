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
	DataSet out_ds = new DataSet("out_deptList");
	out_ds.addColumn("DEPT_CK" 	  ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("DEPT_NO" 	  ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("DEPT_NAME" 	  ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("DEPT_USE" 	  ,DataTypes.STRING  ,(short)50 );
	out_ds.addColumn("DEPT_NOTE" 	  ,DataTypes.STRING  ,(short)50 );
	
	//1줄 추가 == newRow()
	for(int i=0; i<size; i++) {
		Map<String,Object> rMap = reqList.get(i);
		int row = out_ds.newRow();
		//EMP_CK는 의미없는 컬럼이다. 하지만 데이터셋에 컬럼을 지정 및 데이터를 저장하여
		//넥사크로에 넘기지 않으면, 화면에 있는 체크박스는 작동하지 않는다. 쓰레기 컬럼이 됨.
		out_ds.set(row ,"DEPT_CK" 	   ,0);
		out_ds.set(row ,"DEPT_NO" 	   ,rMap.get("DEPT_NO" 	 	));
		out_ds.set(row ,"DEPT_NAME" 	   ,rMap.get("DEPT_NAME" 	 	));
		out_ds.set(row ,"DEPT_USE" 	   ,rMap.get("DEPT_USE" 	 	));
		out_ds.set(row ,"DEPT_NOTE" 	   ,rMap.get("DEPT_NOTE" 	 	));
	}
	out_pData.addDataSet(out_ds);

	//out_pData의 Variable목록을 읽어와서 varList에 담음.
	//varList에 변수들이 추가되면 out_pData에도 추가됨. 반환과 연동까지 되는거같음.
	//PlatForm(Object) DataSet(테이블), Variable(변수)
	
	VariableList varList = out_pData.getVariableList();
	nErrorCode  = 0;
	strErrorMsg = "deptSelect SUCC";
	//varList에 아래 두 변수들을 담음.
	varList.add("ErrorCode", nErrorCode);
	varList.add("ErrorMsg" , strErrorMsg);
	
	//넥사크로에서 제공하는 <응답객체>. 
	HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
	//응답객체에 out_pData(PlatFormData)를 담음.
	pRes.setData(out_pData);
	
 	try {
		//Send data. 이 코드가 있어야 데이터를 쏴줌.
		pRes.sendData(); //응답객체를 넥사크로에 쏴줌.
	} catch (PlatformException e) {
		e.printStackTrace();
	}

%>
