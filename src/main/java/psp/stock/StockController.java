package psp.stock;

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
@RequestMapping("/stock/*")
public class StockController {
	Logger logger = LogManager.getLogger(StockController.class);
	
	@Autowired(required = false)
	private StockLogic stockLogic = null;
	
	@RequestMapping("inSelect.psp")
	public String inSelect(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_inList");
		logger.info("in_ds : " + in_ds);
		logger.info("inSelect(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("period_from", varList.getString("period_from"));
		pMap.put("period_to", varList.getString("period_to"));
		pMap.put("account_name", varList.getString("account_name"));
		pMap.put("crops_name", varList.getString("crops_name"));
		
		logger.info("inSelect pMap : " + pMap);
		
		List<Map<String,Object>> inList = null;
		inList = stockLogic.inSelect(pMap);
		String ods_name = "out_inList";
		String ck_name = "INOUT_CK";
		request.setAttribute("ck_name", ck_name);
		request.setAttribute("in_ds", in_ds);
		request.setAttribute("reqList", inList);
		request.setAttribute("ods_name", ods_name);
		
		return "common/commonSelect";
	}
	
	@RequestMapping("outSelect.psp")
	public String outSelect(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_outList");
		logger.info("in_ds : " + in_ds);
		logger.info("outSelect(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("period_from", varList.getString("period_from"));
		pMap.put("period_to", varList.getString("period_to"));
		pMap.put("account_name", varList.getString("account_name"));
		pMap.put("crops_name", varList.getString("crops_name"));
		
		logger.info("outSelect pMap : " + pMap);
		
		List<Map<String,Object>> outList = null;
		outList = stockLogic.outSelect(pMap);
		String ods_name = "out_outList";
		String ck_name = "INOUT_CK";
		request.setAttribute("ck_name", ck_name);
		request.setAttribute("in_ds", in_ds);
		request.setAttribute("reqList", outList);
		request.setAttribute("ods_name", ods_name);
		
		return "common/commonSelect";
	}
	
	@RequestMapping("cropsSelect.psp")
	public String cropsSelect(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_cropsList");
		if(in_ds == null) {
			in_ds = new DataSet("in_cropList");
			in_ds.addColumn("CROPS_CK" 	  ,DataTypes.STRING  ,(short)50 );
			in_ds.addColumn("CROPS_NO" 	  ,DataTypes.STRING  ,(short)50 );
			in_ds.addColumn("CROPS_SORT" 	  ,DataTypes.STRING  ,(short)50 );
			in_ds.addColumn("CROPS_NAME" 	  ,DataTypes.STRING  ,(short)50 );
		}
		logger.info("in_ds : " + in_ds);
		logger.info("cropsSelect(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_cropsName", varList.getString("p_cropsName"));
		
		logger.info("cropsSelect pMap : " + pMap);
		
		List<Map<String,Object>> cropsList = null;
		cropsList = stockLogic.cropsSelect(pMap);
		String ods_name = "out_cropsList";
		String ck_name = "CROPS_CK";
		request.setAttribute("ck_name", ck_name);
		request.setAttribute("in_ds", in_ds);
		request.setAttribute("reqList", cropsList); //**
		request.setAttribute("ods_name", ods_name);
		
		return "common/commonSelect";
	}
	
	@RequestMapping("cropsCheck.psp")
	public void cropsCheck(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		//넥사크로에서 제공하는 <요청객체>. 
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("cropsCheck(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		String p_cropsNo = varList.getString("p_cropsNo");
		
		logger.info("p_cropsNo : " + p_cropsNo);
		
		List<Map<String,Object>> cropsCheckList = null;
		cropsCheckList = stockLogic.cropsCheck(p_cropsNo); //**
		
		//넥사크로로 out_dataset을 만들어서 전달하는 과정
		PlatformData out_pData = new PlatformData();
		
		int nErrorCode = -1;
		String strErrorMsg = null;
		
		VariableList out_varList = out_pData.getVariableList();
		if(cropsCheckList.size()<1) {
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
	
	@RequestMapping("cropsUCheck.psp")
	public void cropsUCheck(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("cropsUCheck(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_cropsUNo", varList.getString("p_cropsUNo"));
		pMap.put("p_beforeCropsNo", varList.getString("p_beforeCropsNo"));
		
		logger.info("pMap : " + pMap);
		if(pMap.get("p_cropsUNo").equals(pMap.get("p_beforeCropsNo"))) {
			PlatformData out_pData = new PlatformData();
			int nErrorCode = 0;
			String strErrorMsg = "사용가능한 코드입니다.";
			VariableList out_varList = out_pData.getVariableList();
			out_varList.add("ErrorCode", nErrorCode);
			out_varList.add("ErrorMsg" , strErrorMsg);
			
			HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "utf-8");
			pRes.setData(out_pData);
			pRes.sendData(); //응답객체를 넥사크로에 쏴줌.
			return;
		}
		
		List<Map<String,Object>> cropsUCheckList = null;
		cropsUCheckList = stockLogic.cropsUCheck(pMap); //**
		
		//넥사크로로 out_dataset을 만들어서 전달하는 과정
		PlatformData out_pData = new PlatformData();
		
		int nErrorCode = -1;
		String strErrorMsg = null;
		
		VariableList out_varList = out_pData.getVariableList();
		if(cropsUCheckList.size()<1) {
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

	@RequestMapping("cropsInsert.psp")
	public void cropsInsert(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("cropsInsert(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_cropsNo", varList.getString("p_cropsNo"));
		pMap.put("p_cropsSort", varList.getString("p_cropsSort"));
		pMap.put("p_cropsName", varList.getString("p_cropsName"));
		logger.info("cropsInsert pMap : " + pMap);
		
		int result = 0;
		result = stockLogic.cropsInsert(pMap); //**
		PlatformData out_pData = new PlatformData();
		int nErrorCode = -1;
		String strErrorMsg = null;
		VariableList out_varList = out_pData.getVariableList();
		if(result == 1) {
			nErrorCode  = 0;
			strErrorMsg = "등록 되었습니다.";
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
	
	@RequestMapping("cropsUSelect.psp")
	public String cropsUSelect(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		//넥사크로에서 제공하는 <요청객체>. 
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_cropsList");
		logger.info("in_ds : " + in_ds);
		logger.info("cropsUSelect(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_cropsUNo", varList.getString("p_cropsUNo"));
		logger.info("cropsUSelect pMap : " + pMap);
		List<Map<String,Object>> cropsList = null;

		cropsList = stockLogic.cropsUSelect(pMap);
		
		String ods_name = "out_cropsList";
		String ck_name = "CROPS_CK";
		request.setAttribute("ck_name", ck_name);
		request.setAttribute("in_ds", in_ds);
		request.setAttribute("reqList", cropsList);
		request.setAttribute("ods_name", ods_name);
		
		return "common/commonSelect";
	}
	
	@RequestMapping("cropsUpdate.psp")
	public void cropsUpdate(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("cropsUpdate(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_beforeCropsNo", varList.getString("p_beforeCropsNo"));
		pMap.put("p_cropsNo", varList.getString("p_cropsNo"));
		pMap.put("p_cropsSort", varList.getString("p_cropsSort"));
		pMap.put("p_cropsName", varList.getString("p_cropsName"));
		logger.info("cropsUpdate pMap : " + pMap);
		
		int result = 0;
		result = stockLogic.cropsUpdate(pMap); //**
		
		PlatformData out_pData = new PlatformData();
		int nErrorCode = -1;
		String strErrorMsg = null;
		
		VariableList out_varList = out_pData.getVariableList();
		if(result == 1) {
			nErrorCode  = 0;
			strErrorMsg = "수정 되었습니다.";
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
	
	@RequestMapping("cropsDelete.psp")
	public String cropsDelete(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		//넥사크로에서 제공하는 <요청객체>. 
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_cropsList");
		logger.info("in_ds : " + in_ds);
		logger.info("cropsDelete(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		String p_cropsNoStr[] = null;
		if(varList.getString("p_cropsNoStr")!=null) {
			String imsi = varList.getString("p_cropsNoStr");
			logger.info("p_cropsNoStr : " + imsi);
			p_cropsNoStr = imsi.split(","); //문자값을 ,로 잘라서 배열에 넣기
		}
		logger.info("삭제할 급여 건수 : " + p_cropsNoStr.length);
		
		int result = 0;
		result = stockLogic.cropsDelete(p_cropsNoStr); //**
		logger.info("result ==> "+result);
		
		return "redirect:cropsSelect.psp";
	}
}
