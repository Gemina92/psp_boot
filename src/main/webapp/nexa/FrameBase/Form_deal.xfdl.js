(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_deal");
            this.set_titletext("DEAL");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_deal_typeList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEAL_TYPE\">매출거래</Col><Col id=\"CODE\">0</Col></Row><Row><Col id=\"DEAL_TYPE\">매입거래</Col><Col id=\"CODE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_deal","0%","0%","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("lb_deal","0%","0%","100%","5.22%",null,null,null,null,null,null,this.div_deal.form);
            obj.set_taborder("0");
            obj.set_text("거래내역 조회");
            obj.set_background("#333F50");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("#ffffff");
            obj.set_padding("0px 0px 0px 10px");
            this.div_deal.addChild(obj.name, obj);

            obj = new Static("lb_deal_search","2.03%","7.31%","96.09%","11.94%",null,null,null,null,null,null,this.div_deal.form);
            obj.set_taborder("1");
            obj.set_background("#D6DCE5");
            obj.set_color("black");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.div_deal.addChild(obj.name, obj);

            obj = new Static("lb_account_name","32.19%","11.04%","7.81%","4.48%",null,null,null,null,null,null,this.div_deal.form);
            obj.set_taborder("2");
            obj.set_text("거래처명");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.div_deal.addChild(obj.name, obj);

            obj = new Edit("edit_account_name_search","38.05%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_deal.form);
            obj.set_taborder("3");
            this.div_deal.addChild(obj.name, obj);

            obj = new Static("lb_deal_type","5.63%","11.04%","7.81%","4.48%",null,null,null,null,null,null,this.div_deal.form);
            obj.set_taborder("4");
            obj.set_text("거래구분");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.div_deal.addChild(obj.name, obj);

            obj = new Button("btn_deal_search","59.84%","10.75%","7.81%","5.07%",null,null,null,null,null,null,this.div_deal.form);
            obj.set_taborder("5");
            obj.set_text("검색");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_deal.addChild(obj.name, obj);

            obj = new Grid("grid_dealList","2.11%","20.15%","96.09%","71.64%",null,null,null,null,null,null,this.div_deal.form);
            obj.set_taborder("6");
            obj.set_binddataset("ds_dealList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"198\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEAL_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"거래일자\"/><Cell col=\"2\" text=\"거래구분\"/><Cell col=\"3\" text=\"거래처명\"/><Cell col=\"4\" text=\"대표자\"/><Cell col=\"5\" text=\"농산물명\"/><Cell col=\"6\" text=\"수량\"/><Cell col=\"7\" text=\"단위\"/><Cell col=\"8\" text=\"단가\"/><Cell col=\"9\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:DEAL_CK\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:DEAL_DATE\"/><Cell col=\"2\" text=\"bind:DEAL_TYPE\"/><Cell col=\"3\" text=\"bind:ACCOUNT_NAME\"/><Cell col=\"4\" text=\"bind:ACCOUNT_REP\"/><Cell col=\"5\" text=\"bind:CROPS_M\"/><Cell col=\"6\" text=\"bind:DEAL_AMOUNT\"/><Cell col=\"7\" text=\"bind:CROPS_UNIT\"/><Cell col=\"8\" text=\"bind:DEAL_UNITPRICE\"/><Cell col=\"9\" text=\"bind:DEAL_TOTAL\" expr=\"expr:DEAL_AMOUNT*DEAL_UNITPRICE\" displaytype=\"currency\"/></Band></Format></Formats>");
            this.div_deal.addChild(obj.name, obj);

            obj = new Combo("cb_deal_type","11.48%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_deal.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_deal_typeList");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DEAL_TYPE");
            this.div_deal.addChild(obj.name, obj);

            obj = new Button("btn_deal_delete","1.88%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_background("#242D40");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deal_add","90.31%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("거래등록");
            obj.set_background("#8497B0");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_account_type","73.13%","93.43%","15.63%","5.22%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid #242d40");
            obj.set_innerdataset("ds_deal_typeList");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DEAL_TYPE");
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
        this.registerScript("Form_deal.xfdl", function() {
        /* 체크박스 설정 시작 */
        this.div_deal_grid_dealList_onheadclick = function(obj,e)
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

        	/* grid에 바인딩된 dataset 가져오는 코드 */
        	var dataSet = this.div_deal.form.grid_dealList.getBindDataset();

            //check to body column
            for(var i=0; i< dataSet.getRowCount(); i++)
            {
               dataSet.setColumn(i, strColID, this.gv_isCheckAll);
            }
            //check to head column
            obj.setCellProperty("Head", 0, "text", this.gv_isCheckAll);

            //Dataset의 이벤트를 켬
            //this.Dataset00.enableevent = true;
        };
        /* 체크박스 설정   끝 */

        this.btn_deal_add_onclick = function(obj,e)
        {
        	if (this.cb_account_type.value == 0	)
        	{
         		alert("매출 거래 등록");
        		var objChildFrame = new ChildFrame();//ChildFrame생성
        		objChildFrame.init("popup_deal_sales_create"
        						, 500//x좌표
        						, 100//y좌표
        						, 772//가로
        						, 650//높이
        						, null
        						, null
        						, "FrameBase::Form_deal_sales_create.xfdl");
        		/*param1 : id, param2 : 값 */
        		this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        		this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        		this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        		objChildFrame.show();
        	}
        	else
        	{
         		alert("매입 거래 등록");
        		var objChildFrame = new ChildFrame();//ChildFrame생성
        		objChildFrame.init("popup_deal_purchase_create"
        						, 500//x좌표
        						, 100//y좌표
        						, 772//가로
        						, 650//높이
        						, null
        						, null
        						, "FrameBase::Form_deal_purchase_create.xfdl");
        		/*param1 : id, param2 : 값 */
        		this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        		this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        		this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        		objChildFrame.show();
        	}
        };

        this.div_deal_grid_dealList_oncelldblclick = function(obj,e)
        {
         		alert("거래내역 상세보기");
        		var objChildFrame = new ChildFrame();//ChildFrame생성
        		objChildFrame.init("popup_deal_detail"
        						, 500//x좌표
        						, 100//y좌표
        						, 772//가로
        						, 650//높이
        						, null
        						, null
        						, "FrameBase::Form_deal_detail.xfdl");
        		/*param1 : id, param2 : 값 */
        		this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        		this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        		this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        		objChildFrame.show();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_deal.form.grid_dealList.addEventHandler("onheadclick",this.div_deal_grid_dealList_onheadclick,this);
            this.div_deal.form.grid_dealList.addEventHandler("oncelldblclick",this.div_deal_grid_dealList_oncelldblclick,this);
            this.btn_deal_delete.addEventHandler("onclick",this.btn_client_delete_onclick,this);
            this.btn_deal_add.addEventHandler("onclick",this.btn_deal_add_onclick,this);
            this.cb_account_type.addEventHandler("onitemclick",this.cb_account_type_onitemclick,this);
        };

        this.loadIncludeScript("Form_deal.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
