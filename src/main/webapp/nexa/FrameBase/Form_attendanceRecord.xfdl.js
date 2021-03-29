(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_attendanceRecord");
            this.set_titletext("ATTENDANCERECORD");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_attendanceRecordList", this);
            obj._setContents("<ColumnInfo><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"근태코드\" type=\"STRING\" size=\"256\"/><Column id=\"근태명\" type=\"STRING\" size=\"256\"/><Column id=\"휴가코드여부\" type=\"STRING\" size=\"256\"/><Column id=\"유무급\" type=\"STRING\" size=\"256\"/><Column id=\"사용여부\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_attendanceRecord","0%","0%","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("lb_attendanceRecord_top","0%","0%","100%","5.22%",null,null,null,null,null,null,this.div_attendanceRecord.form);
            obj.set_taborder("0");
            obj.set_text("근태항목 조회");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            this.div_attendanceRecord.addChild(obj.name, obj);

            obj = new Static("lb_attendance_search","2.03%","7.31%","96.09%","11.94%",null,null,null,null,null,null,this.div_attendanceRecord.form);
            obj.set_taborder("1");
            obj.set_background("#D6DCE5");
            obj.set_color("black");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 40px");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_attendanceRecord.addChild(obj.name, obj);

            obj = new Edit("edit_attendance_name_search","11.48%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_attendanceRecord.form);
            obj.set_taborder("2");
            this.div_attendanceRecord.addChild(obj.name, obj);

            obj = new Button("btn_attendance_name_search","33.28%","10.75%","7.81%","5.07%",null,null,null,null,null,null,this.div_attendanceRecord.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_attendanceRecord.addChild(obj.name, obj);

            obj = new Button("btn_attendanceRecord_del","2.03%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this.div_attendanceRecord.form);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_background("#242D40");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_attendanceRecord.addChild(obj.name, obj);

            obj = new Button("btn_attendanceRecord_upd","80.94%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this.div_attendanceRecord.form);
            obj.set_taborder("5");
            obj.set_text("수정");
            obj.set_background("#242D40");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_attendanceRecord.addChild(obj.name, obj);

            obj = new Button("btn_attendanceRecord_add","90.31%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this.div_attendanceRecord.form);
            obj.set_taborder("6");
            obj.set_text("신규등록");
            obj.set_background("#8497B0");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_attendanceRecord.addChild(obj.name, obj);

            obj = new Grid("grid_attendanceRecordList","2.03%","20.15%","96.09%","71.64%",null,null,null,null,null,null,this.div_attendanceRecord.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_attendanceRecordList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"250\"/><Column size=\"300\"/><Column size=\"205\"/><Column size=\"196\"/><Column size=\"196\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"check\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"근태코드\"/><Cell col=\"2\" text=\"근태명\"/><Cell col=\"3\" text=\"휴가코드여부\"/><Cell col=\"4\" text=\"유무급\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:check\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:근태코드\"/><Cell col=\"2\" text=\"bind:근태명\"/><Cell col=\"3\" text=\"bind:휴가코드여부\"/><Cell col=\"4\" text=\"bind:유무급\"/><Cell col=\"5\" text=\"bind:사용여부\"/></Band></Format></Formats>");
            this.div_attendanceRecord.addChild(obj.name, obj);

            obj = new Static("lb_attendance_name","5.63%","11.04%","7.81%","4.48%",null,null,null,null,null,null,this.div_attendanceRecord.form);
            obj.set_taborder("8");
            obj.set_text("근태명");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.div_attendanceRecord.addChild(obj.name, obj);

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
        this.registerScript("Form_attendanceRecord.xfdl", function() {
        /* 체크박스 설정 시작 */
        this.div_attendanceRecord_grid_attendanceRecordList_onheadclick = function(obj,e)
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
            for(var i=0; i< this.ds_attendanceRecordList.getRowCount(); i++)
            {
                this.ds_attendanceRecordList.setColumn(i, strColID, this.gv_isCheckAll);
            }
            //check to head column
            obj.setCellProperty("Head", 0, "text", this.gv_isCheckAll);

            //Dataset의 이벤트를 켬
            //this.Dataset00.enableevent = true;
        };
        /* 체크박스 설정   끝 */

        this.div_attendanceRecord_btn_attendanceRecord_add_onclick = function(obj,e)
        {
        	alert("근태항목 등록");
        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_attendanceRecord_create"
        	                  , 700//x좌표
        					  , 100//y좌표
        					  , 402//가로
        					  , 420//높이
        					  , null
        					  , null
        					  , "FrameBase::Form_attendanceRecord_create.xfdl");
        	/*param1 : id, param2 : 값 */
            this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        	this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        	this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        	objChildFrame.show();
        };

        this.div_attendanceRecord_btn_attendanceRecord_upd_onclick = function(obj,e)
        {
        	alert("근태항목 수정");
        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_attendanceRecord_update"
        	                  , 700//x좌표
        					  , 100//y좌표
        					  , 402//가로
        					  , 420//높이
        					  , null
        					  , null
        					  , "FrameBase::Form_attendanceRecord_update.xfdl");
        	/*param1 : id, param2 : 값 */
            this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        	this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        	this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        	objChildFrame.show();
        };

        this.div_attendanceRecord_btn_attendanceRecord_del_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_attendanceRecord.form.btn_attendanceRecord_del.addEventHandler("onclick",this.div_attendanceRecord_btn_attendanceRecord_del_onclick,this);
            this.div_attendanceRecord.form.btn_attendanceRecord_upd.addEventHandler("onclick",this.div_attendanceRecord_btn_attendanceRecord_upd_onclick,this);
            this.div_attendanceRecord.form.btn_attendanceRecord_add.addEventHandler("onclick",this.div_attendanceRecord_btn_attendanceRecord_add_onclick,this);
            this.div_attendanceRecord.form.grid_attendanceRecordList.addEventHandler("onheadclick",this.div_attendanceRecord_grid_attendanceRecordList_onheadclick,this);
        };

        this.loadIncludeScript("Form_attendanceRecord.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
