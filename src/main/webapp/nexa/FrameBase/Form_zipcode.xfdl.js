(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_zipcode");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_zipList", this);
            obj._setContents("<ColumnInfo><Column id=\"ZIP_CODE\" type=\"INT\" size=\"256\"/><Column id=\"ZIP_ADDRESS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lb_zipcode","0%","0%","100%","10%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("우편번호 조회");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_position_update_center","2.5%","12%","95%","73.25%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#EDEFF3");
            obj.set_border("0px none transparent");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("lb_rposition_no","6%","17.25%","26.5%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("지번/도로명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_position_no","30%","16.75%","45%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","80%","16.75%","15%","8.5%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","72.5%","89%","25%","8.5%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grid_zipcode","6%","28.25%","89%","54.25%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_zipList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"290\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"우편번호\"/><Cell col=\"1\" text=\"주소\"/></Band><Band id=\"body\"><Cell text=\"bind:ZIP_CODE\"/><Cell col=\"1\" text=\"bind:ZIP_ADDRESS\"/></Band></Format></Formats>");
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
        this.registerScript("Form_zipcode.xfdl", function() {

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btn_search_onclick = function(obj,e)
        {
        	var p_search = this.edit_position_no.value;
        	if(p_search == undefined || p_search == "") {
        		alert("지번/도로명를 입력하시오");
        		return;
        	}
        	this.transaction("zipSearch" ,"SvcURL::hr/zipSearch.psp","" ,"ds_zipList=out_zipList" ,"p_search="+p_search ,"fn_callback");
        };

        this.grid_zipcode_oncelldblclick = function(obj,e)
        {
        	//alert("test : " + this.ds_zipList.getColumn(e.row, 0));
        	this.objApp = nexacro.getApplication();
        	this.objApp.gb_zipCode = this.ds_zipList.getColumn(e.row, 0);
        	this.objApp.gb_zipAddress = this.ds_zipList.getColumn(e.row, 1);

        	var strData = this.objApp.gb_zipCode + "," + this.objApp.gb_zipAddress;

        	this.close(strData);
        };

        // 비동기 통신 결과를 받을 콜백 함수 지정
        this.fn_callback = function(svcID, errCD, errMSG) {
        	//alert("fn_callback호출 성공"+svcID+","+errCD+","+errMSG);
        	if(errCD < 0){
        		this.alert(errMSG);
        		return;
        	}
        	if(svcID == "zipSearch"){
        		//this.alert(errMSG);
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.lb_rposition_no.addEventHandler("onclick",this.lb_rposition_no_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grid_zipcode.addEventHandler("oncelldblclick",this.grid_zipcode_oncelldblclick,this);
        };

        this.loadIncludeScript("Form_zipcode.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
