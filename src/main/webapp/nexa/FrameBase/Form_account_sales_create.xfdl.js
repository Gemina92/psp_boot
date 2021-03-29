(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_account_sales_create");
            this.set_titletext("ACCOUNT");
            if (Form == this.constructor)
            {
                this._setFormPosition(770,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("lb_account_sales_create","0%","0%","100%","6.45%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("매출 거래처 등록");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_sales_create_center","1.3%","8.06%","97.27%","83.23%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#EDEFF3");
            obj.set_border("0px none transparent");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_no","4.03%","12.9%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("거래처코드");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_no","18.44%","12.42%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_name","55.06%","12.9%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("거래처명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_name","69.48%","12.42%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_Bnum","4.03%","22.58%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("사업자등록번호");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_Bnum","18.44%","22.26%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_rep","55.06%","22.58%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("대표자");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_rep","69.48%","22.26%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_num","4.03%","32.42%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("전화번호");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_num","18.44%","32.1%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("lb_address","4.03%","42.26%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("주소");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_zipcode","18.44%","42.26%","7.66%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("우편번호");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_zipcode","28.7%","41.94%","12.99%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_visible("true");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_zipcode_search","42.34%","41.94%","7.79%","5.48%",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("찾기");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_address","18.44%","51.77%","59.09%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_bank","4.03%","61.94%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("은행명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_bank","18.44%","61.61%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_accholder","55.06%","61.94%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("예금주명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_accholder","69.48%","61.61%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_account_ano","4.03%","71.77%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("계좌번호");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_account_ano","18.44%","71.45%","38.96%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_name","4.03%","81.61%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("담당자");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_name","18.44%","81.29%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_email","55.06%","81.61%","12.99%","4.84%",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("담당자 Email");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_email","69.48%","81.29%","23.38%","5.65%",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_account_sales_create","85.71%","92.9%","12.99%","5.48%",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("등록");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
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
        this.registerScript("Form_account_sales_create.xfdl", function() {

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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_zipcode_search.addEventHandler("onclick",this.btn_zipcode_search_onclick,this);
        };

        this.loadIncludeScript("Form_account_sales_create.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
