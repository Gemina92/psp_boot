package psp.sales;

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
@RequestMapping("/sales/*")
public class SalesController {
	Logger logger = LogManager.getLogger(SalesController.class);
	@Autowired(required = false)
	public SalesLogic SalesLogic = null;
	
	@RequestMapping("accountSelect.psp")
	public String login(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
		//넥사크로에서 제공하는 <요청객체>. 
		HttpPlatformRequest pReq = new HttpPlatformRequest(request);
		//넥사크로 화면으로부터 값을 받아오는 코드. 
		//HTTP요청으로부터 데이터(PlatformData)를 수신받는다.
		pReq.receiveData();
		PlatformData in_pData = pReq.getData();
		DataSet in_ds = in_pData.getDataSet("in_accountList");
		logger.info("in_ds : " + in_ds);
		logger.info("accountSelect(Controller) 호출 성공");
		
		Map<String,Object> pMap = new HashMap<>();
		pMap.put("p_accountCode", request.getParameter("p_accountCode"));
		pMap.put("p_accountName", request.getParameter("p_accountName"));
		pMap.put("p_accountRep", request.getParameter("p_accountRep"));
		logger.info("accountSelect pMap : " + pMap);

		//넥사크로에서 datset이랑 파라미터까지 완료
		
		List<Map<String,Object>> accountList = null;
		accountList = SalesLogic.accountSelect(pMap); //** //여기서 오라클을 경유하여 rmap에 결과값을 받음.
		request.setAttribute("reqList", accountList);
		
		return "forward:accountSelect.jsp";
	}
	
}
