(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_approval_mgr_draft");
            this.set_titletext("APPROVAL");
            if (Form == this.constructor)
            {
                this._setFormPosition(770,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_preserveList", this);
            obj._setContents("<ColumnInfo><Column id=\"year\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"year\">1년</Col></Row><Row><Col id=\"year\">2년</Col></Row><Row><Col id=\"year\">3년</Col></Row><Row><Col id=\"year\">4년</Col></Row><Row><Col id=\"year\">5년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_approverList", this);
            obj._setContents("<ColumnInfo><Column id=\"APPROVAL_1ST\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_2ND\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_3RD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lb_approval_mgr_draft","0%","0%","100%","6.35%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("기안서");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_approval_mgr_draft_center","1.30%","20.63%","97.27%","70.48%",null,null,null,null,null,null,this);
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
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
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
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("text_approval_write","4.03%","45.56%","91.56%","34.13%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_scrollbartype("auto auto");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("lb_approval_comment","4.03%","81.27%","10.39%","4.29%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("결재의견");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("text_approval_comment","12.73%","81.27%","82.86%","7.78%",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_scrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new Static("lb_approval_preserve","1.3%","93.17%","10.39%","4.76%",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("보존기한");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_approval_preserve","15.06%","92.86%","23.38%","5.56%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_innerdataset("ds_preserveList");
            obj.set_codecolumn("year");
            obj.set_datacolumn("year");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_approval_decide","70.13%","93.02%","12.99%","5.4%",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("기결");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_approval_refuse","85.71%","93.02%","12.99%","5.4%",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("반려");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_approverList","60.39%","7.94%","38.05%","12.70%",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_approverList");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"1차 결재자\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"2차 결재자\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"최종 결재자\" textAlign=\"center\" verticalAlign=\"middle\"/></Band><Band id=\"body\"><Cell text=\"bind:APPROVAL_1ST\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:APPROVAL_2ND\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:APPROVAL_3RD\" textAlign=\"center\" verticalAlign=\"middle\"/></Band></Format></Formats>");
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
        this.registerScript("Form_approval_mgr_draft.xfdl", function() {

        this.popdiv_approver_search_btn_approver_search_close_onclick = function(obj,e)
        {
        	this.popdiv_approver_search.closePopup("Close");
        };


        this.btn_approval_decide_onclick = function(obj,e)
        {
        	/* 기결함으로 보낼 문서 */
        	//여기서 Update처리시 결재처리가 됨.
        	objDs.setColumn(0,"APPROVAL_NOTE",this.text_approval_comment.value); //결재의견 변경내용을
        	//전역객체의 "APPROVAL_NOTE" 컬럼에 담음.

        	//gb_approval에 모든 수정할 정보 다 들어있음. code포함.
        	//ds_approvalList는 미결함 폼에서 응답 받을 데이터셋. 바로 화면 갱신처리 위하여 데이터셋 형태로 받음.
        	//objApp_var.gb_mgrName는 결재자 정보를 식별해줄 전역변수.
        	//objApp_var.gb_mgrName에는 부모화면에서 전역 로그인객체(gb_login)에서 이름(EMP_NAME) 담겨진 상태.
        	this.transaction("mgrUpdate" ,"SvcURL::approval/mgrUpdate.psp"
        		,"in_approvalList=gb_approval" ,"ds_approvalList=out_approvalList"
        		,"p_mgrName="+this.objApp_var.gb_mgrName+" p_state="+p_state
        		,"fn_callback");
        };

        this.btn_approval_refuse_onclick = function(obj,e)
        {
        	/* 반려함으로 보낼 문서 */
        	objDs.setColumn(0,"APPROVAL_NOTE",this.text_approval_comment.value); //결재의견 변경내용을
        	//전역객체의 "APPROVAL_NOTE" 컬럼에 담음.

        	//gb_approval에 모든 수정할 정보 다 들어있음. code포함.
        	//ds_approvalList는 미결함 폼에서 응답 받을 데이터셋. 바로 화면 갱신처리 위하여 데이터셋 형태로 받음.
        	//objApp_var.gb_mgrName는 결재자 정보를 식별해줄 전역변수.
        	//objApp_var.gb_mgrName에는 부모화면에서 전역 로그인객체(gb_login)에서 이름(EMP_NAME) 담겨진 상태.
        	this.transaction("mgrRefuse" ,"SvcURL::approval/mgrRefuse.psp"
        		,"in_approvalList=gb_approval" ,"ds_approvalList=out_approvalList"
        		,"p_mgrName="+this.objApp_var.gb_mgrName+" p_state="+p_state
        		,"fn_callback");
        };

        this.objApp_var = nexacro.getApplication();
        this.objApp_var.gb_approvalCode;

        var objApp = nexacro.getApplication();
        var objDs = objApp.gb_approval;
        var p_state;

        //폼이 로드됐을 때
        this.Form_approval_mgr_draft_onload = function(obj,e)
        {
        	//전역변수에서 결재코드 읽어옴.
        	var p_apprcode = this.objApp_var.gb_approvalCode;
        	//결재코드 동일한 조건일 때 transaction함수 처리
        	this.transaction("mgrSelect" ,"SvcURL::approval/mgrSelect.psp"
        		,"in_approvalList=gb_approval" ,"gb_approval=out_approvalList"
        		,"p_apprcode="+p_apprcode
        		,"fn_callback");
        };

        // 비동기 통신 결과를 받을 콜백 함수 지정
        this.fn_callback = function(svcID, errCD, errMSG) {
        	//alert("fn_callback호출 성공"+svcID+","+errCD+","+errMSG);
        	if(errCD < 0){
        		this.alert(errMSG);
        		return;
        	}
        	if(svcID == "mgrUpdate"){
        		this.alert("승인되었습니다.");
        	}
        	if(svcID == "mgrRefuse"){
        		this.alert("반려되었습니다.");
        	}
        	if(svcID == "mgrSelect"){
        		//this.alert(errMSG);
        		this.edit_approval_doc_no.set_value(objDs.getColumn(0,"APPROVAL_NO"));
        		this.cal_start_date.set_value(objDs.getColumn(0,"APPROVAL_DATE"));
        		this.ds_approverList.setColumn(0,0,objDs.getColumn(0,"APPROVAL_1ST"));
        		this.ds_approverList.setColumn(0,1,objDs.getColumn(0,"APPROVAL_2ND"));
        		this.ds_approverList.setColumn(0,2,objDs.getColumn(0,"APPROVAL_3RD"));
        		this.edit_approval_title.set_value(objDs.getColumn(0,"APPROVAL_TITLE"));
        		this.text_approval_write.set_value(objDs.getColumn(0,"APPROVAL_CONTENT"));
        		this.text_approval_comment.set_value(objDs.getColumn(0,"APPROVAL_NOTE"))
        		this.cb_approval_preserve.set_value(objDs.getColumn(0,"APPROVAL_PERIOD"));
        		this.edit_approval_dept.set_value(objDs.getColumn(0,"DEPT_NAME"));
        		this.edit_approval_writer.set_value(objDs.getColumn(0,"EMP_NAME"));
        		this.ds_approverList.setColumn(1,0,objDs.getColumn(0,"APPROVAL_1RS"));
        		this.ds_approverList.setColumn(1,1,objDs.getColumn(0,"APPROVAL_2RS"));
        		this.ds_approverList.setColumn(1,2,objDs.getColumn(0,"APPROVAL_3RS"));

        		if(this.objApp_var.gb_mgrName==objDs.getColumn(0,"APPROVAL_1ST")) {
        			p_state = '1';
        		}
        		if(this.objApp_var.gb_mgrName==objDs.getColumn(0,"APPROVAL_2ND")) {
        			p_state = '2';
        		}
        		if(this.objApp_var.gb_mgrName==objDs.getColumn(0,"APPROVAL_3RD")) {
        			p_state = '3';
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_approval_mgr_draft_onload,this);
            this.cb_approval_preserve.addEventHandler("onitemchanged",this.cb_approval_preserve_onitemchanged,this);
            this.btn_approval_decide.addEventHandler("onclick",this.btn_approval_decide_onclick,this);
            this.btn_approval_refuse.addEventHandler("onclick",this.btn_approval_refuse_onclick,this);
            this.grid_approverList.addEventHandler("oncellclick",this.grid_approverList_oncellclick,this);
        };

        this.loadIncludeScript("Form_approval_mgr_draft.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
