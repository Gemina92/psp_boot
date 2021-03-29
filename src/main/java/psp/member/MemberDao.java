package psp.member;

import java.io.Reader;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberDao {
	Logger logger = LogManager.getLogger(MemberDao.class);

	@Autowired(required = false)
	private SqlSessionTemplate sqlSessionTemplate = null;

	public Map<String,Object> login(Map<String,Object> pMap) {//프로시저의 파라미터 맵은 파라미터이면서 리절트 인식
		logger.info("login(Dao) 호출 성공");
		logger.info("before pMap : " + pMap);
		sqlSessionTemplate.selectOne("proc_Login", pMap); //parameter이면서 result IN과 OUT동시에 받아준다. //**
		logger.info("after pMap : "+ pMap);
		return pMap;
	}

	public int pwUpdate(Map<String, Object> pMap) {
		logger.info("pwUpdate(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.update("pw_update", pMap);
		logger.info("pwUpdate result :" + result);
		return result;
	}
}
