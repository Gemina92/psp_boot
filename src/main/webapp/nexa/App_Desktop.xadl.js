(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
            // global dataset
            obj = new Dataset("gb_login", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_PW\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gb_deptList", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gb_rankList", this);
            obj._setContents("<ColumnInfo><Column id=\"RANK_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_USE\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_NOTE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gb_empList", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_ACCNUM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_ACCNAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_ACCHOLDER\" type=\"STRING\" size=\"256\"/><Column id=\"RANK_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ENT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_PW\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NOTE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_ENDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_ADDRCODE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_BEFORE_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gb_positionList", this);
            obj._setContents("<ColumnInfo><Column id=\"PS_CK\" type=\"STRING\" size=\"256\"/><Column id=\"PS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PS_USE\" type=\"STRING\" size=\"256\"/><Column id=\"PS_NOTE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("ds_dealList", this);
            obj._setContents("<ColumnInfo><Column id=\"DEAL_CK\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_REP\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_M\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"CROPS_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_UNITPRICE\" type=\"INT\" size=\"256\"/><Column id=\"DEAL_TOTAL\" type=\"INT\" size=\"256\" prop=\"SUM\"/></ColumnInfo><Rows><Row><Col id=\"DEAL_TYPE\">매출거래</Col><Col id=\"ACCOUNT_NAME\">야채가게</Col><Col id=\"ACCOUNT_REP\">김당근</Col><Col id=\"CROPS_M\">고구마</Col><Col id=\"DEAL_AMOUNT\">1000</Col><Col id=\"CROPS_UNIT\">KG</Col><Col id=\"DEAL_UNITPRICE\">4400</Col></Row><Row><Col id=\"DEAL_TYPE\">매입거래</Col><Col id=\"ACCOUNT_NAME\">농민마트</Col><Col id=\"ACCOUNT_REP\">이버섯</Col><Col id=\"CROPS_M\">감자</Col><Col id=\"DEAL_AMOUNT\">3000</Col><Col id=\"CROPS_UNIT\">KG</Col><Col id=\"DEAL_UNITPRICE\">1600</Col></Row><Row><Col id=\"DEAL_TYPE\">매출거래</Col><Col id=\"ACCOUNT_NAME\">방울상회</Col><Col id=\"ACCOUNT_REP\">박배추</Col><Col id=\"CROPS_M\">콩</Col><Col id=\"DEAL_AMOUNT\">2000</Col><Col id=\"CROPS_UNIT\">KG</Col><Col id=\"DEAL_UNITPRICE\">1600</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("ds_stockList", this);
            obj._setContents("<ColumnInfo><Column id=\"STOCK_CK\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_NO\" type=\"INT\" size=\"256\"/><Column id=\"CROPS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"IN_AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"OUT_AMOUNT\" type=\"INT\" size=\"256\"/><Column id=\"STOCK_AMOUNT\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CROPS_NO\">123</Col><Col id=\"CROPS_NAME\">고구마</Col><Col id=\"CROPS_UNIT\">kg</Col><Col id=\"IN_AMOUNT\">20</Col><Col id=\"OUT_AMOUNT\">13</Col></Row><Row/></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gb_use", this);
            obj._setContents("<ColumnInfo><Column id=\"use_name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"use_name\">사용</Col></Row><Row><Col id=\"use_name\">미사용</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gb_cropsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CROPS_CK\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_SORT\" type=\"STRING\" size=\"256\"/><Column id=\"CROPS_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gb_approval", this);
            obj._setContents("<ColumnInfo><Column id=\"APPROVAL_CK\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_1ST\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_2ND\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_3RD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_1RS\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_2RS\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_3RS\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_NOTE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("gb_deptNo","");
            this._addVariable("gb_deptName","");
            this._addVariable("gb_rankNo","");
            this._addVariable("gb_rankName","");
            this._addVariable("gb_salUpdNo","");
            this._addVariable("gb_deptUse","");
            this._addVariable("gb_deptNote","");
            this._addVariable("gb_rankUse","");
            this._addVariable("gb_rankNote","");
            this._addVariable("gb_positionUse","");
            this._addVariable("gb_positionNote","");
            this._addVariable("gb_zipCode","");
            this._addVariable("gb_zipAddress","");
            this._addVariable("gb_zipNo","");
            this._addVariable("gb_empUNo","");
            this._addVariable("gb_cropsUNo","");
            this._addVariable("gb_approvalCode","");
            this._addVariable("gb_mgrName","");
            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("App_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("PSP");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        

            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new ChildFrame("WorkFrame",null,null,null,null,null,null,"FrameBase::Form_login.xfdl",this);
            frame0.set_showtitlebar("false");
            frame0.set_showstatusbar("false");
            this.addChild(frame0.name, frame0);
            frame0.set_formurl("FrameBase::Form_login.xfdl");

            this.frame=frame0;
        };
        
        this.on_initEvent = function()
        {

        };
        
        // script Compiler


        this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::Chart.xcss");
        this.loadCss("xcssrc::main.xcss");
        this.loadIncludeScript("App_Desktop.xadl");
    };
}
)();
