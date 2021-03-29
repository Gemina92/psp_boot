package psp.stock;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockDao {
	Logger logger = LogManager.getLogger(StockDao.class);

	@Autowired(required = false)
	private SqlSessionTemplate sqlSessionTemplate = null;

	public List<Map<String, Object>> inSelect(Map<String, Object> pMap) {
		List<Map<String, Object>> inList = null;
		logger.info("inSelect 호출 성공");
		inList = sqlSessionTemplate.selectList("in_select", pMap);
		logger.info("inList:" + inList);
		logger.info("inList.size():" + inList.size());
		return inList;
	}

	public List<Map<String, Object>> outSelect(Map<String, Object> pMap) {
		List<Map<String, Object>> outList = null;
		logger.info("outSelect 호출 성공");
		outList = sqlSessionTemplate.selectList("out_select", pMap);
		logger.info("outList:" + outList);
		logger.info("outList.size():" + outList.size());
		return outList;
	}

	public List<Map<String, Object>> cropsSelect(Map<String, Object> pMap) {
		List<Map<String, Object>> cropsList = null;
		logger.info("cropsSelect 호출 성공");
		cropsList = sqlSessionTemplate.selectList("crops_select", pMap);
		logger.info("cropsList:" + cropsList);
		logger.info("cropsList.size():" + cropsList.size());
		return cropsList;
	}

	public List<Map<String, Object>> cropsCheck(String p_cropsNo) {
		logger.info("cropsCheck(Dao) 호출 성공");
		List<Map<String, Object>> cropsCheckList = null;
		cropsCheckList = sqlSessionTemplate.selectList("crops_check", p_cropsNo); //**
		logger.info("cropsCheckList.size() : "+ cropsCheckList.size());
		return cropsCheckList;
	}

	public int cropsInsert(Map<String, Object> pMap) {
		logger.info("cropsInsert(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.insert("crops_insert", pMap);
		logger.info("Insert result :" + result);
		return result;
	}

	public List<Map<String, Object>> cropsUselect(Map<String, Object> pMap) {
		List<Map<String, Object>> cropsList = null;
		logger.info("cropsUselect(Dao) 호출 성공");
		cropsList = sqlSessionTemplate.selectList("crops_Uselect", pMap);
		logger.info("cropsList.size():" + cropsList.size());
		return cropsList;
	}

	public List<Map<String, Object>> cropsUCheck(Map<String, Object> pMap) {
		logger.info("cropsUCheck(Dao) 호출 성공");
		List<Map<String, Object>> cropsUCheckList = null;
		cropsUCheckList = sqlSessionTemplate.selectList("crops_ucheck", pMap); //**
		logger.info("cropsUCheckList.size() : "+ cropsUCheckList.size());
		return cropsUCheckList;
	}

	public int cropsUpdate(Map<String, Object> pMap) {
		logger.info("cropsUpdate(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.update("crops_update", pMap);
		logger.info("cropsUpdate result :" + result);
		return result;
	}

	public int cropsDelete(String[] p_cropsNoStr) {
		logger.info("cropsDelete(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.delete("crops_deleteAll", p_cropsNoStr);
		logger.info("multiDelete result :" + result);
		return result;
	}

}
