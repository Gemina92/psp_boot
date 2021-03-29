<%@page import="org.springframework.mail.javamail.MimeMessageHelper"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="javax.mail.*,javax.mail.internet.*, java.util.Properties" %>
<%
   String smtpServer = "smtp.naver.com";
   final String sendId = "sp6912";
   final String sendPass = "dnflrkwhr2@";
   String sendEmailAddress = "sp6912@naver.com";
   int smtpPort=465;
   
   //받는 분
   String receiveEmailAddress="sp6912@naver.com";
   String subject="Hello PSP";
   String content="PSP Content";
   
   
   Properties props = System.getProperties();
   props.put("mail.smtp.host", smtpServer);
   props.put("mail.smtp.port", smtpPort);
   props.put("mail.smtp.auth", true);
   props.put("mail.smtp.ssl.enable", true);
   props.put("mail.smtp.ssl.trust", smtpServer);
   
   Session session5 = Session.getDefaultInstance(props, new Authenticator(){
   protected PasswordAuthentication getPasswordAuthentication(){
      return new PasswordAuthentication(sendId, sendPass);
   }
   });
   //session2.setDebug(true);
   try{
      Message mimeMessage = new MimeMessage(session5);
      mimeMessage.setFrom(new InternetAddress(sendEmailAddress));
      mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(receiveEmailAddress));
      mimeMessage.setSubject(subject);
      mimeMessage.setText(content);
      
      Transport.send(mimeMessage);
      out.print("message sent successfully..."); 
   } catch (AddressException e) { 
      // TODO Auto-generated catch block
      e.printStackTrace(); 
   } catch (MessagingException e) { 
      // TODO Auto-generated catch block 
      e.printStackTrace(); 
   }

%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<title>Insert title here</title>
</head>
<body>
메일 전송 하기
</body>
</html>
