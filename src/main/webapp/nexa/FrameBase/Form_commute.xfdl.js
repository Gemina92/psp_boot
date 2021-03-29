(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_commute");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_commute","0","0","1280","670",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("lb_commute","0","0","1280","35",null,null,null,null,null,null,this.div_commute.form);
            obj.set_taborder("0");
            obj.set_text("출퇴근 관리");
            obj.set_background("#333F50");
            obj.set_font("bold 12pt/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("#ffffff");
            obj.set_padding("0px 0px 0px 10px");
            this.div_commute.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","175","90","910","530",null,null,null,null,null,null,this.div_commute.form);
            obj.set_taborder("1");
            this.div_commute.addChild(obj.name, obj);

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
        this.registerScript("Form_commute.xfdl", function() {
        var _win;
        this.Form_commute_onload = function(obj,e)
        {
        	var domain = document.location.href;
        	var arrdomain = domain.split('/');
        	var currentfile = arrdomain.pop();
        	domain = domain.replace(currentfile, "calendar/conference.jsp")
        	this.div_commute.form.WebBrowser00.set_url(domain);
        };
        this.div_commute_WebBrowser00_onloadcompleted = function(obj,e)
        {

        	_win = this.div_commute.form.WebBrowser00.getProperty('window');
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_commute_onload,this);
            this.div_commute.form.WebBrowser00.addEventHandler("onloadcompleted",this.div_commute_WebBrowser00_onloadcompleted,this);
        };

        this.loadIncludeScript("Form_commute.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
