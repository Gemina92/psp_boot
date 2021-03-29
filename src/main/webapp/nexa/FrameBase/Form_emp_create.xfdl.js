(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_emp_create");
            this.set_titletext("EMP");
            if (Form == this.constructor)
            {
                this._setFormPosition(770,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("lb_emp_create","0%","0%","100%","6.45%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사원 등록");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_create_center","1.3%","8.06%","97.4%","83.23%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#EDEFF3");
            obj.set_border("0px none transparent");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_no","3.12%","12.74%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사원번호");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_no","18.18%","12.42%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_emp_no_check","42.86%","12.42%","7.79%","5.48%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("중복확인");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_name","62.21%","12.74%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사원명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_name","73.9%","12.42%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_birth","3.12%","22.1%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("주민등록번호");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_birth","18.18%","21.77%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_num","62.21%","22.1%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("핸드폰");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_num","73.9%","21.77%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_visible("true");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_email","3.12%","31.77%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Email");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_email","18.18%","31.45%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_date","62.21%","31.77%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("입사일");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_emp_date","73.9%","31.45%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_type("normal");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_address","3.12%","41.45%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("주소");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_zipcode","18.18%","41.45%","7.66%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("우편번호");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_zipcode_search","27.27%","41.13%","14.29%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_visible("true");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_emp_zipcode_search","42.86%","41.13%","7.79%","5.48%",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("찾기");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_address","18.18%","48.55%","59.09%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_line","2.6%","57.26%","94.81%","0.2%",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_background("#242D40");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_accname","3.12%","61.94%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("은행명");
            obj.set_color("black");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_accname","11.56%","61.61%","19.48%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_accnum","3.12%","71.77%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("계좌번호");
            obj.set_color("black");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_accnum","11.56%","71.45%","38.96%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_accholder","35.32%","61.94%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("예금주명");
            obj.set_color("black");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_accholder","44.68%","61.61%","19.48%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_dept_name","3.12%","81.61%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("부서");
            obj.set_color("black");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_emp_dept_name","11.56%","81.29%","19.48%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_innerdataset("gb_deptList");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_codecolumn("DEPT_NO");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_rank_name","35.45%","81.61%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("직급");
            obj.set_color("black");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_emp_rank_name","44.68%","81.29%","19.48%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_innerdataset("gb_rankList");
            obj.set_datacolumn("RANK_NAME");
            obj.set_codecolumn("RANK_NO");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_position_name","67.79%","81.61%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("직책");
            obj.set_color("black");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_emp_position_name","77.79%","81.29%","19.48%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_innerdataset("gb_positionList");
            obj.set_datacolumn("PS_NAME");
            obj.set_codecolumn("PS_NO");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_emp_create","85.71%","92.9%","12.99%","5.48%",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("등록");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",770,620,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_emp_create.xfdl", function() {

        this.btn_emp_zipcode_search_onclick = function(obj,e)
        {
        	//alert("우편번호 조회");
        	//popup 화면으로 전달할 값
        	var oArg = {};
        	var sPopupUrl = "";
        	var sPopupId = "";
        	this.gfn_showModal("popup_zipcode", oArg, "FrameBase::Form_zipcode.xfdl"
        	, "popupCallBack", this, 700,300, 400, 400);
        };

        //popup call back
        this.popupCallBack = function(sFormId, sArg)
        {
        	if(sFormId=="popup_zipcode")
        	{
        		if(!this.gfn_isNull(sArg))
        		{
        			var addData = sArg.split(",");
        			this.edit_emp_zipcode_search.set_value(addData[0]);
        			this.edit_emp_address.set_value(addData[1]);
        			this.edtAddressDetail.setFocus();
        		}
        	}
        }

        this.gfn_isNull = function (pvVal)
        {
        	if (new String(pvVal).valueOf() == "undefined")
        	{
        		return true;
        	}
        	if (pvVal == null)
        	{
        		return true;
        	}
        	if (("x" + pvVal == "xNaN") && (new String(pvVal.length).valueOf() == "undefined"))
        	{
        		return true;
        	}
        	if (pvVal.length == 0)
        	{
        		return true;
        	}
        	return false;
        }

        //옵션 간소화 팝업
        this.gfn_showModal = function (sPopupId, arrArguments, sPopupUrl, popupCallback, obj, nPopupLeft, nPopupTop, nPopupWidth, nPopupHeight)
        {
        	// child frame 생성
        	var childFrame = new ChildFrame();

        	// parent frame 정의
        	var parentFrame = obj.getOwnerFrame();

        	//child frame 초기화
        	childFrame.init(sPopupId, nPopupLeft, nPopupTop, nPopupWidth, nPopupHeight, null, null, sPopupUrl);

        	// Modal Dialog 추가 옵션
        	//autosize default true
        	childFrame.set_autosize(false);
        	//statusbar default true
        	childFrame.set_showtitlebar(false);

        	// 동적으로 생성한 ChildFrame을 Modal Dialog로 보여줌.
        	childFrame.showModal(parentFrame, arrArguments, obj, popupCallback, true);
        };

        this.div_emp_btn_emp_upd_onclick = function(obj,e)
        {
        	//alert("사원번호 중복검사");
        	var p_empNo = this.edit_emp_no.value;
        	if(p_empNo == undefined || p_empNo == "") {
        		alert("사원번호를 입력하시오");
        		return;
        	}
        	this.transaction("empCheck" ,"SvcURL::hr/empCheck.psp","" ,"" ,"p_empNo="+p_empNo ,"fn_callback");
        };

        var check = 0;

        // 비동기 통신 결과를 받을 콜백 함수 지정
        this.fn_callback = function(svcID, errCD, errMSG) {
        	//alert("fn_callback호출 성공"+svcID+","+errCD+","+errMSG);
        	if(errCD < 0){
        		this.alert(errMSG);
        		check = 0;
        		return;
        	}
        	if(svcID == "empCheck"){
        		this.alert(errMSG);
        		check = 1;
        	}
        	if(svcID == "empInsert"){
        		this.alert("등록 되었습니다.");
        		check = 1;
        	}
        }

        var objApp = nexacro.getApplication();
        var objDs = objApp.gb_empList;
        objDs.addRow();

        this.div_emp_btn_emp_add_onclick = function(obj,e)
        {
        	objDs.setColumn(0, "EMP_NO", this.edit_emp_no.value);
        	//alert("입력한 사원번호 : "+objDs.getColumn(0, "EMP_NO"));
        	objDs.setColumn(0, "EMP_NAME", this.edit_emp_name.value);
        	objDs.setColumn(0, "EMP_BIRTH", this.edit_emp_birth.value);
        	objDs.setColumn(0, "EMP_NUM", this.edit_emp_num.value);
        	objDs.setColumn(0, "EMP_EMAIL", this.edit_emp_email.value);
        	objDs.setColumn(0, "EMP_ENDATE", this.cal_emp_date.value);
        	objDs.setColumn(0, "EMP_ADDRCODE", this.edit_emp_zipcode_search.value);
        	objDs.setColumn(0, "EMP_ADDRESS", this.edit_emp_address.value);
        	objDs.setColumn(0, "EMP_ACCNAME", this.edit_emp_accname.value);
        	objDs.setColumn(0, "EMP_ACCHOLDER", this.edit_emp_accholder.value);
        	objDs.setColumn(0, "EMP_ACCNUM", this.edit_emp_accnum.value);
        	objDs.setColumn(0, "DEPT_NO", this.combo_emp_dept_name.value);
        	objDs.setColumn(0, "RANK_NO", this.combo_emp_rank_name.value);
        	objDs.setColumn(0, "POSITION_NO", this.combo_emp_position_name.value);
        	this.transaction("empInsert" ,"SvcURL::hr/empInsert.psp","in_empList=gb_empList" ,"gb_empList=out_empList" ,"" ,"fn_callback");
        };

        this.Form_emp_create_onload = function(obj,e)
        {
        	this.edit_emp_name.set_value("");
        	this.edit_emp_birth.set_value("920101");
        	this.edit_emp_num.set_value("01011223344");
        	this.edit_emp_email.set_value("stp6912@naver.com");
        	this.cal_emp_date.set_value("20210118");
        	this.edit_emp_zipcode_search.set_value("12345");
        	this.edit_emp_address.set_value("서울특별시 가구 나동 다주택");
        	this.edit_emp_accname.set_value("가은행");
        	this.edit_emp_accholder.set_value("아무개");
        	this.edit_emp_accnum.set_value("0123456789");

        	this.transaction("selectDept" ,"SvcURL::hr/deptSelect.psp" ,"in_deptList=gb_deptList" ,"gb_deptList=out_deptList" ,"" ,"fn_callback");
        	this.transaction("selectRank" ,"SvcURL::hr/rankSelect.psp" ,"in_rankList=gb_rankList" ,"gb_rankList=out_rankList" ,"" ,"fn_callback");
        	this.transaction("selectPosition" ,"SvcURL::hr/positionSelect.psp" ,"in_positionList=gb_positionList" ,"gb_positionList=out_positionList" ,"" ,"fn_callback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_emp_create_onload,this);
            this.btn_emp_no_check.addEventHandler("onclick",this.div_emp_btn_emp_upd_onclick,this);
            this.lb_emp_email.addEventHandler("onclick",this.Static00_00_00_00_00_onclick,this);
            this.btn_emp_zipcode_search.addEventHandler("onclick",this.btn_emp_zipcode_search_onclick,this);
            this.btn_emp_create.addEventHandler("onclick",this.div_emp_btn_emp_add_onclick,this);
        };

        this.loadIncludeScript("Form_emp_create.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
