package psp.approval;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApprovalDao {
	Logger logger = LogManager.getLogger(ApprovalDao.class);

	@Autowired(required = false)
	private SqlSessionTemplate sqlSessionTemplate = null;
	
	public List<Map<String, Object>> approvalSelect(Map<String, Object> pMap) {
		List<Map<String, Object>> approvalList = null;
		logger.info("approvalSelect(Dao) 호출 성공");
		approvalList = sqlSessionTemplate.selectList("approval_select", pMap);
		logger.info("approvalList:" + approvalList);
		logger.info("approvalList.size():" + approvalList.size());
		return approvalList;
	}

	public int approvalInsert(Map<String, Object> pMap) {
		logger.info("approvalInsert(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.insert("approval_insert", pMap);
		logger.info("approvalInsert result :" + result);
		return result;
	}

	public List<Map<String, Object>> approvalCount(Map<String, Object> pMap) {
		List<Map<String, Object>> approvalList = null;
		logger.info("approvalCount(Dao) 호출 성공");
		approvalList = sqlSessionTemplate.selectList("approval_count", pMap);
		logger.info("approvalList:" + approvalList);
		logger.info("approvalList.size():" + approvalList.size());
		return approvalList;
	}

	public int imsiInsert(Map<String, Object> pMap) {
		logger.info("imsiInsert(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.insert("imsi_insert", pMap);
		logger.info("imsiInsert result :" + result);
		return result;
	}

	public int imsiUpdate(Map<String, Object> pMap) {
		logger.info("imsiUpdate(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.update("imsi_update", pMap);
		logger.info("imsiUpdate result :" + result);
		return result;
	}

	public List<Map<String, Object>> mgrSelect(Map<String, Object> pMap) {
		List<Map<String, Object>> approvalList = null;
		logger.info("mgrSelect(Dao) 호출 성공");
		approvalList = sqlSessionTemplate.selectList("mgr_select", pMap);
		logger.info("approvalList:" + approvalList);
		logger.info("approvalList.size():" + approvalList.size());
		return approvalList;
	}

	public int mgrUpdate(Map<String, Object> pMap) {
		logger.info("mgrUpdate(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.update("mgr_update", pMap);
		logger.info("mgrUpdate result :" + result);
		return result;
	}

	public int mgrRefuse(Map<String, Object> pMap) {
		logger.info("mgrRefuse(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.update("mgr_refuse", pMap);
		logger.info("mgrRefuse result :" + result);
		return result;
	}

	public List<Map<String, Object>> decideSelect(Map<String, Object> pMap) {
		List<Map<String, Object>> approvalList = null;
		logger.info("decideSelect(Dao) 호출 성공");
		approvalList = sqlSessionTemplate.selectList("decide_select", pMap);
		logger.info("approvalList:" + approvalList);
		logger.info("approvalList.size():" + approvalList.size());
		return approvalList;
	}

	public List<Map<String, Object>> refuseSelect(Map<String, Object> pMap) {
		List<Map<String, Object>> approvalList = null;
		logger.info("refuseSelect(Dao) 호출 성공");
		approvalList = sqlSessionTemplate.selectList("refuse_select", pMap);
		logger.info("approvalList:" + approvalList);
		logger.info("approvalList.size():" + approvalList.size());
		return approvalList;
	}

}
