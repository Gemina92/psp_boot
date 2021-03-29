(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_approval_emp_delay");
            this.set_titletext("APPROVAL");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_approvalList", this);
            obj._setContents("<ColumnInfo><Column id=\"APPROVAL_CK\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_3RD\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_approval_emp_delay","0%","0%","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("lb_approval_emp_delay","0%","0%","100%","5.22%",null,null,null,null,null,null,this.div_approval_emp_delay.form);
            obj.set_taborder("0");
            obj.set_text("임시 보관함");
            obj.set_background("#333F50");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("#ffffff");
            obj.set_padding("0px 0px 0px 10px");
            this.div_approval_emp_delay.addChild(obj.name, obj);

            obj = new Static("lb_approval_emp_delay_search","2.03%","7.31%","96.09%","17.91%",null,null,null,null,null,null,this.div_approval_emp_delay.form);
            obj.set_taborder("1");
            obj.set_background("#D6DCE5");
            obj.set_color("black");
            obj.set_text("");
            this.div_approval_emp_delay.addChild(obj.name, obj);

            obj = new Static("lb_write_date","4.77%","14.33%","6.25%","4.48%",null,null,null,null,null,null,this.div_approval_emp_delay.form);
            obj.set_taborder("2");
            obj.set_text("작성일");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.div_approval_emp_delay.addChild(obj.name, obj);

            obj = new Calendar("cal_start_date","10.70%","13.73%","15.63%","4.93%",null,null,null,null,null,null,this.div_approval_emp_delay.form);
            obj.set_taborder("3");
            obj.set_type("normal");
            this.div_approval_emp_delay.addChild(obj.name, obj);

            obj = new Static("lb_date_center","27.19%","14.33%","1.72%","3.28%",null,null,null,null,null,null,this.div_approval_emp_delay.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_font("normal 700 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_approval_emp_delay.addChild(obj.name, obj);

            obj = new Calendar("cal_end_date","29.69%","13.73%","15.63%","4.93%",null,null,null,null,null,null,this.div_approval_emp_delay.form);
            obj.set_taborder("5");
            obj.set_type("normal");
            this.div_approval_emp_delay.addChild(obj.name, obj);

            obj = new Static("lb_approval_writer","52.58%","13.73%","6.25%","4.48%",null,null,null,null,null,null,this.div_approval_emp_delay.form);
            obj.set_taborder("6");
            obj.set_text("제목");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.div_approval_emp_delay.addChild(obj.name, obj);

            obj = new Edit("edit_approval_writer","57.27%","13.73%","20.00%","4.93%",null,null,null,null,null,null,this.div_approval_emp_delay.form);
            obj.set_taborder("7");
            this.div_approval_emp_delay.addChild(obj.name, obj);

            obj = new Button("btn_approval_emp_delay_search","78.91%","13.73%","7.66%","4.93%",null,null,null,null,null,null,this.div_approval_emp_delay.form);
            obj.set_taborder("8");
            obj.set_text("검색");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_approval_emp_delay.addChild(obj.name, obj);

            obj = new Grid("grid_ds_approvalList","2.03%","26.87%","96.09%","65.07%",null,null,null,null,null,null,this.div_approval_emp_delay.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_approvalList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"190\"/><Column size=\"280\"/><Column size=\"150\"/><Column size=\"527\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"문서번호\"/><Cell col=\"2\" text=\"신청일\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"작성자\"/></Band><Band id=\"body\"><Cell text=\"bind:APPROVAL_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:APPROVAL_NO\"/><Cell col=\"2\" text=\"bind:APPROVAL_DATE\"/><Cell col=\"3\" text=\"bind:APPROVAL_TITLE\"/><Cell col=\"4\" text=\"bind:EMP_NAME\"/></Band></Format></Formats>");
            this.div_approval_emp_delay.addChild(obj.name, obj);

            obj = new Button("btn_approval_delete","2.03%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this.div_approval_emp_delay.form);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_background("#242D40");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("false");
            this.div_approval_emp_delay.addChild(obj.name, obj);

            obj = new Button("btn_approval_emp_search00","88.52%","13.73%","7.66%","4.93%",null,null,null,null,null,null,this.div_approval_emp_delay.form);
            obj.set_taborder("11");
            obj.set_text("전체조회");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_approval_emp_delay.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_approval_emp_delay.xfdl", function() {
        /* 체크박스 설정 시작 */
        this.div_approval_emp_delay_grid_approvalList_onheadclick = function(obj,e)
        {
        	//alert("onheadclick 클릭 이벤트 성공");
        	//체크박스로 설정한 첫 번째 head 컬럼을 클릭했을 경우에 gf_setCheckAll 함수를 호출
            if(e.cell == 0)
            {
                this.gf_setCheckAll(obj, e);
            }
        };

        this.gv_isCheckAll = 0;
        this.gf_setCheckAll = function(obj, e)
        {
            var strColID = obj.getCellProperty("body", e.cell, "text").replace(/bind:/i, "");

            //체크박스가 체크되어 있으면 체크 해제
            //체크되어 있지 않으면 체크
            this.gv_isCheckAll = (this.gv_isCheckAll ? 0 : 1);

            //Dataset의 이벤트를 끔
            //this.Dataset00.enableevent = false;

            //check to body column
            for(var i=0; i< this.ds_approvalList.getRowCount(); i++)
            {
                this.ds_approvalList.setColumn(i, strColID, this.gv_isCheckAll);
            }
            //check to head column
            obj.setCellProperty("Head", 0, "text", this.gv_isCheckAll);

            //Dataset의 이벤트를 켬
            //this.Dataset00.enableevent = true;
        };
        /* 체크박스 설정   끝 */

        this.div_approval_emp_delay_grid_ds_approvalList_oncelldblclick = function(obj,e)
        {
        	var p_apprcode = this.ds_approvalList.getColumn(e.row, "APPROVAL_CODE");

        	//전역데이터셋 가져오기.
        	var objDs_approval = objApp.gb_approval;
        	objDs_approval.addRow();
        	objDs_approval.setColumn(0,"APPROVAL_CODE",p_apprcode);
        	//this.transaction("empUSelect" ,"SvcURL::hr/empUSelect.psp","" ,"gb_empList=out_empList" ,"p_empNo="+p_empNo ,"fn_callback");
        	//alert("수정할 결재번호(부모) : "+objDs_approval.getColumn(0,"APPROVAL_CODE"));

        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_approval_emp_draft"
        					, 300//x좌표
        					, 10//y좌표
        					, 772//가로
        					, 650//높이
        					, null
        					, null
        					, "FrameBase::Form_approval_emp_draft.xfdl");
        	/*param1 : id, param2 : 값 */
        	this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        	this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        	this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        	objChildFrame.show();
        };

        // 비동기 통신 결과를 받을 콜백 함수 지정
        this.fn_callback = function(svcID, errCD, errMSG) {
        	//alert("fn_callback호출 성공"+svcID+","+errCD+","+errMSG);
        	if(errCD < 0){
        		this.alert(errMSG);
        		return;
        	}
        	if(svcID == "approvalSelect"){
        		//this.alert(errMSG);
        	}
        }

        var objApp = nexacro.getApplication();
        var objDs = objApp.gb_login;

        this.div_approval_emp_btn_approval_emp_search00_onclick = function(obj,e)
        {
        	var p_empNo = objDs.getColumn(0, "EMP_NO");
        	this.transaction("approvalSelect" ,"SvcURL::approval/approvalSelect.psp"
        		,"in_approvalList=ds_approvalList" ,"ds_approvalList=out_approvalList"
        		,"p_empNo="+p_empNo+" state=임시"
        		,"fn_callback");
        };

        this.div_approval_emp_delay_btn_approval_emp_delay_search_onclick = function(obj,e)
        {
        	var period_from = this.div_approval_emp_delay.form.cal_start_date.value;
        	var period_to = this.div_approval_emp_delay.form.cal_end_date.value;
        	var title = this.div_approval_emp_delay.form.edit_approval_writer.value;
        	var p_empNo = objDs.getColumn(0, "EMP_NO");
        	this.transaction("approvalSelect" ,"SvcURL::approval/approvalSelect.psp"
        		,"in_approvalList=ds_approvalList" ,"ds_approvalList=out_approvalList"
        		,"period_from="+period_from+" period_to="+period_to
        		+" p_empNo="+p_empNo+" state=임시"+" title="+title
        		,"fn_callback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_approval_emp_delay.form.lb_approval_emp_delay_search.addEventHandler("onclick",this.div_approval_delay_lb_file_search_onclick,this);
            this.div_approval_emp_delay.form.btn_approval_emp_delay_search.addEventHandler("onclick",this.div_approval_emp_delay_btn_approval_emp_delay_search_onclick,this);
            this.div_approval_emp_delay.form.grid_ds_approvalList.addEventHandler("onheadclick",this.div_approval_emp_grid_ds_approvalList_onheadclick,this);
            this.div_approval_emp_delay.form.grid_ds_approvalList.addEventHandler("oncelldblclick",this.div_approval_emp_delay_grid_ds_approvalList_oncelldblclick,this);
            this.div_approval_emp_delay.form.btn_approval_emp_search00.addEventHandler("onclick",this.div_approval_emp_btn_approval_emp_search00_onclick,this);
        };

        this.loadIncludeScript("Form_approval_emp_delay.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
