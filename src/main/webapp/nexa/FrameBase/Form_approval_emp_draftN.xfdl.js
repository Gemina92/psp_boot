(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_approval_emp_draftN");
            this.set_titletext("APPROVAL");
            if (Form == this.constructor)
            {
                this._setFormPosition(770,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_preserveList", this);
            obj._setContents("<ColumnInfo><Column id=\"year\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"year\">1년</Col></Row><Row><Col id=\"year\">2년</Col></Row><Row><Col id=\"year\">3년</Col></Row><Row><Col id=\"year\">4년</Col></Row><Row><Col id=\"year\">5년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_empList", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_approverList", this);
            obj._setContents("<ColumnInfo><Column id=\"APPROVAL_1ST\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_2ND\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_3RD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lb_approval_emp_draftN","0%","0%","100%","6.35%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기안서 작성");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_approval_emp_draftN_center","1.3%","20.63%","97.27%","70.79%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#EDEFF3");
            obj.set_border("0px none transparent");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("lb_approval_doc_no","4.03%","23.49%","10.39%","4.76%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("문서번호");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_approval_doc_no","17.53%","23.17%","23.38%","5.56%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("lb_approval_date","58.44%","148","10.39%","4.76%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("기안일");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_start_date","72.21%","23.17%","23.38%","5.56%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_type("normal");
            obj.set_usecontextmenu("false");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("lb_approval_dept","4.03%","31.27%","10.39%","4.76%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("기안부서");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_approval_dept","17.53%","30.95%","23.38%","5.56%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("lb_approval_writer","58.44%","197","10.39%","4.76%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("기안자");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_approval_writer","72.21%","30.95%","23.38%","5.56%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("lb_approval_title","4.03%","38.73%","10.39%","4.76%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("제목");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_approval_title","17.53%","38.41%","78.31%","5.56%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("text_approval_write","4.03%","46.03%","91.56%","34.13%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_scrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new Static("lb_approval_preserve","1.3%","93.17%","10.39%","4.76%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("보존기한");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_approval_preserve","15.06%","92.86%","23.38%","5.56%",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("ds_preserveList");
            obj.set_codecolumn("year");
            obj.set_datacolumn("year");
            this.addChild(obj.name, obj);

            obj = new Button("btn_approval_emp_draftN","85.58%","93.02%","12.99%","5.4%",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("기안상신");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popdiv_approver_search","103.51%","42.86%","64.94%","63.49%",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("lb_approver_search","0%","0%","100%","10%",null,null,null,null,null,null,this.popdiv_approver_search.form);
            obj.set_taborder("0");
            obj.set_text("결재자 조회");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.popdiv_approver_search.addChild(obj.name, obj);

            obj = new Button("btn_approver_search_close","91.50%","1.25%","6%","7.52%",null,null,null,null,null,null,this.popdiv_approver_search.form);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_border("0px none transparent");
            obj.set_icon("url(\'imagerc::close.png\')");
            this.popdiv_approver_search.addChild(obj.name, obj);

            obj = new Static("lb_approver_search_center","2%","14.54%","96%","70.18%",null,null,null,null,null,null,this.popdiv_approver_search.form);
            obj.set_taborder("2");
            obj.set_background("#EDEFF3");
            obj.set_border("0px none transparent");
            obj.set_text("");
            this.popdiv_approver_search.addChild(obj.name, obj);

            obj = new Edit("edit_emp_name_search","23.8%","19.55%","36%","8.77%",null,null,null,null,null,null,this.popdiv_approver_search.form);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.popdiv_approver_search.addChild(obj.name, obj);

            obj = new Static("lb_emp_name","4.6%","20.05%","16%","7.52%",null,null,null,null,null,null,this.popdiv_approver_search.form);
            obj.set_taborder("4");
            obj.set_text("사원명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.popdiv_approver_search.addChild(obj.name, obj);

            obj = new Button("btn_approver_search","83%","19.8%","12%","8.52%",null,null,null,null,null,null,this.popdiv_approver_search.form);
            obj.set_taborder("5");
            obj.set_text("검색");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.popdiv_approver_search.addChild(obj.name, obj);

            obj = new Button("btn_approver_add","78%","88.47%","20%","8.52%",null,null,null,null,null,null,this.popdiv_approver_search.form);
            obj.set_taborder("6");
            obj.set_text("등록");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.popdiv_approver_search.addChild(obj.name, obj);

            obj = new Grid("grid_approverList","4.6%","31.33%","90.8%","51.38%",null,null,null,null,null,null,this.popdiv_approver_search.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_empList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사원번호\"/><Cell col=\"1\" text=\"사원이름\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"직급\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NO\"/><Cell col=\"1\" text=\"bind:EMP_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_NAME\"/><Cell col=\"3\" text=\"bind:RANK_NAME\"/></Band></Format></Formats>");
            this.popdiv_approver_search.addChild(obj.name, obj);

            obj = new Button("btn_approval_emp_draftN00","71.30%","93.02%","12.99%","5.40%",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("임시저장");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_approverList","60.39%","7.94%","38.05%","12.70%",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_binddataset("ds_approverList");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"1차 결재자\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"1\" text=\"2차 결재자\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"2\" text=\"최종 결재자\" verticalAlign=\"middle\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell text=\"bind:APPROVAL_1ST\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:APPROVAL_2ND\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:APPROVAL_3RD\" textAlign=\"center\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("text_approval_comment","12.73%","81.27%","82.86%","7.78%",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_scrollbartype("auto auto");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("lb_approval_comment","4.03%","81.27%","10.39%","4.29%",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("결재의견");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",770,630,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_approval_emp_draftN.xfdl", function() {

        var order;
        var imsi = 0;

        /* 결재자 선택 그리드 */
        this.grid_approverList_oncellclick = function(obj,e)
        {
        	if (e.row == 0 && e.cell==0) {//approver0
        		//alert(e.cell.valueOf());
        		order = 1;
        		this.popdiv_approver_search.trackPopup(650,300,500,400);
        		this.transaction("empSelect" ,"SvcURL::hr/empSelect.psp","" ,"ds_empList=out_empList" ,"" ,"fn_callback");
        	}
        	else if (e.row == 0  && e.cell==1){//approver1
        		order = 2;
        		this.popdiv_approver_search.trackPopup(650,300,500,400);
        		this.transaction("empSelect" ,"SvcURL::hr/empSelect.psp","" ,"ds_empList=out_empList" ,"" ,"fn_callback");
        	}
        	else if (e.row == 0  && e.cell==2){//approver2
        		order = 3;
        		this.popdiv_approver_search.trackPopup(650,300,500,400);
        		this.transaction("empSelect" ,"SvcURL::hr/empSelect.psp","" ,"ds_empList=out_empList" ,"" ,"fn_callback");
        	}
        };

        this.popdiv_approver_search_btn_approver_search_close_onclick = function(obj,e)
        {
        	this.popdiv_approver_search.closePopup("Close");
        };

        this.popdiv_approver_search_btn_approver_search_onclick = function(obj,e)
        {
        	var p_empName = this.popdiv_approver_search.form.edit_emp_name_search.value;
        	//alert("사원명 : " + p_empName);
        	this.transaction("empSelect" ,"SvcURL::hr/empSelect.psp?p_empName="+p_empName ,"" ,"ds_empList=out_empList" ,"" ,"fn_callback");
        };

        this.popdiv_approver_search_btn_approver_add_onclick = function(obj,e)
        {
        	var appr_name = this.ds_empList.getColumn(this.ds_empList.rowposition,'EMP_NAME');
        	if(order == 1) {
        		this.ds_approverList.setColumn(0,0,appr_name);
        	}
        	if(order == 2) {
        		this.ds_approverList.setColumn(0,1,appr_name);
        	}
        	if(order == 3) {
        		this.ds_approverList.setColumn(0,2,appr_name);
        	}
        	this.popdiv_approver_search.form.edit_emp_name_search.set_value('');
        	this.popdiv_approver_search.closePopup();
        };

        var objApp = nexacro.getApplication();
        var objDs = objApp.gb_login;

        this.Form_approval_emp_draftN_onload = function(obj,e)
        {
        	this.edit_approval_dept.set_value(objDs.getColumn(0,"DEPT_NAME"));
        	this.edit_approval_writer.set_value(objDs.getColumn(0,"EMP_NAME"));
        	//this.ds_approverList.setColumn(0,0,"이성계");
        	//this.ds_approverList.setColumn(0,1,"김유신");
        	//this.ds_approverList.setColumn(0,2,"이순신");
        	this.edit_approval_title.set_value("기안서");
        	this.text_approval_write.set_value("기안서입니다.");
        	this.cb_approval_preserve.set_value(this.ds_preserveList.getColumn(0,0));
        	this.transaction("empSelect" ,"SvcURL::hr/empSelect.psp","" ,"ds_empList=out_empList" ,"" ,"fn_callback");
        };

        // 비동기 통신 결과를 받을 콜백 함수 지정
        this.fn_callback = function(svcID, errCD, errMSG) {
        	//alert("fn_callback호출 성공"+svcID+","+errCD+","+errMSG);
        	if(errCD < 0){
        		this.alert(errMSG);
        		return;
        	}
        	if(svcID == "approvalCount"){
        		//this.alert(errMSG);
        		//this.alert("Count : " + errCD);
        		this.edit_approval_doc_no.set_value(this.cal_start_date.value
        			+"_"+(errCD + 1));
        	}
        	if(svcID == "approvalInsert"){
        		if(imsi == 1) {
        			this.alert("임시저장 되었습니다.");
        			imsi = 0;
        			return;
        		}
        		this.alert("상신 되었습니다.");
        	}
        }

        var g_approval = objApp.gb_approval;
        g_approval.addRow();

        //기안상신
        this.btn_approval_emp_draftN_onclick = function(obj,e)
        {
        	if(this.edit_approval_doc_no.value == undefined || this.edit_approval_doc_no.value =='') {
        		alert("문서번호가 입력되지 않았습니다.");
        		return;
        	}
        	if(this.cal_start_date.value == undefined || this.cal_start_date.value =='') {
        		alert("날짜가 입력되지 않았습니다.");
        		return;
        	}
        	if(this.edit_approval_title.value == undefined || this.edit_approval_title.value =='') {
        		alert("제목이 입력되지 않았습니다.");
        		return;
        	}
        	if(this.text_approval_write.value == undefined || this.text_approval_write.value =='') {
        		alert("내용이 입력되지 않았습니다.");
        		return;
        	}
        	if(this.cb_approval_preserve.value == undefined || this.cb_approval_preserve.value =='') {
        		alert("보존기한이 선택되지 않았습니다.");
        		return;
        	}
        	if(this.ds_approverList.getColumn(0,0) == undefined || this.ds_approverList.getColumn(0,0) =='') {
        		alert("1차 결재자가 선택되지 않았습니다.");
        		return;
        	}
        	if(this.ds_approverList.getColumn(0,1) == undefined || this.ds_approverList.getColumn(0,1) =='') {
        		alert("2차 결재자가 선택되지 않았습니다.");
        		return;
        	}
        	if(this.ds_approverList.getColumn(0,2) == undefined || this.ds_approverList.getColumn(0,2) =='') {
        		alert("최종 결재자가 선택되지 않았습니다.");
        		return;
        	}
        	g_approval.setColumn(0, "APPROVAL_NO", this.edit_approval_doc_no.value);
        	g_approval.setColumn(0, "APPROVAL_DATE", this.cal_start_date.value);
        	g_approval.setColumn(0, "DEPT_NAME", this.edit_approval_dept.value);
        	g_approval.setColumn(0, "EMP_NAME", this.edit_approval_writer.value);
        	g_approval.setColumn(0, "APPROVAL_TITLE", this.edit_approval_title.value);
        	g_approval.setColumn(0, "APPROVAL_CONTENT", this.text_approval_write.value);
        	g_approval.setColumn(0, "APPROVAL_PERIOD", this.cb_approval_preserve.value);
        	g_approval.setColumn(0, "APPROVAL_1ST", this.ds_approverList.getColumn(0,0));
        	g_approval.setColumn(0, "APPROVAL_2ND", this.ds_approverList.getColumn(0,1));
        	g_approval.setColumn(0, "APPROVAL_3RD", this.ds_approverList.getColumn(0,2));
        	g_approval.setColumn(0, "EMP_NO", objDs.getColumn(0,"EMP_NO")); //where절에 들어갈 컬럼. 사번비교
        	this.transaction("approvalInsert" ,"SvcURL::approval/approvalInsert.psp" ,"in_approvalList=gb_approval" ,"ds_approvalList=out_approvalList" ,"" ,"fn_callback");
        };

        this.cal_start_date_onchanged = function(obj,e)
        {
        	var p_empNo = objDs.getColumn(0, "EMP_NO");
        	var p_date = this.cal_start_date.value;
        	//alert("p_date : " + p_date);
        	this.transaction("approvalCount" ,"SvcURL::approval/approvalCount.psp"
        		,"" ,""
        		,"p_empNo="+p_empNo+" p_date="+p_date
        		,"fn_callback");
        };

        //임시저장
        this.btn_approval_emp_draftN00_onclick = function(obj,e)
        {
        	if(this.edit_approval_doc_no.value == undefined || this.edit_approval_doc_no.value =='') {
        		alert("문서번호가 입력되지 않았습니다.");
        		return;
        	}
        	if(this.cal_start_date.value == undefined || this.cal_start_date.value =='') {
        		alert("날짜가 입력되지 않았습니다.");
        		return;
        	}
        	if(this.edit_approval_title.value == undefined || this.edit_approval_title.value =='') {
        		alert("제목이 입력되지 않았습니다.");
        		return;
        	}
        	if(this.text_approval_write.value == undefined || this.text_approval_write.value =='') {
        		alert("내용이 입력되지 않았습니다.");
        		return;
        	}
        	if(this.cb_approval_preserve.value == undefined || this.cb_approval_preserve.value =='') {
        		alert("보존기한이 선택되지 않았습니다.");
        		return;
        	}
        	if(this.ds_approverList.getColumn(0,0) == undefined || this.ds_approverList.getColumn(0,0) =='') {
        		alert("1차 결재자가 선택되지 않았습니다.");
        		return;
        	}
        	if(this.ds_approverList.getColumn(0,1) == undefined || this.ds_approverList.getColumn(0,1) =='') {
        		alert("2차 결재자가 선택되지 않았습니다.");
        		return;
        	}
        	if(this.ds_approverList.getColumn(0,2) == undefined || this.ds_approverList.getColumn(0,2) =='') {
        		alert("최종 결재자가 선택되지 않았습니다.");
        		return;
        	}
        	g_approval.setColumn(0, "APPROVAL_NO", this.edit_approval_doc_no.value);
        	g_approval.setColumn(0, "APPROVAL_DATE", this.cal_start_date.value);
        	g_approval.setColumn(0, "DEPT_NAME", this.edit_approval_dept.value);
        	g_approval.setColumn(0, "EMP_NAME", this.edit_approval_writer.value);
        	g_approval.setColumn(0, "APPROVAL_TITLE", this.edit_approval_title.value);
        	g_approval.setColumn(0, "APPROVAL_CONTENT", this.text_approval_write.value);
        	g_approval.setColumn(0, "APPROVAL_PERIOD", this.cb_approval_preserve.value);
        	g_approval.setColumn(0, "APPROVAL_1ST", this.ds_approverList.getColumn(0,0));
        	g_approval.setColumn(0, "APPROVAL_2ND", this.ds_approverList.getColumn(0,1));
        	g_approval.setColumn(0, "APPROVAL_3RD", this.ds_approverList.getColumn(0,2));
        	g_approval.setColumn(0, "EMP_NO", objDs.getColumn(0,"EMP_NO")); //where절에 들어갈 컬럼. 사번비교
        	g_approval.setColumn(0, "APPROVAL_STATE", "5"); //임시 : 5
        	imsi = 1;
        	this.transaction("approvalInsert" ,"SvcURL::approval/approvalInsert.psp" ,"in_approvalList=gb_approval" ,"ds_approvalList=out_approvalList" ,"" ,"fn_callback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_approval_emp_draftN_onload,this);
            this.cal_start_date.addEventHandler("onchanged",this.cal_start_date_onchanged,this);
            this.cb_approval_preserve.addEventHandler("onitemchanged",this.cb_approval_preserve_onitemchanged,this);
            this.btn_approval_emp_draftN.addEventHandler("onclick",this.btn_approval_emp_draftN_onclick,this);
            this.popdiv_approver_search.form.btn_approver_search_close.addEventHandler("onclick",this.popdiv_approver_search_btn_approver_search_close_onclick,this);
            this.popdiv_approver_search.form.btn_approver_search.addEventHandler("onclick",this.popdiv_approver_search_btn_approver_search_onclick,this);
            this.popdiv_approver_search.form.btn_approver_add.addEventHandler("onclick",this.popdiv_approver_search_btn_approver_add_onclick,this);
            this.btn_approval_emp_draftN00.addEventHandler("onclick",this.btn_approval_emp_draftN00_onclick,this);
            this.grid_approverList.addEventHandler("oncellclick",this.grid_approverList_oncellclick,this);
        };

        this.loadIncludeScript("Form_approval_emp_draftN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
