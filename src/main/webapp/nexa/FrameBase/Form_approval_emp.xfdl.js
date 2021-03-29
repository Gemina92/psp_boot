(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_approval_emp");
            this.set_titletext("APPROVAL");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_approvalList", this);
            obj._setContents("<ColumnInfo><Column id=\"APPROVAL_CK\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_3RD\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_approval_statusList", this);
            obj._setContents("<ColumnInfo><Column id=\"결재상태\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"결재상태\">미결재</Col></Row><Row><Col id=\"결재상태\">기결재</Col></Row><Row><Col id=\"결재상태\">반려</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_approval_emp","0%","0%","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("lb_approval_emp","0%","0%","100%","5.22%",null,null,null,null,null,null,this.div_approval_emp.form);
            obj.set_taborder("0");
            obj.set_text("기안함 조회");
            obj.set_background("#333F50");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("#ffffff");
            obj.set_padding("0px 0px 0px 10px");
            this.div_approval_emp.addChild(obj.name, obj);

            obj = new Static("lb_approval_emp_search","2.03%","7.31%","96.09%","17.91%",null,null,null,null,null,null,this.div_approval_emp.form);
            obj.set_taborder("1");
            obj.set_background("#D6DCE5");
            obj.set_color("black");
            obj.set_text("");
            obj.getSetter("onchanged").set("div_approval_emp_lb_approval_emp_search_onchanged");
            this.div_approval_emp.addChild(obj.name, obj);

            obj = new Static("lb_write_date","5.63%","10%","6.25%","4.48%",null,null,null,null,null,null,this.div_approval_emp.form);
            obj.set_taborder("2");
            obj.set_text("작성일");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.div_approval_emp.addChild(obj.name, obj);

            obj = new Calendar("cal_start_date","11.48%","9.7%","15.63%","5.22%",null,null,null,null,null,null,this.div_approval_emp.form);
            obj.set_taborder("3");
            obj.set_type("normal");
            this.div_approval_emp.addChild(obj.name, obj);

            obj = new Static("lb_date_center","27.89%","10%","1.72%","3.58%",null,null,null,null,null,null,this.div_approval_emp.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_font("normal 700 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_approval_emp.addChild(obj.name, obj);

            obj = new Calendar("cal_end_date","30.39%","9.7%","15.63%","5.22%",null,null,null,null,null,null,this.div_approval_emp.form);
            obj.set_taborder("5");
            obj.set_type("normal");
            this.div_approval_emp.addChild(obj.name, obj);

            obj = new Static("lb_approval_status","5.63%","17.46%","6.25%","4.48%",null,null,null,null,null,null,this.div_approval_emp.form);
            obj.set_taborder("6");
            obj.set_text("결재 상태");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.div_approval_emp.addChild(obj.name, obj);

            obj = new Combo("cb_approval_status","11.48%","17.16%","15.63%","5.22%",null,null,null,null,null,null,this.div_approval_emp.form);
            obj.set_taborder("7");
            obj.set_border("1px solid #242d40");
            obj.set_innerdataset("ds_approval_statusList");
            obj.set_codecolumn("결재상태");
            obj.set_datacolumn("결재상태");
            this.div_approval_emp.addChild(obj.name, obj);

            obj = new Static("lb_approval_title","50.23%","16.87%","6.25%","4.48%",null,null,null,null,null,null,this.div_approval_emp.form);
            obj.set_taborder("8");
            obj.set_text("제목");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.div_approval_emp.addChild(obj.name, obj);

            obj = new Edit("edit_approval_title","54.38%","16.87%","22.19%","4.93%",null,null,null,null,null,null,this.div_approval_emp.form);
            obj.set_taborder("9");
            this.div_approval_emp.addChild(obj.name, obj);

            obj = new Button("btn_approval_emp_search","78.13%","16.87%","7.66%","4.93%",null,null,null,null,null,null,this.div_approval_emp.form);
            obj.set_taborder("10");
            obj.set_text("검색");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_approval_emp.addChild(obj.name, obj);

            obj = new Grid("grid_ds_approvalList","2.03%","26.87%","96.09%","65.07%",null,null,null,null,null,null,this.div_approval_emp.form);
            obj.set_taborder("11");
            obj.set_binddataset("ds_approvalList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"140\"/><Column size=\"230\"/><Column size=\"357\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"문서번호\"/><Cell col=\"2\" text=\"신청일\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"작성자\"/><Cell col=\"5\" text=\"최종결재자\"/><Cell col=\"6\" text=\"결재상태\"/></Band><Band id=\"body\"><Cell text=\"bind:APPROVAL_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:APPROVAL_NO\"/><Cell col=\"2\" text=\"bind:APPROVAL_DATE\"/><Cell col=\"3\" text=\"bind:APPROVAL_TITLE\"/><Cell col=\"4\" text=\"bind:EMP_NAME\"/><Cell col=\"5\" text=\"bind:APPROVAL_3RD\"/><Cell col=\"6\" text=\"bind:APPROVAL_STATE\"/></Band></Format></Formats>");
            this.div_approval_emp.addChild(obj.name, obj);

            obj = new Button("btn_approval_write","90.31%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this.div_approval_emp.form);
            obj.set_taborder("12");
            obj.set_text("기안서 작성");
            obj.set_background("#242D40");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_approval_emp.addChild(obj.name, obj);

            obj = new Button("btn_approval_delete","2.03%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this.div_approval_emp.form);
            obj.set_taborder("13");
            obj.set_text("삭제");
            obj.set_background("#242D40");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("false");
            this.div_approval_emp.addChild(obj.name, obj);

            obj = new Button("btn_approval_emp_search00","87.19%","16.87%","7.66%","4.93%",null,null,null,null,null,null,this.div_approval_emp.form);
            obj.set_taborder("14");
            obj.set_text("전체조회");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_approval_emp.addChild(obj.name, obj);

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
        this.registerScript("Form_approval_emp.xfdl", function() {
        /* 체크박스 설정 시작 */
        this.div_approval_emp_grid_ds_approvalList_onheadclick = function(obj,e)
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

        //등록
        this.div_approval_emp_btn_approval_write_onclick = function(obj,e)
        {
        		//alert("기안서 문서작성");
        		var objChildFrame = new ChildFrame();//ChildFrame생성
        		objChildFrame.init("popup_approval_emp_draftN"
        						, 290//x좌표
        						, 10//y좌표
        						, 772//가로
        						, 650//높이
        						, null
        						, null
        						, "FrameBase::Form_approval_emp_draftN.xfdl");
        		/*param1 : id, param2 : 값 */
        		this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        		this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        		this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        		objChildFrame.show();
        };

        var objApp = nexacro.getApplication();
        var objDs = objApp.gb_login;
        //objDs.getColumn(0,"EMP_NO");

        //검색
        this.div_approval_emp_btn_approval_emp_search_onclick = function(obj,e)
        {
        	var period_from = this.div_approval_emp.form.cal_start_date.value;
        	var period_to = this.div_approval_emp.form.cal_end_date.value;

        	var state = this.div_approval_emp.form.cb_approval_status.value;
        	var title = this.div_approval_emp.form.edit_approval_title.value;
        	var p_empNo = objDs.getColumn(0, "EMP_NO");

        	//내 결재건을 조회해야하므로 내 사번도 넘겨야 함. 전역객체도 넘김(사번).
        	this.transaction("approvalSelect" ,"SvcURL::approval/approvalSelect.psp"
        		,"in_approvalList=ds_approvalList" ,"ds_approvalList=out_approvalList"
        		,"period_from="+period_from+" period_to="+period_to
        		+" state="+state+" title="+title+" p_empNo="+p_empNo
        		,"fn_callback");
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
        //전체조회
        this.div_approval_emp_btn_approval_emp_search00_onclick = function(obj,e)
        {
        	var p_empNo = objDs.getColumn(0, "EMP_NO");
        	this.transaction("approvalSelect" ,"SvcURL::approval/approvalSelect.psp"
        		,"in_approvalList=ds_approvalList" ,"ds_approvalList=out_approvalList"
        		,"p_empNo="+p_empNo
        		,"fn_callback");
        };

        //그리드 셀 더블클릭(상세보기). 기안완료 특성상 수정은 못하게 설정. 조회만 가능.
        this.div_approval_emp_grid_ds_approvalList_oncelldblclick = function(obj,e)
        {
        	//현재 선택한 행에서 결재코드 가져오기.
        	var p_apprcode = this.ds_approvalList.getColumn(e.row, "APPROVAL_CODE");
        	//전역데이터셋 가져오기.
        	var objDs_approval = objApp.gb_approval;
        	//데이터셋 행추가
        	objDs_approval.addRow();
        	//데이터셋에 결재코드 담기. 자식창에서 꺼낼 예정.
        	objDs_approval.setColumn(0,"APPROVAL_CODE",p_apprcode);
        	//alert("수정할 결재번호(부모) : "+objDs_approval.getColumn(0,"APPROVAL_CODE"));

        	//Form_approval_emp_draftN_detail로 이동
        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_approval_emp_draftN_detail"
        					, 290//x좌표
        					, 10//y좌표
        					, 772//가로
        					, 650//높이
        					, null
        					, null
        					, "FrameBase::Form_approval_emp_draftN_detail.xfdl");
        	/*param1 : id, param2 : 값 */
        	this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        	this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        	this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        	objChildFrame.show();
        };

        //1개의 테이블로 4명의 화면에 대해서 따로 삭제처리하기 어려움.
        //보존기한이 지나면 삭제되는 것으로 처리.
        //(화면에서는 최대 3개월치까지만 조회가능한 것으로 우선 처리)

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_approval_emp.form.lb_approval_emp_search.addEventHandler("onclick",this.div_approval_delay_lb_file_search_onclick,this);
            this.div_approval_emp.form.btn_approval_emp_search.addEventHandler("onclick",this.div_approval_emp_btn_approval_emp_search_onclick,this);
            this.div_approval_emp.form.grid_ds_approvalList.addEventHandler("onheadclick",this.div_approval_emp_grid_ds_approvalList_onheadclick,this);
            this.div_approval_emp.form.grid_ds_approvalList.addEventHandler("oncelldblclick",this.div_approval_emp_grid_ds_approvalList_oncelldblclick,this);
            this.div_approval_emp.form.btn_approval_write.addEventHandler("onclick",this.div_approval_emp_btn_approval_write_onclick,this);
            this.div_approval_emp.form.btn_approval_delete.addEventHandler("onclick",this.div_emp_btn_emp_delete_onclick,this);
            this.div_approval_emp.form.btn_approval_emp_search00.addEventHandler("onclick",this.div_approval_emp_btn_approval_emp_search00_onclick,this);
        };

        this.loadIncludeScript("Form_approval_emp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
