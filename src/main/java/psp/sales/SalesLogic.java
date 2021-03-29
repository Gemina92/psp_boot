package psp.sales;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import psp.member.MemberDao;
import psp.member.MemberLogic;

@Service
public class SalesLogic {
	Logger logger = LogManager.getLogger(SalesLogic.class);
	@Autowired(required = false)
	private SalesDao salesDao = null;//선언시에는 null로 하였다가 필요한 시점에 객체 주입받는것.- 권장사항
	
	public List<Map<String, Object>> accountSelect(Map<String, Object> pMap) {
		logger.info("accountSelect(Logic) 호출 성공");
		List<Map<String, Object>> accountList = null;
		Map<String,Object> rMap = null;
		accountList = salesDao.accountSelect(pMap); //**
		logger.info("accountList : " + accountList);
		return accountList;
	}

}
