(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_info");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("lb_emp_pw_update","0%","0%","100%","9.09%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("비밀번호 변경");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_crops_create_main","2.27%","11.36%","95.45%","76.36%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#EDEFF3");
            obj.set_border("0px none transparent");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_no","7.95%","17.73%","18.18%","6.82%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사원번호");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_no","43.18%","17.27%","40.91%","7.95%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_name","7.95%","31.82%","22.73%","6.82%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("사원명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_name","43.18%","31.36%","40.91%","7.95%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_emp_pw_update","75%","90%","22.73%","7.73%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("변경하기");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_pw_after","7.95%","60%","22.73%","6.82%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("변경 비밀번호");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_pw_after","43.18%","59.55%","40.91%","7.95%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_pw_check","7.95%","74.09%","30.68%","6.82%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("변경 비밀번호 확인");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_pw_check","43.18%","73.64%","40.91%","7.95%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_pw_before","7.95%","45.91%","22.73%","6.82%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("현재 비밀번호");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_pw_before","43.18%","45.45%","40.91%","7.95%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",440,440,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_info.xfdl", function() {

        var objApp = nexacro.getApplication();
        var objDs = objApp.gb_login;

        this.Form_info_onload = function(obj,e)
        {
        	this.edit_emp_no.set_value(objDs.getColumn(0,"EMP_NO"));
        	this.edit_emp_name.set_value(objDs.getColumn(0,"EMP_NAME"));
        	this.edit_emp_pw_before.set_value(objDs.getColumn(0,"EMP_PW"));
        };

        var after_pw;
        var after_check;

        this.btn_emp_pw_update_onclick = function(obj,e)
        {
        	after_pw = this.edit_emp_pw_after.value;
        	after_check = this.edit_emp_pw_check.value;
        	if(after_pw=="" || after_pw==undefined || after_pw==null) {
        		alert("변경할 비밀번호를 입력하시오.");
        		return;
        	}
        	if(after_check=="" || after_check==undefined || after_check==null) {
        		alert("변경할 비밀번호 한 번더 입력하시오.");
        		return;
        	}
        	if(after_pw!=after_check) {
        		alert("변경할 비밀번호가 일치하지 않습니다.");
        		return;
        	}
        	var p_empNo = objDs.getColumn(0,"EMP_NO");
        	this.transaction("pwUpdate" ,"SvcURL::member/pwUpdate.psp" , "" , "" ,"p_empNo="+p_empNo+" after_pw="+after_pw ,"fn_callback");
        };

        // 비동기 통신 결과를 받을 콜백 함수 지정
        this.fn_callback = function(svcID, errCD, errMSG) {
        	//alert("fn_callback호출 성공"+svcID+","+errCD+","+errMSG);
        	if(errCD < 0){
        		this.alert(errMSG);
        		return;
        	}
        	if(svcID == "pwUpdate"){
        		this.alert(errMSG);
        		objDs.setColumn(0,"EMP_PW",after_pw);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_info_onload,this);
            this.btn_emp_pw_update.addEventHandler("onclick",this.btn_emp_pw_update_onclick,this);
        };

        this.loadIncludeScript("Form_info.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
