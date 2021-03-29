package psp.util;
/*
 * 공통코드 체험하기
 * 사용자로부터 입력받는 값을 효과적으로 처리해보자.
 * API보는 방법과 활용능력을 키워본다.
 */
import java.util.Enumeration;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class HashMapBinder {
	Logger logger = LogManager.getLogger(HashMapBinder.class);
	public HttpServletRequest request = null;
	
	public HashMapBinder() {
		
	}
	
	public HashMapBinder(HttpServletRequest request) {
		this.request = request;
	}
	
	public void bind(Map<String, Object> target) { //VO는 안된다. 왜? 늘었다 줄었다가 안되므로
		target.clear(); // 비워준다. 이전값 없앰. 쓰레기값 없앰
		Enumeration<String> en = request.getParameterNames();
		while(en.hasMoreElements()) {
			//<input name="mem_id"
			String key = en.nextElement(); //mem_id, mem_pw, mem_addr..
			target.put(key, HangulConversion.toUTF(request.getParameter(key)));
			logger.info("key : " + key);
			//target.put(key, request.getParameter(key));
		}
	}
}
