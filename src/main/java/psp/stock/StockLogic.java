package psp.stock;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockLogic {
	Logger logger = LogManager.getLogger(StockLogic.class);

	@Autowired(required = false)
	private StockDao stockDao = null;

	public List<Map<String, Object>> inSelect(Map<String, Object> pMap) {
		logger.info("inSelect(Logic) 호출 성공");
		List<Map<String, Object>> inList = null;
		inList = stockDao.inSelect(pMap);
		return inList;
	}

	public List<Map<String, Object>> outSelect(Map<String, Object> pMap) {
		logger.info("outSelect(Logic) 호출 성공");
		List<Map<String, Object>> outList = null;
		outList = stockDao.outSelect(pMap);
		return outList;
	}

	public List<Map<String, Object>> cropsSelect(Map<String, Object> pMap) {
		logger.info("cropsSelect(Logic) 호출 성공");
		List<Map<String, Object>> cropsList = null;
		cropsList = stockDao.cropsSelect(pMap);
		return cropsList;
	}

	public List<Map<String, Object>> cropsCheck(String p_cropsNo) {
		logger.info("cropsCheck(Logic) 호출 성공");
		List<Map<String, Object>> cropsCheckList = null;
		cropsCheckList = stockDao.cropsCheck(p_cropsNo); //**
		logger.info("cropsCheckList : " + cropsCheckList);
		return cropsCheckList;
	}

	public int cropsInsert(Map<String, Object> pMap) {
		logger.info("cropsInsert(Logic) 호출 성공");
		int result = 0;
		result = stockDao.cropsInsert(pMap);
		return result;
	}

	public List<Map<String, Object>> cropsUSelect(Map<String, Object> pMap) {
		logger.info("cropsUselect(Logic) 호출 성공");
		List<Map<String, Object>> cropsList = null;
		cropsList = stockDao.cropsUselect(pMap);
		return cropsList;
	}

	public List<Map<String, Object>> cropsUCheck(Map<String, Object> pMap) {
		logger.info("cropsUCheck(Logic) 호출 성공");
		List<Map<String, Object>> cropsUCheckList = null;
		cropsUCheckList = stockDao.cropsUCheck(pMap); //**
		logger.info("cropsUCheckList : " + cropsUCheckList);
		return cropsUCheckList;
	}

	public int cropsUpdate(Map<String, Object> pMap) {
		logger.info("cropsUpdate(Logic) 호출 성공");
		int result = 0;
		result = stockDao.cropsUpdate(pMap);
		return result;
	}

	public int cropsDelete(String[] p_cropsNoStr) {
		logger.info("cropsDelete(Logic) 호출 성공");
		int result = 0;
		result = stockDao.cropsDelete(p_cropsNoStr);
		return result;
	}

}
