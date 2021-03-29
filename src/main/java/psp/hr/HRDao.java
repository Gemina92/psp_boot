package psp.hr;

import java.io.Reader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import psp.member.MemberDao;

@Service
public class HRDao {
	Logger logger = LogManager.getLogger(HRDao.class);

	@Autowired(required = false)
	private SqlSessionTemplate sqlSessionTemplate = null;
	
	public List<Map<String, Object>> rankSelect(Map<String, Object> pMap) {
		List<Map<String, Object>> rankList = null;
		logger.info("rankSelect 호출 성공");
		rankList = sqlSessionTemplate.selectList("rank_select", pMap);
		logger.info("rankList.size():" + rankList.size());
		return rankList;
	}
	
	public List<Map<String, Object>> positionSelect(String p_psName) {
		List<Map<String, Object>> positionList = null;
		logger.info("positionSelect 호출 성공");
		positionList = sqlSessionTemplate.selectList("position_select", p_psName);
		logger.info("positionList.size():" + positionList.size());
		return positionList;
	}
	
	public List<Map<String, Object>> empSelect(Map<String, Object> pMap) {
		List<Map<String, Object>> empList = null;
		logger.info("empSelect(Dao) 호출 성공");
		empList = sqlSessionTemplate.selectList("emp_select", pMap);
		logger.info("empList.size():" + empList.size());
		return empList;
	}
	
	public int empDelete(String[] p_empnoStr) {
		logger.info("empDelete(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.delete("emp_deleteAll", p_empnoStr);
		logger.info("multiDelete result :" + result);
		return result;
	}
	
	public List<Map<String, Object>> deptSelect(String p_deptName) {
		List<Map<String, Object>> deptList = null;
		logger.info("deptSelect 호출 성공");
		deptList = sqlSessionTemplate.selectList("dept_select", p_deptName);
		logger.info("deptList.size():" + deptList.size());
		return deptList;
	}
	
	public List<Map<String, Object>> salarySelect(Map<String, Object> pMap) {
		logger.info("salarySelect(Dao) 호출 성공");
		List<Map<String, Object>> salaryList = null;
		salaryList = sqlSessionTemplate.selectList("salary_select", pMap); //**
		logger.info("salaryList.size() : "+ salaryList.size());
		return salaryList;
	}
	
	public int salaryDelete(String[] p_salaryNoStr) {
		logger.info("salaryDelete(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.delete("salary_deleteAll", p_salaryNoStr);
		logger.info("multiDelete result :" + result);
		return result;
	}
	
	public int salaryInsert(Map<String, Object> pMap) {
		logger.info("salaryInsert(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.insert("salary_Insert", pMap);
		logger.info("Insert result :" + result);
		return result;
	}
	
	public int salaryUpdate(Map<String, Object> pMap) {
		logger.info("salaryUpdate(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.insert("salary_update", pMap);
		logger.info("Update result :" + result);
		return result;
	}

	public int deptDelete(String[] p_deptNoStr) {
		logger.info("deptDelete(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.delete("dept_deleteAll", p_deptNoStr);
		logger.info("multiDelete result :" + result);
		return result;
	}

	public List<Map<String, Object>> deptCheck(String p_deptNo) {
		logger.info("deptCheck(Dao) 호출 성공");
		List<Map<String, Object>> deptCheckList = null;
		deptCheckList = sqlSessionTemplate.selectList("dept_check", p_deptNo); //**
		logger.info("deptCheckList.size() : "+ deptCheckList.size());
		return deptCheckList;
	}

	public int deptInsert(Map<String, Object> pMap) {
		logger.info("deptInsert(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.insert("dept_Insert", pMap);
		logger.info("deptInsert result :" + result);
		return result;
	}

	public int deptUpdate(Map<String, Object> pMap) {
		logger.info("deptUpdate(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.update("dept_Update", pMap);
		logger.info("deptUpdate result :" + result);
		return result;
	}

	public int rankDelete(String[] p_rankNoStr) {
		logger.info("rankDelete(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.delete("rank_deleteAll", p_rankNoStr);
		logger.info("multiDelete result :" + result);
		return result;
	}

	public List<Map<String, Object>> rankCheck(String p_rankNo) {
		logger.info("rankCheck(Dao) 호출 성공");
		List<Map<String, Object>> rankCheckList = null;
		rankCheckList = sqlSessionTemplate.selectList("rank_check", p_rankNo); //**
		logger.info("rankCheckList.size() : "+ rankCheckList.size());
		return rankCheckList;
	}

	public int rankInsert(Map<String, Object> pMap) {
		logger.info("rankInsert(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.insert("rank_insert", pMap);
		logger.info("rankInsert result :" + result);
		return result;
	}

	public int rankUpdate(Map<String, Object> pMap) {
		logger.info("rankUpdate(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.update("rank_update", pMap);
		logger.info("rankUpdate result :" + result);
		return result;
	}

	public int positionDelete(String[] p_positionNoStr) {
		logger.info("positionDelete(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.delete("position_deleteAll", p_positionNoStr);
		logger.info("multiDelete result :" + result);
		return result;
	}

	public List<Map<String, Object>> positionCheck(String p_positionNo) {
		logger.info("positionCheck(Dao) 호출 성공");
		List<Map<String, Object>> positionCheckList = null;
		positionCheckList = sqlSessionTemplate.selectList("position_check", p_positionNo); //**
		logger.info("positionCheckList.size() : "+ positionCheckList.size());
		return positionCheckList;
	}

	public int positionInsert(Map<String, Object> pMap) {
		logger.info("positionInsert(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.insert("position_insert", pMap);
		logger.info("positionInsert result :" + result);
		return result;
	}

	public List<Map<String, Object>> positionUCheck(String p_positionNo) {
		logger.info("positionUCheck(Dao) 호출 성공");
		List<Map<String, Object>> positionUCheckList = null;
		positionUCheckList = sqlSessionTemplate.selectList("position_ucheck", p_positionNo); //**
		logger.info("positionUCheckList.size() : "+ positionUCheckList.size());
		return positionUCheckList;
	}

	public int positionUpdate(Map<String, Object> pMap) {
		logger.info("positionUpdate(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.update("position_update", pMap);
		logger.info("positionUpdate result :" + result);
		return result;
	}

	public List<Map<String, Object>> empCheck(String p_empNo) {
		logger.info("empCheck(Dao) 호출 성공");
		List<Map<String, Object>> empCheckList = null;
		empCheckList = sqlSessionTemplate.selectList("emp_check", p_empNo); //**
		logger.info("empCheckList.size() : "+ empCheckList.size());
		return empCheckList;
	}

	public List<Map<String, Object>> zipSearch(Map<String, Object> pMap) {
		List<Map<String, Object>> zipList = null;
		logger.info("zipSearch(Dao) 호출 성공");
		zipList = sqlSessionTemplate.selectList("zip_search", pMap);
		logger.info("zipList.size():" + zipList.size());
		return zipList;
	}

	public int empInsert(Map<String, Object> pMap) {
		logger.info("empInsert(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.insert("emp_insert", pMap);
		logger.info("empInsert result :" + result);
		return result;
	}

	public List<Map<String, Object>> empUselect(Map<String, Object> pMap) {
		List<Map<String, Object>> empList = null;
		logger.info("empUselect(Dao) 호출 성공");
		empList = sqlSessionTemplate.selectList("emp_Uselect", pMap);
		logger.info("empList.size():" + empList.size());
		return empList;
	}

	public int empUpdate(Map<String, Object> pMap) {
		logger.info("empUpdate(Dao) 호출 성공");
		int result = 0;
		result = sqlSessionTemplate.update("emp_update", pMap);
		logger.info("empUpdate result :" + result);
		return result;
	}

	public List<Map<String, Object>> emailSend(String[] p_salaryNoStr) {
		logger.info("emailSend(Dao) 호출 성공");
		List<Map<String, Object>> salaryList = null;
		salaryList = sqlSessionTemplate.selectList("emailSend", p_salaryNoStr); //**
		logger.info("salaryList.size() : "+ salaryList.size());
		return salaryList;
	}
}
