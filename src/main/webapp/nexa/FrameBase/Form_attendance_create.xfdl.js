(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_attendance_create");
            this.set_titletext("ATTENDANCE");
            if (Form == this.constructor)
            {
                this._setFormPosition(770,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("lb_attendance_create","0%","0%","100%","10%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_text("근태 등록");
            this.addChild(obj.name, obj);

            obj = new Static("lb_attendance_create_center","1.3%","12%","97.4%","73.25%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#edeff4");
            obj.set_color("black");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("lb_dept","4.42%","17.5%","12.99%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("부서명");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_dept","15.84%","16.75%","23.38%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_no","4.42%","33.5%","12.99%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("사원번호");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_no","15.84%","32.75%","23.38%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_name","43.51%","33.5%","12.99%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("사원명");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_name","54.94%","32.75%","23.38%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("lb_attendance_code","4.42%","49.5%","12.99%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("근태항목");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Combo("combo_attendance_code","15.84%","48.75%","23.38%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("lb_date","4.42%","65.5%","12.99%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("기간");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_start_date","15.84%","64.75%","23.38%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_type("normal");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("lb_date_center","39.87%","66%","2.99%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("~");
            obj.set_font("normal 700 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_end_date","43.51%","65.25%","23.38%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_type("normal");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("lb_day","72.73%","65.5%","12.99%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("일수");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_day","84.16%","64.75%","12.99%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Button("btn_attendance_create","85.71%","89%","12.99%","8.5%",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("등록");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",770,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_attendance_create.xfdl", function() {
        /* 일자 구하기 이벤트 시작 */
        this.cal_end_date_onchanged = function(obj,e)
        {
        	var fromDate = new Date();//시작일
        	var toDate = new Date();//종료일
        	var calDate;//시작일-종료일간의 일수
        	var day = 1000*60*60*24;//하루를 밀리세컨드로 환산
        	//시작일에서 년|월|일 get
        	fromDate.setFullYear(this.cal_start_date.getYear());
        	fromDate.setMonth(this.cal_start_date.getMonth()-1);
        	fromDate.setDate(this.cal_start_date.getDay());
        	//종료일에서 년|월|일 get
        	toDate.setFullYear(this.cal_end_date.getYear());
        	toDate.setMonth(this.cal_end_date.getMonth()-1);
        	toDate.setDate(this.cal_end_date.getDay());
        	//시작일-종료일
        	calDate = fromDate.getTime() - toDate.getTime();
        	//eidt텍스트에 결과값 담기
        	this.edit_day.set_value(Math.abs(calDate/day));//abs-절대값 반환
        };
        /* 일자 구하기 이벤트   끝 */


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.lb_dept.addEventHandler("onclick",this.lb_dept_onclick,this);
            this.cal_end_date.addEventHandler("onchanged",this.cal_end_date_onchanged,this);
        };

        this.loadIncludeScript("Form_attendance_create.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
