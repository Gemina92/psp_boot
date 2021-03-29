package psp.member;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;
import com.nexacro17.xapi.tx.PlatformType;

import psp.util.HashMapBinder;

@Controller
@RequestMapping("/member/*")
public class MemberController {
	Logger logger = LogManager.getLogger(MemberController.class);
	
	@Autowired(required = false)
	private MemberLogic memberLogic = null;
	
	@RequestMapping("login.psp")
	public String login(HttpServletRequest request, HttpServletResponse res) throws PlatformException {
			//넥사크로에서 제공하는 <요청객체>. 
			HttpPlatformRequest pReq = new HttpPlatformRequest(request);
			//넥사크로 화면으로부터 값을 받아오는 코드. 
			//HTTP요청으로부터 데이터(PlatformData)를 수신받는다.
			pReq.receiveData(); //넥사크로 페이지의 스크립트코드에서 3번째 파라미터로 전송된 값
			PlatformData in_pData = pReq.getData(); //넥사크로에서 전송된 값을 받아오기 위한 객체 선언
			//DataSet in_ds = in_pData.getDataSet("in_mem");
			// http://127.0.0.1:8000/member/login.psp?p_empno=11&p_emppw=11
			//logger.info("in_ds : " + in_ds);
			logger.info("login(Controller) 호출 성공");
			logger.info("MemberLogic : " + memberLogic);
			
			//사용자가 화면에 입력한 아이디와 비밀번호 넘기기
			Map<String,Object> pMap = new HashMap<>();
			pMap.put("p_empno", request.getParameter("p_empno"));
			pMap.put("p_emppw", request.getParameter("p_emppw"));
			logger.info("login pMap : " + pMap);

			
			Map<String,Object> rMap = null;
			rMap = memberLogic.login(pMap); //** //여기서 오라클을 경유하여 rMap에 결과값을 받음.
			rMap.put("p_empno", pMap.get("p_empno"));
			rMap.put("p_emppw", pMap.get("p_emppw"));
			List<Map<String, Object>> reqList = new ArrayList<>();
			reqList.add(rMap);
			request.setAttribute("reqList", reqList);

		return "forward:login.jsp";
	}
	
	@RequestMapping("pwUpdate.psp")
	public void pwUpdate(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		logger.info("pwUpdate(Controller) 호출 성공");
		
		VariableList varList = in_pData.getVariableList();
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_empNo", varList.getString("p_empNo"));
		pMap.put("after_pw", varList.getString("after_pw"));
		logger.info("pwUpdate pMap : " + pMap);
		
		int result = 0;
		result = memberLogic.pwUpdate(pMap); //**
		
		PlatformData out_pData = new PlatformData();
		int nErrorCode = -1;
		String strErrorMsg = null;
		VariableList out_varList = out_pData.getVariableList();
		if(result == 1) {
			nErrorCode  = 0;
			strErrorMsg = "비밀번호가 변경되었습니다.";
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
}
