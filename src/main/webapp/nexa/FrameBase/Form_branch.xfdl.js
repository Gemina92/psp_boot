(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_branch");
            this.set_titletext("BRANCH");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_branchList", this);
            obj._setContents("<ColumnInfo><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"지점코드\" type=\"STRING\" size=\"256\"/><Column id=\"지점명\" type=\"STRING\" size=\"256\"/><Column id=\"지점장\" type=\"STRING\" size=\"256\"/><Column id=\"지점주소\" type=\"STRING\" size=\"256\"/><Column id=\"전화번호\" type=\"STRING\" size=\"256\"/><Column id=\"사업자등록번호\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_branch","0%","0%","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("lb_branch","0%","0%","100%","5.22%",null,null,null,null,null,null,this.div_branch.form);
            obj.set_taborder("0");
            obj.set_background("#333F50");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("#ffffff");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_text("지점 조회");
            this.div_branch.addChild(obj.name, obj);

            obj = new Static("lb_branch_search","2.03%","7.31%","96.09%","11.94%",null,null,null,null,null,null,this.div_branch.form);
            obj.set_taborder("1");
            obj.set_background("#D6DCE5");
            obj.set_color("black");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.div_branch.addChild(obj.name, obj);

            obj = new Static("lb_branch_no","5.63%","11.04%","7.81%","4.48%",null,null,null,null,null,null,this.div_branch.form);
            obj.set_taborder("2");
            obj.set_text("코드");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.getSetter("onchanged").set("Common_onchanged");
            this.div_branch.addChild(obj.name, obj);

            obj = new Edit("edit_branch_no_search","11.48%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_branch.form);
            obj.set_taborder("3");
            this.div_branch.addChild(obj.name, obj);

            obj = new Static("lb_branch_name","32.19%","11.04%","7.81%","4.48%",null,null,null,null,null,null,this.div_branch.form);
            obj.set_taborder("4");
            obj.set_text("지점명");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.div_branch.addChild(obj.name, obj);

            obj = new Edit("edit_branch_name_search","38.05%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_branch.form);
            obj.set_taborder("5");
            this.div_branch.addChild(obj.name, obj);

            obj = new Static("lb_branch_manager","58.75%","11.04%","7.81%","4.48%",null,null,null,null,null,null,this.div_branch.form);
            obj.set_taborder("6");
            obj.set_text("지점장명");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.div_branch.addChild(obj.name, obj);

            obj = new Edit("edit_branch_manager_search","64.61%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_branch.form);
            obj.set_taborder("7");
            this.div_branch.addChild(obj.name, obj);

            obj = new Button("btn_branch_search","86.41%","10.75%","7.81%","5.07%",null,null,null,null,null,null,this.div_branch.form);
            obj.set_taborder("8");
            obj.set_text("검색");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_branch.addChild(obj.name, obj);

            obj = new Grid("grid_branchList","2.03%","20.15%","96.09%","71.64%",null,null,null,null,null,null,this.div_branch.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_branchList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"175\"/><Column size=\"175\"/><Column size=\"150\"/><Column size=\"280\"/><Column size=\"175\"/><Column size=\"193\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"지점코드\"/><Cell col=\"2\" text=\"지점명\"/><Cell col=\"3\" text=\"지점장\"/><Cell col=\"4\" text=\"지점주소\"/><Cell col=\"5\" text=\"전화번호\"/><Cell col=\"6\" text=\"사업자등록번호\"/></Band><Band id=\"body\"><Cell text=\"bind:check\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:BRANCH_NO\"/><Cell col=\"2\" text=\"bind:BRANCH_NAME\"/><Cell col=\"3\" text=\"bind:BRANCH_MANAGER\"/><Cell col=\"4\" text=\"bind:BRANCH_ADDR\"/><Cell col=\"5\" text=\"bind:BRANCH_NUM\"/><Cell col=\"6\" text=\"bind:BRANCH_BLN\"/></Band></Format></Formats>");
            this.div_branch.addChild(obj.name, obj);

            obj = new Button("btn_branch_del","2.03%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_background("#242D40");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_branch_add","90.31%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("지점등록");
            obj.set_background("#8497B0");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.addChild(obj.name, obj);

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
        this.registerScript("Form_branch.xfdl", function() {
        /* 체크박스 설정 시작 */
        this.div_branch_grid_branchList_onheadclick = function(obj,e)
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
            for(var i=0; i< this.ds_branchList.getRowCount(); i++)
            {
                this.ds_branchList.setColumn(i, strColID, this.gv_isCheckAll);
            }
            //check to head column
            obj.setCellProperty("Head", 0, "text", this.gv_isCheckAll);

            //Dataset의 이벤트를 켬
            //this.Dataset00.enableevent = true;
        };
        /* 체크박스 설정   끝 */

        this.btn_branch_add_onclick = function(obj,e)
        {
        	alert("지점등록");
        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_branch_create"
        	                  , 500//x좌표
        					  , 100//y좌표
        					  , 772//가로
        					  , 500//높이
        					  , null
        					  , null
        					  , "FrameBase::Form_branch_create.xfdl");
        	/*param1 : id, param2 : 값 */
            this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        	this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        	this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        	objChildFrame.show();
        };

        this.div_branch_grid_branchList_oncelldblclick = function(obj,e)
        {
        	alert("지점 상세보기");
        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_branch_detail"
        	                  , 500//x좌표
        					  , 100//y좌표
        					  , 772//가로
        					  , 500//높이
        					  , null
        					  , null
        					  , "FrameBase::Form_branch_detail.xfdl");
        	/*param1 : id, param2 : 값 */
            this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        	this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        	this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        	objChildFrame.show();
        };

        this.div_branch_btn_branch_search_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_branch.form.edit_branch_no_search.addEventHandler("onchanged",this.Common_onchanged,this);
            this.div_branch.form.btn_branch_search.addEventHandler("onclick",this.div_branch_btn_branch_search_onclick,this);
            this.div_branch.form.grid_branchList.addEventHandler("onheadclick",this.div_branch_grid_branchList_onheadclick,this);
            this.div_branch.form.grid_branchList.addEventHandler("oncelldblclick",this.div_branch_grid_branchList_oncelldblclick,this);
            this.btn_branch_del.addEventHandler("onclick",this.btn_client_delete_onclick,this);
            this.btn_branch_add.addEventHandler("onclick",this.btn_branch_add_onclick,this);
        };

        this.loadIncludeScript("Form_branch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
