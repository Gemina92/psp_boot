(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_login");
            this.set_titletext("LOGIN");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mem", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_PW\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("img_logo_center","35.63%","2.99%","28.75%","54.48%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_image("url(\'imagerc::logo1.png\')");
            obj.set_background("transparent");
            obj.set_border("0px none transparent");
            this.addChild(obj.name, obj);

            obj = new Button("btn_login","60.16%","69.55%","7.81%","5.07%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("로그인");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_empno","42.97%","60.45%","14.06%","5.22%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_login_id","36.33%","60.75%","7.81%","4.48%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("사원번호");
            obj.set_color("black");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.getSetter("onchanged").set("Common_onchanged");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_login_pw","36.33%","69.85%","7.81%","4.48%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("비밀번호");
            obj.set_color("black");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.getSetter("onchanged").set("Common_onchanged");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_emppw","42.97%","69.55%","14.06%","5.22%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1500,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_login.xfdl", function() {

        this.div_emp_btn_emp_add_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var objDs = objApp.gd_login;

        	var p_empno = this.ed_empno.value;
        	var p_emppw = this.ed_emppw.value;

        	this.transaction("login" ,"SvcURL::member/login.psp?p_empno="+p_empno+"&p_emppw="+p_emppw, "" , "gb_login=out_login" ,"" ,"fn_callback");
        };

        // 비동기 통신 결과를 받을 콜백 함수 지정
        this.fn_callback = function(svcID, errCD, errMSG) {
        	//errCD가 서버에서 nErrorCode  = 0, errMSG가 strErrorMsg = "login SUCC";
        	//alert("fn_callback호출 성공"+svcID+","+errCD+","+errMSG);
        	if(errCD == -1){
        		this.alert(errMSG);
        		return;
        	}
        	if(errCD == -2){
        		this.alert(errMSG);
        		return;
        	}
        	if(svcID == "login"){
        		this.alert(errMSG + "님 환영합니다.");
        		this.go("FrameBase::Form_main.xfdl");
        	}
        }
        // 서버로 부터 전달된 데이터가 없을 경우
        // (서버에서 HttpPlatformResponse 자체를 실행하지 않음)에는
        // ErrorCode 는 -1 값으로, ErrorMsg 는 "Stream Data is null!" 값으로 설정된 후,
        // 콜백 함수가 호출

        this.Form_login_onload = function(obj,e)
        {
        	this.ed_empno.set_value("210101");
        	this.ed_emppw.set_value("kosmo");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_login_onload,this);
            this.btn_login.addEventHandler("onclick",this.div_emp_btn_emp_add_onclick,this);
        };

        this.loadIncludeScript("Form_login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
