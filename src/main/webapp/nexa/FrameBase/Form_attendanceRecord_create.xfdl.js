(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_attendanceRecord_create");
            this.set_titletext("ATTENDANCERECORD");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_vacation_typeList", this);
            obj._setContents("<ColumnInfo><Column id=\"num\" type=\"STRING\" size=\"256\"/><Column id=\"휴가사용여부\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"num\">0</Col><Col id=\"휴가사용여부\">사용</Col></Row><Row><Col id=\"num\">1</Col><Col id=\"휴가사용여부\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_work_typeList", this);
            obj._setContents("<ColumnInfo><Column id=\"num\" type=\"STRING\" size=\"256\"/><Column id=\"유무급\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"num\">0</Col><Col id=\"유무급\">유급</Col></Row><Row><Col id=\"num\">1</Col><Col id=\"유무급\">무급</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lb_attendanceRecord_create_center","2.5%","12.5%","95%","73.25%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#EDEFF3");
            obj.set_border("0px none transparent");
            this.addChild(obj.name, obj);

            obj = new Static("lb_attendanceRecord_create","0%","0%","100%","10%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("근태항목 등록");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_attendanceRecord_no","8.75%","17.25%","20%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("근태코드");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_attendanceRecord_no","30.5%","16.75%","45%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_attendanceRecord_no_check","77.5%","16.75%","15%","8.5%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("중복확인");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_attendanceRecord_name","8.75%","34.25%","25%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("근태명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_attendanceRecord_name","30.5%","34%","45%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_vacation_type","8.75%","51.25%","25%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("휴가여부");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_work_type","8.75%","68.25%","25%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("유/무급");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_vacation_type","30.5%","51.25%","37.5%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_vacation_typeList");
            obj.set_codecolumn("num");
            obj.set_datacolumn("휴가사용여부");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_work_type","30.5%","68.5%","37.5%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_work_typeList");
            obj.set_codecolumn("num");
            obj.set_datacolumn("유무급");
            this.addChild(obj.name, obj);

            obj = new Button("btn_attendanceRecord_create","72.5%","89%","25%","8.5%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("등록");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("Form_attendanceRecord_create.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
