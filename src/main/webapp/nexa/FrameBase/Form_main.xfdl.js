(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_main");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_department", this);
            obj._setContents("<ColumnInfo><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"caption\">인사관리</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"caption\">사원 관리</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"caption\">부서 조회</Col><Col id=\"level\">2</Col><Col id=\"id\">row_dept</Col></Row><Row><Col id=\"caption\">직급 조회</Col><Col id=\"id\">row_rank</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"caption\">직책 조회</Col><Col id=\"level\">2</Col><Col id=\"id\">row_position</Col></Row><Row><Col id=\"caption\">사원 조회 </Col><Col id=\"level\">2</Col><Col id=\"id\">row_emp</Col></Row><Row><Col id=\"caption\">근태관리</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"caption\">근태 항목 조회</Col><Col id=\"id\">row_attendanceRecord</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"caption\">근태 내역 조회</Col><Col id=\"level\">2</Col><Col id=\"id\">row_attendance_emp</Col></Row><Row><Col id=\"caption\">근태 신청 조회</Col><Col id=\"id\">row_attendance_mgr</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"caption\">급여관리</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"caption\">급여 내역 조회</Col><Col id=\"level\">2</Col><Col id=\"id\">row_sal</Col></Row><Row><Col id=\"caption\">영업관리</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"caption\">거래처 관리</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"caption\">거래처 조회</Col><Col id=\"level\">2</Col><Col id=\"id\">row_account</Col></Row><Row><Col id=\"caption\">거래내역 관리</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"caption\">거래내역 조회</Col><Col id=\"level\">2</Col><Col id=\"id\">row_deal</Col></Row><Row><Col id=\"caption\">재고관리</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"caption\">품목 관리</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"caption\">품목 조회</Col><Col id=\"level\">2</Col><Col id=\"id\">row_crops</Col></Row><Row><Col id=\"caption\">지점 관리</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"caption\">지점 조회</Col><Col id=\"level\">2</Col><Col id=\"id\">row_branch</Col></Row><Row><Col id=\"caption\">입고/출고 관리</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"caption\">입고/출고 조회</Col><Col id=\"level\">2</Col><Col id=\"id\">row_inout</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"caption\">재고관리</Col></Row><Row><Col id=\"caption\">재고 조회</Col><Col id=\"level\">2</Col><Col id=\"id\">row_stock</Col></Row><Row><Col id=\"caption\">결재관리</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"caption\">기안함</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"caption\">개인함 조회</Col><Col id=\"level\">2</Col><Col id=\"id\">row_approval_emp</Col></Row><Row><Col id=\"caption\">임시 보관함</Col><Col id=\"level\">2</Col><Col id=\"id\">row_approval_emp_delay</Col></Row><Row><Col id=\"caption\">수신함</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"caption\">미결재건 조회</Col><Col id=\"level\">2</Col><Col id=\"id\">row_approval_mgr_pending</Col></Row><Row><Col id=\"caption\">결재건 조회</Col><Col id=\"id\">row_approval_mgr_decide</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"caption\">반려건 조회</Col><Col id=\"id\">row_approval_mgr_refuse</Col><Col id=\"level\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sales_monthly", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"sales\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">7월</Col><Col id=\"sales\">44878307</Col></Row><Row><Col id=\"month\">8월</Col><Col id=\"sales\">66822310</Col></Row><Row><Col id=\"month\">9월</Col><Col id=\"sales\">55113336</Col></Row><Row><Col id=\"month\">10월</Col><Col id=\"sales\">49445785</Col></Row><Row><Col id=\"month\">11월</Col><Col id=\"sales\">78555124</Col></Row><Row><Col id=\"month\">12월</Col><Col id=\"sales\">66555445</Col></Row><Row><Col id=\"month\">1월</Col><Col id=\"sales\">64455771</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sales_daily", this);
            obj._setContents("<ColumnInfo><Column id=\"crops_name\" type=\"STRING\" size=\"256\"/><Column id=\"sales\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"crops_name\">쌀</Col><Col id=\"sales\">1177751</Col></Row><Row><Col id=\"crops_name\">현미</Col><Col id=\"sales\">897655</Col></Row><Row><Col id=\"crops_name\">보리</Col><Col id=\"sales\">732214</Col></Row><Row><Col id=\"crops_name\">콩</Col><Col id=\"sales\">815444</Col></Row><Row><Col id=\"crops_name\">호박</Col><Col id=\"sales\">911254</Col></Row><Row><Col id=\"crops_name\">가지</Col><Col id=\"sales\">724780</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("lb_main","0%","0%","100%","6.88%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#242D40");
            this.addChild(obj.name, obj);

            obj = new Menu("menu_department","24.14%","0%","25.63%","6.75%",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_department");
            obj.set_captioncolumn("caption");
            obj.set_idcolumn("id");
            obj.set_levelcolumn("level");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_employee","76.47%","0.00%","2.27%","6.88%",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enableevent("false");
            obj.set_image("url(\'imagerc::employee.png\')");
            obj.set_background("transparent");
            obj.set_border("0px none transparent");
            obj.set_stretch("none");
            this.addChild(obj.name, obj);

            obj = new Static("lb_emp","79.40%","0.00%","9.87%","6.88%",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("사원명/부서명");
            obj.set_color("#ffffff");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_info_upd","92.67%","1.38%","2.47%","4.38%",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_icon("url(\'imagerc::emp_info_upd.png\')");
            obj.set_background("transparent");
            obj.set_border("0px none transparent");
            this.addChild(obj.name, obj);

            obj = new Button("btn_logout","96.07%","1.25%","2.47%","4.38%",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_icon("url(\'imagerc::emp_logout.png\')");
            obj.set_background("transparent");
            obj.set_border("0px none transparent");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_logo1_top","5.47%","1.39%","14.84%","4.17%",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("0px none transparent");
            obj.set_image("url(\'imagerc::logo2-2.png\')");
            obj.set_imagealign("center bottom");
            obj.set_background("transparent");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_logo2_top","1.88%","0.69%","3.59%","5.69%",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("0px none transparent");
            obj.set_image("url(\'imagerc::logo2-1.png\')");
            obj.set_background("transparent");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Button("btn_home","89.33%","1.38%","2.53%","4.38%",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_icon("url(\'imagerc::baseline_home_white_18dp.png\')");
            obj.set_background("transparent");
            obj.set_border("0px none transparent");
            this.addChild(obj.name, obj);

            obj = new Div("div_main","0%","6.88%","100%","93.13%",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("lb_daily","3.33%","4.67%","13.33%","8%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("10");
            obj.set_text("일 별 매출현황");
            obj.set_font("bold 18px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("#242d40");
            this.div_main.addChild(obj.name, obj);

            obj = new BasicChart("basicChart_monthly","54.4%","19.33%","42.67%","60.4%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("11");
            obj.set_binddataset("ds_sales_monthly");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Monthly Report",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"align": "topleft",
            		"visible": "false"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px 3px 10px",
            		"itemtextfont": "9pt '맑은 고딕'",
            		"itemtextcolor": "#242D40",
            		"useiteminvisible": "true",
            		"visible": "false"
            	},
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "1px",
            		"background": "#EDEFF3",
            		"linestyle": "1px solid #242D40",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#242D40",
            		"size": "12",
            		"visible": "false"
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "1px",
            		"background": "#d6dce5",
            		"linestyle": "1px solid #242D40",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#242D40",
            		"size": "12",
            		"visible": "false"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#242d40",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px",
            		"visible": "true"
            	},
            	"board": {
            		"id": "board",
            		"visible": "true"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#242D40",
            		"titletextfont": "bold 12pt '맑은 고딕'",
            		"labeltextcolor": "#242D40",
            		"labeltextfont": "11pt '맑은 고딕'",
            		"axislinestyle": "1px solid #242D40",
            		"ticklinestyle": "1px solid #242D40",
            		"boardlinestyle": "1px solid #242D40"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": "false",
            			"boardlinestyle": "1px solid #242D40",
            			"labeltextcolor": "#242D40",
            			"labeltextfont": "10pt/normal '맑은 고딕'",
            			"titletextcolor": "#242D40",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #242D40",
            			"axislinestyle": "1px solid #242D40",
            			"labeltype": "currency",
            			"tickinterval": "20000000",
            			"autotickscale": "20",
            			"tickmax": "100000000"
            		}
            	],
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": "false",
            			"barsize": "65",
            			"itemtextvisible": "false",
            			"itemtextcolor": "#242d40",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:sales",
            			"linevisible": "true",
            			"linetype": "segment",
            			"lineareavisible": "true",
            			"lineareaopacity": "0.3",
            			"pointvisible": "true",
            			"lineopacity": "0.6",
            			"pointopacity": "1",
            			"pointlinestyle": "1px solid #333F50",
            			"pointfillstyle": "#333F50",
            			"linestyle": "1px solid #333F50",
            			"linefillstyle": "#242D40",
            			"lineareafillstyle": "#d6dce5"
            		}
            	]
            });
            obj.set_categorycolumn("bind:month");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("lb_monthly","54.4%","4.67%","13.33%","8%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("12");
            obj.set_text("월 별 매출현황");
            obj.set_font("bold 18px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("#242d40");
            this.div_main.addChild(obj.name, obj);

            obj = new BasicChart("basicChart_dailly","3.33%","19.33%","42.67%","60.4%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("13");
            obj.set_binddataset("ds_sales_daily");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Daily Chart",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"visible": "false"
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "1px",
            		"trackbarlinestyle": "0px none",
            		"size": "12",
            		"linestyle": "0px solid transparent"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#242d40",
            		"linestyle": "0px none",
            		"textcolor": "white",
            		"textfont": "10pt/normal '맑은 고딕'",
            		"padding": "5px",
            		"visible": "true"
            	},
            	"board": {
            		"id": "board"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#242d40",
            		"titletextfont": "bold 12pt '맑은 고딕'",
            		"labeltextcolor": "#242d40",
            		"labeltextfont": "11pt '맑은 고딕'",
            		"axislinestyle": "1px solid #242D40",
            		"ticklinestyle": "1px solid #242D40",
            		"boardlinestyle": "1px solid #242D40",
            		"visible": "true"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barsize": "35",
            			"itemtextvisible": "false",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:sales",
            			"linevisible": "true",
            			"pointvisible": "true",
            			"barfillstyle": "#d6dce5",
            			"baritemtextposition": "",
            			"barlinestyle": "0px solid transparent",
            			"itemtextcolor": "#242d40",
            			"linestyle": "1px solid #333F50",
            			"pointfillstyle": "#333F50",
            			"pointlinestyle": "1px solid #333F50"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": "false",
            			"boardlinestyle": "1px solid #242d40",
            			"labeltextcolor": "#242d40",
            			"labeltextfont": "10pt/normal '맑은 고딕'",
            			"titletextcolor": "#242d40",
            			"titletextfont": "bold 12pt '맑은 고딕'",
            			"ticklinestyle": "1px solid #242d40",
            			"axislinestyle": "1px solid #242d40",
            			"visible": "true",
            			"labeltype": "number",
            			"tickmax": "2000000",
            			"tickinterval": "400000"
            		}
            	]
            });
            obj.set_categorycolumn("bind:crops_name");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("lb_line","0.67%","82.55%","98.67%","0.27%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("14");
            obj.set_background("black");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("lb_approval_delay","51.80%","89.13%","8.00%","3.76%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("15");
            obj.set_text("작성중인 결재건");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("#242d40");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("ed_approval_delay","57.07%","88.99%","3.27%","4.30%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("16");
            obj.set_cssclass("main_chart");
            obj.set_enable("true");
            obj.set_enableevent("false");
            obj.set_textAlign("right");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_approval_delay","62.80%","88.46%","2.67%","4.97%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("17");
            obj.set_icon("url(\'imagerc::approval.png\')");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("lb_approval_delay_num","60.60%","89.26%","2.00%","3.76%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("18");
            obj.set_text("2건");
            obj.set_color("#242d40");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("lb_approval_emp","78.40%","89.13%","8.00%","3.76%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("19");
            obj.set_text("진행중인 결재건");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_color("#242d40");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("ed_approval_emp","84.20%","89.26%","3.27%","3.76%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("20");
            obj.set_cssclass("main_chart");
            obj.set_enable("true");
            obj.set_enableevent("false");
            obj.set_textAlign("right");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_approval_emp","89.80%","88.46%","2.67%","4.97%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("21");
            obj.set_icon("url(\'imagerc::approval.png\')");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("lb_approval_emp_num","87.53%","89.13%","2.00%","3.76%",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("22");
            obj.set_text("5건");
            obj.set_color("#242d40");
            obj.set_font("bold 14px/normal \"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("center");
            this.div_main.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1500,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_main.xfdl", function() {

        this.menu_department_onmenuclick = function(obj,e)
        {
        	/* 1. 인사관리 - 사원관리 */
        	if(e.id == "row_emp"){//사원조회
        		this.div_main.set_url("FrameBase::Form_emp.xfdl");
        	}
        	else if(e.id == "row_dept"){//부서조회
        		this.div_main.set_url("FrameBase::Form_dept.xfdl");
        	}
        	else if(e.id == "row_rank"){//직급조회
        		this.div_main.set_url("FrameBase::Form_rank.xfdl");
        	}
        	else if(e.id == "row_position"){//직책조회
        		this.div_main.set_url("FrameBase::Form_position.xfdl");
        	}
        	/* 1. 인사관리 - 근태관리 */
        	else if(e.id == "row_attendanceRecord"){//근태항목조회
        		this.div_main.set_url("FrameBase::Form_attendanceRecord.xfdl");
        	}
        	else if(e.id == "row_attendance_emp"){//근태내역조회 (권한:일반사원)
        		this.div_main.set_url("FrameBase::Form_attendance_emp.xfdl");
        	}
        	else if(e.id == "row_attendance_mgr"){//근태신청조회 (권한:관리자)
        		this.div_main.set_url("FrameBase::Form_attendance_mgr.xfdl");
        	}
        	/* 1. 인사관리 - 급여관리 */
        	else if(e.id == "row_sal"){//급여내역조회
        		this.div_main.set_url("FrameBase::Form_sal.xfdl");
        	}

        	/* 2. 영업관리 - 거래처관리 */
        	else if(e.id == "row_account"){//거래처조회
        		this.div_main.set_url("FrameBase::Form_account.xfdl");
        	}
        	/* 2. 영업관리 - 거래내역관리 */
        	else if(e.id == "row_deal"){//거래내역조회
        		this.div_main.set_url("FrameBase::Form_deal.xfdl");
        	}

        	/* 3. 재고관리 - 품목관리 */
        	else if(e.id == "row_crops"){//품목조회
        		this.div_main.set_url("FrameBase::Form_crops.xfdl");
        	}
        	/* 3. 재고관리 - 지점관리 */
        	else if(e.id == "row_branch"){//지점조회
        		this.div_main.set_url("FrameBase::Form_branch.xfdl");
        	}
        	/* 3. 재고관리 - 입고/출고관리 */
        	else if(e.id == "row_inout"){//입고/출고조회
        		this.div_main.set_url("FrameBase::Form_inout.xfdl");
        	}
        	/* 3. 재고관리 - 재고관리 */
        	else if(e.id == "row_stock"){//재고조회
        		this.div_main.set_url("FrameBase::Form_stock.xfdl");
        	}

        	/* 4. 결재관리 - 개인함 (권한:일반사원)*/
        	else if(e.id == "row_approval_emp"){//기안함
        		this.div_main.set_url("FrameBase::Form_approval_emp.xfdl");
        	}
        	else if(e.id == "row_approval_emp_delay"){//임시보관함
        		this.div_main.set_url("FrameBase::Form_approval_emp_delay.xfdl");
        	}
        	/* 4. 결재관리 - 결재함 (권한:관리자) */
        	else if(e.id == "row_approval_mgr_pending"){//미결함
        		this.div_main.set_url("FrameBase::Form_approval_mgr_pending.xfdl");
        	}
        	else if(e.id == "row_approval_mgr_decide"){//기결함
        		this.div_main.set_url("FrameBase::Form_approval_mgr_decide.xfdl");
        	}
        	else if(e.id == "row_approval_mgr_refuse"){//반려함
        		this.div_main.set_url("FrameBase::Form_approval_mgr_refuse.xfdl");
        	}

        };

        this.btn_info_upd_onclick = function(obj,e)
        {
        	//alert("정보변경");
        	var objChildFrame = new ChildFrame();//ChildFrame생성
        	objChildFrame.init("popup_info"
        	                  , 700//x좌표
        					  , 100//y좌표
        					  , 442//가로
        					  , 460//높이
        					  , null
        					  , null
        					  , "FrameBase::Form_info.xfdl");
        	/*param1 : id, param2 : 값 */
            this.addChild("childframeNew", objChildFrame);//ChildFrame추가하기
        	this.childframeNew.set_border("1px solid #999999");//모달창 border설정
        	this.childframeNew.set_dragmovetype("normal");//모달창 움직임 여부 설정
        	objChildFrame.show();
        };

        this.btn_logout_onclick = function(obj,e)
        {
        	alert("로그아웃 되었습니다.");
        	this.go("FrameBase::Form_login.xfdl");
        };

        this.Form_main_onload = function(obj,e)
        {
        	this.setTimer(1, 60000);
        	var objApp = nexacro.getApplication();
        	var objDs = objApp.gb_login;
        	//alert("사원이름 : " + objDs.getColumn(0,2)); // var로 선언한 변수명을 통해 데이터셋에 접근 가능.
        	//alert("부서이름 : " + objDs.getColumn(0,3));
        	this.lb_emp.set_text(objDs.getColumn(0,"EMP_NAME") + "/" + objDs.getColumn(0,"DEPT_NAME"));

        };

        this.btn_home_onclick = function(obj,e)
        {
        	this.go("FrameBase::Form_main.xfdl");
        };

        this.Form_main_ontimer = function(obj,e)
        {
        	this.div_main.form.basicChart_dailly.runAnimation();
        	this.div_main.form.basicChart_monthly.runAnimation();
        };
        /* rowcount 설정
        	var index = 0;
        	var count = dataset.getRowCount();//조회한 dataset 전체 row의 갯수
        	for(var i=0;i<count;i++){
        		if(dataset.getColumn(i,"해당컬럼id") == "가져올 값"){
        			index++;
        		}
        	edit.set_value(index);//eidt에 가져온 값 담기
        	}
        */
        this.btn_approval_delay_onclick = function(obj,e)
        {
        	/*
        	if(index < 1){
        	button.set_enable(false);//버튼 비활성화
        	}
        	else{
        	*/
        		this.div_main.set_url("FrameBase::Form_approval_emp_delay.xfdl");
        		//this.go("FrameBase::Form_approval_emp_delay.xfdl");
        	//}
        };

        this.btn_approval_emp_onclick = function(obj,e)
        {
        	/*
        	if(index < 1){
        	button.set_enable(false);//버튼 비활성화
        	}
        	else{*/
        		this.div_main.set_url("FrameBase::Form_approval_emp.xfdl");
        		//this.go("FrameBase::Form_approval_emp.xfdl");
        	//}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_main_onload,this);
            this.addEventHandler("ontimer",this.Form_main_ontimer,this);
            this.menu_department.addEventHandler("onmenuclick",this.menu_department_onmenuclick,this);
            this.btn_info_upd.addEventHandler("onclick",this.btn_info_upd_onclick,this);
            this.btn_logout.addEventHandler("onclick",this.btn_logout_onclick,this);
            this.btn_home.addEventHandler("onclick",this.btn_home_onclick,this);
            this.div_main.form.lb_monthly.addEventHandler("onclick",this.Static_onclick,this);
            this.div_main.form.lb_approval_delay.addEventHandler("onclick",this.lb_approval_delay_onclick,this);
            this.div_main.form.btn_approval_delay.addEventHandler("onclick",this.btn_approval_delay_onclick,this);
            this.div_main.form.btn_approval_emp.addEventHandler("onclick",this.btn_approval_emp_onclick,this);
        };

        this.loadIncludeScript("Form_main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
