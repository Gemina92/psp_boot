(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_rank_create");
            this.set_titletext("RANK");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("lb_rank_create","0%","0%","100%","10%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("직급 등록");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_rank_create_center","2.5%","12.5%","95%","73.25%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#EDEFF3");
            obj.set_border("0px none transparent");
            this.addChild(obj.name, obj);

            obj = new Static("lb_rank_no","8.5%","18.5%","15%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("직급코드");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_rank_no","28.75%","18%","45%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rank_no_check","77.5%","18%","15%","8.5%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("중복확인");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_rank_name","8.5%","31.75%","15%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("직급명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_rank_name","28.75%","31.25%","45%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("lb_rank_use","8.5%","45%","15%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("사용여부");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_rank_use","28.75%","44.5%","45%","8.75%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("gb_use");
            obj.set_datacolumn("use_name");
            obj.set_codecolumn("use_name");
            this.addChild(obj.name, obj);

            obj = new Static("lb_rank_note","8.5%","58.25%","15%","7.5%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("비고");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_rank_note","28.75%","57.75%","63.75%","24.25%",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_font("12px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("left");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rank_create","72.5%","89%","25%","8.5%",null,null,null,null,null,null,this);
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
        this.registerScript("Form_rank_create.xfdl", function() {

        var check = 0;

        this.btn_rank_no_check_onclick = function(obj,e)
        {
        	//alert("직급코드 중복검사");
        	var p_rankNo = this.edit_rank_no.value; //ds_deptList=out_deptList
        	if(p_rankNo == undefined || p_rankNo == "") {
        		alert("직급코드를 입력하시오");
        		return;
        	}
        	this.transaction("rankCheck" ,"SvcURL::hr/rankCheck.psp","" ,"" ,"p_rankNo="+p_rankNo ,"fn_callback");
        };

        // 비동기 통신 결과를 받을 콜백 함수 지정
        this.fn_callback = function(svcID, errCD, errMSG) {
        	//alert("fn_callback호출 성공"+svcID+","+errCD+","+errMSG);
        	if(errCD < 0){
        		this.alert(errMSG);
        		check = 0;
        		return;
        	}
        	if(svcID == "rankCheck"){
        		this.alert(errMSG);
        		check = 1;
        	}
        	if(svcID == "rankInsert"){
        		this.alert(errMSG);
        		check = 1;
        	}
        }

        this.btn_rank_create_onclick = function(obj,e)
        {
        	//alert("직급등록버튼 클릭");
        	var p_rankNo = this.edit_rank_no.value;
        	var p_rankName = this.edit_rank_name.value;
        	var p_rankUse = this.cb_rank_use.value;
        	var p_rankNote = this.edit_rank_note.value;
        	if(p_rankNo == undefined || p_rankNo =="") {
        		alert("직급코드를 입력하시오");
        		return;
        	}
        	if(p_rankName == undefined || p_rankName == "") {
        		alert("직급명을 입력하시오");
        		return;
        	}
        	if(p_rankUse == undefined || p_rankUse == "") {
        		alert("사용여부를 선택하시오");
        		return;
        	}
        	if(check == 0) {
        		alert("직급코드 중복검사를 하시오.");
        		return;
        	}
        	this.transaction("rankInsert" ,"SvcURL::hr/rankInsert.psp","" ,"" ,"p_rankNo="+p_rankNo+" p_rankName="+p_rankName+" p_rankUse="+p_rankUse+" p_rankNote="+p_rankNote ,"fn_callback");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_rank_no_check.addEventHandler("onclick",this.btn_rank_no_check_onclick,this);
            this.btn_rank_create.addEventHandler("onclick",this.btn_rank_create_onclick,this);
        };

        this.loadIncludeScript("Form_rank_create.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
