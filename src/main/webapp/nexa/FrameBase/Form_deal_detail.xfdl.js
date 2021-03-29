(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_deal_detail");
            this.set_titletext("DEAL");
            if (Form == this.constructor)
            {
                this._setFormPosition(770,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_accountList", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_REP\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NUM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ACCOUNT_NAME\">야채가게</Col><Col id=\"ACCOUNT_REP\">김당근</Col><Col id=\"ACCOUNT_NUM\">000-0000-0000</Col></Row><Row><Col id=\"ACCOUNT_NAME\">농민마트</Col><Col id=\"ACCOUNT_REP\">이버섯</Col><Col id=\"ACCOUNT_NUM\">111-1111-1111</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deal_typeList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEAL_TYPE\">매출거래</Col><Col id=\"CODE\">0</Col></Row><Row><Col id=\"DEAL_TYPE\">매입거래</Col><Col id=\"CODE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_crops_detailList", this);
            obj._setContents("<ColumnInfo><Column id=\"DEAL_CK\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_M\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"CROPS_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_UNITPRICE\" type=\"INT\" size=\"256\"/><Column id=\"DEAL_TOTAL\" type=\"STRING\" size=\"256\" prop=\"SUM\"/></ColumnInfo><Rows><Row><Col id=\"CROPS_M\">고구마</Col><Col id=\"DEAL_AMOUNT\">1000</Col><Col id=\"CROPS_UNIT\">KG</Col><Col id=\"DEAL_TOTAL\"/><Col id=\"DEAL_UNITPRICE\">4400</Col></Row><Row><Col id=\"CROPS_M\">감자</Col><Col id=\"DEAL_AMOUNT\">3000</Col><Col id=\"CROPS_UNIT\">KG</Col><Col id=\"DEAL_UNITPRICE\">1600</Col></Row><Row><Col id=\"CROPS_UNIT\">KG</Col><Col id=\"CROPS_M\">콩</Col><Col id=\"DEAL_AMOUNT\">2000</Col><Col id=\"DEAL_UNITPRICE\">1600</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lb_deal_detail","0%","0%","100%","6.45%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("거래내역 상세보기");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_deal_detail_center","1.3%","8.06%","97.4%","83.23%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#EDEFF3");
            obj.set_border("0px none transparent");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("lb_deal_date","4.03%","12.9%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("거래일");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_deal_date","18.44%","12.58%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_name","4.03%","21.45%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("거래처명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_name","18.44%","21.13%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_account_name_search","41.95%","21.45%","3.9%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_icon("url(\'imagerc::search.png\')");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_rep","4.03%","30%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("대표자");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_rep","18.44%","29.68%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_num","55.06%","30%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("전화번호");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_num","69.48%","29.68%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_crops_add","80.39%","37.9%","7.79%","5.48%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("품목추가");
            obj.set_background("#8497B0");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_crops_del","88.31%","37.9%","7.79%","5.48%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("품목삭제");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_crops_detailList","4.03%","43.55%","92.21%","35.97%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("ds_crops_detailList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"168\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DEAL_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"농산물명\"/><Cell col=\"2\" text=\"수량\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"단가\"/><Cell col=\"5\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:DEAL_CK\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:CROPS_M\"/><Cell col=\"2\" text=\"bind:DEAL_AMOUNT\"/><Cell col=\"3\" text=\"bind:CROPS_UNIT\"/><Cell col=\"4\" text=\"bind:DEAL_UNITPRICE\"/><Cell col=\"5\" text=\"bind:DEAL_TOTAL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_name","4.03%","83.23%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("담당자");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_name","18.44%","82.9%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deal_detail_update","85.71%","92.9%","12.99%","5.48%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("수정");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popdiv_account_name_search","103.51%","43.55%","51.95%","64.52%",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_search","0%","0%","100%","10%",null,null,null,null,null,null,this.popdiv_account_name_search.form);
            obj.set_taborder("0");
            obj.set_text("거래처 조회");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.popdiv_account_name_search.addChild(obj.name, obj);

            obj = new Button("btn_account_search_close","91.50%","1.25%","7.5%","7.5%",null,null,null,null,null,null,this.popdiv_account_name_search.form);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_border("0px none transparent");
            obj.set_icon("url(\'imagerc::close.png\')");
            this.popdiv_account_name_search.addChild(obj.name, obj);

            obj = new Static("lb_account_search_center","2.5%","14.5%","95%","70%",null,null,null,null,null,null,this.popdiv_account_name_search.form);
            obj.set_taborder("2");
            obj.set_background("#EDEFF3");
            obj.set_border("0px none transparent");
            obj.set_text("");
            this.popdiv_account_name_search.addChild(obj.name, obj);

            obj = new Edit("edit_account_name_search","31%","19.5%","45%","8.75%",null,null,null,null,null,null,this.popdiv_account_name_search.form);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.popdiv_account_name_search.addChild(obj.name, obj);

            obj = new Static("lb_account_name","5.75%","20%","20%","7.5%",null,null,null,null,null,null,this.popdiv_account_name_search.form);
            obj.set_taborder("4");
            obj.set_text("거래처명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.popdiv_account_name_search.addChild(obj.name, obj);

            obj = new Button("btn_account_name_search","80%","19.5%","15%","8.5%",null,null,null,null,null,null,this.popdiv_account_name_search.form);
            obj.set_taborder("5");
            obj.set_text("검색");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.popdiv_account_name_search.addChild(obj.name, obj);

            obj = new Button("btn_account_add","72.5%","88.25%","25%","8.5%",null,null,null,null,null,null,this.popdiv_account_name_search.form);
            obj.set_taborder("6");
            obj.set_text("등록");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.popdiv_account_name_search.addChild(obj.name, obj);

            obj = new Grid("grid_accountList","5.75%","31.25%","89.25%","51.25%",null,null,null,null,null,null,this.popdiv_account_name_search.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_accountList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"100\"/><Column size=\"125\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"거래처명\"/><Cell col=\"1\" text=\"대표자\"/><Cell col=\"2\" text=\"전화번호\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_NAME\"/><Cell col=\"1\" text=\"bind:ACCOUNT_REP\"/><Cell col=\"2\" text=\"bind:ACCOUNT_NUM\"/></Band></Format></Formats>");
            this.popdiv_account_name_search.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",770,620,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_deal_detail.xfdl", function() {
        /* 거래처명 찾기 버튼 이벤트 시작 */
        this.btn_account_name_search_onclick = function(obj,e)
        {
        	this.popdiv_account_name_search.trackPopup(700,250,400,400);
        };
        /* 거래처명 찾기 버튼 이벤트   끝 */

        /* popupdiv 닫기 버튼 이벤트 시작 */
        this.popdiv_account_name_search_btn_account_search_close_onclick = function(obj,e)
        {
        	this.popdiv_account_name_search.closePopup("Close");
        };
        /* popupdiv 닫기 버튼 이벤트   끝 */

        /* 품목추가, 삭제 버튼 이벤트 시작 */
        this.btn_crops_add_onclick = function(obj,e)
        {
        	this.ds_crops_detailList.addRow();
        };

        this.btn_crops_del_onclick = function(obj,e)
        {
        	this.ds_crops_detailList.deleteRow(this.ds_crops_detailList.rowposition);//rowposition : 선택한 위치의 row를 삭제
        };
        /* 품목추가, 삭제 버튼 이벤트   끝 */

        /* 체크박스 설정 시작 */
        this.grid_crops_detailList_onheadclick = function(obj,e)
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
            for(var i=0; i< this.ds_crops_detailList.getRowCount(); i++)
            {
                this.ds_crops_detailList.setColumn(i, strColID, this.gv_isCheckAll);
            }
            //check to head column
            obj.setCellProperty("Head", 0, "text", this.gv_isCheckAll);

            //Dataset의 이벤트를 켬
            //this.Dataset00.enableevent = true;
        };
        /* 체크박스 설정   끝 */


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_account_name_search.addEventHandler("onclick",this.btn_account_name_search_onclick,this);
            this.btn_crops_add.addEventHandler("onclick",this.btn_crops_add_onclick,this);
            this.btn_crops_del.addEventHandler("onclick",this.btn_crops_del_onclick,this);
            this.grid_crops_detailList.addEventHandler("onheadclick",this.grid_crops_detailList_onheadclick,this);
            this.popdiv_account_name_search.form.btn_account_search_close.addEventHandler("onclick",this.popdiv_account_name_search_btn_account_search_close_onclick,this);
        };

        this.loadIncludeScript("Form_deal_detail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
