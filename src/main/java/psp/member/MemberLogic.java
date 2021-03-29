package psp.member;

import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberLogic {
	Logger logger = LogManager.getLogger(MemberLogic.class);
	
	@Autowired(required = false)
	private MemberDao memberDao = null;//선언시에는 null로 하였다가 필요한 시점에 객체 주입받는것.- 권장사항
	
	public Map<String,Object> login(Map<String,Object> pMap) {
		logger.info("login(Logic) 호출 성공");
		Map<String,Object> rMap = null;
		rMap = memberDao.login(pMap);
		logger.info("rMap : " + rMap);
		return rMap;
	}

	public int pwUpdate(Map<String, Object> pMap) {
		logger.info("pwUpdate(Logic) 호출 성공");
		int result = 0;
		result = memberDao.pwUpdate(pMap);
		return result;
	}

}
