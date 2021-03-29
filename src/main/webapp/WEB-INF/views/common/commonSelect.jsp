<%@page import="java.util.Iterator"%>
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
	String ck_name = (String)request.getAttribute("ck_name"); //ck이름
	DataSet in_ds = (DataSet)request.getAttribute("in_ds"); //out_ds에 덮어 쓸 in_ds
	in_ds.clearData(); //in_ds의 데이터 초기화(컬럼은 유지)
	List<Map<String,Object>> reqList = (List<Map<String,Object>>)request.getAttribute("reqList"); //db에서 받아온 값들
	String ods_name = (String)request.getAttribute("ods_name"); //out_ds이름
	System.out.println("ck_name : " + ck_name);	
	System.out.println("in_ds : " + in_ds);	
	System.out.println("reqList : " + reqList);	
	System.out.println("ods_name : " + ods_name);	
	int size = 0; 
	if(reqList!=null) {
		size = reqList.size();
	}
		
	PlatformData out_pData = new PlatformData();
	int    nErrorCode  = 0;
	String strErrorMsg = "START";
	
	DataSet out_ds = in_ds;
	out_ds.setName(ods_name);
	
	for(int i=0; i<size; i++) { //reqList의 크기만큼 반복
		Map<String,Object> rMap = reqList.get(i);
		int row = out_ds.newRow(); //out_ds에 행 추가
		for(int j=0; j<out_ds.getColumnCount(); j++) { //out_ds의 컬럼수만큼 반복
			out_ds.set(row ,ck_name ,0); //CK부분 set
			Iterator<String> keys = rMap.keySet().iterator(); //rMap의 키 값 읽어들임
			while(keys.hasNext()) { //키 값이 있는동안 반복
				String key = keys.next(); //키 값 변수에 저장
				if(out_ds.getColumn(j).getName().equals(key)) {//out_ds의 컬럼이름과 rMap의 키값이 같을 때.
					//System.out.println("ods_getCol : " + out_ds.getColumn(j).getName());
					//System.out.println("key : " + key);
					out_ds.set(row, key, rMap.get(key));
					break;
				}
			}
		}
	}
	
	out_pData.addDataSet(out_ds);
	nErrorCode  = 0;
	strErrorMsg = "transaction SUCC";
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
