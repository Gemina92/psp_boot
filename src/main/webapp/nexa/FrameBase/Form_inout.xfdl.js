(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_inout");
            this.set_titletext("INOUT");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_inList", this);
            obj._setContents("<ColumnInfo><Column id=\"INOUT_CK\" type=\"STRING\" size=\"256\"/><Column id=\"INOUT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INOUT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"INOUT_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_outList", this);
            obj._setContents("<ColumnInfo><Column id=\"INOUT_CK\" type=\"STRING\" size=\"256\"/><Column id=\"INOUT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INOUT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"INOUT_AMOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_inout","0%","0%","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("lb_inout","0%","0%","100%","5.22%",null,null,null,null,null,null,this.div_inout.form);
            obj.set_taborder("1");
            obj.set_text("입고/출고 관리");
            obj.set_background("#333F50");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("#ffffff");
            obj.set_padding("0px 0px 0px 10px");
            this.div_inout.addChild(obj.name, obj);

            obj = new Tab("tab_inout","2.03%","7.31%","96.09%","91.19%",null,null,null,null,null,null,this.div_inout.form);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            this.div_inout.addChild(obj.name, obj);

            obj = new Tabpage("tab_in",this.div_inout.form.tab_inout);
            obj.set_text("입고");
            this.div_inout.form.tab_inout.addChild(obj.name, obj);

            obj = new Static("lb_period_search","1.96%","3.79%","8.15%","5.16%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_in.form);
            obj.set_taborder("0");
            obj.set_text("기간");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.div_inout.form.tab_inout.tab_in.addChild(obj.name, obj);

            obj = new Calendar("cal_period_start_search","9.86%","3.44%","13.04%","6.02%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_in.form);
            obj.set_taborder("1");
            obj.set_type("normal");
            this.div_inout.form.tab_inout.tab_in.addChild(obj.name, obj);

            obj = new Static("lb_period_center_search","22.9%","3.79%","1.79%","5.16%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_in.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_font("normal 700 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("center");
            this.div_inout.form.tab_inout.tab_in.addChild(obj.name, obj);

            obj = new Calendar("cal_period_end_search","24.69%","3.44%","13.04%","6.02%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_in.form);
            obj.set_taborder("3");
            obj.set_type("normal");
            this.div_inout.form.tab_inout.tab_in.addChild(obj.name, obj);

            obj = new Static("lb_account_name","40.59%","3.79%","8.15%","5.16%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_in.form);
            obj.set_taborder("4");
            obj.set_text("거래처명");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.div_inout.form.tab_inout.tab_in.addChild(obj.name, obj);

            obj = new Edit("edit_account_name_search","48.49%","3.44%","13.04%","6.02%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_in.form);
            obj.set_taborder("5");
            this.div_inout.form.tab_inout.tab_in.addChild(obj.name, obj);

            obj = new Static("lb_crops_name","64.38%","3.79%","8.15%","5.16%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_in.form);
            obj.set_taborder("6");
            obj.set_text("농산물명");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.div_inout.form.tab_inout.tab_in.addChild(obj.name, obj);

            obj = new Edit("edit_crops_name_search","72.29%","3.44%","13.04%","6.02%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_in.form);
            obj.set_taborder("7");
            this.div_inout.form.tab_inout.tab_in.addChild(obj.name, obj);

            obj = new Button("btn_in_search","90.14%","3.79%","8.15%","5.85%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_in.form);
            obj.set_taborder("8");
            obj.set_text("검색");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_inout.form.tab_inout.tab_in.addChild(obj.name, obj);

            obj = new Grid("grid_inList","1.96%","12.56%","96.33%","75.73%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_in.form);
            obj.set_taborder("12");
            obj.set_binddataset("ds_inList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"220\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"입고일자\"/><Cell col=\"2\" text=\"거래처명\"/><Cell col=\"3\" text=\"농산물코드\"/><Cell col=\"4\" text=\"농산물명\"/><Cell col=\"5\" text=\"단위\"/><Cell col=\"6\" text=\"입고수량\"/></Band><Band id=\"body\"><Cell text=\"bind:INOUT_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:INOUT_DATE\" displaytype=\"calendarcontrol\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:ACCOUNT_NAME\"/><Cell col=\"3\" text=\"bind:CROPS_NO\"/><Cell col=\"4\" text=\"bind:CROPS_NAME\"/><Cell col=\"5\" text=\"bind:INOUT_UNIT\"/><Cell col=\"6\" text=\"bind:INOUT_AMOUNT\"/></Band></Format></Formats>");
            this.div_inout.form.tab_inout.tab_in.addChild(obj.name, obj);

            obj = new Button("btn_in_del","1.96%","90.71%","8.15%","5.85%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_in.form);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_inout.form.tab_inout.tab_in.addChild(obj.name, obj);

            obj = new Button("btn_in_upd","80.36%","90.71%","8.15%","5.85%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_in.form);
            obj.set_taborder("10");
            obj.set_text("수정");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_inout.form.tab_inout.tab_in.addChild(obj.name, obj);

            obj = new Button("btn_in_add","90.14%","90.71%","8.15%","5.85%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_in.form);
            obj.set_taborder("11");
            obj.set_text("입고등록");
            obj.set_background("#8497B0");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_inout.form.tab_inout.tab_in.addChild(obj.name, obj);

            obj = new Tabpage("tab_out",this.div_inout.form.tab_inout);
            obj.set_text("출고");
            this.div_inout.form.tab_inout.addChild(obj.name, obj);

            obj = new Static("lb_period_search","1.96%","3.79%","8.15%","5.16%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_out.form);
            obj.set_taborder("0");
            obj.set_text("기간");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.div_inout.form.tab_inout.tab_out.addChild(obj.name, obj);

            obj = new Calendar("cal_period_start_search","9.86%","3.44%","13.04%","6.02%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_out.form);
            obj.set_taborder("1");
            obj.set_type("normal");
            this.div_inout.form.tab_inout.tab_out.addChild(obj.name, obj);

            obj = new Static("lb_period_center_search","22.9%","3.79%","1.79%","5.16%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_out.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_font("normal 700 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("center");
            this.div_inout.form.tab_inout.tab_out.addChild(obj.name, obj);

            obj = new Calendar("cal_period_end_search","24.69%","3.44%","13.04%","6.02%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_out.form);
            obj.set_taborder("3");
            obj.set_type("normal");
            this.div_inout.form.tab_inout.tab_out.addChild(obj.name, obj);

            obj = new Static("lb_account_name","40.59%","3.79%","8.15%","5.16%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_out.form);
            obj.set_taborder("4");
            obj.set_text("거래처명");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.div_inout.form.tab_inout.tab_out.addChild(obj.name, obj);

            obj = new Edit("edit_account_name_search","48.49%","3.44%","13.04%","6.02%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_out.form);
            obj.set_taborder("5");
            this.div_inout.form.tab_inout.tab_out.addChild(obj.name, obj);

            obj = new Static("lb_crops_name","64.38%","3.79%","8.15%","5.16%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_out.form);
            obj.set_taborder("6");
            obj.set_text("농산물명");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.div_inout.form.tab_inout.tab_out.addChild(obj.name, obj);

            obj = new Edit("edit_crops_name_search","72.29%","3.44%","13.04%","6.02%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_out.form);
            obj.set_taborder("7");
            this.div_inout.form.tab_inout.tab_out.addChild(obj.name, obj);

            obj = new Button("btn_out_search","90.14%","3.79%","8.15%","5.85%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_out.form);
            obj.set_taborder("8");
            obj.set_text("검색");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_inout.form.tab_inout.tab_out.addChild(obj.name, obj);

            obj = new Grid("grid_outList","1.96%","12.56%","96.33%","75.73%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_out.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_outList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"220\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"출고일자\"/><Cell col=\"2\" text=\"거래처명\"/><Cell col=\"3\" text=\"농산물코드\"/><Cell col=\"4\" text=\"농산물명\"/><Cell col=\"5\" text=\"단위\"/><Cell col=\"6\" text=\"출고수량\"/></Band><Band id=\"body\"><Cell text=\"bind:INOUT_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:INOUT_DATE\" edittype=\"date\" displaytype=\"calendarcontrol\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:ACCOUNT_NAME\"/><Cell col=\"3\" text=\"bind:CROPS_NO\"/><Cell col=\"4\" text=\"bind:CROPS_NAME\"/><Cell col=\"5\" text=\"bind:INOUT_UNIT\"/><Cell col=\"6\" text=\"bind:INOUT_AMOUNT\"/></Band></Format></Formats>");
            this.div_inout.form.tab_inout.tab_out.addChild(obj.name, obj);

            obj = new Button("btn_out_del","1.96%","90.71%","8.15%","5.85%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_out.form);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_inout.form.tab_inout.tab_out.addChild(obj.name, obj);

            obj = new Button("btn_out_upd","80.36%","90.71%","8.15%","5.85%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_out.form);
            obj.set_taborder("11");
            obj.set_text("수정");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_inout.form.tab_inout.tab_out.addChild(obj.name, obj);

            obj = new Button("btn_out_add","90.14%","90.71%","8.15%","5.85%",null,null,null,null,null,null,this.div_inout.form.tab_inout.tab_out.form);
            obj.set_taborder("12");
            obj.set_text("출고등록");
            obj.set_background("#8497B0");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_inout.form.tab_inout.tab_out.addChild(obj.name, obj);

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
        this.registerScript("Form_inout.xfdl", function() {
        // 비동기 통신 결과를 받을 콜백 함수 지정
        this.fn_callback = function(svcID, errCD, errMSG) {
        	alert("fn_callback호출 성공"+svcID+","+errCD+","+errMSG);
        	if(errCD < 0){
        		this.alert(errMSG);
        		return;
        	}
        	if(svcID == "inSelect"){
        		//this.alert(errMSG);
        	}
        	if(svcID == "outSelect"){
        		//this.alert(errMSG);
        	}
        }

        /*************************************************** [[ 입고 ]] ***************************************************/
        /* 체크박스 설정 시작 */
        this.div_inout_tab_inout_tab_in_grid_inList_onheadclick = function(obj,e)
        {
        	//alert("onheadclick 클릭 이벤트 성공");
        	//체크박스로 설정한 첫 번째 head 컬럼을 클릭했을 경우에 gf_setCheckAll 함수를 호출
            if(e.cell == 0)
            {
                this.in_setCheckAll(obj, e);
            }
        };
        this.in_isCheckAll = 0;
        this.in_setCheckAll = function(obj, e)
        {
            var strColID = obj.getCellProperty("body", e.cell, "text").replace(/bind:/i, "");

            //체크박스가 체크되어 있으면 체크 해제
            //체크되어 있지 않으면 체크
            this.in_isCheckAll = (this.in_isCheckAll ? 0 : 1);

            //Dataset의 이벤트를 끔
            //this.Dataset00.enableevent = false;

            //check to body column
            for(var i=0; i< this.ds_inList.getRowCount(); i++)
            {
                this.ds_inList.setColumn(i, strColID, this.in_isCheckAll);
            }
            //check to head column
            obj.setCellProperty("Head", 0, "text", this.in_isCheckAll);

            //Dataset의 이벤트를 켬
            //this.Dataset00.enableevent = true;
        };
        /* 체크박스 설정   끝 */

        this.div_inout_tab_inout_tab_in_btn_in_add_onclick = function(obj,e)
        {
        	alert("입고등록");
        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_inout_in_create"
        	                  , 500//x좌표
        					  , 100//y좌표
        					  , 772//가로
        					  , 500//높이
        					  , null
        					  , null
        					  , "FrameBase::Form_inout_in_create.xfdl");
        	/*param1 : id, param2 : 값 */
            this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        	this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        	this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        	objChildFrame.show();
        };

        this.div_inout_tab_inout_tab_in_btn_in_upd_onclick = function(obj,e)
        {
        	alert("입고수정");
        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_inout_in_update"
        	                  , 500//x좌표
        					  , 100//y좌표
        					  , 772//가로
        					  , 500//높이
        					  , null
        					  , null
        					  , "FrameBase::Form_inout_in_update.xfdl");
        	/*param1 : id, param2 : 값 */
            this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        	this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        	this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        	objChildFrame.show();
        };

        this.div_inout_tab_inout_tab_in_btn_in_del_onclick = function(obj,e)
        {
        	//alert("test : " + this.ds_inList.getColumn(0,1));
        };

        this.div_inout_tab_inout_tab_in_btn_in_search_onclick = function(obj,e)
        {
        	var period_from = this.div_inout.form.tab_inout.tab_in.form.cal_period_start_search.value;
        	var period_to = this.div_inout.form.tab_inout.tab_in.form.cal_period_end_search.value;
        	var account_name = this.div_inout.form.tab_inout.tab_in.form.edit_account_name_search.value;
        	var crops_name = this.div_inout.form.tab_inout.tab_in.form.edit_crops_name_search.value;
        	//alert("test : " + crops_name);

        	this.transaction("inSelect" ,"SvcURL::stock/inSelect.psp" ,"in_inList=ds_inList" ,"ds_inList=out_inList"
        	,"period_from="+period_from+" period_to="+period_to+" account_name="+account_name+" crops_name="+crops_name
        	,"fn_callback");
        };
        /*************************************************** [[ 입고 ]] ***************************************************/
        /*************************************************** [[ 출고 ]] ***************************************************/
        /* 체크박스 설정 시작 */
        this.div_inout_tab_inout_tab_out_grid_outList_onheadclick = function(obj,e)
        {
        	//alert("onheadclick 클릭 이벤트 성공");
        	//체크박스로 설정한 첫 번째 head 컬럼을 클릭했을 경우에 gf_setCheckAll 함수를 호출
            if(e.cell == 0)
            {
                this.out_setCheckAll1(obj, e);
            }
        };
        this.out_isCheckAll1 = 0;
        this.out_setCheckAll1 = function(obj, e)
        {
            var strColID = obj.getCellProperty("body", e.cell, "text").replace(/bind:/i, "");

            //체크박스가 체크되어 있으면 체크 해제
            //체크되어 있지 않으면 체크
            this.out_isCheckAll1 = (this.out_isCheckAll ? 0 : 1);

            //Dataset의 이벤트를 끔
            //this.Dataset00.enableevent = false;

            //check to body column
            for(var i=0; i< this.ds_outList.getRowCount(); i++)
            {
                this.ds_outList.setColumn(i, strColID, this.out_isCheckAll1);
            }
            //check to head column
            obj.setCellProperty("Head", 0, "text", this.out_isCheckAll1);

            //Dataset의 이벤트를 켬
            //this.Dataset00.enableevent = true;
        };
        /* 체크박스 설정   끝 */

        this.div_inout_tab_inout_tab_out_btn_out_add_onclick = function(obj,e)
        {
        	alert("출고등록");
        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_inout_out_create"
        	                  , 500//x좌표
        					  , 100//y좌표
        					  , 772//가로
        					  , 498//높이
        					  , null
        					  , null
        					  , "FrameBase::Form_inout_out_create.xfdl");
        	/*param1 : id, param2 : 값 */
            this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        	this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        	this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        	objChildFrame.show();
        };

        this.div_inout_tab_inout_tab_out_btn_out_upd_onclick = function(obj,e)
        {
        	alert("출고수정");
        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_inout_out_update"
        	                  , 500//x좌표
        					  , 100//y좌표
        					  , 772//가로
        					  , 498//높이
        					  , null
        					  , null
        					  , "FrameBase::Form_inout_out_update.xfdl");
        	/*param1 : id, param2 : 값 */
            this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        	this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        	this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        	objChildFrame.show();
        };

        this.div_inout_tab_inout_tab_out_btn_out_del_onclick = function(obj,e)
        {

        };

        this.div_inout_tab_inout_tab_out_btn_out_search_onclick = function(obj,e)
        {
        	var period_from = this.div_inout.form.tab_inout.tab_out.form.cal_period_start_search.value;
        	var period_to = this.div_inout.form.tab_inout.tab_out.form.cal_period_end_search.value;
        	var account_name = this.div_inout.form.tab_inout.tab_out.form.edit_account_name_search.value;
        	var crops_name = this.div_inout.form.tab_inout.tab_out.form.edit_crops_name_search.value;

        	this.transaction("outSelect" ,"SvcURL::stock/outSelect.psp" ,"in_outList=ds_outList" ,"ds_outList=out_outList"
        	,"period_from="+period_from+" period_to="+period_to+" account_name="+account_name+" crops_name="+crops_name
        	,"fn_callback");
        };
        /*************************************************** [[ 출고 ]] ***************************************************/




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_inout.form.lb_inout.addEventHandler("onclick",this.Common_onclick,this);
            this.div_inout.form.tab_inout.tab_in.form.btn_in_search.addEventHandler("onclick",this.div_inout_tab_inout_tab_in_btn_in_search_onclick,this);
            this.div_inout.form.tab_inout.tab_in.form.grid_inList.addEventHandler("onheadclick",this.div_inout_tab_inout_tab_in_grid_inList_onheadclick,this);
            this.div_inout.form.tab_inout.tab_in.form.btn_in_del.addEventHandler("onclick",this.div_inout_tab_inout_tab_in_btn_in_del_onclick,this);
            this.div_inout.form.tab_inout.tab_in.form.btn_in_upd.addEventHandler("onclick",this.div_inout_tab_inout_tab_in_btn_in_upd_onclick,this);
            this.div_inout.form.tab_inout.tab_in.form.btn_in_add.addEventHandler("onclick",this.div_inout_tab_inout_tab_in_btn_in_add_onclick,this);
            this.div_inout.form.tab_inout.tab_out.form.btn_out_search.addEventHandler("onclick",this.div_inout_tab_inout_tab_out_btn_out_search_onclick,this);
            this.div_inout.form.tab_inout.tab_out.form.grid_outList.addEventHandler("onheadclick",this.div_inout_tab_inout_tab_out_grid_outList_onheadclick,this);
            this.div_inout.form.tab_inout.tab_out.form.btn_out_del.addEventHandler("onclick",this.div_inout_tab_inout_tab_out_btn_out_del_onclick,this);
            this.div_inout.form.tab_inout.tab_out.form.btn_out_upd.addEventHandler("onclick",this.div_inout_tab_inout_tab_out_btn_out_upd_onclick,this);
            this.div_inout.form.tab_inout.tab_out.form.btn_out_add.addEventHandler("onclick",this.div_inout_tab_inout_tab_out_btn_out_add_onclick,this);
        };

        this.loadIncludeScript("Form_inout.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
