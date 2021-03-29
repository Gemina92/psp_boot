(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_branch_create");
            this.set_titletext("BRANCH");
            if (Form == this.constructor)
            {
                this._setFormPosition(770,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("lb_branch_create","0%","0%","100%","8.33%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_text("지점 등록");
            this.addChild(obj.name, obj);

            obj = new Static("lb_branch_create_center","1.3%","10%","97.4%","78.75%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#edeff4");
            obj.set_color("black");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("lb_branch_no","4.55%","16.04%","12.99%","6.25%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("지점코드");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_branch_no","20.39%","15.63%","23.38%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_branch_name","4.55%","31.46%","12.99%","6.25%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("지점명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_branch_name","20.39%","31.04%","23.38%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_branch_Bnum","55.19%","31.46%","12.99%","6.25%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("사업자등록번호");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_branch_Bnum","71.04%","31.04%","23.38%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.getSetter("type").set("string");
            obj.getSetter("format").set("##########");
            obj.set_textDecoration("none");
            obj.set_visible("true");
            obj.getSetter("clipmode").set("includespace");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("lb_branch_manager","4.55%","46.88%","12.99%","6.25%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("지점장명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_branch_manager","20.39%","46.46%","23.38%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_branch_num","55.19%","46.88%","12.99%","6.25%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("전화번호");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_branch_num","71.04%","46.46%","23.38%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("lb_address","4.55%","62.29%","12.99%","6.25%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("주소");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_zipcode","20.39%","62.29%","7.66%","6.25%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("우편번호");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_zipcode_search","30.65%","61.88%","12.99%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_visible("true");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_zipcode_search","44.29%","61.88%","7.79%","7.08%",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("찾기");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_address","20.39%","72.29%","59.09%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_branch_create","85.71%","90.83%","12.99%","7.08%",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("등록");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.addChild(obj.name, obj);

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
        this.registerScript("Form_branch_create.xfdl", function() {

        this.btn_zipcode_search_onclick = function(obj,e)
        {
        	alert("우편번호 조회");
        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_zipcode"
        	                  , 200//x좌표
        					  , 20//y좌표
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_zipcode_search.addEventHandler("onclick",this.btn_zipcode_search_onclick,this);
        };

        this.loadIncludeScript("Form_branch_create.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
