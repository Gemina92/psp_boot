(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_attendance_mgr");
            this.set_titletext("ATTENDANCE");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_attendanceList", this);
            obj._setContents("<ColumnInfo><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"사번\" type=\"STRING\" size=\"256\"/><Column id=\"사원명\" type=\"STRING\" size=\"256\"/><Column id=\"근태코드\" type=\"STRING\" size=\"256\"/><Column id=\"근태명\" type=\"STRING\" size=\"256\"/><Column id=\"시작일\" type=\"STRING\" size=\"256\"/><Column id=\"종료일\" type=\"STRING\" size=\"256\"/><Column id=\"비고\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lb_attendance_mgr","0%","0%","100%","5.22%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("근태 신청 조회");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_attendance_mgr","0%","0%","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("lb_attendance_mgr_search","2.03%","7.31%","96.09%","11.94%",null,null,null,null,null,null,this.div_attendance_mgr.form);
            obj.set_taborder("0");
            obj.set_background("#D6DCE5");
            obj.set_color("black");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_attendance_mgr.addChild(obj.name, obj);

            obj = new Static("lb_date","5.63%","11.04%","7.81%","4.48%",null,null,null,null,null,null,this.div_attendance_mgr.form);
            obj.set_taborder("1");
            obj.set_text("조회기간");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.div_attendance_mgr.addChild(obj.name, obj);

            obj = new Calendar("cal_start_date","11.48%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_attendance_mgr.form);
            obj.set_taborder("2");
            obj.set_type("normal");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_attendance_mgr.addChild(obj.name, obj);

            obj = new Static("lb_date_center","27.89%","11.04%","1.72%","3.58%",null,null,null,null,null,null,this.div_attendance_mgr.form);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.set_font("normal 700 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("center");
            this.div_attendance_mgr.addChild(obj.name, obj);

            obj = new Calendar("cal_end_date","30.39%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_attendance_mgr.form);
            obj.set_taborder("4");
            obj.set_type("normal");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_attendance_mgr.addChild(obj.name, obj);

            obj = new Static("lb_emp_name","62.19%","11.04%","7.81%","4.48%",null,null,null,null,null,null,this.div_attendance_mgr.form);
            obj.set_taborder("5");
            obj.set_text("사원명");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.div_attendance_mgr.addChild(obj.name, obj);

            obj = new Edit("edit_emp_name_search","68.13%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_attendance_mgr.form);
            obj.set_taborder("6");
            this.div_attendance_mgr.addChild(obj.name, obj);

            obj = new Button("btn_attendance_mgr_search","85.16%","10.75%","7.81%","5.07%",null,null,null,null,null,null,this.div_attendance_mgr.form);
            obj.set_taborder("7");
            obj.set_text("검색");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_attendance_mgr.addChild(obj.name, obj);

            obj = new Grid("grid_attendanceList","2.03%","20.15%","96.09%","71.64%",null,null,null,null,null,null,this.div_attendance_mgr.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_attendanceList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"180\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"208\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"check\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"사원명\"/><Cell col=\"3\" text=\"근태코드\"/><Cell col=\"4\" text=\"근태명\"/><Cell col=\"5\" text=\"시작일\"/><Cell col=\"6\" text=\"종료일\"/><Cell col=\"7\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:check\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:사번\"/><Cell col=\"2\" text=\"bind:사원명\"/><Cell col=\"3\" text=\"bind:근태코드\"/><Cell col=\"4\" text=\"bind:근태명\"/><Cell col=\"5\" text=\"bind:시작일\"/><Cell col=\"6\" text=\"bind:종료일\"/><Cell col=\"7\" text=\"bind:비고\"/></Band></Format></Formats>");
            this.div_attendance_mgr.addChild(obj.name, obj);

            obj = new Button("btn_attendance_add","90.31%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this.div_attendance_mgr.form);
            obj.set_taborder("9");
            obj.set_text("근태 등록");
            obj.set_background("#8497B0");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_attendance_mgr.addChild(obj.name, obj);

            obj = new Button("btn_attendance_upd","80.94%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this.div_attendance_mgr.form);
            obj.set_taborder("10");
            obj.set_text("수정");
            obj.set_background("#242D40");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_attendance_mgr.addChild(obj.name, obj);

            obj = new Button("btn_attendance_del","2.03%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this.div_attendance_mgr.form);
            obj.set_taborder("11");
            obj.set_text("삭제");
            obj.set_background("#242D40");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_attendance_mgr.addChild(obj.name, obj);

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
        this.registerScript("Form_attendance_mgr.xfdl", function() {
        /* 체크박스 설정 시작 */
        this.div_attendance_mgr_grid_attendanceList_onheadclick = function(obj,e)
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
            for(var i=0; i< this.ds_attendanceList.getRowCount(); i++)
            {
                this.ds_attendanceList.setColumn(i, strColID, this.gv_isCheckAll);
            }
            //check to head column
            obj.setCellProperty("Head", 0, "text", this.gv_isCheckAll);

            //Dataset의 이벤트를 켬
            //this.Dataset00.enableevent = true;
        };
        /* 체크박스 설정   끝 */

        this.div_attendance_mgr_btn_attendance_add_onclick = function(obj,e)
        {
        	alert("근태 등록");
        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_attendance_create"
        	                  , 500//x좌표
        					  , 100//y좌표
        					  , 772//가로
        					  , 420//높이
        					  , null
        					  , null
        					  , "FrameBase::Form_attendance_create.xfdl");
        	/*param1 : id, param2 : 값 */
            this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        	this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        	this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        	objChildFrame.show();
        };

        this.div_attendance_mgr_btn_attendance_upd_onclick = function(obj,e)
        {
        	alert("근태 수정");
        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_attendance_update"
        	                  , 500//x좌표
        					  , 100//y좌표
        					  , 772//가로
        					  , 420//높이
        					  , null
        					  , null
        					  , "FrameBase::Form_attendance_update.xfdl");
        	/*param1 : id, param2 : 값 */
            this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        	this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        	this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        	objChildFrame.show();
        };

        this.div_attendance_mgr_btn_attendance_del_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_attendance_mgr.form.grid_attendanceList.addEventHandler("onheadclick",this.div_attendance_mgr_grid_attendanceList_onheadclick,this);
            this.div_attendance_mgr.form.btn_attendance_add.addEventHandler("onclick",this.div_attendance_mgr_btn_attendance_add_onclick,this);
            this.div_attendance_mgr.form.btn_attendance_upd.addEventHandler("onclick",this.div_attendance_mgr_btn_attendance_upd_onclick,this);
            this.div_attendance_mgr.form.btn_attendance_del.addEventHandler("onclick",this.div_attendance_mgr_btn_attendance_del_onclick,this);
        };

        this.loadIncludeScript("Form_attendance_mgr.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
