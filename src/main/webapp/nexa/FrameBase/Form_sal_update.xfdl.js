(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_sal_update");
            this.set_titletext("SAL");
            if (Form == this.constructor)
            {
                this._setFormPosition(770,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_salList", this);
            obj._setContents("<ColumnInfo><Column id=\"급여코드\" type=\"STRING\" size=\"256\"/><Column id=\"급여항목\" type=\"STRING\" size=\"256\"/><Column id=\"금액\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"급여항목\">기본급</Col><Col id=\"급여코드\">C100</Col></Row><Row><Col id=\"급여항목\">식대</Col><Col id=\"급여코드\">C101</Col></Row><Row><Col id=\"급여항목\">상여</Col><Col id=\"급여코드\">C102</Col></Row><Row><Col id=\"급여항목\">월차수당</Col><Col id=\"급여코드\">C103</Col></Row><Row><Col id=\"급여항목\">기타수당</Col><Col id=\"급여코드\">C104</Col></Row><Row><Col id=\"급여항목\">자가운전 보조금</Col><Col id=\"급여코드\">C105</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_taxList", this);
            obj._setContents("<ColumnInfo><Column id=\"원천징수 코드\" type=\"STRING\" size=\"256\"/><Column id=\"원천징수 항목\" type=\"STRING\" size=\"256\"/><Column id=\"금액\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"원천징수 항목\">소득세</Col><Col id=\"원천징수 코드\">D100</Col></Row><Row><Col id=\"원천징수 항목\">주민세</Col><Col id=\"원천징수 코드\">D101</Col></Row><Row><Col id=\"원천징수 항목\">국민연금</Col><Col id=\"원천징수 코드\">D102</Col></Row><Row><Col id=\"원천징수 항목\">건강보험</Col><Col id=\"원천징수 코드\">D103</Col></Row><Row><Col id=\"원천징수 항목\">장기요양보험</Col><Col id=\"원천징수 코드\">D104</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_salaryUpd", this);
            obj._setContents("<ColumnInfo><Column id=\"SALARY_CK\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"EMP_ENDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_NOTE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_C100\" type=\"INT\" size=\"256\"/><Column id=\"SALARY_C101\" type=\"INT\" size=\"256\"/><Column id=\"SALARY_C102\" type=\"INT\" size=\"256\"/><Column id=\"SALARY_C103\" type=\"INT\" size=\"256\"/><Column id=\"SALARY_C104\" type=\"INT\" size=\"256\"/><Column id=\"SALARY_C105\" type=\"INT\" size=\"256\"/><Column id=\"SALARY_D100\" type=\"INT\" size=\"256\"/><Column id=\"SALARY_D101\" type=\"INT\" size=\"256\"/><Column id=\"SALARY_D102\" type=\"INT\" size=\"256\"/><Column id=\"SALARY_D103\" type=\"INT\" size=\"256\"/><Column id=\"SALARY_D104\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lb_sal_update","0%","0%","100%","8.33%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("급여 수정");
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

            obj = new Button("btn_sal_update","85.71%","90.83%","12.99%","7.08%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("수정");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_salList","1.3%","39.58%","48.05%","49.17%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_salList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"118\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"급여코드\"/><Cell col=\"1\" text=\"급여항목\"/><Cell col=\"2\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:급여코드\"/><Cell col=\"1\" text=\"bind:급여항목\"/><Cell col=\"2\" text=\"bind:금액\" displaytype=\"currency\" edittype=\"mask\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"총계\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&quot;금액&quot;)\" displaytype=\"currency\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_taxList","50.65%","39.17%","48.05%","49.17%",null,null,null,null,null,null,this);
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

            obj = new Edit("edit_dept","7.79%","27.71%","23.38%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_rank","41.56%","27.71%","23.38%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_emp_name","75.32%","27.71%","23.38%","7.29%",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("false");
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
        this.registerScript("Form_sal_update.xfdl", function() {

        // 비동기 통신 결과를 받을 콜백 함수 지정
        this.fn_callback = function(svcID, errCD, errMSG) {
        	//alert("fn_callback호출 성공"+svcID+","+errCD+","+errMSG);
        	if(errCD < 0){
        		this.alert(errMSG);
        		return;
        	}
        	if(svcID == "salarySelect"){
        		//this.alert(errMSG);
        		this.cal_sal_date.set_value(this.ds_salaryUpd.getColumn(0,"SALARY_DATE"));
        		this.edit_dept.set_value(this.ds_salaryUpd.getColumn(0,"DEPT_NAME"));
        		this.edit_rank.set_value(this.ds_salaryUpd.getColumn(0,"RANK_NAME"));
        		this.edit_emp_name.set_value(this.ds_salaryUpd.getColumn(0,"EMP_NAME"));

        		this.ds_salList.setColumn(0,2,this.ds_salaryUpd.getColumn(0,10));
        		this.ds_salList.setColumn(1,2,this.ds_salaryUpd.getColumn(0,11));
        		this.ds_salList.setColumn(2,2,this.ds_salaryUpd.getColumn(0,12));
        		this.ds_salList.setColumn(3,2,this.ds_salaryUpd.getColumn(0,13));
        		this.ds_salList.setColumn(4,2,this.ds_salaryUpd.getColumn(0,14));
        		this.ds_salList.setColumn(5,2,this.ds_salaryUpd.getColumn(0,15));

        		this.ds_taxList.setColumn(0,2,this.ds_salaryUpd.getColumn(0,16));
        		this.ds_taxList.setColumn(1,2,this.ds_salaryUpd.getColumn(0,17));
        		this.ds_taxList.setColumn(2,2,this.ds_salaryUpd.getColumn(0,18));
        		this.ds_taxList.setColumn(3,2,this.ds_salaryUpd.getColumn(0,19));
        		this.ds_taxList.setColumn(4,2,this.ds_salaryUpd.getColumn(0,20));
        	}
        	if(svcID == "salaryUpdate"){
        		this.alert("수정 되었습니다.");
        	}
        }

        var objApp = nexacro.getApplication();
        var objVar = objApp.gb_salUpdNo; //급여번호

        this.Form_sal_update_onload = function(obj,e)
        {
        	//alert("자식창_선택된 급여번호 : "+objVar);
        	//급여 1건 조회
        	this.transaction("salarySelect" ,"SvcURL::hr/salarySelect.psp?p_salaryNo="+objVar ,"in_salaryList=ds_salaryUpd" ,"ds_salaryUpd=out_salaryList" ,"" ,"fn_callback");
        };

        this.btn_sal_update_onclick = function(obj,e)
        {
        	var p_salaryDate = this.cal_sal_date.value;

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

        	this.transaction("salaryUpdate" ,"SvcURL::hr/salaryUpdate.psp?p_salaryDate="+p_salaryDate
        	+"&p_salaryNo="+objVar

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
        	,"" ,"ds_salaryList=out_salaryList" ,"" ,"fn_callback");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_sal_update_onload,this);
            this.addEventHandler("oninit",this.Form_sal_update_oninit,this);
            this.btn_sal_update.addEventHandler("onclick",this.btn_sal_update_onclick,this);
        };

        this.loadIncludeScript("Form_sal_update.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
