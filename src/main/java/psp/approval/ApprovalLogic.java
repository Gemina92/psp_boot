package psp.approval;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApprovalLogic {
	Logger logger = LogManager.getLogger(ApprovalLogic.class);

	@Autowired(required = false)
	private ApprovalDao approvalDao = null;

	@Autowired(required = false)
	private ApprovalState approvalState = null;
	
	
	public List<Map<String, Object>> approvalSelect(Map<String, Object> pMap) {
		logger.info("approvalSelect(Logic) 호출 성공");
		List<Map<String, Object>> approvalList = null;
		approvalList = approvalDao.approvalSelect(pMap);
		approvalList = approvalState.setStateName(approvalList);
		return approvalList;
	}

	public int approvalInsert(Map<String, Object> pMap) {
		logger.info("approvalInsert(Logic) 호출 성공");
		int result = 0;
		if(pMap.get("APPROVAL_STATE") != null 
				&& pMap.get("APPROVAL_STATE").toString().equals("5")) { //상태값이 5(임시)일 때
			result = approvalDao.imsiInsert(pMap);
			return result;
		}
		result = approvalDao.approvalInsert(pMap);
		return result;
	}

	public List<Map<String, Object>> approvalCount(Map<String, Object> pMap) {
		logger.info("approvalCount(Logic) 호출 성공");
		List<Map<String, Object>> approvalList = null;
		approvalList = approvalDao.approvalCount(pMap);
		return approvalList;
	}

	public int imsiUpdate(Map<String, Object> pMap) {
		logger.info("imsiUpdate(Logic) 호출 성공");
		int result = 0;
		result = approvalDao.imsiUpdate(pMap);
		return result;
	}

	public List<Map<String, Object>> mgrSelect(Map<String, Object> pMap) {
		logger.info("mgrSelect(Logic) 호출 성공");
		List<Map<String, Object>> approvalList = null;
		approvalList = approvalDao.mgrSelect(pMap);
		approvalList = approvalState.setStateName(approvalList);
		return approvalList;
	}

	public int mgrUpdate(Map<String, Object> pMap) {
		logger.info("mgrUpdate(Logic) 호출 성공");
		int result = 0;
		result = approvalDao.mgrUpdate(pMap);
		return result;
	}

	public int mgrRefuse(Map<String, Object> pMap) {
		logger.info("mgrRefuse(Logic) 호출 성공");
		int result = 0;
		result = approvalDao.mgrRefuse(pMap);
		return result;
	}

	public List<Map<String, Object>> decideSelect(Map<String, Object> pMap) {
		logger.info("decideSelect(Logic) 호출 성공");
		List<Map<String, Object>> approvalList = null;
		approvalList = approvalDao.decideSelect(pMap);
		approvalList = approvalState.setStateName(approvalList);
		return approvalList;
	}

	public List<Map<String, Object>> refuseSelect(Map<String, Object> pMap) {
		logger.info("refuseSelect(Logic) 호출 성공");
		List<Map<String, Object>> approvalList = null;
		approvalList = approvalDao.refuseSelect(pMap);
		approvalList = approvalState.setStateName(approvalList);
		return approvalList;
	}

}
