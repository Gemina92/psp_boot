(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_stock");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_stock","0%","0%","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("lb_stock","0%","0%","100%","5.22%",null,null,null,null,null,null,this.div_stock.form);
            obj.set_taborder("0");
            obj.set_background("#333F50");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("#ffffff");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_text("재고현황");
            this.div_stock.addChild(obj.name, obj);

            obj = new Static("lb_stock_search","2.03%","7.31%","96.09%","11.94%",null,null,null,null,null,null,this.div_stock.form);
            obj.set_taborder("1");
            obj.set_background("#D6DCE5");
            obj.set_color("black");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.div_stock.addChild(obj.name, obj);

            obj = new Static("lb_crops_name","62.19%","11.19%","7.81%","4.48%",null,null,null,null,null,null,this.div_stock.form);
            obj.set_taborder("6");
            obj.set_text("품목명");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.div_stock.addChild(obj.name, obj);

            obj = new Edit("edit_crops_name_search","68.13%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_stock.form);
            obj.set_taborder("7");
            this.div_stock.addChild(obj.name, obj);

            obj = new Button("btn_stock_search","86.41%","10.75%","7.81%","5.07%",null,null,null,null,null,null,this.div_stock.form);
            obj.set_taborder("8");
            obj.set_text("검색");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_stock.addChild(obj.name, obj);

            obj = new Calendar("cal_start_date","11.48%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_stock.form);
            obj.set_taborder("3");
            obj.set_type("normal");
            this.div_stock.addChild(obj.name, obj);

            obj = new Static("lb_stock_date","5.23%","11.04%","6.25%","4.48%",null,null,null,null,null,null,this.div_stock.form);
            obj.set_taborder("2");
            obj.set_text("일자");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.div_stock.addChild(obj.name, obj);

            obj = new Static("lb_date_center","27.89%","11.64%","1.72%","3.58%",null,null,null,null,null,null,this.div_stock.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_font("normal 700 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.div_stock.addChild(obj.name, obj);

            obj = new Calendar("cal_finish_date","30.39%","10.6%","15.63%","5.22%",null,null,null,null,null,null,this.div_stock.form);
            obj.set_taborder("5");
            obj.set_type("normal");
            this.div_stock.addChild(obj.name, obj);

            obj = new Grid("grid_stockList","2.03%","20.15%","96.09%","71.64%",null,null,null,null,null,null,this.div_stock.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_stockList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"160\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"206\"/><Column size=\"206\"/><Column size=\"206\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"STOCK_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"농산물코드\"/><Cell col=\"2\" text=\"농산물명\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"입고수량\"/><Cell col=\"5\" text=\"출고수량\"/><Cell col=\"6\" text=\"재고수량\"/></Band><Band id=\"body\"><Cell text=\"bind:STOCK_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CROPS_NO\"/><Cell col=\"2\" text=\"bind:CROPS_NAME\"/><Cell col=\"3\" text=\"bind:CROPS_UNIT\"/><Cell col=\"4\" text=\"bind:IN_AMOUNT\"/><Cell col=\"5\" text=\"bind:OUT_AMOUNT\"/><Cell col=\"6\" text=\"bind:STOCK_AMOUNT\" expr=\"expr:IN_AMOUNT-OUT_AMOUNT\"/></Band></Format></Formats>");
            this.div_stock.addChild(obj.name, obj);

            obj = new Button("btn_stock_del","2.03%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_background("#242D40");
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
        this.registerScript("Form_stock.xfdl", function() {
        /* 체크박스 설정 시작 */
        this.div_stock_grid_stockList_onheadclick = function(obj,e)
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
        	var dataSet = this.div_stock.form.grid_stockList.getBindDataset();

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

        this.div_stock_btn_stock_search_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_stock.form.btn_stock_search.addEventHandler("onclick",this.div_stock_btn_stock_search_onclick,this);
            this.div_stock.form.grid_stockList.addEventHandler("onheadclick",this.div_stock_grid_stockList_onheadclick,this);
            this.btn_stock_del.addEventHandler("onclick",this.btn_client_delete_onclick,this);
        };

        this.loadIncludeScript("Form_stock.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
