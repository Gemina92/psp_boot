(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_sal_create");
            this.set_titletext("SAL");
            if (Form == this.constructor)
            {
                this._setFormPosition(770,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_salList", this);
            obj._setContents("<ColumnInfo><Column id=\"급여코드\" type=\"STRING\" size=\"256\"/><Column id=\"급여항목\" type=\"STRING\" size=\"256\"/><Column id=\"금액\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"급여항목\">기본급</Col><Col id=\"급여코드\">C100</Col><Col id=\"금액\">0</Col></Row><Row><Col id=\"급여항목\">식대</Col><Col id=\"급여코드\">C101</Col><Col id=\"금액\">0</Col></Row><Row><Col id=\"급여항목\">상여</Col><Col id=\"급여코드\">C102</Col><Col id=\"금액\">0</Col></Row><Row><Col id=\"급여항목\">월차수당</Col><Col id=\"급여코드\">C103</Col><Col id=\"금액\">0</Col></Row><Row><Col id=\"급여항목\">기타수당</Col><Col id=\"급여코드\">C104</Col><Col id=\"금액\">0</Col></Row><Row><Col id=\"급여항목\">자가운전 보조금</Col><Col id=\"급여코드\">C105</Col><Col id=\"금액\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_taxList", this);
            obj._setContents("<ColumnInfo><Column id=\"원천징수 코드\" type=\"STRING\" size=\"256\"/><Column id=\"원천징수 항목\" type=\"STRING\" size=\"256\"/><Column id=\"금액\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"원천징수 항목\">소득세</Col><Col id=\"원천징수 코드\">D100</Col><Col id=\"금액\">0</Col></Row><Row><Col id=\"원천징수 항목\">주민세</Col><Col id=\"원천징수 코드\">D101</Col><Col id=\"금액\">0</Col></Row><Row><Col id=\"원천징수 항목\">국민연금</Col><Col id=\"원천징수 코드\">D102</Col><Col id=\"금액\">0</Col></Row><Row><Col id=\"원천징수 항목\">건강보험</Col><Col id=\"원천징수 코드\">D103</Col><Col id=\"금액\">0</Col></Row><Row><Col id=\"원천징수 항목\">장기요양보험</Col><Col id=\"원천징수 코드\">D104</Col><Col id=\"금액\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lb_sal_create","0%","0%","100%","8.33%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("급여 등록");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_sal_date_bg","1.3%","10%","97.4%","14.58%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#D6DCE5");
            obj.set_color("black");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("lb_sal_date","6.75%","14.17%","7.79%","6.25%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("적용일");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_sal_date","16.49%","13.75%","25.97%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_type("normal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sal_create","85.71%","90.83%","12.99%","7.08%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("등록");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_salList","1.3%","39.58%","48.05%","48.96%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_salList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"118\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"급여코드\"/><Cell col=\"1\" text=\"급여항목\"/><Cell col=\"2\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:급여코드\"/><Cell col=\"1\" text=\"bind:급여항목\"/><Cell col=\"2\" text=\"bind:금액\" displaytype=\"currency\" edittype=\"mask\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"총계\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&quot;금액&quot;)\" displaytype=\"currency\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_taxList","50.65%","39.58%","48.05%","48.96%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_taxList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"112\"/><Column size=\"114\"/><Column size=\"142\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"원천징수 코드\"/><Cell col=\"1\" text=\"원천징수 항목\"/><Cell col=\"2\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:원천징수 코드\"/><Cell col=\"1\" text=\"bind:원천징수 항목\"/><Cell col=\"2\" text=\"bind:금액\" displaytype=\"currency\" edittype=\"mask\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"총계\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&quot;금액&quot;)\" displaytype=\"currency\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("lb_dept","1.95%","28.13%","7.79%","6.25%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("부서");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("lb_rank","35.32%","28.13%","7.79%","6.25%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("직급");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp_name","67.53%","28.13%","7.79%","6.25%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("사원명");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_dept","7.79%","27.71%","23.38%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("1px solid #242d40");
            obj.set_innerdataset("gb_deptList");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_codecolumn("DEPT_NO");
            obj.set_enable("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_rank","41.56%","27.71%","23.38%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_border("1px solid #242d40");
            obj.set_innerdataset("gb_rankList");
            obj.set_datacolumn("RANK_NAME");
            obj.set_codecolumn("RANK_NO");
            obj.set_enable("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_emp_name","75.32%","27.71%","23.38%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_border("1px solid #242d40");
            obj.set_enable("false");
            obj.set_innerdataset("gb_empList");
            obj.set_datacolumn("EMP_NAME");
            obj.set_codecolumn("EMP_NO");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
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
        this.registerScript("Form_sal_create.xfdl", function() {

        this.btn_sal_create_onclick = function(obj,e)
        {
        	//alert(this.cal_sal_date.value); //날짜
        	//alert("기본급은 : " + this.ds_salList.getColumn(0,2)); //기본급 항목

        	var p_salaryDate = this.cal_sal_date.value;
        	var p_empNo = this.cb_emp_name.value;

        	var p_c100 = this.ds_salList.getColumn(0,2);
        	var p_c101 = this.ds_salList.getColumn(1,2);
        	var p_c102 = this.ds_salList.getColumn(2,2);
        	var p_c103 = this.ds_salList.getColumn(3,2);
        	var p_c104 = this.ds_salList.getColumn(4,2);
        	var p_c105 = this.ds_salList.getColumn(5,2);

        	var p_d100 = this.ds_taxList.getColumn(0,2);
        	var p_d101 = this.ds_taxList.getColumn(1,2);
        	var p_d102 = this.ds_taxList.getColumn(2,2);
        	var p_d103 = this.ds_taxList.getColumn(3,2);
        	var p_d104 = this.ds_taxList.getColumn(4,2);

        	this.transaction("salaryInsert" ,"SvcURL::hr/salaryInsert.psp?p_salaryDate="+p_salaryDate
        	+"&p_empNo="+p_empNo

        	+"&p_c100="+p_c100
        	+"&p_c101="+p_c101
        	+"&p_c102="+p_c102
        	+"&p_c103="+p_c103
        	+"&p_c104="+p_c104
        	+"&p_c105="+p_c105

        	+"&p_d100="+p_d100
        	+"&p_d101="+p_d101
        	+"&p_d102="+p_d102
        	+"&p_d103="+p_d103
        	+"&p_d104="+p_d104
        	,"in_salaryList=ds_salaryList" ,"ds_salaryList=out_salaryList" ,"" ,"fn_callback");
        };

        this.Form_sal_create_onload = function(obj,e)
        {
        	this.transaction("deptSelect" ,"SvcURL::hr/deptSelect.psp" ,"in_deptList=gb_deptList" ,"gb_deptList=out_deptList" ,"" ,"fn_callback");
        };

        // 비동기 통신 결과를 받을 콜백 함수 지정
        this.fn_callback = function(svcID, errCD, errMSG) {
        	//alert("fn_callback호출 성공"+svcID+","+errCD+","+errMSG);
        	if(errCD < 0){
        		this.alert(errMSG);
        		return;
        	}
        	if(svcID == "salaryInsert"){
        		this.alert("등록 되었습니다.");
        	}
        }

        this.cb_dept_onitemchanged = function(obj,e)
        {
        	//onitemclick으로 하면 안 됨.
        	//onitemchanged로 아이템값이 변경된 후의 값을 가져와야 함.
        	this.cb_rank.set_enable(true);
        	var p_deptNo = this.cb_dept.value;
        	//alert("p_deptNo : " + p_deptNo);
        	this.transaction("rankSelect" ,"SvcURL::hr/rankSelect.psp?p_deptNo="+p_deptNo ,"in_rankList=gb_rankList" ,"gb_rankList=out_rankList" ,"" ,"fn_callback");
        };

        this.cb_rank_onitemchanged = function(obj,e)
        {
        	this.cb_emp_name.set_enable(true);

        	var p_deptNo = this.cb_dept.value;
        	var p_rankNo = this.cb_rank.value;
        	//alert("p_deptNo : " + p_deptNo);
        	//alert("p_rankNo : " + p_rankNo);
        	this.transaction("empSelect" ,"SvcURL::hr/empSelect.psp?p_rankNo="+p_rankNo+"&p_deptNo="+p_deptNo ,"in_empList=gb_empList" ,"gb_empList=out_empList" ,"" ,"fn_callback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_sal_create_onload,this);
            this.btn_sal_create.addEventHandler("onclick",this.btn_sal_create_onclick,this);
            this.cb_dept.addEventHandler("onitemchanged",this.cb_dept_onitemchanged,this);
            this.cb_rank.addEventHandler("onitemchanged",this.cb_rank_onitemchanged,this);
        };

        this.loadIncludeScript("Form_sal_create.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
