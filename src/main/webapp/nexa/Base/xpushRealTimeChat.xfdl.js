(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("xpushSendRecieve");
            this.set_titletext("playnexacro Chat");
            if (Form == this.constructor)
            {
                this._setFormPosition(420,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReceive", this);
            obj._setContents("<ColumnInfo><Column id=\"TOPIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPIC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/><Column id=\"USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserList", this);
            obj._setContents("<ColumnInfo><Column id=\"TOPIC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPIC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new XPush("XPush00", this);
            obj.getSetter("onkeepalive").set("XPush00_onkeepalive");
            obj.getSetter("onsuccess").set("XPush00_onsuccess");
            obj.getSetter("onerror").set("XPush00_onerror");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edtSendMsg","12","429",null,"27","115",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_imemode("hangul,full");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtLoginUserID","125","85",null,"27","117",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_font("12px \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk",null,"85","92","27","14",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("OK");
            obj.set_font("normal 12px/normal \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","12","86","113","27",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("XPUSH Login ID");
            obj.set_font("12px \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSend",null,"429","92","27","14",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("SEND");
            obj.set_font("normal 12px/normal \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Static("staID","12","9","113","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Project Name");
            obj.set_background("");
            obj.set_padding("");
            obj.set_font("12px \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtProjectName","125","10",null,"27","15",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("xpush_message_chatSample");
            obj.set_font("12px \"Verdana\"");
            obj.set_text("xpush_message_chatSample");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","12","47","113","27",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Address:Port");
            obj.set_font("12px \"Verdana\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddressPort","125","47",null,"27","15",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_font("12px \"Verdana\"");
            obj.set_text("localhost:10081");
            this.addChild(obj.name, obj);

            obj = new Div("divContents","12","120",null,"300","15",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_border("1px solid #d5d5d5");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",420,470,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("xpushRealTimeChat.xfdl", function() {
        /**
        *  techtip X-PUSH Basic sample
        *  @MenuPath    techtip > xpushBasic
        *  @FileName	xpushBasic.xfdl
        *  @Desction	X-PUSH message send and recieve
        *******************************************************************************
        *  2020.06.08		nana			최초 생성
        *******************************************************************************
        */

        /**************************************************************************
         * FORM EVENT 영역(onload)
         **************************************************************************/
        /**
         * @description 메시지 레이아웃 설정
                        브라우저별 통신 주소 및 포트 설정
        */
        this.form_onload = function(obj,e)
        {
        	//message layout 설정
        	this.XPush00.set_layouturl("pushUrl::push_message_layout.xml");

        	//공급자 호출url - (자신이 설정한 서버 주소로 변경)
        	this.XPush00.serviceUrl = 'http://localhost:8080/playnexacro_nana/service/xpushProviderChat.jsp';

        	//어플리케이션이 실행된 브라우저 정보를 통하여 X-PUSH와의 통신 방식 변경
        	var systemOS = system.navigatorname;

        	//연결할 X-PUSH 서버의 IP 등록
        	if(systemOS.indexOf("nexacro")>-1)
        	{
        		//NRE(nexacro runtime environment) 환경에서는 TCP 통신을 사용
        		this.edtAddressPort.set_value("tcp://121.134.99.153:10081");
        	}
        	else
        	{
        		//WRE(web runtime environment) 환경에서는 HTTP 통신을 사용
        		this.edtAddressPort.set_value("http://121.134.99.153:10080");
        	}
        };

        /**************************************************************************
         * CALLBACK 콜백 처리부분(Transaction)
         **************************************************************************/
        /**
        * @description X-PUSH에 subscribe로 등록한 토픽의 메시지를 받음 (메시지 입력)
        * @param
        	> ChangeRow : 변경된 Row의 index, 데이터셋 저장 타입이 "allUpdate"면 ","로 구분되어 설정
            > ChangeCol : 변경된 Column ID 가 "," 로 구분되어 설정, "allUpdate"면 Null 값 설정
            > ColList : 모든 Column ID 가 "," 로 구분되어 설정, "allUpdate"면 변경된 Row 와 Column 의 ID 가 배열로 설정
            > strMsgType : "DATA" or "RECOVERY" 값이 설정
        	> strActionType : 실시간 메시지 수신 : "PUSH" , 신뢰성 메시지수신 : "RECT"
        	> strMsgID : 메시지를 구분할 수 있는 값 설정

        	*strMsgType : "RECOVERY" 값일 때 = Recovery 메시지를 받았을 경우*
        	 > ChangeRow : -1 값 설정, ChangeCol
             > ChangeCol : 빈 문자열 설정
             > ColList : 빈 문자열 설정
        * @return
        */
        this.fnPushCallback = function(ChangeRow, ChangeCol, ColList, strMsgType, strActionType, strMsgID)
        {
        	if(strActionType == "PUSH")
        	{
        		this.fnReceiveMessage(ChangeRow);
        	}
        };

        /**
        * @description X-PUSH에 subscribe로 등록한 토픽의 메시지를 받음 (사용자 로그인)
        * @param 위와 동일함
        * @return
        */
        this.fnPushUserCallback = function(ChangeRow, ChangeCol, ColList, strMsgType, strActionType, strMsgID)
        {
        	if(strActionType == "PUSH")
        	{
        		var sUserid = this.dsUserList.getColumn(ChangeRow,'USER');

        		if(sUserid == this.XPush00.userid)
        		{
        			this.createMessage('login',sUserid + "님이 대화에 참여합니다.");
        		}
        		else
        		{
        			this.createMessage('receive',sUserid + "님이 대화에 참여합니다.");
        		}
        	}
        };

        /**
        * @description jsp 호출 callback
        * @param
        * @return
        */
        this.fnCallBack = function(svcid, ecd, emsg)
        {
        	if(ecd >= 0)
        	{
        		//메시지 정상 발송
        	} else {
        		//메시지 발송 실패
        	}
        };

        /**************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         **************************************************************************/
        /**
         * @description 공급자 jsp 호출
        */
        this.fnCallProvider = function (argumentMsg,msgType)
        {
        	if(msgType == 'login')
        	{
        		this.transaction("sendUserId",this.XPush00.serviceUrl,"","",argumentMsg,"fnCallBack");
        	}
        	else if(msgType == 'send')
        	{
        		this.transaction("sendMassage",this.XPush00.serviceUrl,"","",argumentMsg,"fnCallBack");
        	}

        };

        /**************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         **************************************************************************/
        /**
         * @description OK button click
        */
        this.btnOk_onclick = function(obj,e)
        {
        	this.fnPushConnect();
        };

        /**
         * @description SEND button click
        */
        this.btnSend_onclick = function(obj,e)
        {
        	this.fnSendMessage();
        };

        /**
         * @description edtLoginUserID_onkeydown -> enter 키 입력 시 버튼클릭 이벤트 발생
        */
        this.edtLoginUserID_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		//X-PUSH connect
        		this.fnPushConnect();
        	}
        };

        /**
         * @description edtSendMsg_onkeydown -> enter 키 입력 시 버튼클릭 이벤트 발생
        */
        this.edtSendMsg_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fnSendMessage();
        	}
        };

        /**
         * @description XPush00_onsuccess
        */
        this.XPush00_onsuccess = function(obj,e)
        {
        	if(e.action == 0)
        	{
        		this.fnLoginMessage();
        	}
        };

        /**
         * @description XPush00_onerror
        */
        this.XPush00_onerror = function(obj,e)
        {
        	if(e.action == 0)
        	{ //접속 실패시 에러메세지 발생
        	  alert(e.errormsg);
        	  this.edtLoginUserID.setFocus();
        	}
        };

        /**************************************************************************
         * 사용자 FUNCTION 영역
         **************************************************************************/
         /**
         * @description 사용할 user id를 등록 한 후 X-PUSH 서버 연결
        */
        this.fnPushConnect = function ()
        {
        	this.XPush00.set_projectid(this.edtProjectName.value);		//project_id 정보를 설정합니다.
        	this.XPush00.set_protocolversion(3);						//x-push와 통신할 프로토콜 버전을 설정합니다.

        	//connect : X-PUSH 서버와 접속을 합니다.
        	this.XPush00.set_iplist(this.edtAddressPort.value);			//네트워크 주소 설정
        	this.XPush00.set_userid(this.edtLoginUserID.value);			//userid 설정
        	this.XPush00.connect();										//XPUSH 연결
        };

        /**
        * @description X-PUSH 연결 성공 후 메시지 처리
        * @param
        * @return
        */
        this.fnLoginMessage = function()
        {
        	//subscribe : X-PUSH 서버에 Topic Type 및 Topic Id(message key) 등록합니다.

        	/*	사용할 토픽 변경 시 jsp 토픽 정보 변경 필수*/
        	this.XPush00.subscribe('CODETYPE', 'SENDUSER', this, this.dsUserList, "append", "fnPushUserCallback");
        	this.XPush00.subscribe('CODEMSG', 'SENDMSG', this, this.dsReceive, "append", "fnPushCallback");

        	//X-PUSH 연결 후 메시지 입력란으로 이동
        	this.edtSendMsg.setFocus();

        	//입력값 추가
        	//this.txtContents.set_value(sText);
        	var sNotices =  "TOPIC_TYPE=" + 'CODETYPE';
        		sNotices += " TOPIC_ID=" + 'SENDUSER';
        		sNotices += " USER_ID=" + this.XPush00.userid;
        		sNotices += " PROJECT_ID=" + this.edtProjectName.value;
        	this.fnCallProvider(sNotices,'login');
        }

        /**
        * @description 입력값 textarea에 추가, TOPIC ID 매칭값이 존재할 때 공급자 jsp 호출
        * @param
        * @return
        */
        this.fnSendMessage = function()
        {
        	var sText = this.edtSendMsg.value;

        	this.createMessage('send',sText);

        	//입력된 메시지 초기화
        	this.edtSendMsg.set_value("");
        	this.edtSendMsg.setFocus();

        	var sNotices =  "TOPIC_TYPE=" + 'CODEMSG';
        		sNotices += " TOPIC_ID=" + 'SENDMSG';
        		sNotices += " USER_ID=" + this.edtLoginUserID.value;
        		sNotices += " PROJECT_ID=" + this.edtProjectName.value;
        		sNotices += " SEND_MESSAGE=" + sText;
        	this.fnCallProvider(sNotices,'send');
        }

        /**
        * @description 메시지 공급을 위해 jsp 호출
        * @param nRow : 추가된 Row num
        * @return
        */
        this.fnReceiveMessage = function(nRow)
        {
        	//var sText = this.txtContents.value;
        	var sMessage = this.dsReceive.getColumn(nRow,'MSG');
        	var sUserId = this.dsReceive.getColumn(nRow,'USER');

        	//입력값 추가
        	if(sUserId != this.XPush00.userid)
        	{
        		this.createMessage('receive',sMessage);
        	}
        }

        this.nTop = 5;
        this.nLeft = 5;
        this.nRight = 5;
        this.nCount = 0;

        /**
        * @description 메시지를 생성해서 대화창에 추가
        * @param sType : 메시지 상태 (login : 접속, send : 메시지 송신, receive : 메시지 수신)
        		 sText : 입력되는 메시지 본문
        * @return
        */
        this.createMessage = function(sType,sText)
        {
        	var nWidth = this.divContents.getOffsetWidth() - 20;
        	var nHeight = 20;

        	if(sType == 'send' || sType == 'login')
        	{
        		this.nLeft = null;
        		this.nRight = 5;
        	}
        	else
        	{
        		this.nLeft = 5;
        		this.nRight = null;
        	}

        	var objStaId = "stMessage"+ this.nCount;
        	var objStatic = new Static();
        	objStatic.init(objStaId,this.nLeft,this.nTop,nWidth,nHeight,this.nRight,null);
        	objStatic.set_fittocontents('both');
        	objStatic.set_text(sText);
        	objStatic.set_wordWrap('char');
        	objStatic.set_border('1px solid #d5d5d5');
        	objStatic.set_borderRadius('5px');
        	objStatic.set_padding('5px');
        	this.divContents.addChild(objStaId,objStatic);
        	objStatic.show();

        	var objWidth = objStatic.getOffsetWidth();
        	var parentWidth = 350;

        	var objHeight = objStatic.getOffsetHeight();
        	if(parentWidth < objWidth)
        	{
        		objStatic.set_fittocontents('none');
        		objStatic.setOffsetWidth(parentWidth);

        		var nLine = nexacro.ceil(objHeight / parentWidth);
        		objHeight += 16*nLine;
        		objStatic.setOffsetHeight(objHeight);
        	}

        	this.nTop += objHeight + 3;
        	this.nCount++;

        	this.divContents.form.resetScroll();
        	return objStatic;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edtSendMsg.addEventHandler("onkeydown",this.edtSendMsg_onkeydown,this);
            this.edtLoginUserID.addEventHandler("onkeydown",this.edtLoginUserID_onkeydown,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnSend.addEventHandler("onclick",this.btnSend_onclick,this);
        };

        this.loadIncludeScript("xpushRealTimeChat.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
