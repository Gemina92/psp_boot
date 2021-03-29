(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_rank");
            this.set_titletext("RANK");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rankList", this);
            obj._setContents("<ColumnInfo><Column id=\"RANK_CK\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_USE\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_NOTE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_rank","0%","0%","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("lb_rank","0%","0%","100%","5.22%",null,null,null,null,null,null,this.div_rank.form);
            obj.set_taborder("0");
            obj.set_text("직급 조회");
            obj.set_background("#333F50");
            obj.set_color("#ffffff");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 10px");
            this.div_rank.addChild(obj.name, obj);

            obj = new Static("lb_rank_search","2.03%","7.31%","96.09%","11.94%",null,null,null,null,null,null,this.div_rank.form);
            obj.set_taborder("1");
            obj.set_background("#D6DCE5");
            obj.set_color("black");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 40px");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.div_rank.addChild(obj.name, obj);

            obj = new Static("lb_rank_name","5.63%","11.04%","4.69%","4.48%",null,null,null,null,null,null,this.div_rank.form);
            obj.set_taborder("2");
            obj.set_text("직급명");
            this.div_rank.addChild(obj.name, obj);

            obj = new Edit("ed_rkName","11.48%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_rank.form);
            obj.set_taborder("3");
            this.div_rank.addChild(obj.name, obj);

            obj = new Button("btn_rank_name_search","33.28%","10.75%","7.81%","5.07%",null,null,null,null,null,null,this.div_rank.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_rank.addChild(obj.name, obj);

            obj = new Grid("grid_rankList","2.03%","20.15%","96.09%","71.64%",null,null,null,null,null,null,this.div_rank.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_rankList");
            obj.set_color("black");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"230\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"498\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"직급명\"/><Cell col=\"3\" text=\"사용구분\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:RANK_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:RANK_NO\"/><Cell col=\"2\" text=\"bind:RANK_NAME\"/><Cell col=\"3\" text=\"bind:RANK_USE\"/><Cell col=\"4\" text=\"bind:RANK_NOTE\"/></Band></Format></Formats>");
            this.div_rank.addChild(obj.name, obj);

            obj = new Button("btn_rank_del","2.03%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this.div_rank.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_background("#242D40");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_rank.addChild(obj.name, obj);

            obj = new Button("btn_rank_upd","80.94%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this.div_rank.form);
            obj.set_taborder("7");
            obj.set_text("수정");
            obj.set_background("#242D40");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_rank.addChild(obj.name, obj);

            obj = new Button("btn_rank_add","90.31%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this.div_rank.form);
            obj.set_taborder("8");
            obj.set_text("직급등록");
            obj.set_background("#8497B0");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_rank.addChild(obj.name, obj);

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
        this.registerScript("Form_rank.xfdl", function() {
        /* 체크박스 설정 시작 */
        this.div_rank_grid_rankList_onheadclick = function(obj,e)
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
            for(var i=0; i< this.ds_rankList.getRowCount(); i++)
            {
                this.ds_rankList.setColumn(i, strColID, this.gv_isCheckAll);
            }
            //check to head column
            obj.setCellProperty("Head", 0, "text", this.gv_isCheckAll);

            //Dataset의 이벤트를 켬
            //this.Dataset00.enableevent = true;
        };
        /* 체크박스 설정   끝 */

        this.div_rank_btn_rank_add_onclick = function(obj,e)
        {
        	//alert("직급등록");
        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_rank_create"
        	                  , 700//x좌표
        					  , 200//y좌표
        					  , 402//가로
        					  , 420//높이
        					  , null
        					  , null
        					  , "FrameBase::Form_rank_create.xfdl");
        	/*param1 : id, param2 : 값 */
            this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        	this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        	this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        	objChildFrame.show();
        };

        this.div_rank_btn_rank_upd_onclick = function(obj,e)
        {
        	var count = 0;
        	//alert("직급수정 버튼 클릭");
        	var p_rankNo = '';
        	//var p_deptNoStr = '';
        	for(i=0;i<this.ds_rankList.getRowCount();i++) {
        		var val = this.ds_rankList.getColumn(i,'RANK_CK');
        		//alert("val : "+val);선택된 체크박스값만 1 찍음
        		if(val == 1){
        			count++;
        			p_rankNo  = this.ds_rankList.getColumn(i,'RANK_NO');
        			this.objApp = nexacro.getApplication();
        			this.objApp.gb_rankNo = p_rankNo;
        			this.objApp.gb_rankName = this.ds_rankList.getColumn(i,'RANK_NAME');
        			this.objApp.gb_rankUse = this.ds_rankList.getColumn(i,'RANK_USE');
        			this.objApp.gb_rankNote = this.ds_rankList.getColumn(i,'RANK_NOTE');
        			//alert("부모창_선택한 직급번호 : " + this.objApp.gb_rankNo);
        		}
        	}
        	if(count == 0) {
        		alert("수정할 행을 선택하시오.");
        		return;
        	}
        	else if(count > 1) {
        		alert("하나의 행만 선택하시오.");
        		return;
        	}

        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_rank_update"
        	                  , 700//x좌표
        					  , 200//y좌표
        					  , 402//가로
        					  , 420//높이
        					  , null
        					  , null
        					  , "FrameBase::Form_rank_update.xfdl");
        	/*param1 : id, param2 : 값 */
            this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        	this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        	this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        	objChildFrame.show();
        };

        this.div_rank_btn_rank_del_onclick = function(obj,e)
        {
        	//alert("삭제버튼 클릭");
        	var count = 0;
        	var p_rankNo = '';
        	var p_rankNoStr = '';
        	for(i=0;i<this.ds_rankList.getRowCount();i++){
        		var val = this.ds_rankList.getColumn(i,'RANK_CK');
        		//alert("val : "+val);선택된 체크박스값만 1 찍음
        		if(val == 1){
        			count++;
        			p_rankNo = this.ds_rankList.getColumn(i,'RANK_NO');
        			p_rankNoStr += p_rankNo + ",";
        		}
        	}
        	if(count == 0 ) {
        		alert("삭제할 행을 1개 이상 선택하시오.");
        		return;
        	}
        	//아래 코드의 의미는?
        	if(p_rankNoStr.length>1){
        		p_rankNoStr = p_rankNoStr.substring(0,p_rankNoStr.length-1);
        	}
        	//alert("p_deptNoStr : "+p_deptNoStr);
        	this.transaction("rankDelete" ,"SvcURL::hr/rankDelete.psp","" ,"ds_rankList=out_rankList" ,"p_rankNoStr="+p_rankNoStr ,"fn_callback");
        };

        this.div_rank_btn_rank_name_search_onclick = function(obj,e)
        {
        	//alert("검색버튼 클릭");
        	var p_rkName = this.div_rank.form.ed_rkName.value;
        	//alert("입력한 직급 : " + p_rkName);
        	this.transaction("rankSelect" ,"SvcURL::hr/rankSelect.psp?p_rkName="+p_rkName ,"in_rankList=ds_rankList" ,"ds_rankList=out_rankList" ,"" ,"fn_callback");
        };

        // 비동기 통신 결과를 받을 콜백 함수 지정
        this.fn_callback = function(svcID, errCD, errMSG) {
        	//alert("fn_callback호출 성공"+svcID+","+errCD+","+errMSG);
        	if(errCD < 0){
        		this.alert(errMSG);
        		return;
        	}
        	if(svcID == "rankSelect"){
        		//this.alert(errMSG);
        	}
        	if(svcID == "rankDelete"){
        		this.alert("삭제되었습니다.");
        	}
        }

        this.Form_rank_onload = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var objDs = objApp.gb_login;
        	//alert("사원이름 : " + objDs.getColumn(0,2)); // var로 선언한 변수명을 통해 데이터셋에 접근 가능.
        	//alert("부서이름 : " + objDs.getColumn(0,3));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_rank_onload,this);
            this.div_rank.form.btn_rank_name_search.addEventHandler("onclick",this.div_rank_btn_rank_name_search_onclick,this);
            this.div_rank.form.grid_rankList.addEventHandler("onheadclick",this.div_rank_grid_rankList_onheadclick,this);
            this.div_rank.form.btn_rank_del.addEventHandler("onclick",this.div_rank_btn_rank_del_onclick,this);
            this.div_rank.form.btn_rank_upd.addEventHandler("onclick",this.div_rank_btn_rank_upd_onclick,this);
            this.div_rank.form.btn_rank_add.addEventHandler("onclick",this.div_rank_btn_rank_add_onclick,this);
        };

        this.loadIncludeScript("Form_rank.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
