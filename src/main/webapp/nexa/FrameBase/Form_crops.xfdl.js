(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_crops");
            this.set_titletext("CROPS");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cropsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CROPS_CK\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_SORT\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_crops","0%","0%","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("lb_crops","0%","0%","100%","5.22%",null,null,null,null,null,null,this.div_crops.form);
            obj.set_taborder("0");
            obj.set_text("품목 조회");
            obj.set_background("#333F50");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("#ffffff");
            obj.set_padding("0px 0px 0px 10px");
            this.div_crops.addChild(obj.name, obj);

            obj = new Static("lb_crops_search","2.03%","7.31%","96.09%","11.94%",null,null,null,null,null,null,this.div_crops.form);
            obj.set_taborder("1");
            obj.set_background("#D6DCE5");
            obj.set_color("black");
            this.div_crops.addChild(obj.name, obj);

            obj = new Static("lb_crops_name","5.63%","11.04%","7.81%","4.48%",null,null,null,null,null,null,this.div_crops.form);
            obj.set_taborder("2");
            obj.set_text("농산물명");
            obj.set_textAlign("left");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            obj.set_visible("true");
            this.div_crops.addChild(obj.name, obj);

            obj = new Edit("edit_crops_name_search","11.48%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_crops.form);
            obj.set_taborder("3");
            this.div_crops.addChild(obj.name, obj);

            obj = new Button("btn_crops_name_search","33.28%","10.75%","7.81%","5.07%",null,null,null,null,null,null,this.div_crops.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_crops.addChild(obj.name, obj);

            obj = new Grid("grid_cropsList","2.03%","20.15%","96.09%","71.64%",null,null,null,null,null,null,this.div_crops.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_cropsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"214\"/><Column size=\"215\"/><Column size=\"215\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"check\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"농산물코드\"/><Cell col=\"2\" text=\"분류\"/><Cell col=\"3\" text=\"농산물명\"/></Band><Band id=\"body\"><Cell text=\"bind:CROPS_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:CROPS_NO\"/><Cell col=\"2\" text=\"bind:CROPS_SORT\"/><Cell col=\"3\" text=\"bind:CROPS_NAME\"/></Band></Format></Formats>");
            this.div_crops.addChild(obj.name, obj);

            obj = new Button("btn_crops_add","90.31%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this.div_crops.form);
            obj.set_taborder("6");
            obj.set_text("품목등록");
            obj.set_background("#8497B0");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_crops.addChild(obj.name, obj);

            obj = new Button("btn_crops_del","2.03%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this.div_crops.form);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_background("#242D40");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_crops.addChild(obj.name, obj);

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
        this.registerScript("Form_crops.xfdl", function() {
        /* 체크박스 설정 시작 */
        this.div_crops_grid_cropsList_onheadclick = function(obj,e)
        {
        	//alert("onheadclick 클릭 이벤트 성공");
        	//체크박스로 설정한 첫 번째 head 컬럼을 클릭했을 경우에 gf_setCheckAll 함수를 호출
            if(e.cell == 0)
            {
                this.gf_setCheckAll(obj, e);
            }
        };

        this.gv_isCheckAll = 0;
        this.gf_setCheckAll = function(obj, e)
        {
            var strColID = obj.getCellProperty("body", e.cell, "text").replace(/bind:/i, "");

            //체크박스가 체크되어 있으면 체크 해제
            //체크되어 있지 않으면 체크
            this.gv_isCheckAll = (this.gv_isCheckAll ? 0 : 1);

            //Dataset의 이벤트를 끔
            //this.Dataset00.enableevent = false;

            //check to body column
            for(var i=0; i< this.ds_cropsList.getRowCount(); i++)
            {
                this.ds_cropsList.setColumn(i, strColID, this.gv_isCheckAll);
            }
            //check to head column
            obj.setCellProperty("Head", 0, "text", this.gv_isCheckAll);

            //Dataset의 이벤트를 켬
            //this.Dataset00.enableevent = true;
        };
        /* 체크박스 설정   끝 */

        this.div_crops_btn_crops_add_onclick = function(obj,e)
        {
        	//alert("농산물 등록");
        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_crops_create"
        	                  , 500//x좌표
        					  , 100//y좌표
        					  , 652//가로
        					  , 270//높이
        					  , null
        					  , null
        					  , "FrameBase::Form_crops_create.xfdl");
        	/*param1 : id, param2 : 값 */
            this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        	this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        	this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        	objChildFrame.show();
        };

        this.div_crops_grid_cropsList_oncelldblclick = function(obj,e)
        {
        	var p_cropsUNo = this.ds_cropsList.getColumn(e.row, "CROPS_NO");
        	//var objApp = nexacro.getApplication();
        	//var objDs = objApp.gb_empList;

        	this.objApp_var = nexacro.getApplication();
        	this.objApp_var.gb_cropsUNo = p_cropsUNo;
        	//alert("수정할 농산물코드(부모) : "+this.objApp_var.gb_cropsUNo);

        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_crops_update"
        	                  , 500//x좌표
        					  , 100//y좌표
        					  , 652//가로
        					  , 270//높이
        					  , null
        					  , null
        					  , "FrameBase::Form_crops_update.xfdl");
        	/*param1 : id, param2 : 값 */
            this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        	this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        	this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        	objChildFrame.show();
        };

        this.div_crops_btn_crops_name_search_onclick = function(obj,e)
        {
        	var p_cropsName = this.div_crops.form.edit_crops_name_search.value;
        	this.transaction("cropsSelect" ,"SvcURL::stock/cropsSelect.psp","in_cropsList=ds_cropsList" ,"ds_cropsList=out_cropsList" ,"p_cropsName="+p_cropsName ,"fn_callback");
        };

        // 비동기 통신 결과를 받을 콜백 함수 지정
        this.fn_callback = function(svcID, errCD, errMSG) {
        	//alert("fn_callback호출 성공"+svcID+","+errCD+","+errMSG);
        	if(errCD < 0){
        		this.alert(errMSG);
        		return;
        	}
        	if(svcID == "deptDelete"){
        		this.alert("삭제되었습니다.");
        	}
        }

        this.div_crops_btn_crops_del_onclick = function(obj,e)
        {
        	var count = 0;
        	//alert("삭제버튼 클릭");
        	var p_cropsNo = '';
        	var p_cropsNoStr = '';

        	for(i=0;i<this.ds_cropsList.getRowCount();i++) {
        		count++;
        		var val = this.ds_cropsList.getColumn(i,'CROPS_CK');
        		if(val == 1){
        			p_cropsNo  = this.ds_cropsList.getColumn(i,'CROPS_NO');
        			p_cropsNoStr += p_cropsNo + ",";
        		}
        	}
        	if(count == 0) {
        		alert("삭제할 행을 선택하시오.");
        		return;
        	}
        	//아래 코드의 의미는? 마지막에 ,를 빼는 것.
        	if(p_cropsNoStr.length>1){
        			p_cropsNoStr = p_cropsNoStr.substring(0,p_cropsNoStr.length-1);
        	}
        	this.transaction("cropsDelete" ,"SvcURL::stock/cropsDelete.psp","" ,"ds_cropsList=out_cropsList" ,"p_cropsNoStr="+p_cropsNoStr ,"fn_callback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_crops.form.edit_crops_name_search.addEventHandler("onchanged",this.div_crops_edit_crops_name_search_onchanged,this);
            this.div_crops.form.btn_crops_name_search.addEventHandler("onclick",this.div_crops_btn_crops_name_search_onclick,this);
            this.div_crops.form.grid_cropsList.addEventHandler("oncelldblclick",this.div_crops_grid_cropsList_oncelldblclick,this);
            this.div_crops.form.grid_cropsList.addEventHandler("onheadclick",this.div_crops_grid_cropsList_onheadclick,this);
            this.div_crops.form.btn_crops_add.addEventHandler("onclick",this.div_crops_btn_crops_add_onclick,this);
            this.div_crops.form.btn_crops_del.addEventHandler("onclick",this.div_crops_btn_crops_del_onclick,this);
        };

        this.loadIncludeScript("Form_crops.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
