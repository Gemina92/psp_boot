(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_crops_create");
            this.set_titletext("CROPS");
            if (Form == this.constructor)
            {
                this._setFormPosition(650,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cropsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CROPS_CK\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_SORT\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lb_crops_create","0%","0%","100%","16%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("농산물 등록");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_crops_create_center","1.54%","20%","96.92%","76%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#EDEFF3");
            obj.set_border("0px none transparent");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("lb_crops_no","5.23%","30.8%","11.54%","12%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("농산물 코드");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_crops_no","18.77%","30%","27.69%","14%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_crops_no_check","48.46%","30%","9.23%","13.6%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("중복확인");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_crops_m","5.23%","53.2%","11.54%","12%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("분류");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_crops_sort","18.77%","52%","27.69%","14%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_crops_s","53.85%","53.2%","9.23%","12%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("농산물명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_crops_name","64.62%","52%","27.69%","14%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_crops_create","81.54%","78.40%","15.23%","13.60%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("등록");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",650,250,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_crops_create.xfdl", function() {

        this.btn_crops_create_onclick = function(obj,e)
        {
        	if(check == 0) {
        		alert("농산물코드 중복검사를 하시오.");
        		return;
        	}

        	var p_cropsNo = this.edit_crops_no.value;
        	var p_cropsSort = this.edit_crops_sort.value;
        	var p_cropsName = this.edit_crops_name.value;
        	this.transaction("cropsInsert" ,"SvcURL::stock/cropsInsert.psp","" ,"" ,"p_cropsNo="+p_cropsNo+" p_cropsSort="+p_cropsSort+" p_cropsName="+p_cropsName ,"fn_callback");
        };

        var check = 0;

        this.btn_crops_no_check_onclick = function(obj,e)
        {
        	//alert("농산물코드 중복검사");
        	var p_cropsNo = this.edit_crops_no.value;
        	if(p_cropsNo == undefined || p_cropsNo == "") {
        		alert("농산물코드를 입력하시오");
        		return;
        	}
        	this.transaction("cropsCheck" ,"SvcURL::stock/cropsCheck.psp","" ,"" ,"p_cropsNo="+p_cropsNo ,"fn_callback");
        };

        this.fn_callback = function(svcID, errCD, errMSG) {
        	//alert("fn_callback호출 성공"+svcID+","+errCD+","+errMSG);
        	if(errCD < 0){
        		check = 0;
        		this.alert(errMSG);
        		return;
        	}
        	if(svcID == "cropsInsert"){
        		this.alert(errMSG);
        		check = 0;
        	}
        	if(svcID == "cropsCheck"){
        		this.alert(errMSG);
        		check = 1;
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_crops_no_check.addEventHandler("onclick",this.btn_crops_no_check_onclick,this);
            this.btn_crops_create.addEventHandler("onclick",this.btn_crops_create_onclick,this);
        };

        this.loadIncludeScript("Form_crops_create.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
