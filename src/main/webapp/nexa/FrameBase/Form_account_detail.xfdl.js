(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_account_detail");
            this.set_titletext("ACCOUNT");
            if (Form == this.constructor)
            {
                this._setFormPosition(770,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cropsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CROPS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_S\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_M\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CROPS_NO\">A001</Col><Col id=\"CROPS_S\"/><Col id=\"CROPS_M\">고구마</Col></Row><Row><Col id=\"CROPS_NO\">B001</Col><Col id=\"CROPS_S\"/><Col id=\"CROPS_M\">감자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_account_typeList", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ACCOUNT_TYPE\">매출</Col><Col id=\"CODE\">0</Col></Row><Row><Col id=\"ACCOUNT_TYPE\">매입</Col><Col id=\"CODE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lb_account_detail","0","0","770","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("거래처 상세보기");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_detail_center","1.3%","8.06%","97.4%","83.23%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#EDEFF3");
            obj.set_border("0px none transparent");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_no","4.03%","21.45%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("거래처코드");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_no","18.44%","21.13%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_name","55.06%","21.45%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("거래처명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_name","69.48%","21.13%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_Bnum","4.03%","30.16%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("사업자등록번호");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_Bnum","18.44%","29.84%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_rep","55.06%","30.16%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("대표자");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_rep","69.48%","29.84%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_num","4.03%","38.87%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("전화번호");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_num","18.44%","38.55%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("lb_crops_no","55.06%","38.87%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("농산물 코드");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_crops_no","69.48%","38.55%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_crops_no_search","92.99%","38.87%","3.9%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_border("0px none transparent");
            obj.set_background("transparent");
            obj.set_icon("url(\'imagerc::search.png\')");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("lb_address","4.03%","47.26%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("주소");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_zipcode","18.44%","47.26%","7.66%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("우편번호");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_zipcode","28.7%","46.94%","12.99%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_visible("true");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_zipcode_search","42.34%","46.94%","7.79%","5.48%",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("찾기");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_address","18.44%","55.16%","59.09%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_bank","4.03%","398","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("은행명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_bank","18.44%","63.87%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_accholder","55.06%","64.19%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("예금주명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_accholder","69.48%","63.87%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_ano","4.03%","452","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("계좌번호");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_ano","18.44%","72.58%","38.96%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_name","4.03%","506","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("담당자");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_name","18.44%","81.29%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_email","55.06%","81.61%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("담당자 Email");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_email","69.48%","81.29%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_account_update","85.71%","92.9%","12.99%","5.48%",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("수정");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popdiv_crops_no_search","103.51%","43.55%","51.95%","64.52%",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("lb_crops_no_search","0%","0%","100%","10%",null,null,null,null,null,null,this.popdiv_crops_no_search.form);
            obj.set_taborder("0");
            obj.set_text("농산물 코드 조회");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.popdiv_crops_no_search.addChild(obj.name, obj);

            obj = new Button("btn_crops_no_search_close","91.5%","1.25%","7.5%","7.5%",null,null,null,null,null,null,this.popdiv_crops_no_search.form);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_border("0px none transparent");
            obj.set_icon("url(\'imagerc::close.png\')");
            this.popdiv_crops_no_search.addChild(obj.name, obj);

            obj = new Static("lb_crops_no_search_center","2.5%","14.5%","95%","70%",null,null,null,null,null,null,this.popdiv_crops_no_search.form);
            obj.set_taborder("2");
            obj.set_background("#EDEFF3");
            obj.set_border("0px none transparent");
            obj.set_text("");
            this.popdiv_crops_no_search.addChild(obj.name, obj);

            obj = new Edit("edit_crops_name_search","31%","19.5%","45%","8.75%",null,null,null,null,null,null,this.popdiv_crops_no_search.form);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.popdiv_crops_no_search.addChild(obj.name, obj);

            obj = new Static("lb_crops_name","5.75%","20%","20%","7.5%",null,null,null,null,null,null,this.popdiv_crops_no_search.form);
            obj.set_taborder("4");
            obj.set_text("농산물명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.popdiv_crops_no_search.addChild(obj.name, obj);

            obj = new Button("btn_crops_name_search","80%","19.5%","15%","8.5%",null,null,null,null,null,null,this.popdiv_crops_no_search.form);
            obj.set_taborder("5");
            obj.set_text("검색");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.popdiv_crops_no_search.addChild(obj.name, obj);

            obj = new Button("btn_crops_no_add","72.5%","88.25%","25%","8.5%",null,null,null,null,null,null,this.popdiv_crops_no_search.form);
            obj.set_taborder("6");
            obj.set_text("등록");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.popdiv_crops_no_search.addChild(obj.name, obj);

            obj = new Grid("grid_cropsList","5.75%","31.25%","89.25%","51.25%",null,null,null,null,null,null,this.popdiv_crops_no_search.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_cropsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"127\"/><Column size=\"128\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"농산물코드\"/><Cell col=\"1\" text=\"농산물분류\"/><Cell col=\"2\" text=\"농산물명\"/></Band><Band id=\"body\"><Cell text=\"bind:CROPS_NO\"/><Cell col=\"1\" text=\"bind:CROPS_S\"/><Cell col=\"2\" text=\"bind:CROPS_M\"/></Band></Format></Formats>");
            this.popdiv_crops_no_search.addChild(obj.name, obj);

            obj = new Static("lb_account_type","4.03%","12.9%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("구분");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_account_type","18.44%","12.58%","12.99%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

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
        this.registerScript("Form_account_detail.xfdl", function() {

        this.btn_zipcode_search_onclick = function(obj,e)
        {
        	alert("우편번호 조회");
        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_zipcode"
        	                  , 200//x좌표
        					  , 100//y좌표
        					  , 402//가로
        					  , 420//높이
        					  , null
        					  , null
        					  , "FrameBase::Form_zipcode.xfdl");
        	/*param1 : id, param2 : 값 */
            this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        	this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        	this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        	objChildFrame.show();
        };

        this.btn_crops_no_search_onclick = function(obj,e)
        {
        	this.popdiv_crops_no_search.trackPopup(700,300,400,400);
        };

        this.popdiv_crops_no_search_btn_crops_no_search_close_onclick = function(obj,e)
        {
        	this.popdiv_crops_no_search.closePopup("Close");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_crops_no_search.addEventHandler("onclick",this.btn_crops_no_search_onclick,this);
            this.btn_zipcode_search.addEventHandler("onclick",this.btn_zipcode_search_onclick,this);
            this.popdiv_crops_no_search.form.btn_crops_no_search_close.addEventHandler("onclick",this.popdiv_crops_no_search_btn_crops_no_search_close_onclick,this);
        };

        this.loadIncludeScript("Form_account_detail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
