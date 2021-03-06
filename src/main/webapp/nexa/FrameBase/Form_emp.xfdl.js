(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_emp");
            this.set_titletext("EMP");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_empList", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_CK\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_ENDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_emp","0%","0%","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp","0%","0%","100%","5.22%",null,null,null,null,null,null,this.div_emp.form);
            obj.set_taborder("0");
            obj.set_text("์ฌ์ ์กฐํ");
            obj.set_background("#333F50");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("#ffffff");
            obj.set_padding("0px 0px 0px 10px");
            this.div_emp.addChild(obj.name, obj);

            obj = new Static("lb_emp_search","2.03%","7.31%","96.09%","11.94%",null,null,null,null,null,null,this.div_emp.form);
            obj.set_taborder("1");
            obj.set_background("#D6DCE5");
            obj.set_color("black");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 40px");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_emp.addChild(obj.name, obj);

            obj = new Static("lb_emp_name","5.63%","11.04%","7.81%","4.48%",null,null,null,null,null,null,this.div_emp.form);
            obj.set_taborder("2");
            obj.set_text("์ฌ์๋ช");
            this.div_emp.addChild(obj.name, obj);

            obj = new Edit("ed_empName","11.48%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_emp.form);
            obj.set_taborder("3");
            this.div_emp.addChild(obj.name, obj);

            obj = new Button("btn_emp_name_search","33.28%","10.75%","7.81%","5.07%",null,null,null,null,null,null,this.div_emp.form);
            obj.set_taborder("4");
            obj.set_text("๊ฒ์");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_emp.addChild(obj.name, obj);

            obj = new Grid("grid_empList","2.03%","20.15%","96.09%","71.64%",null,null,null,null,null,null,this.div_emp.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_empList");
            obj.set_color("#242d40");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"249\"/><Column size=\"180\"/><Column size=\"220\"/><Column size=\"209\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"์ฌ์๋ฒํธ\"/><Cell col=\"2\" text=\"์ฌ์๋ช\"/><Cell col=\"3\" text=\"๋ถ์\"/><Cell col=\"4\" text=\"์ง๊ธ\"/><Cell col=\"5\" text=\"์ฃผ๋ฏผ๋ฑ๋ก๋ฒํธ\"/><Cell col=\"6\" text=\"์์ฌ์ผ\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:EMP_NO\"/><Cell col=\"2\" text=\"bind:EMP_NAME\"/><Cell col=\"3\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" text=\"bind:RANK_NAME\"/><Cell col=\"5\" text=\"bind:EMP_BIRTH\"/><Cell col=\"6\" text=\"bind:EMP_ENDATE\"/></Band></Format></Formats>");
            this.div_emp.addChild(obj.name, obj);

            obj = new Button("btn_emp_del","2.03%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this.div_emp.form);
            obj.set_taborder("6");
            obj.set_text("์ญ์?");
            obj.set_background("#242D40");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_emp.addChild(obj.name, obj);

            obj = new Button("btn_emp_add","90.31%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this.div_emp.form);
            obj.set_taborder("7");
            obj.set_text("์ฌ์๋ฑ๋ก");
            obj.set_background("#8497B0");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_emp.addChild(obj.name, obj);

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
        this.registerScript("Form_emp.xfdl", function() {
        /* ์ฒดํฌ๋ฐ์ค ์ค์? ์์ */
        this.div_emp_grid_empList_onheadclick = function(obj,e)
        {
        	//alert("onheadclick ํด๋ฆญ ์ด๋ฒคํธ ์ฑ๊ณต");
        	//์ฒดํฌ๋ฐ์ค๋ก ์ค์?ํ ์ฒซ ๋ฒ์งธ head ์ปฌ๋ผ์ ํด๋ฆญํ์ ๊ฒฝ์ฐ์ gf_setCheckAll ํจ์๋ฅผ ํธ์ถ
            if(e.cell == 0)
            {
                this.gf_setCheckAll(obj, e);
            }
        };

        this.gv_isCheckAll = 0;
        this.gf_setCheckAll = function(obj, e)
        {
            var strColID = obj.getCellProperty("body", e.cell, "text").replace(/bind:/i, "");

            //์ฒดํฌ๋ฐ์ค๊ฐ ์ฒดํฌ๋์ด ์์ผ๋ฉด ์ฒดํฌ ํด์?
            //์ฒดํฌ๋์ด ์์ง ์์ผ๋ฉด ์ฒดํฌ
            this.gv_isCheckAll = (this.gv_isCheckAll ? 0 : 1);

            //Dataset์ ์ด๋ฒคํธ๋ฅผ ๋
            //this.Dataset00.enableevent = false;

            //check to body column
            for(var i=0; i< this.ds_empList.getRowCount(); i++)
            {
                this.ds_empList.setColumn(i, strColID, this.gv_isCheckAll);
            }
            //check to head column
            obj.setCellProperty("Head", 0, "text", this.gv_isCheckAll);

            //Dataset์ ์ด๋ฒคํธ๋ฅผ ์ผฌ
            //this.Dataset00.enableevent = true;
        };
        /* ์ฒดํฌ๋ฐ์ค ์ค์?   ๋ */
        this.div_emp_btn_emp_add_onclick = function(obj,e)
        {
        	//alert("์ฌ์๋ฑ๋ก");
        	var objChildFrame = new ChildFrame();//ChildFrame์์ฑ
        	objChildFrame.init("popup_emp_create"
        					  , 500//x์ขํ
        					  , 100//y์ขํ
        					  , 772//๊ฐ๋ก
        					  , 650//๋์ด
        					  , null
        					  , null
        					  , "FrameBase::Form_emp_create.xfdl");
        	/*param1 : id, param2 : ๊ฐ */
            this.addChild("childframeNew", objChildFrame);//ChildFrame์ถ๊ฐํ๊ธฐ
        	this.childframeNew.set_border("1px solid #999999");//๋ชจ๋ฌ์ฐฝ border์ค์?
        	this.childframeNew.set_dragmovetype("normal");//๋ชจ๋ฌ์ฐฝ ์์ง์ ์ฌ๋ถ ์ค์?
        	objChildFrame.show();
        };

        this.div_emp_grid_empList_oncelldblclick = function(obj,e)
        {
        	var p_empNo = this.ds_empList.getColumn(e.row, "EMP_NO");
        	//alert("์์?ํ? ์ฌ์๋ฒํธ(๋ถ๋ชจ) : "+p_empNo);
        	//์?์ญ๋ฐ์ดํฐ์ ๊ฐ์?ธ์ค๊ธฐ.
        	var objApp = nexacro.getApplication();
        	var objDs = objApp.gb_empList;

        	this.objApp_var = nexacro.getApplication();
        	this.objApp_var.gb_empUNo = p_empNo;
        	//์์?ํ? ์ฌ์๋ฒํธ select
        	//this.transaction("empUSelect" ,"SvcURL::hr/empUSelect.psp","" ,"gb_empList=out_empList" ,"p_empNo="+p_empNo ,"fn_callback");

        	//alert("์ฌ์์์ธ๋ณด๊ธฐ");
        	var objChildFrame = new ChildFrame();//ChildFrame์์ฑ
        	objChildFrame.init("popup_emp_detail"
        					  , 500//x์ขํ
        					  , 100//y์ขํ
        					  , 772//๊ฐ๋ก
        					  , 650//๋์ด
        					  , null
        					  , null
        					  , "FrameBase::Form_emp_detail.xfdl");
        	/*param1 : id, param2 : ๊ฐ */
            this.addChild("childframeNew", objChildFrame);//ChildFrame์ถ๊ฐํ๊ธฐ
        	this.childframeNew.set_border("1px solid #999999");//๋ชจ๋ฌ์ฐฝ border์ค์?
        	this.childframeNew.set_dragmovetype("normal");//๋ชจ๋ฌ์ฐฝ ์์ง์ ์ฌ๋ถ ์ค์?
        	objChildFrame.show();
        };

        this.div_emp_btn_emp_del_onclick = function(obj,e)
        {
        	//alert("์ญ์?๋ฒํผ ํด๋ฆญ");
        	//this.ds_emp.deleteRow(this.ds_emp.rowposition);
        	var p_empno = '';
        	var p_empnoStr = '';
        	//var empno = this.ds_emp.getColumn(this.ds_emp.rowposition,'EMPNO');
        	//alert("ํ์ฌ ์ฌ๋ฒ:"+empno);
        	for(i=0;i<this.ds_empList.getRowCount();i++){
        		var val = this.ds_empList.getColumn(i,'EMP_CK');
        		//alert("val : "+val);์?ํ๋ ์ฒดํฌ๋ฐ์ค๊ฐ๋ง 1 ์ฐ์
        		if(val == 1){
        			p_empno = this.ds_empList.getColumn(i,'EMP_NO');//์?ํ๋ ์ฒดํฌ๋ฐ์ค ๋ก์ฐ์ ์ฌ์๋ฒํธ
        			p_empnoStr += p_empno + ",";
        			//alert("cempno : "+cempno+", empnos : "+empnos);
        		}
        	}
        	if(p_empnoStr.length>1){
        			p_empnoStr = p_empnoStr.substring(0,p_empnoStr.length-1);
        	}
        	//alert("p_empnoStr : "+p_empnoStr);
        	this.transaction("empDelete" ,"SvcURL::hr/empDelete.psp?p_empnoStr="+p_empnoStr ,"in_empList=ds_empList" ,"ds_empList=out_empList" ,"์ฌ์์ญ์?" ,"fn_callback");
        };


        this.div_emp_btn_emp_name_search_onclick = function(obj,e)
        {
        	var p_empName = this.div_emp.form.ed_empName.value;
        	//alert("์ฌ์๋ช : " + p_empName);
        	this.transaction("empSelect" ,"SvcURL::hr/empSelect.psp?p_empName="+p_empName ,"" ,"ds_empList=out_empList" ,"" ,"fn_callback");
        };

        // ๋น๋๊ธฐ ํต์? ๊ฒฐ๊ณผ๋ฅผ ๋ฐ์ ์ฝ๋ฐฑ ํจ์ ์ง์?
        this.fn_callback = function(svcID, errCD, errMSG) {
        	//alert("fn_callbackํธ์ถ ์ฑ๊ณต"+svcID+","+errCD+","+errMSG);
        	if(errCD < 0){
        		this.alert(errMSG);
        		return;
        	}
        	if(svcID == "empDelete"){
        		this.alert("์ญ์? ๋์์ต๋๋ค.");
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_emp.form.lb_emp.addEventHandler("onclick",this.div_emp_lb_emp_onclick,this);
            this.div_emp.form.btn_emp_name_search.addEventHandler("onclick",this.div_emp_btn_emp_name_search_onclick,this);
            this.div_emp.form.grid_empList.addEventHandler("onheadclick",this.div_emp_grid_empList_onheadclick,this);
            this.div_emp.form.grid_empList.addEventHandler("oncelldblclick",this.div_emp_grid_empList_oncelldblclick,this);
            this.div_emp.form.btn_emp_del.addEventHandler("onclick",this.div_emp_btn_emp_del_onclick,this);
            this.div_emp.form.btn_emp_add.addEventHandler("onclick",this.div_emp_btn_emp_add_onclick,this);
        };

        this.loadIncludeScript("Form_emp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
