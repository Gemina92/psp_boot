package psp.hr;

import java.io.IOException;
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
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;
import com.nexacro17.xapi.tx.PlatformType;

@Controller
@RequestMapping("/hr/*")
public class HRController {
	Logger logger = LogManager.getLogger(HRController.class);
	@Autowired(required = false)
	private HRLogic hRLogic = null;
	
	@RequestMapping("rankSelect.psp")
	public String rankSelect(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_rankList");
		logger.info("in_ds : " + in_ds);
		logger.info("rankSelect(Controller) 호출 성공");
		
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_rkName", request.getParameter("p_rkName"));
		pMap.put("p_deptNo", request.getParameter("p_deptNo"));
		logger.info("rankSelect pMap : " + pMap);
		
		List<Map<String,Object>> rankList = null;
		rankList = hRLogic.rankSelect(pMap);
		request.setAttribute("reqList", rankList);
		
		return "forward:rankSelect.jsp";
	}
	
	@RequestMapping("rankDelete.psp")
	public String rankDelete(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		//DataSet in_ds = in_pData.getDataSet("in_rankList");
		//logger.info("in_ds : " + in_ds);
		logger.info("rankDelete(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		
		String p_rankNoStr[] = null;
		if(varList.getString("p_rankNoStr")!=null) {
			String imsi = varList.getString("p_rankNoStr");
			logger.info("p_rankNoStr : " + imsi);
			p_rankNoStr = imsi.split(","); //문자값을 ,로 잘라서 배열에 넣기
		}
		logger.info("삭제할 급여 건수 : " + p_rankNoStr.length);
		
		int result = 0;
		result = hRLogic.rankDelete(p_rankNoStr); //**
		logger.info("result ==> "+result);
		
		return "redirect:rankSelect.psp";
	}
	
	@RequestMapping("rankInsert.psp")
	public void rankInsert(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("rankInsert(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_rankNo", varList.getString("p_rankNo"));
		pMap.put("p_rankName", varList.getString("p_rankName"));
		pMap.put("p_rankUse", varList.getString("p_rankUse"));
		pMap.put("p_rankNote", varList.getString("p_rankNote"));
		logger.info("rankInsert pMap : " + pMap);
		
		int result = 0;
		result = hRLogic.rankInsert(pMap); //**
		PlatformData out_pData = new PlatformData();
		int nErrorCode = -1;
		String strErrorMsg = null;
		VariableList out_varList = out_pData.getVariableList();
		if(result == 1) {
			nErrorCode  = 0;
			strErrorMsg = "등록되었습니다.";
		}
		else {
			nErrorCode  = -1;
			strErrorMsg = "에러가 발생하였습니다.";
		}
		out_varList.add("ErrorCode", nErrorCode);
		out_varList.add("ErrorMsg" , strErrorMsg);
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
		pRes.setData(out_pData);
		pRes.sendData();
	}
	
	@RequestMapping("rankCheck.psp")
	public void rankCheck(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("rankCheck(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		String p_rankNo = varList.getString("p_rankNo");
		
		logger.info("p_rankNo : " + p_rankNo);
		
		List<Map<String,Object>> rankCheckList = null;
		rankCheckList = hRLogic.rankCheck(p_rankNo); //**
		
		PlatformData out_pData = new PlatformData();
		VariableList out_varList = out_pData.getVariableList();
		int nErrorCode = -1;
		String strErrorMsg = null;
		if(rankCheckList.size()<1) {
			nErrorCode  = 0;
			strErrorMsg = "사용가능한 코드입니다.";
		}
		else {
			nErrorCode  = -1;
			strErrorMsg = "사용중인 코드입니다.";
		}
		out_varList.add("ErrorCode", nErrorCode);
		out_varList.add("ErrorMsg" , strErrorMsg);
		
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
		pRes.setData(out_pData);
		pRes.sendData();
	}
	
	@RequestMapping("rankUpdate.psp")
	public void rankUpdate(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("rankUpdate(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_beforeRankNo", varList.getString("p_beforeRankNo"));
		pMap.put("p_afterRankNo", varList.getString("p_afterRankNo"));
		pMap.put("p_rankName", varList.getString("p_rankName"));
		pMap.put("p_rankUse", varList.getString("p_rankUse"));
		pMap.put("p_rankNote", varList.getString("p_rankNote"));
		logger.info("rankUpdate pMap : " + pMap);
		
		int result = 0;
		result = hRLogic.rankUpdate(pMap); //**
		
		PlatformData out_pData = new PlatformData();
		int nErrorCode = -1;
		String strErrorMsg = null;
		
		VariableList out_varList = out_pData.getVariableList();
		if(result == 1) {
			nErrorCode  = 0;
			strErrorMsg = "수정되었습니다.";
		}
		else {
			nErrorCode  = -1;
			strErrorMsg = "에러가 발생하였습니다.";
		}
		out_varList.add("ErrorCode", nErrorCode);
		out_varList.add("ErrorMsg" , strErrorMsg);
		
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
		pRes.setData(out_pData);
		pRes.sendData();
	}
	
	@RequestMapping("positionSelect.psp")
	public String positionSelect(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("positionSelect(Controller) 호출 성공");
		// blah blah blah..
		String p_psName = null;
		p_psName = request.getParameter("p_psName");
		logger.info("p_psName : " + p_psName);
		
		List<Map<String,Object>> positionList = null;
		positionList = hRLogic.positionSelect(p_psName);
		request.setAttribute("reqList", positionList);
		
		return "forward:positionSelect.jsp";
	}
	
	@RequestMapping("positionDelete.psp")
	public String positionDelete(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("positionDelete(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		String p_positionNoStr[] = null;
		if(varList.getString("p_positionNoStr")!=null) {
			String imsi = varList.getString("p_positionNoStr");
			logger.info("p_positionNoStr : " + imsi);
			p_positionNoStr = imsi.split(","); //문자값을 ,로 잘라서 배열에 넣기
		}
		logger.info("삭제할 급여 건수 : " + p_positionNoStr.length);
		
		int result = 0;
		result = hRLogic.positionDelete(p_positionNoStr); //**
		logger.info("result ==> "+result);
		
		return "redirect:positionSelect.psp";
	}
	
	@RequestMapping("positionCheck.psp")
	public void positionCheck(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("positionCheck(Controller) 호출 성공");
		VariableList varList = in_pData.getVariableList();
		String p_positionNo = varList.getString("p_positionNo");
		logger.info("p_positionNo : " + p_positionNo);
		
		List<Map<String,Object>> positionCheckList = null;
		positionCheckList = hRLogic.positionCheck(p_positionNo); //**
		
		PlatformData out_pData = new PlatformData();
		int nErrorCode = -1;
		String strErrorMsg = null;
		
		VariableList out_varList = out_pData.getVariableList();
		if(positionCheckList.size()<1) {
			nErrorCode  = 0;
			strErrorMsg = "사용가능한 코드입니다.";
		}
		else {
			nErrorCode  = -1;
			strErrorMsg = "사용중인 코드입니다.";
		}
		out_varList.add("ErrorCode", nErrorCode);
		out_varList.add("ErrorMsg" , strErrorMsg);
		
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
		pRes.setData(out_pData);
		pRes.sendData();
	}
	
	@RequestMapping("positionUCheck.psp")
	public void positionUCheck(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("positionUCheck(Controller) 호출 성공");
		VariableList varList = in_pData.getVariableList();
		String p_positionNo = varList.getString("p_positionNo");
		String p_beforePositionNo = varList.getString("p_beforePositionNo");
		logger.info("p_positionNo : " + p_positionNo);
		logger.info("p_beforePositionNo : " + p_beforePositionNo);
		if(p_positionNo.equals(p_beforePositionNo)) {
			PlatformData out_pData = new PlatformData();
			int nErrorCode = 0;
			String strErrorMsg = "사용가능한 코드입니다.";
			VariableList out_varList = out_pData.getVariableList();
			out_varList.add("ErrorCode", nErrorCode);
			out_varList.add("ErrorMsg" , strErrorMsg);
			
			HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
			pRes.setData(out_pData);
			pRes.sendData();
			return;
		}
		
		List<Map<String,Object>> positionUCheckList = null;
		positionUCheckList = hRLogic.positionUCheck(p_positionNo); //**
		
		PlatformData out_pData = new PlatformData();
		int nErrorCode = -1;
		String strErrorMsg = null;
		
		VariableList out_varList = out_pData.getVariableList();
		if(positionUCheckList.size()<1) {
			nErrorCode  = 0;
			strErrorMsg = "사용가능한 코드입니다.";
		}
		else {
			nErrorCode  = -1;
			strErrorMsg = "사용중인 코드입니다.";
		}
		out_varList.add("ErrorCode", nErrorCode);
		out_varList.add("ErrorMsg" , strErrorMsg);
		
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
		pRes.setData(out_pData);
		pRes.sendData();
	}
	
	@RequestMapping("positionInsert.psp")
	public void positionInsert(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("positionInsert(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_positionNo", varList.getString("p_positionNo"));
		pMap.put("p_positionName", varList.getString("p_positionName"));
		pMap.put("p_positionUse", varList.getString("p_positionUse"));
		pMap.put("p_positionNote", varList.getString("p_positionNote"));
		logger.info("positionInsert pMap : " + pMap);
		
		int result = 0;
		result = hRLogic.positionInsert(pMap); //**
		
		PlatformData out_pData = new PlatformData();
		int nErrorCode = -1;
		String strErrorMsg = null;
		
		VariableList out_varList = out_pData.getVariableList();
		if(result == 1) {
			nErrorCode  = 0;
			strErrorMsg = "등록되었습니다.";
		}
		else {
			nErrorCode  = -1;
			strErrorMsg = "에러가 발생하였습니다.";
		}
		out_varList.add("ErrorCode", nErrorCode);
		out_varList.add("ErrorMsg" , strErrorMsg);
		
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
		pRes.setData(out_pData);
		pRes.sendData();
	}
	
	@RequestMapping("positionUpdate.psp")
	public String positionUpdate(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("positionUpdate(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_beforePositionNo", varList.getString("p_beforePositionNo"));
		pMap.put("p_afterPositionNo", varList.getString("p_afterPositionNo"));
		pMap.put("p_positionName", varList.getString("p_positionName"));
		pMap.put("p_positionUse", varList.getString("p_positionUse"));
		pMap.put("p_positionNote", varList.getString("p_positionNote"));
		logger.info("positionUpdate pMap : " + pMap);
		
		int result = 0;
		result = hRLogic.positionUpdate(pMap); //**
		
		return "redirect:positionSelect.psp";
	}
	
	@RequestMapping("zipSearch.psp")
	public String zipSearch(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("zipSearch(Controller) 호출 성공");
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_search", varList.getString("p_search"));
		logger.info("zipSearch pMap : " + pMap);
		
		List<Map<String,Object>> zipList = null;
		zipList = hRLogic.zipSearch(pMap);
		request.setAttribute("reqList", zipList);
		
		return "forward:zipSearch.jsp";
	}
	
	@RequestMapping("empSelect.psp")
	public String empSelect(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_empList");
		logger.info("in_ds : " + in_ds);
		logger.info("empSelect(Controller) 호출 성공");
		
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_empName", request.getParameter("p_empName"));
		pMap.put("p_deptNo", request.getParameter("p_deptNo"));
		pMap.put("p_rankNo", request.getParameter("p_rankNo"));
		logger.info("empSelect pMap : " + pMap);
		
		List<Map<String,Object>> empList = null;
		empList = hRLogic.empSelect(pMap);
		request.setAttribute("reqList", empList);
		
		return "forward:empSelect.jsp";
	}
	
	@RequestMapping("empUSelect.psp")
	public String empUSelect(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("empUSelect(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_empNo", varList.getString("p_empNo"));
		logger.info("empUSelect pMap : " + pMap);
		List<Map<String,Object>> empList = null;

		empList = hRLogic.empUSelect(pMap);
		request.setAttribute("reqList", empList);
		
		return "forward:empUSelect.jsp";
	}
	
	@RequestMapping("empInsert.psp")
	public String empInsert(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_empList");
		logger.info("in_ds : " + in_ds);
		logger.info("empInsert(Controller) 호출 성공");
		Map<String,Object> pMap = new HashMap<>();
		for(int i=0; i<in_ds.getRowCount(); i++) {
			for(int j=0; j<in_ds.getColumnCount(); j++) {
				pMap.put(in_ds.getColumn(j).getName(), in_ds.getString(0, j));
			}
		}
		logger.info("empInsert pMap : " + pMap);
		
		int result = 0;
		result = hRLogic.empInsert(pMap); //**
		logger.info("result ==> "+result);
		
		return "redirect:empSelect.psp";
	}
	
	@RequestMapping("empUpdate.psp")
	public String empUpdate(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_empList");
		logger.info("in_ds : " + in_ds);
		logger.info("empUpdate(Controller) 호출 성공");
		Map<String,Object> pMap = new HashMap<>();
			for(int i=0; i<in_ds.getColumnCount(); i++) {
				pMap.put(in_ds.getColumn(i).getName(), in_ds.getString(0, i));
			}
		logger.info("empUpdate pMap : " + pMap);
		
		int result = 0;
		result = hRLogic.empUpdate(pMap); //**
		logger.info("result ==> "+result);
		
		return "redirect:empSelect.psp";
	}
	
	@RequestMapping("empDelete.psp")
	public String empDelete(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_empList");
		logger.info("in_ds : " + in_ds);
		logger.info("empDelete(Controller) 호출 성공");
		
		String p_empnoStr[] = null;
		if(request.getParameter("p_empnoStr")!=null) {
			String imsi = request.getParameter("p_empnoStr"); //파라미터 값 받기
			logger.info("p_empnoStr : " + imsi);
			p_empnoStr = imsi.split(","); //문자값을 ,로 잘라서 배열에 넣기
		}
		logger.info("삭제할 사번 갯수 : " + p_empnoStr.length);
		
		int result = 0;
		result = hRLogic.empDelete(p_empnoStr); //**
		logger.info("result ==> "+result);
		
		return "redirect:empSelect.psp";
	}
	
	@RequestMapping("empCheck.psp")
	public void empCheck(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("empCheck(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		String p_empNo = varList.getString("p_empNo");
		
		logger.info("p_empNo : " + p_empNo);
		
		List<Map<String,Object>> empCheckList = null;
		empCheckList = hRLogic.empCheck(p_empNo);
		PlatformData out_pData = new PlatformData();
		int nErrorCode = -1;
		String strErrorMsg = null;
		VariableList out_varList = out_pData.getVariableList();
		if(empCheckList.size()<1) {
			nErrorCode  = 0;
			strErrorMsg = "사용가능한 사원번호입니다.";
		}
		else {
			nErrorCode  = -1;
			strErrorMsg = "사용중인 사원번호입니다.";
		}
		out_varList.add("ErrorCode", nErrorCode);
		out_varList.add("ErrorMsg" , strErrorMsg);
		
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
		pRes.setData(out_pData);
		pRes.sendData();
	}
	
	@RequestMapping("deptSelect.psp")
	public String deptSelect(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_deptList");
		logger.info("in_ds : " + in_ds);
		logger.info("deptSelect(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		String p_deptName = varList.getString("p_deptName");
		//String p_deptName = null;
		//p_deptName = request.getParameter("p_deptName");
		logger.info("p_deptName : " + p_deptName);
		
		List<Map<String,Object>> deptList = null;
		deptList = hRLogic.deptSelect(p_deptName); //**
		request.setAttribute("reqList", deptList);
		
		return "forward:deptSelect.jsp";
	}
	
	@RequestMapping("deptCheck.psp")
	public void deptCheck(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("deptCheck(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		String p_deptNo = varList.getString("p_deptNo");
		
		logger.info("p_deptNo : " + p_deptNo);
		
		List<Map<String,Object>> deptCheckList = null;
		deptCheckList = hRLogic.deptCheck(p_deptNo); //**
		
		PlatformData out_pData = new PlatformData();
		VariableList out_varList = out_pData.getVariableList();
		int nErrorCode = -1;
		String strErrorMsg = null;
		if(deptCheckList.size()<1) {
			nErrorCode  = 0;
			strErrorMsg = "사용가능한 부서코드입니다.";
		}
		else {
			nErrorCode  = -1;
			strErrorMsg = "사용중인 부서코드입니다.";
		}
		out_varList.add("ErrorCode", nErrorCode);
		out_varList.add("ErrorMsg" , strErrorMsg);
		
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
		pRes.setData(out_pData);
		pRes.sendData();
	}
	
	@RequestMapping("deptInsert.psp")
	public void deptInsert(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("deptInsert(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_deptNo", varList.getString("p_deptNo"));
		pMap.put("p_deptName", varList.getString("p_deptName"));
		pMap.put("p_deptUse", varList.getString("p_deptUse"));
		pMap.put("p_deptNote", varList.getString("p_deptNote"));
		logger.info("deptInsert pMap : " + pMap);
		
		int result = 0;
		result = hRLogic.deptInsert(pMap); //**
		
		PlatformData out_pData = new PlatformData();
		int nErrorCode = -1;
		String strErrorMsg = null;
		
		VariableList out_varList = out_pData.getVariableList();
		if(result == 1) {
			nErrorCode  = 0;
			strErrorMsg = "등록되었습니다.";
		}
		else {
			nErrorCode  = -1;
			strErrorMsg = "에러가 발생하였습니다.";
		}
		out_varList.add("ErrorCode", nErrorCode);
		out_varList.add("ErrorMsg" , strErrorMsg);
		
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
		pRes.setData(out_pData);
		pRes.sendData();
	}
	
	@RequestMapping("deptUpdate.psp")
	public void deptUpdate(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("deptUpdate(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_beforeDeptNo", varList.getString("p_beforeDeptNo"));
		pMap.put("p_afterDeptNo", varList.getString("p_afterDeptNo"));
		pMap.put("p_deptName", varList.getString("p_deptName"));
		pMap.put("p_deptUse", varList.getString("p_deptUse"));
		pMap.put("p_deptNote", varList.getString("p_deptNote"));
		logger.info("deptUpdate pMap : " + pMap);
		
		int result = 0;
		result = hRLogic.deptUpdate(pMap); //**
		
		PlatformData out_pData = new PlatformData();
		int nErrorCode = -1;
		String strErrorMsg = null;
		
		VariableList out_varList = out_pData.getVariableList();
		if(result == 1) {
			nErrorCode  = 0;
			strErrorMsg = "수정되었습니다.";
		}
		else {
			nErrorCode  = -1;
			strErrorMsg = "에러가 발생하였습니다.";
		}
		out_varList.add("ErrorCode", nErrorCode);
		out_varList.add("ErrorMsg" , strErrorMsg);
		
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
		pRes.setData(out_pData);
		pRes.sendData();
	}
	
	@RequestMapping("deptDelete.psp")
	public String deptDelete(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		//DataSet in_ds = in_pData.getDataSet("in_deptList");
		//logger.info("in_ds : " + in_ds);
		logger.info("deptDelete(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		
		String p_deptNoStr[] = null;
		if(varList.getString("p_deptNoStr")!=null) {
			String imsi = varList.getString("p_deptNoStr");
			logger.info("p_deptNoStr : " + imsi);
			p_deptNoStr = imsi.split(","); //문자값을 ,로 잘라서 배열에 넣기
		}
		logger.info("삭제할 급여 건수 : " + p_deptNoStr.length);
		
		int result = 0;
		result = hRLogic.deptDelete(p_deptNoStr); //**
		logger.info("result ==> "+result);
		
		return "redirect:deptSelect.psp";
	}
	
	@RequestMapping("salarySelect.psp")
	public String salarySelect(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_salaryList");
		logger.info("in_ds : " + in_ds);
		logger.info("salarySelect(Controller) 호출 성공");
		
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_salaryNo", request.getParameter("p_salaryNo"));
		pMap.put("p_deptNo", request.getParameter("p_deptNo"));
		pMap.put("p_rankNo", request.getParameter("p_rankNo"));
		logger.info("salarySelect pMap : " + pMap);
		
		List<Map<String,Object>> salaryList = null;
		salaryList = hRLogic.salarySelect(pMap); //**
		request.setAttribute("reqList", salaryList);
		
		return "forward:salarySelect.jsp";
	}
	
	@RequestMapping("salaryInsert.psp")
	public String salaryInsert(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_salaryList");
		logger.info("in_ds : " + in_ds);
		logger.info("salaryInsert(Controller) 호출 성공");
		
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_salaryDate", request.getParameter("p_salaryDate"));
		pMap.put("p_empNo", request.getParameter("p_empNo"));
		
		pMap.put("p_c100", request.getParameter("p_c100"));
		pMap.put("p_c101", request.getParameter("p_c101"));
		pMap.put("p_c102", request.getParameter("p_c102"));
		pMap.put("p_c103", request.getParameter("p_c103"));
		pMap.put("p_c104", request.getParameter("p_c104"));
		pMap.put("p_c105", request.getParameter("p_c105"));
		
		pMap.put("p_d100", request.getParameter("p_d100"));
		pMap.put("p_d101", request.getParameter("p_d101"));
		pMap.put("p_d102", request.getParameter("p_d102"));
		pMap.put("p_d103", request.getParameter("p_d103"));
		pMap.put("p_d104", request.getParameter("p_d104"));
		
		logger.info("salaryInsert pMap : " + pMap);
		
		int result = 0;
		result = hRLogic.salaryInsert(pMap); //**
		logger.info("result ==> "+result);
		
		return "redirect:salarySelect.psp";
	}
	
	@RequestMapping("salaryUpdate.psp")
	public String salaryUpdate(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("salaryUpdate(Controller) 호출 성공");
		
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_salaryDate", request.getParameter("p_salaryDate"));
		pMap.put("p_salaryNo", request.getParameter("p_salaryNo"));
		
		pMap.put("p_c100", request.getParameter("p_c100"));
		pMap.put("p_c101", request.getParameter("p_c101"));
		pMap.put("p_c102", request.getParameter("p_c102"));
		pMap.put("p_c103", request.getParameter("p_c103"));
		pMap.put("p_c104", request.getParameter("p_c104"));
		pMap.put("p_c105", request.getParameter("p_c105"));
		
		pMap.put("p_d100", request.getParameter("p_d100"));
		pMap.put("p_d101", request.getParameter("p_d101"));
		pMap.put("p_d102", request.getParameter("p_d102"));
		pMap.put("p_d103", request.getParameter("p_d103"));
		pMap.put("p_d104", request.getParameter("p_d104"));
		
		logger.info("salaryUpdate pMap : " + pMap);
		
		int result = 0;
		result = hRLogic.salaryUpdate(pMap); //**
		logger.info("result ==> "+result);
		
		return "redirect:salarySelect.psp";
	}
	
	@RequestMapping("salaryDelete.psp")
	public String salaryDelete(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_salaryList");
		logger.info("in_ds : " + in_ds);
		logger.info("salaryDelete(Controller) 호출 성공");
		
		String p_salaryNoStr[] = null;
		if(request.getParameter("p_salaryNoStr")!=null) {
			String imsi = request.getParameter("p_salaryNoStr"); //파라미터 값 받기
			logger.info("p_salaryNoStr : " + imsi);
			p_salaryNoStr = imsi.split(","); //문자값을 ,로 잘라서 배열에 넣기
		}
		logger.info("삭제할 급여 건수 : " + p_salaryNoStr.length);
		
		int result = 0;
		result = hRLogic.salaryDelete(p_salaryNoStr); //**
		logger.info("result ==> "+result);
		
		return "redirect:salarySelect.psp";
	}
	
	//Controller에서는 넥사크로 화면에 메세지값만 반환(void)
	@RequestMapping("emailSend.psp")
	public void emailSend(HttpServletRequest request, HttpServletResponse response) 
			throws PlatformException, IOException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		//DataSet in_ds = in_pData.getDataSet("in_salaryList");
		//logger.info("in_ds : " + in_ds);
		logger.info("emailSend(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		String p_salaryNoStr[] = null;
		if(varList.getString("p_salaryNoStr")!=null) {
			String imsi = varList.getString("p_salaryNoStr");
			logger.info("p_salaryNoStr : " + imsi);
			p_salaryNoStr = imsi.split(","); //문자값을 ,로 잘라서 배열에 넣기
		}
		logger.info("발송할 이메일 건수 : " + p_salaryNoStr.length);
		
		int result = 0;
		result = hRLogic.emailSend(p_salaryNoStr); //**
		logger.info("result ==> "+result);
		
		PlatformData out_pData = new PlatformData();
		int nErrorCode = -1;
		String strErrorMsg = null;
		
		VariableList out_varList = out_pData.getVariableList();
		if(result > 0) {
			nErrorCode  = 0;
			strErrorMsg = "이메일 " + result + "건이 발송 되었습니다.";
		}
		else {
			nErrorCode  = -1;
			strErrorMsg = "에러가 발생하였습니다.";
		}
		System.out.println("strErrorMsg : " + strErrorMsg);
		out_varList.add("ErrorCode", nErrorCode);
		out_varList.add("ErrorMsg" , strErrorMsg);
		
		HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
		pRes.setData(out_pData);
		pRes.sendData();
	}
	
}
