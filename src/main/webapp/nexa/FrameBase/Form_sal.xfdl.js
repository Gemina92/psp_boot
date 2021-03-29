(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_sal");
            this.set_titletext("SAL");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_salaryList", this);
            obj._setContents("<ColumnInfo><Column id=\"SALARY_CK\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"EMP_ENDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_NOTE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY_C100\" type=\"INT\" size=\"256\"/><Column id=\"SALARY_C101\" type=\"INT\" size=\"256\"/><Column id=\"SALARY_C102\" type=\"INT\" size=\"256\"/><Column id=\"SALARY_C103\" type=\"INT\" size=\"256\"/><Column id=\"SALARY_C104\" type=\"INT\" size=\"256\"/><Column id=\"SALARY_C105\" type=\"INT\" size=\"256\"/><Column id=\"SALARY_D100\" type=\"INT\" size=\"256\"/><Column id=\"SALARY_D101\" type=\"INT\" size=\"256\"/><Column id=\"SALARY_D102\" type=\"INT\" size=\"256\"/><Column id=\"SALARY_D103\" type=\"INT\" size=\"256\"/><Column id=\"SALARY_D104\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lb_sal","0%","0%","100%","5.22%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("급여 조회");
            obj.set_background("#333F50");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("#ffffff");
            obj.set_padding("0px 0px 0px 10px");
            this.addChild(obj.name, obj);

            obj = new Div("div_sal","0%","0%","100%","100%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("lb_sal_search","2.03%","7.31%","96.09%","11.94%",null,null,null,null,null,null,this.div_sal.form);
            obj.set_taborder("0");
            obj.set_background("#D6DCE5");
            obj.set_color("black");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_padding("0px 0px 0px 20px");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_text("");
            this.div_sal.addChild(obj.name, obj);

            obj = new Static("lb_dept","5.63%","11.04%","4.69%","4.48%",null,null,null,null,null,null,this.div_sal.form);
            obj.set_taborder("1");
            obj.set_text("부서명");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.div_sal.addChild(obj.name, obj);

            obj = new Combo("cb_dept","11.48%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_sal.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #242d40");
            obj.set_innerdataset("gb_deptList");
            obj.set_datacolumn("DEPT_NAME");
            obj.set_codecolumn("DEPT_NO");
            obj.set_text("부서");
            obj.set_value("");
            obj.set_index("-1");
            this.div_sal.addChild(obj.name, obj);

            obj = new Static("lb_rank","32.19%","11.04%","4.69%","4.48%",null,null,null,null,null,null,this.div_sal.form);
            obj.set_taborder("3");
            obj.set_text("직급명");
            obj.set_font("14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("black");
            this.div_sal.addChild(obj.name, obj);

            obj = new Combo("cb_rank","38.05%","10.75%","15.63%","5.22%",null,null,null,null,null,null,this.div_sal.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #242d40");
            obj.set_innerdataset("gb_rankList");
            obj.set_datacolumn("RANK_NAME");
            obj.set_codecolumn("RANK_NO");
            obj.set_enable("true");
            obj.set_text("직급");
            obj.set_value("");
            obj.set_index("-1");
            this.div_sal.addChild(obj.name, obj);

            obj = new Button("btn_emp_name_search","59.84%","10.75%","7.81%","5.07%",null,null,null,null,null,null,this.div_sal.form);
            obj.set_taborder("5");
            obj.set_text("검색");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_sal.addChild(obj.name, obj);

            obj = new Button("btn_emp_name_search01","69.22%","10.75%","7.81%","5.07%",null,null,null,null,null,null,this.div_sal.form);
            obj.set_taborder("10");
            obj.set_text("전체조회");
            obj.set_background("#333F50");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_sal.addChild(obj.name, obj);

            obj = new Grid("grid_salList","2.03%","20.15%","96.09%","71.64%",null,null,null,null,null,null,this.div_sal.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_salaryList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"228\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" text=\"사원명\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"총급여\"/><Cell col=\"6\" text=\"입사일\"/><Cell col=\"7\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:SALARY_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:EMP_NO\"/><Cell col=\"2\" text=\"bind:EMP_NAME\"/><Cell col=\"3\" text=\"bind:DEPT_NAME\"/><Cell col=\"4\" text=\"bind:RANK_NAME\"/><Cell col=\"5\" text=\"bind:SALARY_AMOUNT\"/><Cell col=\"6\" text=\"bind:EMP_ENDATE\"/><Cell col=\"7\" text=\"bind:SALARY_NOTE\"/></Band></Format></Formats>");
            this.div_sal.addChild(obj.name, obj);

            obj = new Button("btn_sal_delete","2.03%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this.div_sal.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_background("#242D40");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_sal.addChild(obj.name, obj);

            obj = new Button("btn_sal_upd","80.94%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this.div_sal.form);
            obj.set_taborder("7");
            obj.set_text("수정");
            obj.set_background("#242D40");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_sal.addChild(obj.name, obj);

            obj = new Button("btn_sal_add","90.31%","93.43%","7.81%","5.07%",null,null,null,null,null,null,this.div_sal.form);
            obj.set_taborder("9");
            obj.set_text("급여등록");
            obj.set_background("#8497B0");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.div_sal.addChild(obj.name, obj);

            obj = new Button("btn_sal_upd00","68.75%","93.13%","7.66%","4.93%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("이메일 발송");
            obj.set_background("#242D40");
            obj.set_border("0px none transparent");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            this.addChild(obj.name, obj);

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
        this.registerScript("Form_sal.xfdl", function() {

        //폼 로드시
        this.Form_sal_onload = function(obj,e)
        {
        	this.transaction("selectDept" ,"SvcURL::hr/deptSelect.psp" ,"in_deptList=gb_deptList" ,"gb_deptList=out_deptList" ,"부서조회" ,"fn_callback");
        	this.transaction("selectRank" ,"SvcURL::hr/rankSelect.psp" ,"in_rankList=gb_rankList" ,"gb_rankList=out_rankList" ,"직급조회" ,"fn_callback");
        };

        //전체조회
        this.div_sal_btn_emp_name_search01_onclick = function(obj,e)
        {
        	this.transaction("salarySelect" ,"SvcURL::hr/salarySelect.psp" ,"in_salaryList=ds_salaryList" ,"ds_salaryList=out_salaryList" ,"급여조회" ,"fn_callback");
        };

        //급여 삭제
        this.div_sal_btn_sal_delete_onclick = function(obj,e)
        {
        	//alert("삭제버튼 클릭");
        	//this.ds_emp.deleteRow(this.ds_emp.rowposition);
        	var p_salaryNo = '';
        	var p_salaryNoStr = '';
        	for(i=0;i<this.ds_salaryList.getRowCount();i++){
        		var val = this.ds_salaryList.getColumn(i,'SALARY_CK');
        		//alert("val : "+val);선택된 체크박스값만 1 찍음
        		if(val == 1){
        			p_salaryNo  = this.ds_salaryList.getColumn(i,'SALARY_NO');//선택된 체크박스 로우에 사원번호
        			p_salaryNoStr += p_salaryNo + ",";
        		}
        	}
        	//아래 코드의 의미는?
        	if(p_salaryNoStr.length>1){
        			p_salaryNoStr = p_salaryNoStr.substring(0,p_salaryNoStr.length-1);
        	}
        	//alert("p_salaryNoStr : "+p_salaryNoStr);
        	this.transaction("salaryDelete" ,"SvcURL::hr/salaryDelete.psp?p_salaryNoStr="+p_salaryNoStr ,"in_salaryList=ds_salaryList" ,"ds_salaryList=out_salaryList" ,"급여삭제" ,"fn_callback");
        };

        //조건 검색
        this.div_sal_btn_emp_name_search_onclick = function(obj,e)
        {
        	var p_deptNo = this.div_sal.form.cb_dept.value;
        	var p_rankNo = this.div_sal.form.cb_rank.value;
        	//alert(p_deptNo + ", " + p_rankNo);
        	this.transaction("salarySelect" ,"SvcURL::hr/salarySelect.psp?p_deptNo="+p_deptNo+"&p_rankNo="+p_rankNo ,"in_salaryList=ds_salaryList" ,"ds_salaryList=out_salaryList" ,"급여조회" ,"fn_callback");
        };

        // 비동기 통신 결과를 받을 콜백 함수 지정
        this.fn_callback = function(svcID, errCD, errMSG) {
        	//alert("fn_callback호출 성공"+svcID+","+errCD+","+errMSG);
        	if(errCD < 0){
        		this.alert(errMSG);
        		return;
        	}
        	if(svcID == "salarySelect"){
        		//this.alert(errMSG);
        	}
        	if(svcID == "salaryDelete"){
        		this.alert("삭제 되었습니다.");
        	}
        	if(svcID == "emailSend"){
        		this.alert(errMSG);
        	}
        }

        /* 체크박스 설정 시작 */
        this.div_sal_grid_salList_onheadclick = function(obj,e)
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
            for(var i=0; i< this.ds_salaryList.getRowCount(); i++)
            {
                this.ds_salaryList.setColumn(i, strColID, this.gv_isCheckAll);
            }
            //check to head column
            obj.setCellProperty("Head", 0, "text", this.gv_isCheckAll);

            //Dataset의 이벤트를 켬
            //this.Dataset00.enableevent = true;
        };
        /* 체크박스 설정   끝 */

        //급여 등록
        this.div_sal_btn_sal_add_onclick = function(obj,e)
        {
        	//alert("급여 등록");
        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_sal_create"
        	                  , 500//x좌표
        					  , 100//y좌표
        					  , 772//가로
        					  , 500//높이
        					  , null
        					  , null
        					  , "FrameBase::Form_sal_create.xfdl");
        	/*param1 : id, param2 : 값 */
            this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        	this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        	this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        	objChildFrame.show();
        };

        //급여 수정
        this.div_sal_btn_sal_upd_onclick = function(obj,e)
        {
        	var count = 0;
        	//alert("급여수정 버튼 클릭");
        	var p_salaryNo = '';
        	for(i=0;i<this.ds_salaryList.getRowCount();i++) {
        		var val = this.ds_salaryList.getColumn(i,'SALARY_CK');
        		if(val == 1){
        			count++;
        			p_salaryNo  = this.ds_salaryList.getColumn(i,'SALARY_NO');
        			this.objApp = nexacro.getApplication();
        			this.objApp.gb_salUpdNo = p_salaryNo;
        			//alert("부모창_선택한 급여번호 : " + this.objApp.gb_salUpdNo);
        		}
        	}
        	//count로 유효성 검사
        	if(count == 0) {
        		alert("수정할 행을 선택하시오.");
        		return;
        	}
        	else if(count > 1) {
        		alert("하나의 행만 선택하시오.");
        		return;
        	}
        	//Form_sal_update로 이동
        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_sal_update"
        	                  , 500//x좌표
        					  , 100//y좌표
        					  , 772//가로
        					  , 500//높이
        					  , null
        					  , null
        					  , "FrameBase::Form_sal_update.xfdl");
        	/*param1 : id, param2 : 값 */
            this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        	this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        	this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        	objChildFrame.show();
        };

        //이메일 발송
        this.div_sal_btn_sal_upd00_onclick = function(obj,e)
        {
        	var count = 0; //카운트 변수
        	//alert("이메일 발송");
        	var p_salaryNo = ''; //급여번호를 저장할 변수
        	var p_salaryNoStr = ''; //급여번호 여러개 저장할 변수
        	for(i=0;i<this.ds_salaryList.getRowCount();i++) { //조회된 행수만큼 반복
        		var val = this.ds_salaryList.getColumn(i,'SALARY_CK'); //CK값 저장
        		if(val == 1){ //선택 됐을 때
        			count++; //카운트 ++
        			p_salaryNo  = this.ds_salaryList.getColumn(i,'SALARY_NO'); //급여번호 저장
        			p_salaryNoStr += p_salaryNo + ","; //급여번호 누적(,로 구분)
        		}
        	}
        	if(count == 0) {
        		alert("행을 선택하시오.");
        		return;
        	}
        	if(p_salaryNoStr.length>1){
        			//마지막 ,제거하는 문장
        			p_salaryNoStr = p_salaryNoStr.substring(0,p_salaryNoStr.length-1);
        	}
        	this.transaction("emailSend" ,"SvcURL::hr/emailSend.psp"
        		,"" ,"" ,"p_salaryNoStr="+p_salaryNoStr ,"fn_callback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_sal_onload,this);
            this.div_sal.form.cb_dept.addEventHandler("onitemchanged",this.div_sal_cb_dept_onitemchanged,this);
            this.div_sal.form.btn_emp_name_search.addEventHandler("onclick",this.div_sal_btn_emp_name_search_onclick,this);
            this.div_sal.form.btn_emp_name_search01.addEventHandler("onclick",this.div_sal_btn_emp_name_search01_onclick,this);
            this.div_sal.form.grid_salList.addEventHandler("onheadclick",this.div_sal_grid_salList_onheadclick,this);
            this.div_sal.form.btn_sal_delete.addEventHandler("onclick",this.div_sal_btn_sal_delete_onclick,this);
            this.div_sal.form.btn_sal_upd.addEventHandler("onclick",this.div_sal_btn_sal_upd_onclick,this);
            this.div_sal.form.btn_sal_add.addEventHandler("onclick",this.div_sal_btn_sal_add_onclick,this);
            this.btn_sal_upd00.addEventHandler("onclick",this.div_sal_btn_sal_upd00_onclick,this);
        };

        this.loadIncludeScript("Form_sal.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
