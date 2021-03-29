(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_account");
            this.set_titletext("ACCOUNT");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_accountList", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_CK\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_REPNUM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_REP\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_USE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ACCOUNT_CK\">0</Col><Col id=\"ACCOUNT_NAME\">야채가게</Col><Col id=\"ACCOUNT_TYPE\">매입</Col></Row><Row><Col id=\"ACCOUNT_CK\">0</Col><Col id=\"ACCOUNT_NAME\">농민마트</Col><Col id=\"ACCOUNT_TYPE\">매출</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_account_typeList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ACCOUNT_TYPE\">매출</Col><Col id=\"CODE\">0</Col></Row><Row><Col id=\"ACCOUNT_TYPE\">매입</Col><Col id=\"CODE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_account","0%","0%","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account","0%","0%","100%","5.22%",null,null,null,null,null,null,this.div_account.form);
            obj.set_taborder("0");
            obj.set_text("거래처 조회");
            obj.set_background("#333F50");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("#ffffff");
            obj.set_padding("0px 0px 0px 10px");
            this.div_account.addChild(obj.name, obj);

            obj = new Static("lb_account_search","2.03%","7.31%","96.09%","11.94%",null,null,null,null,null,null,this.div_account.form);
            obj.set_taborder("1");
            obj.set_background("#D6DCE5");
            obj.set_color("black");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.div_account.addChild(obj.name, obj);

            obj = new Static("lb_account_no","5.63%","11.04%","7.81%","4.48%",null,null,null,null,null,null,this.div_account.form);
            obj.set_taborder("2");
            obj.set_text("코드");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.div_account.addChild(obj.name, obj);

            obj = new Edit("edit_account_no_search","11.48%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_account.form);
            obj.set_taborder("3");
            this.div_account.addChild(obj.name, obj);

            obj = new Static("lb_account_name","32.19%","11.04%","7.81%","4.48%",null,null,null,null,null,null,this.div_account.form);
            obj.set_taborder("4");
            obj.set_text("거래처명");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.div_account.addChild(obj.name, obj);

            obj = new Edit("edit_account_name_search","38.05%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_account.form);
            obj.set_taborder("5");
            this.div_account.addChild(obj.name, obj);

            obj = new Static("lb_account_rep","58.75%","11.04%","7.81%","4.48%",null,null,null,null,null,null,this.div_account.form);
            obj.set_taborder("6");
            obj.set_text("대표자명");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.div_account.addChild(obj.name, obj);

            obj = new Edit("edit_account_rep_search","64.61%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_account.form);
            obj.set_taborder("7");
            this.div_account.addChild(obj.name, obj);

            obj = new Button("btn_account_search","86.41%","10.75%","7.81%","5.07%",null,null,null,null,null,null,this.div_account.form);
            obj.set_taborder("8");
            obj.set_text("검색");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_account.addChild(obj.name, obj);

            obj = new Grid("grid_accountList","2.03%","20.15%","96.09%","71.64%",null,null,null,null,null,null,this.div_account.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_accountList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"79\"/><Column size=\"130\"/><Column size=\"150\"/><Column size=\"125\"/><Column size=\"100\"/><Column size=\"125\"/><Column size=\"258\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ACCOUNT_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"코드\"/><Cell col=\"3\" text=\"거래처명\"/><Cell col=\"4\" text=\"사업자번호\"/><Cell col=\"5\" text=\"대표자\"/><Cell col=\"6\" text=\"전화번호\"/><Cell col=\"7\" text=\"주소\"/><Cell col=\"8\" text=\"담당자\"/><Cell col=\"9\" text=\"사용구분\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:ACCOUNT_TYPE\"/><Cell col=\"2\" text=\"bind:ACCOUNT_CODE\"/><Cell col=\"3\" text=\"bind:ACCOUNT_NAME\"/><Cell col=\"4\" text=\"bind:ACCOUNT_REPNUM\"/><Cell col=\"5\" text=\"bind:ACCOUNT_REP\"/><Cell col=\"6\" text=\"bind:ACCOUNT_NUM\"/><Cell col=\"7\" text=\"bind:ACCOUNT_ADDR\"/><Cell col=\"8\" text=\"bind:EMP_NAME\"/><Cell col=\"9\" text=\"bind:ACCOUNT_USE\"/></Band></Format></Formats>");
            this.div_account.addChild(obj.name, obj);

            obj = new Button("btn_account_del","2.03%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_background("#242D40");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_account_add","90.31%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("거래처등록");
            obj.set_background("#8497B0");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_account_type","73.13%","93.43%","15.63%","5.22%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid #242d40");
            obj.set_innerdataset("ds_account_typeList");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("ACCOUNT_TYPE");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_account.xfdl", function() {

        /* 체크박스 설정 시작 */
        this.div_account_grid_accountList_onheadclick = function(obj,e)
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
            for(var i=0; i< this.ds_accountList.getRowCount(); i++)
            {
                this.ds_accountList.setColumn(i, strColID, this.gv_isCheckAll);
            }
            //check to head column
            obj.setCellProperty("Head", 0, "text", this.gv_isCheckAll);

            //Dataset의 이벤트를 켬
            //this.Dataset00.enableevent = true;
        };
        /* 체크박스 설정   끝 */
        this.btn_account_add_onclick = function(obj,e)
        {
        	if(this.cb_account_type.value == 0){
        		alert("매출 거래처 등록");
        		var objChildFrame = new ChildFrame();//ChildFrame생성
        		objChildFrame.init("popup_account_sales_create"
        						, 500//x좌표
        						, 100//y좌표
        						, 772//가로
        						, 650//높이
        						, null
        						, null
        						, "FrameBase::Form_account_sales_create.xfdl");
        		/*param1 : id, param2 : 값 */
        		this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        		this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        		this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        		objChildFrame.show();
        	}
        	else{
        		alert("매입 거래처 등록");
        		var objChildFrame = new ChildFrame();//ChildFrame생성
        		objChildFrame.init("popup_account_purchase_create"
        						, 500//x좌표
        						, 100//y좌표
        						, 772//가로
        						, 650//높이
        						, null
        						, null
        						, "FrameBase::Form_account_purchase_create.xfdl");
        		/*param1 : id, param2 : 값 */
        		this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        		this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        		this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        		objChildFrame.show();
        	}

        };

        this.div_account_grid_accountList_oncelldblclick = function(obj,e)
        {
        		alert("거래처 상세보기");
        		var objChildFrame = new ChildFrame();//ChildFrame생성
        		objChildFrame.init("popup_account_detail"
        						, 500//x좌표
        						, 100//y좌표
        						, 772//가로
        						, 650//높이
        						, null
        						, null
        						, "FrameBase::Form_account_detail.xfdl");
        		/*param1 : id, param2 : 값 */
        		this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        		this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        		this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        		objChildFrame.show();
        };


        this.btn_account_del_onclick = function(obj,e)
        {
        	alert("삭제버튼 실행 이벤트");
        };

        this.div_account_btn_account_search_onclick = function(obj,e)
        {
        	alert("조회버튼 클릭");
        	this.transaction("accountSelect" ,"SvcURL::sales/accountSelect.psp" ,"in_accountList=ds_accountList" ,"ds_accountList=out_accountList" ,"거래처검색" ,"fn_callback");
        };

        // 비동기 통신 결과를 받을 콜백 함수 지정
        this.fn_callback = function(svcID, errCD, errMSG) {
        	alert("fn_callback호출 성공"+svcID+","+errCD+","+errMSG);
        	if(errCD < 0){
        		this.alert(errMSG);
        		return;
        	}
        	if(svcID == "accountSelect"){
        		//this.alert("accountSelect Success");
        	}
        }



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_account.form.edit_account_no_search.addEventHandler("onchanged",this.Common_onchanged,this);
            this.div_account.form.btn_account_search.addEventHandler("onclick",this.div_account_btn_account_search_onclick,this);
            this.div_account.form.grid_accountList.addEventHandler("onheadclick",this.div_account_grid_accountList_onheadclick,this);
            this.div_account.form.grid_accountList.addEventHandler("oncelldblclick",this.div_account_grid_accountList_oncelldblclick,this);
            this.btn_account_del.addEventHandler("onclick",this.btn_account_del_onclick,this);
            this.btn_account_add.addEventHandler("onclick",this.btn_account_add_onclick,this);
            this.cb_account_type.addEventHandler("onitemclick",this.cb_account_type_onitemclick,this);
        };

        this.loadIncludeScript("Form_account.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
