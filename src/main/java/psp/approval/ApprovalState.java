package psp.approval;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

@Service
public class ApprovalState {
	Logger logger = LogManager.getLogger(ApprovalState.class);
	public List<Map<String, Object>> setStateName(List<Map<String, Object>> approvalList) {
		logger.info("setStateName(ApprovalState) 호출 성공");
		logger.info("approvalList : " + approvalList);
		logger.info("approvalList.size() : " + approvalList.size());
		for(int i=0; i<approvalList.size(); i++) {
			Map<String,Object> pMap = new HashMap<>();
			pMap = approvalList.get(i);
			logger.info("pMap : " + pMap);
			
			if(pMap.get("APPROVAL_STATE").toString().equals("0")) {
				pMap.put("APPROVAL_STATE", "기안완료");
				approvalList.set(i, pMap);
			}
			else if(pMap.get("APPROVAL_STATE").toString().equals("1")) {
				pMap.put("APPROVAL_STATE", "1차승인");
				approvalList.set(i, pMap);
			}
			else if(pMap.get("APPROVAL_STATE").toString().equals("2")) {
				pMap.put("APPROVAL_STATE", "2차승인");
				approvalList.set(i, pMap);
			}
			else if(pMap.get("APPROVAL_STATE").toString().equals("3")) {
				pMap.put("APPROVAL_STATE", "최종승인");
				approvalList.set(i, pMap);
			}
			else if(pMap.get("APPROVAL_STATE").toString().equals("4")) {
				pMap.put("APPROVAL_STATE", "반려");
				approvalList.set(i, pMap);
			}
			else if(pMap.get("APPROVAL_STATE").toString().equals("5")) {
				pMap.put("APPROVAL_STATE", "임시");
				approvalList.set(i, pMap);
			}
		}
		return approvalList;
	}

}
