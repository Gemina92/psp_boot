package psp.approval;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;
import com.nexacro17.xapi.tx.PlatformType;

@Controller
@RequestMapping("/approval/*")
public class ApprovalController {
	Logger logger = LogManager.getLogger(ApprovalController.class);
	@Autowired(required = false)
	private ApprovalLogic approvalLogic = null;
	
	@RequestMapping("approvalSelect.psp")
	public String approvalSelect(HttpServletRequest request, HttpServletResponse response) 
			throws PlatformException, UnsupportedEncodingException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_approvalList");
		if(in_ds == null) {
			in_ds = new DataSet("in_approvalList");
			in_ds.addColumn("APPROVAL_CK" 	  ,DataTypes.STRING  ,(short)50 );
			in_ds.addColumn("APPROVAL_CODE" 	  ,DataTypes.STRING  ,(short)50 );
			in_ds.addColumn("APPROVAL_NO" 	  ,DataTypes.STRING  ,(short)50 );
			in_ds.addColumn("APPROVAL_DATE" 	  ,DataTypes.STRING  ,(short)50 );
			in_ds.addColumn("APPROVAL_TITLE" 	  ,DataTypes.STRING  ,(short)50 );
			in_ds.addColumn("EMP_NAME" 	  ,DataTypes.STRING  ,(short)50 );
			in_ds.addColumn("APPROVAL_3RD" 	  ,DataTypes.STRING  ,(short)50 );
			in_ds.addColumn("APPROVAL_STATE" 	  ,DataTypes.STRING  ,(short)50 );
		}
		logger.info("in_ds : " + in_ds);
		logger.info("approvalSelect(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("period_from", varList.getString("period_from"));
		pMap.put("period_to", varList.getString("period_to"));
		pMap.put("state", varList.getString("state"));
		pMap.put("title", varList.getString("title"));
		pMap.put("p_empNo", varList.getString("p_empNo"));
		pMap.put("p_mgrName", varList.getString("p_mgrName"));
		
		pMap.put("p_apprcode", varList.getString("p_apprcode"));
		logger.info("approvalSelect pMap : " + pMap);
		
		//Insert에서 redirect로 넘어오는 경우.
		if(request.getParameter("p_empNo")!=null && request.getParameter("p_empNo").length()>0) {
			pMap.put("p_empNo", request.getParameter("p_empNo"));
			logger.info("p_empNo : " + pMap.get("p_empNo"));
		}
		
		if(request.getParameter("state")!=null && request.getParameter("state").length()>0) {
			pMap.put("state", request.getParameter("state"));
			logger.info("state : " + pMap.get("state"));
		}
		
		if(request.getParameter("p_mgrName")!=null && request.getParameter("p_mgrName").length()>0) {
			pMap.put("p_mgrName", request.getParameter("p_mgrName"));
			logger.info("p_mgrName : " + pMap.get("p_mgrName"));
		}
		
		List<Map<String,Object>> approvalList = null;
		approvalList = approvalLogic.approvalSelect(pMap);
		
		String ods_name = "out_approvalList";
		String ck_name = "APPROVAL_CK";
		request.setAttribute("ck_name", ck_name);
		request.setAttribute("in_ds", in_ds);
		request.setAttribute("reqList", approvalList); //**
		request.setAttribute("ods_name", ods_name);
		
		return "common/commonSelect";
	}
	
	@RequestMapping("decideSelect.psp")
	public String decideSelect(HttpServletRequest request, HttpServletResponse response) 
			throws PlatformException, UnsupportedEncodingException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_approvalList");
		logger.info("in_ds : " + in_ds);
		logger.info("decideSelect(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("period_from", varList.getString("period_from"));
		pMap.put("period_to", varList.getString("period_to"));
		pMap.put("p_mgrName", varList.getString("p_mgrName"));
		logger.info("decideSelect pMap : " + pMap);
		
		List<Map<String,Object>> approvalList = null;
		approvalList = approvalLogic.decideSelect(pMap);
		
		String ods_name = "out_approvalList";
		String ck_name = "APPROVAL_CK";
		request.setAttribute("ck_name", ck_name);
		request.setAttribute("in_ds", in_ds);
		request.setAttribute("reqList", approvalList); //**
		request.setAttribute("ods_name", ods_name);
		
		return "common/commonSelect";
	}
	
	@RequestMapping("refuseSelect.psp")
	public String refuseSelect(HttpServletRequest request, HttpServletResponse response) 
			throws PlatformException, UnsupportedEncodingException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_approvalList");
		logger.info("in_ds : " + in_ds);
		logger.info("refuseSelect(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("period_from", varList.getString("period_from"));
		pMap.put("period_to", varList.getString("period_to"));
		pMap.put("p_mgrName", varList.getString("p_mgrName"));
		logger.info("refuseSelect pMap : " + pMap);
		
		List<Map<String,Object>> approvalList = null;
		approvalList = approvalLogic.refuseSelect(pMap);
		
		String ods_name = "out_approvalList";
		String ck_name = "APPROVAL_CK";
		request.setAttribute("ck_name", ck_name);
		request.setAttribute("in_ds", in_ds);
		request.setAttribute("reqList", approvalList); //**
		request.setAttribute("ods_name", ods_name);
		
		return "common/commonSelect";
	}
	
	@RequestMapping("mgrSelect.psp")
	public String mgrSelect(HttpServletRequest request, HttpServletResponse response) 
			throws PlatformException, UnsupportedEncodingException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_approvalList");
		logger.info("in_ds : " + in_ds);
		logger.info("mgrSelect(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_apprcode", varList.getString("p_apprcode"));
		logger.info("mgrSelect pMap : " + pMap);
		
		List<Map<String,Object>> approvalList = null;
		approvalList = approvalLogic.mgrSelect(pMap);
		
		String ods_name = "out_approvalList";
		String ck_name = "APPROVAL_CK";
		request.setAttribute("ck_name", ck_name);
		request.setAttribute("in_ds", in_ds);
		request.setAttribute("reqList", approvalList); //**
		request.setAttribute("ods_name", ods_name);
		
		return "common/commonSelect";
	}
	
	@RequestMapping("approvalCount.psp")
	public void approvalCount(HttpServletRequest request, HttpServletResponse response) 
			throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		//DataSet in_ds = in_pData.getDataSet("in_approvalList");
		//logger.info("in_ds : " + in_ds);
		logger.info("approvalCount(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_empNo", varList.getString("p_empNo"));
		pMap.put("p_date", varList.getString("p_date"));
		logger.info("approvalCount pMap : " + pMap);
		
		List<Map<String,Object>> approvalList = null;
		approvalList = approvalLogic.approvalCount(pMap);
		
		PlatformData out_pData = new PlatformData();
		int nErrorCode = -1;
		String strErrorMsg = null;
		
		VariableList out_varList = out_pData.getVariableList();
		nErrorCode  = approvalList.size();
		strErrorMsg = "Count 완료";
		out_varList.add("ErrorCode", nErrorCode);
		out_varList.add("ErrorMsg" , strErrorMsg);
		
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
		pRes.setData(out_pData);
		pRes.sendData();
	}
	
	@RequestMapping("approvalInsert.psp")
	public String approvalInsert(HttpServletRequest request, HttpServletResponse response) 
			throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_approvalList");
		logger.info("in_ds : " + in_ds);
		logger.info("approvalInsert(Controller) 호출 성공");
		
		Map<String,Object> pMap = new HashMap<>();
		for(int i=0; i<in_ds.getColumnCount(); i++) { //in_ds의 컬럼 수 만큼 반복.
			pMap.put(in_ds.getColumn(i).getName(), in_ds.getString(0, i)); //in_ds의 컬럼이름을 key 값으로, 그 컬럼의 값을 value로 설정
		}
		logger.info("approvalInsert pMap : " + pMap);
		
		int result = 0;
		result = approvalLogic.approvalInsert(pMap); //**
		
		return "redirect:approvalSelect.psp?p_empNo=" + pMap.get("EMP_NO");
	}
	
	@RequestMapping("imsiUpdate.psp")
	public String imsiUpdate(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_approvalList");
		logger.info("in_ds : " + in_ds);
		logger.info("imsiUpdate(Controller) 호출 성공");
		
		Map<String,Object> pMap = new HashMap<>();
		for(int i=0; i<in_ds.getColumnCount(); i++) { //in_ds의 컬럼 수 만큼 반복.
			pMap.put(in_ds.getColumn(i).getName(), in_ds.getString(0, i)); //in_ds의 컬럼이름을 key 값으로, 그 컬럼의 값을 value로 설정
		}
		logger.info("imsiUpdate pMap : " + pMap);
		
		int result = 0;
		result = approvalLogic.imsiUpdate(pMap); //**
		String state = URLEncoder.encode("임시");
		return "redirect:approvalSelect.psp?state="+state+"&p_empNo="+pMap.get("EMP_NO");
	}
	
	@RequestMapping("mgrUpdate.psp")
	public String mgrUpdate(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_approvalList");
		logger.info("in_ds : " + in_ds);
		logger.info("mgrUpdate(Controller) 호출 성공");
		
		Map<String,Object> pMap = new HashMap<>();
		for(int i=0; i<in_ds.getColumnCount(); i++) { //in_ds의 컬럼 수 만큼 반복.
			pMap.put(in_ds.getColumn(i).getName(), in_ds.getString(0, i)); //in_ds의 컬럼이름을 key 값으로, 그 컬럼의 값을 value로 설정
		}
		VariableList varList = in_pData.getVariableList();
		pMap.put("p_mgrName", varList.getString("p_mgrName"));
		pMap.put("p_state", varList.getString("p_state"));
		logger.info("mgrUpdate pMap : " + pMap);
		
		int result = 0;
		result = approvalLogic.mgrUpdate(pMap); //**
		
		String state = URLEncoder.encode("미결재");
		String p_mgrName = pMap.get("p_mgrName").toString();
		p_mgrName = URLEncoder.encode(p_mgrName);
		
		return "redirect:approvalSelect.psp?state="+state+"&p_mgrName="+p_mgrName;
	}
	
	@RequestMapping("mgrRefuse.psp")
	public String mgrRefuse(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_approvalList");
		logger.info("in_ds : " + in_ds);
		logger.info("mgrRefuse(Controller) 호출 성공");
		
		Map<String,Object> pMap = new HashMap<>();
		for(int i=0; i<in_ds.getColumnCount(); i++) { //in_ds의 컬럼 수 만큼 반복.
			pMap.put(in_ds.getColumn(i).getName(), in_ds.getString(0, i)); //in_ds의 컬럼이름을 key 값으로, 그 컬럼의 값을 value로 설정
		}
		VariableList varList = in_pData.getVariableList();
		pMap.put("p_mgrName", varList.getString("p_mgrName"));
		pMap.put("p_state", varList.getString("p_state"));
		logger.info("mgrRefuse pMap : " + pMap);
		
		int result = 0;
		result = approvalLogic.mgrRefuse(pMap); //**
		
		String state = URLEncoder.encode("미결재");
		String p_mgrName = pMap.get("p_mgrName").toString();
		p_mgrName = URLEncoder.encode(p_mgrName);
		
		return "redirect:approvalSelect.psp?state="+state+"&p_mgrName="+p_mgrName;
	}
	
}
