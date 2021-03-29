package psp.sales;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SalesDao {
	Logger logger = LogManager.getLogger(SalesDao.class);

	@Autowired(required = false)
	private SqlSessionTemplate sqlSessionTemplate = null;

	public List<Map<String, Object>> accountSelect(Map<String, Object> pMap) {//프로시저의 파라미터 맵은 파라미터이면서 리절트 인식
		List<Map<String, Object>> accountList = null;
		logger.info("accountSelect 호출 성공");
		logger.info("sqlSessionTemplate : " + sqlSessionTemplate);
		
		accountList = sqlSessionTemplate.selectList("account_select",pMap);
		logger.info("accountList : " + accountList);
		logger.info("accountList.size() : " + accountList.size());
		
		return accountList;
	}

}
