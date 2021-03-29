package psp.hr;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import psp.member.MemberDao;

@Service
public class HRLogic {
	Logger logger = LogManager.getLogger(HRLogic.class);
	
	@Autowired(required = false)
	private HRDao hrDao = null;
	
	@Autowired(required = false)
	private ExcelSalary excelSalary = null;
	
	@Autowired(required = false)
	private EmailSend emailSend = null;

	public List<Map<String, Object>> rankSelect(Map<String, Object> pMap) {
		logger.info("rankSelect(Logic) 호출 성공");
		List<Map<String, Object>> rankList = null;
		rankList = hrDao.rankSelect(pMap);
		return rankList;
	}

	public List<Map<String, Object>> positionSelect(String p_psName) {
		logger.info("positionSelect(Logic) 호출 성공");
		List<Map<String, Object>> positionList = null;
		positionList = hrDao.positionSelect(p_psName);
		return positionList;
	}

	public List<Map<String, Object>> empSelect(Map<String, Object> pMap) {
		logger.info("empSelect(Logic) 호출 성공");
		List<Map<String, Object>> empList = null;
		empList = hrDao.empSelect(pMap);
		return empList;
	}

	public int empDelete(String[] p_empnoStr) {
		logger.info("empDelete(Logic) 호출 성공");
		int result = 0;
		result = hrDao.empDelete(p_empnoStr);
		return result;
	}

	public List<Map<String, Object>> deptSelect(String p_deptName) {
		logger.info("deptSelect(Logic) 호출 성공");
		List<Map<String, Object>> deptList = null;
		deptList = hrDao.deptSelect(p_deptName);
		return deptList;
	}

	public List<Map<String, Object>> salarySelect(Map<String, Object> pMap) {
		logger.info("salarySelect(Logic) 호출 성공");
		List<Map<String, Object>> salaryList = null;
		salaryList = hrDao.salarySelect(pMap); //**
		logger.info("salaryList : " + salaryList);
		return salaryList;
	}

	public int salaryDelete(String[] p_salaryNoStr) {
		logger.info("salaryDelete(Logic) 호출 성공");
		int result = 0;
		result = hrDao.salaryDelete(p_salaryNoStr);
		return result;
	}

	public int salaryInsert(Map<String, Object> pMap) {
		logger.info("salaryInsert(Logic) 호출 성공");
		int result = 0;
		result = hrDao.salaryInsert(pMap);
		return result;
	}

	public int salaryUpdate(Map<String, Object> pMap) {
		logger.info("salaryUpdate(Logic) 호출 성공");
		int result = 0;
		result = hrDao.salaryUpdate(pMap);
		return result;
	}

	public int deptDelete(String[] p_deptNoStr) {
		logger.info("deptDelete(Logic) 호출 성공");
		int result = 0;
		result = hrDao.deptDelete(p_deptNoStr);
		return result;
	}

	public List<Map<String, Object>> deptCheck(String p_deptNo) {
		logger.info("deptCheck(Logic) 호출 성공");
		List<Map<String, Object>> deptCheckList = null;
		deptCheckList = hrDao.deptCheck(p_deptNo); //**
		logger.info("deptCheckList : " + deptCheckList);
		return deptCheckList;
	}

	public int deptInsert(Map<String, Object> pMap) {
		logger.info("deptInsert(Logic) 호출 성공");
		int result = 0;
		result = hrDao.deptInsert(pMap);
		return result;
	}

	public int deptUpdate(Map<String, Object> pMap) {
		logger.info("deptUpdate(Logic) 호출 성공");
		int result = 0;
		result = hrDao.deptUpdate(pMap);
		return result;
	}

	public int rankDelete(String[] p_rankNoStr) {
		logger.info("rankDelete(Logic) 호출 성공");
		int result = 0;
		result = hrDao.rankDelete(p_rankNoStr);
		return result;
	}

	public List<Map<String, Object>> rankCheck(String p_rankNo) {
		logger.info("rankCheck(Logic) 호출 성공");
		List<Map<String, Object>> rankCheckList = null;
		rankCheckList = hrDao.rankCheck(p_rankNo); //**
		logger.info("rankCheckList : " + rankCheckList);
		return rankCheckList;
	}

	public int rankInsert(Map<String, Object> pMap) {
		logger.info("rankInsert(Logic) 호출 성공");
		int result = 0;
		result = hrDao.rankInsert(pMap);
		return result;
	}

	public int rankUpdate(Map<String, Object> pMap) {
		logger.info("rankUpdate(Logic) 호출 성공");
		int result = 0;
		result = hrDao.rankUpdate(pMap);
		return result;
	}

	public int positionDelete(String[] p_positionNoStr) {
		logger.info("positionDelete(Logic) 호출 성공");
		int result = 0;
		result = hrDao.positionDelete(p_positionNoStr);
		return result;
	}

	public List<Map<String, Object>> positionCheck(String p_positionNo) {
		logger.info("positionCheck(Logic) 호출 성공");
		List<Map<String, Object>> positionCheckList = null;
		positionCheckList = hrDao.positionCheck(p_positionNo); //**
		logger.info("positionCheckList : " + positionCheckList);
		return positionCheckList;
	}

	public int positionInsert(Map<String, Object> pMap) {
		logger.info("positionInsert(Logic) 호출 성공");
		int result = 0;
		result = hrDao.positionInsert(pMap);
		return result;
	}

	public List<Map<String, Object>> positionUCheck(String p_positionNo) {
		logger.info("positionUCheck(Logic) 호출 성공");
		List<Map<String, Object>> positionUCheckList = null;
		positionUCheckList = hrDao.positionUCheck(p_positionNo); //**
		logger.info("positionUCheckList : " + positionUCheckList);
		return positionUCheckList;
	}

	public int positionUpdate(Map<String, Object> pMap) {
		logger.info("positionUpdate(Logic) 호출 성공");
		int result = 0;
		result = hrDao.positionUpdate(pMap);
		return result;
	}

	public List<Map<String, Object>> empCheck(String p_empNo) {
		logger.info("empCheck(Logic) 호출 성공");
		List<Map<String, Object>> empCheckList = null;
		empCheckList = hrDao.empCheck(p_empNo); //**
		logger.info("empCheckList : " + empCheckList);
		return empCheckList;
	}

	public List<Map<String, Object>> zipSearch(Map<String, Object> pMap) {
		logger.info("zipSearch(Logic) 호출 성공");
		List<Map<String, Object>> zipList = null;
		zipList = hrDao.zipSearch(pMap);
		return zipList;
	}

	public int empInsert(Map<String, Object> pMap) {
		logger.info("empInsert(Logic) 호출 성공");
		int result = 0;
		result = hrDao.empInsert(pMap);
		return result;
	}

	public List<Map<String, Object>> empUSelect(Map<String, Object> pMap) {
		logger.info("empUselect(Logic) 호출 성공");
		List<Map<String, Object>> empList = null;
		empList = hrDao.empUselect(pMap);
		return empList;
	}

	public int empUpdate(Map<String, Object> pMap) {
		logger.info("empUpdate(Logic) 호출 성공");
		int result = 0;
		result = hrDao.empUpdate(pMap);
		return result;
	}
	
	//Logic에서 이메일 발송처리
	public int emailSend(String[] p_salaryNoStr) throws IOException {
		logger.info("emailSend(Logic) 호출 성공");
		List<Map<String, Object>> salaryList = null;
		salaryList = hrDao.emailSend(p_salaryNoStr);
		logger.info("salaryList : " + salaryList);
		for(int i=0; i<salaryList.size(); i++) {
			Map<String,Object> pMap = null;
			pMap = salaryList.get(i);
			//엑셀 처리할 부분(급여파일 생성)
			excelSalary.createExcel(pMap);
			//이메일 처리할 부분
			emailSend.send(pMap);
		}
		int result = 0;
		result = salaryList.size();
		return result;
	}
}
