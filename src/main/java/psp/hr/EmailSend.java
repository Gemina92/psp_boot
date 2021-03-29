package psp.hr;

import java.io.File;
import java.io.UnsupportedEncodingException;
import java.util.Map;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.FileDataSource;
import javax.mail.Authenticator;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.internet.MimeUtility;

import org.springframework.stereotype.Service;

@Service
public class EmailSend {
	
	public void send(Map<String, Object> pMap) throws UnsupportedEncodingException {
		String smtpServer = "smtp.naver.com";
		final String sendId = "sp6912";
		final String sendPass = "dnflrkwhr2@";
		String sendEmailAddress = "sp6912@naver.com";
		int smtpPort = 465;

		// 받는 분
		String email = pMap.get("EMP_EMAIL").toString(); //이메일
		String empName = pMap.get("EMP_NAME").toString(); //사원이름
		String mon = pMap.get("SALARY_DATE").toString(); //월
		mon = mon.substring(4,6);
		String salary_no = pMap.get("SALARY_NO").toString(); //급여번호
		
		String receiveEmailAddress = email;
		String subject = empName + "_" + mon + "월 급여명세서_" + salary_no;
		String content = mon + "월 급여명세서 입니다.";
		
		Properties props = System.getProperties();
		props.put("mail.smtp.host", smtpServer);
		props.put("mail.smtp.port", smtpPort);
		props.put("mail.smtp.auth", true);
		props.put("mail.smtp.ssl.enable", true);
		props.put("mail.smtp.ssl.trust", smtpServer);

		Session session5 = Session.getDefaultInstance(props, new Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(sendId, sendPass);
			}
		});
		
		try {
			Message mimeMessage = new MimeMessage(session5);
			mimeMessage.setFrom(new InternetAddress(sendEmailAddress));
			mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(receiveEmailAddress));
			mimeMessage.setSubject(subject);
			//mimeMessage.setText(content);
			
			String fileName = empName + "_" + mon + "월 급여명세서_" + salary_no + ".xlsx";
			String path = "D:\\JAVA69\\excel\\";
			
			MimeMultipart multipart = new MimeMultipart();
			MimeBodyPart part = new MimeBodyPart();

			part.setContent(content, "text/html; charset=utf-8");
			multipart.addBodyPart(part);

			part = new MimeBodyPart();
			FileDataSource fds = new FileDataSource(path + fileName);
			part.setDataHandler(new DataHandler(fds));
			//part.setFileName(fileName); //이대로하면 첨부파일 이름 깨짐
			part.setFileName(MimeUtility.encodeText(fileName, "UTF-8", "B"));
			multipart.addBodyPart(part);
			
			mimeMessage.setContent(multipart);
			Transport.send(mimeMessage);
			System.out.println("message sent successfully...");
			
		} catch (AddressException e) {
			e.printStackTrace();
		} catch (MessagingException e) {
			e.printStackTrace();
		}
	}
}
