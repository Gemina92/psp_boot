package psp.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DBConnectionMgr {	//재사용,공용으로 사용하는 클래스에는 메인메소드 사용하지않는다.

	public static DBConnectionMgr dbMgr = null;
	
	/*
	  	public static final String _DRIVER	= "oracle.jdbc.driver.OracleDriver";//ClassNotFoundException
		public static final String _URL		= "jdbc:oracle:thin:@192.168.0.250:1521:orcl11";//static이 있으면 모두 원본이다.
		public static String _USER			= "ps5";											//final이 있으면 재정의 불가.
		public static String _PW			= "tiger";
	 */
	
	
	public static final String _DRIVER	= "oracle.jdbc.driver.OracleDriver";//ClassNotFoundException
	public static final String _URL		= "jdbc:oracle:thin:@192.168.219.100:1521:orcl11";//static이 있으면 모두 원본이다.
	public static String _USER			= "scott";											//final이 있으면 재정의 불가.
	public static String _PW			= "tiger";
	public Connection con = null;
	//싱글톤 패턴에 대해 생각해 보기
	public static DBConnectionMgr getInstance() { //메소드를 통해서 객체 주입 받기.
		
		if(dbMgr == null) {	//dbmgr이 null이면
			dbMgr = new DBConnectionMgr();	//인스턴스화 해줘.
		}
		return dbMgr;
	}
	
	public Connection getConnection() {	//참조형타입. 부르면 값이나오는 타입
		try {//예외 처리를 하였다.//실행시 에러가 발생할 가능성이 있는 코드는 try..catch안에 써준다.
			//제조사의 정보를 수집하는 클래스 이므로 자원반납 대상 아님.
			Class.forName(_DRIVER);	//드라이버를 설치해야한다 .//드라이버 클래스를 찾는 문장.	**1
			//**2
			con = DriverManager.getConnection(_URL, _USER, _PW);//인스턴스화//oracle과 연결통로확보하는 역할 //메소드 오버로딩:같은이름인데 갯수가다름
		} catch (ClassNotFoundException ce) {
			System.out.println("드라이버 클래스를 찾을 수 없습니다.");
		} catch (Exception e) {
			System.out.println("연결 실패!!! "+e.toString());
		}
//		return null;	//NullPointerException Error - 인스턴스화 문제로 발생된다.
		return con;
	}
	//사용한 자원 반납하기 ★★★★★★★★★★		-자바 성능 튜닝팀의 권장사항 - 명시적으로 처리하는 코드
	//자바에서는 가비지 컬렉터가 살고 있어서 사용한 자원을 스레드를 활용한 쓰레기 값 청소 스케쥴에 따라 삭제 해준다
	//그러나 스레드 스케쥴을 기다리는 시간이 있으므로 동시 접속자를 관리하는 서버 제품들의 언어들은 모두 명시적으로 삭제요청할것.
	//가비지 값을 삭제해주세요. -> System.gc(); //쓰레기 통에 있는것을 비워주세요.
	//쓰레기 값은 언제 결정 될까요 ?
	//A a = new A();  객체를 정의하고 a = null; a = new A();
	//생성한 역순으로 한다.
	//생성하기 순서 - Conneciton - PreparedStatement - ResultSet
	public void freeConnection(Connection con, PreparedStatement pstmt, ResultSet rs) {
		if(rs != null) {
			try {
				rs.close();
			} catch (Exception e) {
				System.out.println("Exception ===> "+e.toString());	//출력되는 정보를 보고 문제 해결.
			}
		}
		if(pstmt != null) {
			try {
				pstmt.close();
			} catch (Exception e) {
				System.out.println("Exception ===> "+e.toString());	//출력되는 정보를 보고 문제 해결.
			}
		}
		if(con != null) {
			try {
				con.close();
			} catch (Exception e) {
				System.out.println("Exception ===> "+e.toString());	//출력되는 정보를 보고 문제 해결.
			}
		}
	}///end of freeCinnention
	
	//입력 | 수정 | 삭제 구현 후 자원 반납하기  rs는 없다 !
	public void freeConnection(Connection con, PreparedStatement pstmt) {
		if(pstmt != null) {
			try {
				pstmt.close();
			} catch (Exception e) {
				System.out.println("Exception ===> "+e.toString());	//출력되는 정보를 보고 문제 해결.
			}
		}
		
		if(con != null) {
			try {
				con.close();
			} catch (Exception e) {
				System.out.println("Exception ===> "+e.toString());	//출력되는 정보를 보고 문제 해결.
			}
		}
	}///end of freeCinnention
}
