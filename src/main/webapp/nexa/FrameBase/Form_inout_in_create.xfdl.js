(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_inout_in_create");
            this.set_titletext("INOUT");
            if (Form == this.constructor)
            {
                this._setFormPosition(770,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_crops_nameList", this);
            obj._setContents("<ColumnInfo><Column id=\"CROPS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_S\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_M\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CROPS_NO\">A001</Col><Col id=\"CROPS_S\"/><Col id=\"CROPS_M\">고구마</Col></Row><Row><Col id=\"CROPS_NO\">B001</Col><Col id=\"CROPS_S\"/><Col id=\"CROPS_M\">감자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_unitList", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"unit\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"unit\">g</Col></Row><Row><Col id=\"unit\">kg</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"unit\">box</Col><Col id=\"code\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_account_noList", this);
            obj._setContents("<ColumnInfo><Column id=\"ACCOUNT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lb_in_create","0%","0%","100%","8.33%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("입고 등록");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_in_create_center","1.3%","10%","97.4%","78.75%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#EDEFF3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_no","4.03%","15%","12.99%","6.25%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("거래처코드");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_no","17.27%","14.58%","23.38%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_account_no_search","41.17%","14.58%","3.9%","7.08%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            obj.set_icon("url(\'imagerc::search.png\')");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("lb_purchase_name","53.51%","15%","12.99%","6.25%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("거래처명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_purchase_name","67.92%","14.58%","23.38%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_crops_name","4.03%","33.13%","12.99%","6.25%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("농산물명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_crops_name_search","17.27%","32.71%","23.38%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_crops_name_search","41.17%","32.71%","3.9%","7.08%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            obj.set_background("transparent");
            obj.set_icon("url(\'imagerc::search.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("lb_in_date","53.51%","33.13%","12.99%","6.25%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("입고일자");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_in_date","67.92%","32.71%","23.38%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("lb_unit","53.51%","51.25%","12.99%","6.25%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("단위");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_unit","67.92%","50.83%","12.99%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_unitList");
            obj.set_codecolumn("code");
            obj.set_datacolumn("unit");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_name","4.03%","69.38%","12.99%","6.25%",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("담당자");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_name","17.27%","68.96%","23.38%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_email","53.51%","69.38%","12.99%","6.25%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("담당자 Email");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_email","67.92%","68.96%","23.38%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_amount","4.03%","51.25%","12.99%","6.25%",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("입고수량");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_amount","17.27%","50.83%","23.38%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_in_create","85.71%","90.83%","12.99%","7.08%",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("등록");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popdiv_crops_name_search","102.21%","91.67%","51.95%","83.33%",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("lb_crops_name_search","0%","0%","100%","10%",null,null,null,null,null,null,this.popdiv_crops_name_search.form);
            obj.set_taborder("0");
            obj.set_text("농산물명 조회");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.popdiv_crops_name_search.addChild(obj.name, obj);

            obj = new Button("btn_crops_name_search_close","91.50%","1.25%","7.5%","7.5%",null,null,null,null,null,null,this.popdiv_crops_name_search.form);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_border("0px none transparent");
            obj.set_icon("url(\'imagerc::close.png\')");
            this.popdiv_crops_name_search.addChild(obj.name, obj);

            obj = new Static("lb_crops_name_search_center","2.5%","14.5%","95%","70%",null,null,null,null,null,null,this.popdiv_crops_name_search.form);
            obj.set_taborder("2");
            obj.set_background("#EDEFF3");
            obj.set_border("0px none transparent");
            obj.set_text("");
            this.popdiv_crops_name_search.addChild(obj.name, obj);

            obj = new Edit("edit_crops_name_search","31%","19.5%","45%","8.75%",null,null,null,null,null,null,this.popdiv_crops_name_search.form);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.popdiv_crops_name_search.addChild(obj.name, obj);

            obj = new Static("lb_crops_name","5.75%","20.5%","20%","7.5%",null,null,null,null,null,null,this.popdiv_crops_name_search.form);
            obj.set_taborder("4");
            obj.set_text("농산물명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.popdiv_crops_name_search.addChild(obj.name, obj);

            obj = new Button("btn_crops_name_search","80%","20%","15%","8.5%",null,null,null,null,null,null,this.popdiv_crops_name_search.form);
            obj.set_taborder("5");
            obj.set_text("검색");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.popdiv_crops_name_search.addChild(obj.name, obj);

            obj = new Button("btn_crops_name_add","72.5%","88.25%","25%","8.5%",null,null,null,null,null,null,this.popdiv_crops_name_search.form);
            obj.set_taborder("6");
            obj.set_text("등록");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.popdiv_crops_name_search.addChild(obj.name, obj);

            obj = new Grid("grid_crops_nameList","5.75%","31.25%","89.25%","51.25%",null,null,null,null,null,null,this.popdiv_crops_name_search.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_crops_nameList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"127\"/><Column size=\"128\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"농산물코드\"/><Cell col=\"1\" text=\"농산물분류\"/><Cell col=\"2\" text=\"농산물명\"/></Band><Band id=\"body\"><Cell text=\"bind:CROPS_NO\"/><Cell col=\"1\" text=\"bind:CROPS_S\"/><Cell col=\"2\" text=\"bind:CROPS_M\"/></Band></Format></Formats>");
            this.popdiv_crops_name_search.addChild(obj.name, obj);

            obj = new PopupDiv("popdiv_account_no_search","102.6%","1.04%","51.95%","83.33%",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_text("");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_no_search","0%","0%","100%","10%",null,null,null,null,null,null,this.popdiv_account_no_search.form);
            obj.set_taborder("0");
            obj.set_text("거래처코드 조회");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.popdiv_account_no_search.addChild(obj.name, obj);

            obj = new Button("btn_account_no_search_close","91.50%","1.25%","7.5%","7.5%",null,null,null,null,null,null,this.popdiv_account_no_search.form);
            obj.set_taborder("1");
            obj.set_background("transparent");
            obj.set_border("0px none transparent");
            obj.set_icon("url(\'imagerc::close.png\')");
            this.popdiv_account_no_search.addChild(obj.name, obj);

            obj = new Static("lb_account_no_search_center","2.5%","14.5%","95%","70%",null,null,null,null,null,null,this.popdiv_account_no_search.form);
            obj.set_taborder("2");
            obj.set_background("#EDEFF3");
            obj.set_border("0px none transparent");
            obj.set_text("");
            this.popdiv_account_no_search.addChild(obj.name, obj);

            obj = new Static("lb_account_name","5.75%","20.5%","20%","7.5%",null,null,null,null,null,null,this.popdiv_account_no_search.form);
            obj.set_taborder("3");
            obj.set_text("거래처명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.popdiv_account_no_search.addChild(obj.name, obj);

            obj = new Edit("edit_account_name_search","31%","19.5%","45%","8.75%",null,null,null,null,null,null,this.popdiv_account_no_search.form);
            obj.set_taborder("4");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.popdiv_account_no_search.addChild(obj.name, obj);

            obj = new Button("btn_account_no_search","80%","19.5%","15%","8.5%",null,null,null,null,null,null,this.popdiv_account_no_search.form);
            obj.set_taborder("5");
            obj.set_text("검색");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.popdiv_account_no_search.addChild(obj.name, obj);

            obj = new Grid("grid_account_noList","5.75%","31.25%","89.25%","51.25%",null,null,null,null,null,null,this.popdiv_account_no_search.form);
            obj.set_taborder("6");
            obj.set_binddataset("ds_account_noList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"132\"/><Column size=\"223\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"거래처코드\"/><Cell col=\"1\" text=\"거래처명\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT_NO\"/><Cell col=\"1\" text=\"bind:ACCOUNT_NAME\"/></Band></Format></Formats>");
            this.popdiv_account_no_search.addChild(obj.name, obj);

            obj = new Button("btn_account_no_add","72.5%","88.25%","25%","8.5%",null,null,null,null,null,null,this.popdiv_account_no_search.form);
            obj.set_taborder("7");
            obj.set_text("등록");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.popdiv_account_no_search.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",770,480,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_inout_in_create.xfdl", function() {
        /* 거래처 코드 조회 popupdiv */
        this.btn_account_no_search_onclick = function(obj,e)
        {
        	this.popdiv_account_no_search.trackPopup(700,220,400,400);
        };

        this.popdiv_account_no_search_btn_account_no_search_close_onclick = function(obj,e)
        {
        	this.popdiv_account_no_search.closePopup("Close");
        };

        /* 농산물명 조회 popupdiv */
        this.btn_crops_name_search_onclick = function(obj,e)
        {
        	this.popdiv_crops_name_search.trackPopup(700,220,400,400);
        };

        this.popdiv_crops_name_search_btn_crops_name_search_close_onclick = function(obj,e)
        {
        	this.popdiv_crops_name_search.closePopup("Close");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_account_no_search.addEventHandler("onclick",this.btn_account_no_search_onclick,this);
            this.btn_crops_name_search.addEventHandler("onclick",this.btn_crops_name_search_onclick,this);
            this.popdiv_crops_name_search.form.btn_crops_name_search_close.addEventHandler("onclick",this.popdiv_crops_name_search_btn_crops_name_search_close_onclick,this);
            this.popdiv_account_no_search.form.btn_account_no_search_close.addEventHandler("onclick",this.popdiv_account_no_search_btn_account_no_search_close_onclick,this);
        };

        this.loadIncludeScript("Form_inout_in_create.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
