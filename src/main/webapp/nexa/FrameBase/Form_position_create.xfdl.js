(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_position_create");
            this.set_titletext("POSITION");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("lb_position_create","0%","0%","100%","10%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("직책 등록");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_position_create_center","2.5%","12.5%","95%","73.25%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#EDEFF3");
            obj.set_border("0px none transparent");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("lb_position_no","8.5%","18.5%","15%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("직책코드");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_position_no","28.75%","18%","45%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_position_no_check","77.5%","18%","15%","8.5%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("중복확인");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_position_name","8.5%","31.75%","15%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("직책명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_position_name","28.75%","31.25%","45%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_position_use","8.5%","45%","15%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("사용여부");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_position_use","28.75%","44.5%","45%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("gb_use");
            obj.set_codecolumn("use_name");
            obj.set_datacolumn("use_name");
            this.addChild(obj.name, obj);

            obj = new Static("lb_position_note","8.5%","58.25%","15%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("비고");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_position_note","28.75%","57.75%","63.75%","24.25%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_position_create","72.5%","89%","25%","8.5%",null,null,null,null,null,null,this);
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
        this.registerScript("Form_position_create.xfdl", function() {

        var check = 0;

        this.btn_position_no_check_onclick = function(obj,e)
        {
        	//alert("직책코드 중복검사");
        	var p_positionNo = this.edit_position_no.value; //ds_deptList=out_deptList
        	if(p_positionNo == undefined || p_positionNo == "") {
        		alert("직책코드를 입력하시오");
        		return;
        	}
        	this.transaction("positionCheck" ,"SvcURL::hr/positionCheck.psp","" ,"" ,"p_positionNo="+p_positionNo ,"fn_callback");
        };

        // 비동기 통신 결과를 받을 콜백 함수 지정
        this.fn_callback = function(svcID, errCD, errMSG) {
        	//alert("fn_callback호출 성공"+svcID+","+errCD+","+errMSG);
        	if(errCD < 0){
        		this.alert(errMSG);
        		check = 0;
        		return;
        	}
        	if(svcID == "positionCheck"){
        		this.alert(errMSG);
        		check = 1;
        	}
        	if(svcID == "positionInsert"){
        		this.alert(errMSG);
        		check = 0;
        	}
        }
        this.btn_position_create_onclick = function(obj,e)
        {
        	//alert("직책등록버튼 클릭");
        	var p_positionNo = this.edit_position_no.value;
        	var p_positionName = this.edit_position_name.value;
        	var p_positionUse = this.cb_position_use.value;
        	var p_positionNote = this.edit_position_note.value;
        	if(p_positionNo == undefined || p_positionNo =="") {
        		alert("직책코드를 입력하시오");
        		return;
        	}
        	if(p_positionName == undefined || p_positionName == "") {
        		alert("직책명을 입력하시오");
        		return;
        	}
        	if(p_positionUse == undefined || p_positionUse == "") {
        		alert("사용여부를 선택하시오");
        		return;
        	}
        	if(check == 0) {
        		alert("직책코드 중복검사를 하시오.");
        		return;
        	}
        	this.transaction("positionInsert" ,"SvcURL::hr/positionInsert.psp","" ,"ds_positionList=out_positionList" ,"p_positionNo="+p_positionNo+" p_positionName="+p_positionName+" p_positionUse="+p_positionUse+" p_positionNote="+p_positionNote  ,"fn_callback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_position_no_check.addEventHandler("onclick",this.btn_position_no_check_onclick,this);
            this.btn_position_create.addEventHandler("onclick",this.btn_position_create_onclick,this);
        };

        this.loadIncludeScript("Form_position_create.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
