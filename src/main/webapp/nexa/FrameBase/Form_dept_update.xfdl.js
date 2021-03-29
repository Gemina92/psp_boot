(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_dept_update");
            this.set_titletext("DEPT");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("lb_dept_update","0%","0%","100%","10%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("부서 수정");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_dept_update_center","2.5%","12.5%","95%","73.25%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#EDEFF3");
            obj.set_border("0px none transparent");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("lb_dept_no","8.5%","18.5%","15%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("부서코드");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_dept_no","28.75%","18%","45%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_no_check","77.5%","18%","15%","8.5%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("중복확인");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_dept_name","8.5%","31.75%","15%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("부서명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_dept_name","28.75%","31.25%","45%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_dept_use","8.5%","45%","15%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("사용여부");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_dept_use","28.75%","44.5%","45%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("gb_use");
            obj.set_datacolumn("use_name");
            obj.set_codecolumn("use_name");
            this.addChild(obj.name, obj);

            obj = new Static("lb_dept_note","8.5%","58.25%","15%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("비고");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_dept_note","28.75%","57.75%","63.75%","24.25%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_update","72.5%","89%","25%","8.5%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("수정");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_dept_update.xfdl", function() {

        this.Form_dept_update_onload = function(obj,e)
        {
        	//폼이 로드된 후 발생하는 이벤트
        	//var nRow = this.Dataset00.findRow("chk", true);
        	//var sSalayNo = this.Dataset00.getColumn(nRow, "salay_no");
        	this.objApp = nexacro.getApplication();
        	this.objApp.gb_deptNo
        	this.edit_dept_no.set_value(this.objApp.gb_deptNo);
        	this.edit_dept_name.set_value(this.objApp.gb_deptName);
        	this.cb_dept_use.set_value(this.objApp.gb_deptUse);
        	this.edit_dept_note.set_value(this.objApp.gb_deptNote);
        	//alert("자식창_선택한 부서번호 : " + this.objApp.gb_deptNo);
        };

        this.btn_dept_no_check_onclick = function(obj,e)
        {
        	//alert("부서코드 중복검사");
        	var p_deptNo = this.edit_dept_no.value; //ds_deptList=out_deptList
        	if(p_deptNo == undefined || p_deptNo =="") {
        		alert("부서코드를 입력하시오");
        		return;
        	}
        	this.transaction("deptCheck" ,"SvcURL::hr/deptCheck.psp","" ,"" ,"p_deptNo="+p_deptNo ,"fn_callback");
        };

        // 비동기 통신 결과를 받을 콜백 함수 지정
        this.fn_callback = function(svcID, errCD, errMSG) {
        	//alert("fn_callback호출 성공"+svcID+","+errCD+","+errMSG);
        	if(errCD < 0){
        		this.alert(errMSG);
        		check = 0;
        		return;
        	}
        	if(svcID == "deptCheck"){
        		this.alert(errMSG);
        		check = 1;
        	}
        	if(svcID == "deptUpdate"){
        		this.alert(errMSG);
        		check = 0;
        	}
        }

        var check = 0;

        this.btn_dept_update_onclick = function(obj,e)
        {
        	//alert("부서수정버튼 클릭");
        	var p_beforeDeptNo = this.objApp.gb_deptNo;
        	var p_afterDeptNo = this.edit_dept_no.value;
        	var p_deptName = this.edit_dept_name.value;
        	var p_deptUse = this.cb_dept_use.value;
        	var p_deptNote = this.edit_dept_note.value;
        	if(p_afterDeptNo == undefined || p_afterDeptNo =="") {
        		alert("부서코드를 입력하시오");
        		return;
        	}
        	if(p_deptName == undefined || p_deptName == "") {
        		alert("부서명을 입력하시오");
        		return;
        	}
        	if(p_deptUse == undefined || p_deptUse == "") {
        		alert("사용여부를 선택하시오");
        		return;
        	}
        	if(check == 0) {
        		alert("부서코드 중복검사를 하시오.");
        		return;
        	}

        	this.transaction("deptUpdate" ,"SvcURL::hr/deptUpdate.psp","" ,"" ,"p_beforeDeptNo="+p_beforeDeptNo+" p_deptName="+p_deptName+" p_afterDeptNo="+p_afterDeptNo+" p_deptUse="+p_deptUse+" p_deptNote="+p_deptNote ,"fn_callback");
        	//this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_dept_update_onload,this);
            this.btn_dept_no_check.addEventHandler("onclick",this.btn_dept_no_check_onclick,this);
            this.btn_dept_update.addEventHandler("onclick",this.btn_dept_update_onclick,this);
        };

        this.loadIncludeScript("Form_dept_update.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
