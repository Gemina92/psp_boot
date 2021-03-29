(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_approval_mgr_refuse");
            this.set_titletext("APPROVAL");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_approvalList", this);
            obj._setContents("<ColumnInfo><Column id=\"APPROVAL_CK\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_approval_mgr_refuse","0%","0%","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("lb_approval_mgr_refuse","0%","0%","100%","5.22%",null,null,null,null,null,null,this.div_approval_mgr_refuse.form);
            obj.set_taborder("0");
            obj.set_text("반려함 조회");
            obj.set_background("#333F50");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("#ffffff");
            obj.set_padding("0px 0px 0px 10px");
            this.div_approval_mgr_refuse.addChild(obj.name, obj);

            obj = new Static("lb_approval_mgr_refuse_search","2.03%","7.31%","96.09%","11.94%",null,null,null,null,null,null,this.div_approval_mgr_refuse.form);
            obj.set_taborder("1");
            obj.set_background("#D6DCE5");
            obj.set_color("black");
            this.div_approval_mgr_refuse.addChild(obj.name, obj);

            obj = new Static("lb_write_date","5.63%","11.04%","6.25%","4.48%",null,null,null,null,null,null,this.div_approval_mgr_refuse.form);
            obj.set_taborder("3");
            obj.set_text("작성일");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.div_approval_mgr_refuse.addChild(obj.name, obj);

            obj = new Calendar("cal_start_date","11.48%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_approval_mgr_refuse.form);
            obj.set_taborder("4");
            obj.set_type("normal");
            this.div_approval_mgr_refuse.addChild(obj.name, obj);

            obj = new Static("lb_date_center","27.89%","11.04%","1.72%","3.58%",null,null,null,null,null,null,this.div_approval_mgr_refuse.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_font("normal 700 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_approval_mgr_refuse.addChild(obj.name, obj);

            obj = new Calendar("cal_end_date","30.39%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_approval_mgr_refuse.form);
            obj.set_taborder("5");
            obj.set_type("normal");
            this.div_approval_mgr_refuse.addChild(obj.name, obj);

            obj = new Button("btn_approval_mgr_refuse_search","86.41%","10.75%","7.81%","5.07%",null,null,null,null,null,null,this.div_approval_mgr_refuse.form);
            obj.set_taborder("2");
            obj.set_text("검색");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_approval_mgr_refuse.addChild(obj.name, obj);

            obj = new Grid("grid_approvalList","2.03%","20.15%","96.09%","71.64%",null,null,null,null,null,null,this.div_approval_mgr_refuse.form);
            obj.set_taborder("6");
            obj.set_binddataset("ds_approvalList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"160\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"497\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"문서번호\"/><Cell col=\"2\" text=\"신청일\"/><Cell col=\"3\" text=\"작성자\"/><Cell col=\"4\" text=\"제목\"/><Cell col=\"5\" text=\"결재상태\"/></Band><Band id=\"body\"><Cell text=\"bind:APPROVAL_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:APPROVAL_NO\"/><Cell col=\"2\" text=\"bind:APPROVAL_DATE\"/><Cell col=\"3\" text=\"bind:EMP_NAME\"/><Cell col=\"4\" text=\"bind:APPROVAL_TITLE\"/><Cell col=\"5\" text=\"bind:APPROVAL_STATE\"/></Band></Format></Formats>");
            this.div_approval_mgr_refuse.addChild(obj.name, obj);

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
        this.registerScript("Form_approval_mgr_refuse.xfdl", function() {
        /* 체크박스 설정 시작 */
        this.div_approval_mgr_refuse_grid_approvalList_onheadclick = function(obj,e)
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

        var objApp = nexacro.getApplication();
        var objDs = objApp.gb_login; //전역 로그인객체
        var objDs_approval = objApp.gb_approval; //전역 결재객체

        this.div_approval_mgr_refuse_grid_approvalList_oncelldblclick = function(obj,e)
        {
        	var p_apprcode = this.ds_approvalList.getColumn(e.row, "APPROVAL_CODE");

        	//전역데이터셋 가져오기.
        	objDs_approval.addRow(); //전역 결재객체 1행 추가.
        	//결재객체에 현재 선택된 행의 결재코드 넣기.
        	objDs_approval.setColumn(0,"APPROVAL_CODE",p_apprcode);
        	//alert("조회할 결재번호(부모) : "+objDs_approval.getColumn(0,"APPROVAL_CODE"));

        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_approval_mgr_draftR"
        					, 500//x좌표
        					, 100//y좌표
        					, 772//가로
        					, 650//높이
        					, null
        					, null
        					, "FrameBase::Form_approval_mgr_draftR.xfdl");
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
        	if(svcID == "refuseSelect"){
        		//this.alert(errMSG);
        	}
        }


        this.div_approval_mgr_refuse_btn_approval_mgr_refuse_search_onclick = function(obj,e)
        {
        	//검색
        	var period_from = this.div_approval_mgr_refuse.form.cal_start_date.value;
        	var period_to = this.div_approval_mgr_refuse.form.cal_end_date.value;
        	var p_mgrName = objDs.getColumn(0, "EMP_NAME"); //전역 로그인객체의 사원이름을 결재자 변수에 담음.
        	this.transaction("refuseSelect" ,"SvcURL::approval/refuseSelect.psp"
        		,"in_approvalList=ds_approvalList" ,"ds_approvalList=out_approvalList"
        		,"p_mgrName="+p_mgrName+" period_from="+period_from
        		+" period_to="+period_to
        		,"fn_callback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_approval_mgr_refuse.form.btn_approval_mgr_refuse_search.addEventHandler("onclick",this.div_approval_mgr_refuse_btn_approval_mgr_refuse_search_onclick,this);
            this.div_approval_mgr_refuse.form.grid_approvalList.addEventHandler("oncelldblclick",this.div_approval_mgr_refuse_grid_approvalList_oncelldblclick,this);
            this.div_approval_mgr_refuse.form.grid_approvalList.addEventHandler("onheadclick",this.div_approval_mgr_refuse_grid_approvalList_onheadclick,this);
        };

        this.loadIncludeScript("Form_approval_mgr_refuse.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
