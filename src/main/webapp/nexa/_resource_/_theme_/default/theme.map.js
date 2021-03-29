(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
			"Form" :
			{
				"self" :
				{
					"enabled" :
					{
						"color" : nexacro.ColorObject("black"),
						"font" : nexacro.FontObject("normal 14px \"Malgun Gothic\",\"Arial\"")
					},
					"contents" :
					{
					}
				}
			},
			"MainFrame" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("normal 14px \"Malgun Gothic\",\"Arial\"")
					},
					"disabled" :
					{
						"font" : nexacro.FontObject("normal 14px \"Malgun Gothic\",\"Arial\"")
					},
					"deactivate" :
					{
						"font" : nexacro.FontObject("normal 14px \"Malgun Gothic\",\"Arial\"")
					}
				}
			},
			"ChildFrame" :
			{
				"self" :
				{
					"disabled" :
					{
					},
					"deactivate" :
					{
					}
				}
			},
			"FrameSet" :
			{
				"self" :
				{
					"enabled" :
					{
						"font" : nexacro.FontObject("normal 14px \"Malgun Gothic\",\"Arial\"")
					},
					"disabled" :
					{
						"font" : nexacro.FontObject("normal 14px \"Malgun Gothic\",\"Arial\"")
					},
					"deactivate" :
					{
						"font" : nexacro.FontObject("normal 14px \"Malgun Gothic\",\"Arial\"")
					}
				}
			},
			"FileUpload" :
			{
				"self" :
				{
					"mouseover" :
					{
					},
					"focused" :
					{
					},
					"selected" :
					{
					},
					"disabled" :
					{
					}
				}
			},
			"fileuploaditem" :
			{
				"parent" :
				{
					"FileUpload" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #D6DCE5, 0px none, 1px solid #D6DCE5,1px solid #D6DCE5")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #D6DCE5, 0px none, 1px solid #D6DCE5,1px solid #D6DCE5")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #D6DCE5, 0px none, 1px solid #D6DCE5,1px solid #D6DCE5")
							}
						}
					}
				}
			},
			"fileuploaditembutton" :
			{
				"parent" :
				{
					"fileuploaditem" :
					{
						"parent" :
						{
							"FileUpload" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px none, 1px none, 1px none, 2px solid #D6DCE5"),
										"padding" : nexacro.PaddingObject("0px 10px 1px 10px"),
										"textPadding" : nexacro.PaddingObject("0px"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\",\"Arial\"")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px none, 1px none, 1px none, 2px solid #D6DCE5"),
										"padding" : nexacro.PaddingObject("0px 10px 1px 10px"),
										"textPadding" : nexacro.PaddingObject("0px"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\",\"Arial\"")
									},
									"selected" :
									{
										"border" : nexacro.BorderObject("1px none, 1px none, 1px none, 2px solid #D6DCE5"),
										"padding" : nexacro.PaddingObject("0px 10px 1px 10px"),
										"textPadding" : nexacro.PaddingObject("0px"),
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 12px/normal \"Malgun Gothic\",\"Arial\"")
									},
									"mouseover" :
									{
										"color" : nexacro.ColorObject("#8497B0")
									},
									"pushed" :
									{
										"color" : nexacro.ColorObject("#8497B0")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#8497B0")
									}
								}
							}
						}
					}
				}
			},
			"fileuploaditemedit" :
			{
				"parent" :
				{
					"fileuploaditem" :
					{
						"parent" :
						{
							"FileUpload" :
							{
								"self" :
								{
									"disabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#ffffff")
									}
								}
							}
						}
					}
				}
			},
			"Calendar" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("black")
					}
				}
			},
			"CalendarControl" :
			{
				"self" :
				{
					"readonly" :
					{
					}
				}
			},
			"calendaredit" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
								"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"mouseover" :
							{
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
								"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"focused" :
							{
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
								"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
								"letterSpacing" : nexacro.CSSValueObject("0px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("black")
							},
							"nulltext" :
							{
								"color" : nexacro.ColorObject("#8497B0")
							},
							"readonly" :
							{
								"color" : nexacro.ColorObject("black")
							}
						}
					},
					"cellcalendar" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
										"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
										"letterSpacing" : nexacro.CSSValueObject("0px")
									},
									"mouseover" :
									{
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
										"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
										"letterSpacing" : nexacro.CSSValueObject("0px")
									},
									"focused" :
									{
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
										"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
										"letterSpacing" : nexacro.CSSValueObject("0px")
									},
									"readonly" :
									{
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
										"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
										"letterSpacing" : nexacro.CSSValueObject("0px")
									},
									"nulltext" :
									{
										"padding" : nexacro.PaddingObject("0px 5px 1px 5px"),
										"font" : nexacro.FontObject("9pt \"Malgun Gothic\",\"Arial\""),
										"letterSpacing" : nexacro.CSSValueObject("0px")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("black")
									}
								}
							}
						}
					}
				}
			},
			"dropbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calendar.png')"),
								"padding" : nexacro.PaddingObject("0px 2px 0px 2px")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Calendar.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Calendar.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Calendar.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Calendar_D.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Calendar_D.png\")")
							}
						}
					},
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnM.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/com_WF_dropBtnD.png\")")
							}
						}
					},
					"cellcalendar" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calendar.png')"),
										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calendar.png')"),
										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
									},
									"selected" :
									{
										"border" : nexacro.BorderObject("0px none"),
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calendar.png')"),
										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Calendar.png\")")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Calendar_D.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_Calendar_D.png\")")
									}
								}
							}
						}
					}
				}
			},
			"calendarspinupbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup.png')")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup.png')")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_P.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_D.png')")
							}
						}
					},
					"CalendarControl" :
					{
						"self" :
						{
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_P.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_D.png')")
							}
						}
					},
					"cellcalendar" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup.png')")
									},
									"focused" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup.png')")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup.png')")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_O.png')")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_P.png')")
									}
								}
							}
						}
					}
				}
			},
			"calendarspindownbutton" :
			{
				"parent" :
				{
					"Calendar" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_P.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_D.png')")
							}
						}
					},
					"CalendarControl" :
					{
						"self" :
						{
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_P.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_D.png')")
							}
						}
					},
					"cellcalendar" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
									},
									"focused" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
									},
									"selected" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/spin_WF_spinDownN.png\")")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_O.png')")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_P.png')")
									}
								}
							}
						}
					}
				}
			},
			"CheckBox" :
			{
				"self" :
				{
					"enabled" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box.png')"),
						"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
					},
					"mouseover" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_O.png')")
					},
					"readonly" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_D.png')")
					},
					"selected" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_S.png')")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999"),
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_D.png')")
					},
					"disabled_selected" :
					{
						"color" : nexacro.ColorObject("#999999"),
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_DS.png')")
					}
				}
			},
			"CheckBoxControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box.png')"),
						"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px")
					},
					"mouseover" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_O.png')")
					},
					"readonly" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_D.png')")
					},
					"selected" :
					{
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_S.png')")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999"),
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_D.png')")
					},
					"disabled_selected" :
					{
						"color" : nexacro.ColorObject("#999999"),
						"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Box_DS.png')")
					}
				}
			},
			"Combo" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"readonly" :
					{
					}
				}
			},
			"comboedit" :
			{
				"parent" :
				{
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("black")
							},
							"nulltext" :
							{
								"color" : nexacro.ColorObject("black")
							}
						}
					}
				}
			},
			"combolist" :
			{
				"parent" :
				{
					"Combo" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #242D40")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #242D40")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #242D40")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #242D40")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("1px solid #242D40")
							}
						}
					},
					"cellcombo" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Arial\""),
										"color" : nexacro.ColorObject("black")
									}
								}
							},
							"ListViewCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"font" : nexacro.FontObject("12px Gulim"),
										"color" : nexacro.ColorObject("#555555")
									}
								}
							}
						}
					}
				}
			},
			"listboxitem" :
			{
				"parent" :
				{
					"combolist" :
					{
						"parent" :
						{
							"Combo" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("4px 5px 4px 5px")
									},
									"focused" :
									{
										"padding" : nexacro.PaddingObject("4px 5px 4px 5px")
									},
									"disabled" :
									{
										"padding" : nexacro.PaddingObject("4px 5px 4px 5px")
									},
									"mouseover" :
									{
										"color" : nexacro.ColorObject("black")
									},
									"selected" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"mouseover_selected" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									}
								}
							},
							"cellcombo" :
							{
								"parent" :
								{
									"GridCellControl" :
									{
										"self" :
										{
											"mouseover" :
											{
											}
										}
									},
									"ListViewCellControl" :
									{
										"self" :
										{
											"mouseover" :
											{
											}
										}
									}
								}
							}
						}
					},
					"ListBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#555555"),
								"padding" : nexacro.PaddingObject("2px 9px 3px 9px")
							},
							"mouseover" :
							{
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
							}
						}
					},
					"ListBoxControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#555555"),
								"padding" : nexacro.PaddingObject("2px 9px 3px 9px")
							},
							"mouseover" :
							{
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"Edit" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #333F50"),
						"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("black")
					}
				}
			},
			"EditControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
					}
				}
			},
			"Grid" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("2px solid #242D40, 1px solid #EDEFF3, 1px solid #EDEFF3, 1px solid #EDEFF3")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("2px solid #242D40, 1px solid #EDEFF3, 1px solid #EDEFF3, 1px solid #EDEFF3")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("2px solid #242D40, 1px solid #EDEFF3, 1px solid #EDEFF3, 1px solid #EDEFF3")
					},
					"disabled" :
					{
						"border" : nexacro.BorderObject("2px solid #242D40, 1px solid #EDEFF3, 1px solid #EDEFF3, 1px solid #EDEFF3")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("2px solid #242D40, 1px solid #EDEFF3, 1px solid #EDEFF3, 1px solid #EDEFF3")
					}
				}
			},
			"head" :
			{
				"parent" :
				{
					"Grid" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #EDEFF3, 0px none"),
								"color" : nexacro.ColorObject("#242D40")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #EDEFF3, 0px none"),
								"color" : nexacro.ColorObject("#242D40")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #EDEFF3, 0px none"),
								"color" : nexacro.ColorObject("#242D40")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #EDEFF3, 0px none"),
								"color" : nexacro.ColorObject("#242D40")
							}
						}
					},
					"DatePickerControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("5px 0px 0px 0px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("black")
							}
						}
					}
				}
			},
			"cell" :
			{
				"parent" :
				{
					"row" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"border" : nexacro.BorderObject("0px none , 1px solid #EDEFF3, 1px solid #EDEFF3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"color" : nexacro.ColorObject("#242D40"),
												"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Arial\"")
											},
											"mouseover" :
											{
												"border" : nexacro.BorderObject("0px none , 1px solid #EDEFF3, 1px solid #EDEFF3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"color" : nexacro.ColorObject("#242D40"),
												"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Arial\"")
											},
											"focused" :
											{
												"border" : nexacro.BorderObject("0px none , 1px solid #EDEFF3, 1px solid #EDEFF3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"color" : nexacro.ColorObject("#242D40"),
												"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Arial\"")
											},
											"selected" :
											{
												"border" : nexacro.BorderObject("0px none , 1px solid #EDEFF3, 1px solid #EDEFF3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"color" : nexacro.ColorObject("#242D40"),
												"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Arial\"")
											},
											"disabled" :
											{
												"border" : nexacro.BorderObject("0px none , 1px solid #EDEFF3, 1px solid #EDEFF3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"color" : nexacro.ColorObject("#242D40"),
												"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Arial\"")
											},
											"readonly" :
											{
												"border" : nexacro.BorderObject("0px none , 1px solid #EDEFF3, 1px solid #EDEFF3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"color" : nexacro.ColorObject("#242D40"),
												"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Arial\"")
											},
											"blinked" :
											{
												"border" : nexacro.BorderObject("0px none , 1px solid #EDEFF3, 1px solid #EDEFF3 , 0px none"),
												"padding" : nexacro.PaddingObject("0px 6px 1px 6px"),
												"color" : nexacro.ColorObject("#242D40"),
												"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Arial\"")
											}
										}
									}
								}
							},
							"body" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"border" : nexacro.BorderObject("0px none, 1px solid #EDEFF3, 1px solid #EDEFF3, 0px none"),
												"padding" : nexacro.PaddingObject("2px 4px"),
												"color" : nexacro.ColorObject("black"),
												"font" : nexacro.FontObject("10pt/normal \"Malgun Gothic\",\"Arial\"")
											},
											"focused" :
											{
												"border" : nexacro.BorderObject("0px none, 1px solid #EDEFF3, 1px solid #EDEFF3, 0px none"),
												"padding" : nexacro.PaddingObject("2px 4px"),
												"color" : nexacro.ColorObject("black"),
												"font" : nexacro.FontObject("10pt/normal \"Malgun Gothic\",\"Arial\"")
											},
											"readonly" :
											{
												"border" : nexacro.BorderObject("0px none, 1px solid #EDEFF3, 1px solid #EDEFF3, 0px none"),
												"padding" : nexacro.PaddingObject("2px 4px"),
												"color" : nexacro.ColorObject("black"),
												"font" : nexacro.FontObject("10pt/normal \"Malgun Gothic\",\"Arial\"")
											},
											"blinked" :
											{
												"border" : nexacro.BorderObject("0px none, 1px solid #EDEFF3, 1px solid #EDEFF3, 0px none"),
												"padding" : nexacro.PaddingObject("2px 4px"),
												"color" : nexacro.ColorObject("black"),
												"font" : nexacro.FontObject("10pt/normal \"Malgun Gothic\",\"Arial\"")
											},
											"mouseover" :
											{
											},
											"selected" :
											{
												"color" : nexacro.ColorObject("black")
											}
										}
									}
								}
							},
							"summary" :
							{
								"parent" :
								{
									"Grid" :
									{
										"self" :
										{
											"enabled" :
											{
												"border" : nexacro.BorderObject("1px solid #EDEFF3, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#242D40"),
												"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											},
											"focused" :
											{
												"border" : nexacro.BorderObject("1px solid #EDEFF3, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#242D40"),
												"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											},
											"mouseover" :
											{
												"border" : nexacro.BorderObject("1px solid #EDEFF3, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#242D40"),
												"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											},
											"selected" :
											{
												"border" : nexacro.BorderObject("1px solid #EDEFF3, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#242D40"),
												"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											},
											"blinked" :
											{
												"border" : nexacro.BorderObject("1px solid #EDEFF3, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#242D40"),
												"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											},
											"disabled" :
											{
												"border" : nexacro.BorderObject("1px solid #EDEFF3, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#242D40"),
												"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											},
											"readonly" :
											{
												"border" : nexacro.BorderObject("1px solid #EDEFF3, 0px none, 0px none, 0px none"),
												"padding" : nexacro.PaddingObject("0px 8px"),
												"color" : nexacro.ColorObject("#242D40"),
												"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\",\"Arial\""),
												"letterSpacing" : nexacro.CSSValueObject("-0.5px")
											}
										}
									}
								}
							}
						}
					},
					"body" :
					{
						"parent" :
						{
							"ListView" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"readonly" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #c4c9cf")
									}
								}
							}
						}
					},
					"detail" :
					{
						"parent" :
						{
							"ListView" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"disabled" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"readonly" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #dbdee2"),
										"padding" : nexacro.PaddingObject("4px 4px 4px 4px")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #c4c9cf")
									}
								}
							}
						}
					}
				},
				"class" :
				{
					"Cellgrd_WF_Head" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"color" : nexacro.ColorObject("#000000"),
														"font" : nexacro.FontObject("normal 700 14px/normal \"Malgun Gothic\",\"Arial\""),
														"border" : nexacro.BorderObject("0px none,1px solid #EDEFF3,1px solid #EDEFF3,0px none")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"body" :
			{
				"parent" :
				{
					"Grid" :
					{
						"self" :
						{
							"focused" :
							{
							},
							"mouseover" :
							{
							},
							"readonly" :
							{
							}
						}
					},
					"ListView" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"selected" :
							{
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"selection" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"Grid" :
							{
								"self" :
								{
									"enabled" :
									{
										"border" : nexacro.BorderObject("2px solid #EDEFF3")
									}
								}
							}
						}
					}
				}
			},
			"cellprogressbar" :
			{
				"parent" :
				{
					"cell" :
					{
						"parent" :
						{
							"row" :
							{
								"parent" :
								{
									"body" :
									{
										"parent" :
										{
											"Grid" :
											{
												"self" :
												{
													"enabled" :
													{
														"border" : nexacro.BorderObject("1px solid #8497B0"),
														"padding" : nexacro.PaddingObject("2px")
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					}
				}
			},
			"progressbartext" :
			{
				"parent" :
				{
					"cellprogressbar" :
					{
						"parent" :
						{
							"cell" :
							{
								"parent" :
								{
									"row" :
									{
										"parent" :
										{
											"body" :
											{
												"parent" :
												{
													"Grid" :
													{
														"self" :
														{
															"enabled" :
															{
																"color" : nexacro.ColorObject("#ffffff"),
																"padding" : nexacro.PaddingObject("0px 0px 0px 3px"),
																"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Arial\"")
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					},
					"ProgressBar" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							}
						}
					},
					"ProgressBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							}
						}
					},
					"progressbar" :
					{
						"parent" :
						{
							"StatusBarControl" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"summary" :
			{
				"parent" :
				{
					"Grid" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #EDEFF3, 0px none, 0px none, 0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #EDEFF3, 0px none, 0px none, 0px none")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #EDEFF3, 0px none, 0px none, 0px none")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #EDEFF3, 0px none, 0px none, 0px none")
							},
							"readonly" :
							{
								"border" : nexacro.BorderObject("1px solid #EDEFF3, 0px none, 0px none, 0px none")
							}
						}
					}
				}
			},
			"hscrollbar" :
			{
				"parent" :
				{
					"Grid" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #EDEFF3, 0px none, 0px none, 0px none")
							}
						}
					}
				}
			},
			"vscrollbar" :
			{
				"parent" :
				{
					"Grid" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 0px none, 1px solid #EDEFF3")
							}
						}
					}
				}
			},
			"cellbutton" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #EDEFF3"),
								"color" : nexacro.ColorObject("#242D40"),
								"font" : nexacro.FontObject("14px \"Malgun Gothic\",\"Arial\"")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #EDEFF3"),
								"color" : nexacro.ColorObject("#242D40"),
								"font" : nexacro.FontObject("14px \"Malgun Gothic\",\"Arial\"")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #EDEFF3"),
								"color" : nexacro.ColorObject("#242D40"),
								"font" : nexacro.FontObject("14px \"Malgun Gothic\",\"Arial\"")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #EDEFF3"),
								"color" : nexacro.ColorObject("#242D40")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #EDEFF3"),
								"color" : nexacro.ColorObject("#242D40")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#242D40")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim"),
								"color" : nexacro.ColorObject("#555555"),
								"border" : nexacro.BorderObject("1px solid #c2c2c2")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #a0a0a0")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #a0a0a0")
							},
							"pushed" :
							{
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#bbbbbb"),
								"border" : nexacro.BorderObject("1px solid #d9d9d9")
							}
						}
					}
				}
			},
			"cellcalendar" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #242D40")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #242D40")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #242D40")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("black")
							},
							"readonly" :
							{
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					}
				}
			},
			"cellcheckbox" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Arial\"")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					}
				}
			},
			"cellcombo" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px \"Malgun Gothic\",\"Arial\"")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					}
				}
			},
			"celledit" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim"),
								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim"),
								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"cellexpandbutton" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Grdexpand.png')")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Grdexpand.png')")
							}
						}
					}
				}
			},
			"cellmaskedit" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim"),
								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim"),
								"border" : nexacro.BorderObject("1px solid #d5d5d5"),
								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #5a86cd")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"celltextarea" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					},
					"ListViewCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"font" : nexacro.FontObject("12px Gulim")
							}
						}
					}
				}
			},
			"treeitemtext" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"font" : nexacro.FontObject("12px Gulim"),
										"color" : nexacro.ColorObject("#666666")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#999999")
									}
								}
							}
						}
					}
				}
			},
			"treeitembutton" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"expand" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Treeexpand.png')")
									},
									"collapse" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Treecollapse.png')")
									}
								}
							}
						}
					}
				}
			},
			"treeitemimage" :
			{
				"parent" :
				{
					"celltreeitem" :
					{
						"parent" :
						{
							"GridCellControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/img_WF_Treeitem.png')")
									},
									"expand" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/img_WF_Treeexpand.png')")
									},
									"collapse" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/img_WF_Treecollapse.png')")
									}
								}
							}
						}
					}
				}
			},
			"celltreeline" :
			{
				"parent" :
				{
					"GridCellControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px dotted #909090")
							}
						}
					}
				}
			},
			"groupboxcontents" :
			{
				"parent" :
				{
					"GroupBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d6d4d5")
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"groupboxtitle" :
			{
				"parent" :
				{
					"GroupBox" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 4px 0px 4px")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"ImageViewer" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"disabled" :
					{
					}
				}
			},
			"imagetext" :
			{
				"parent" :
				{
					"ImageViewer" :
					{
						"self" :
						{
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"ListBox" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"disabled" :
					{
					}
				}
			},
			"ListBoxControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"disabled" :
					{
					}
				}
			},
			"MaskEdit" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40"),
						"padding" : nexacro.PaddingObject("0px 5px 1px 5px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#242D40")
					}
				}
			},
			"MaskEditControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("0px none"),
						"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
					}
				}
			},
			"Menu" :
			{
				"self" :
				{
					"enabled" :
					{
						"padding" : nexacro.PaddingObject("0px 12px 0px 12px")
					},
					"mouseover" :
					{
						"padding" : nexacro.PaddingObject("0px 12px 0px 12px")
					},
					"focused" :
					{
						"padding" : nexacro.PaddingObject("0px 12px 0px 12px")
					},
					"disabled" :
					{
						"padding" : nexacro.PaddingObject("0px 12px 0px 12px")
					}
				}
			},
			"prevbutton" :
			{
				"parent" :
				{
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 5px 0px 15px"),
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menuprev.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menuprev_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menuprev_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menuprev_D.png')")
							}
						}
					},
					"menupopupmenu" :
					{
						"parent" :
						{
							"Menu" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev.png')")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev_O.png')")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev_D.png')")
									}
								}
							}
						}
					},
					"PopupMenu" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2_D.png')")
							}
						}
					},
					"PopupMenuControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenuprev2_D.png')")
							}
						}
					},
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftN.png\")"),
								"padding" : nexacro.PaddingObject("0px 10px 10px 20px")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftM.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftP.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midLeftD.png\")")
							}
						}
					},
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calprev.png')")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calprev_O.png')")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calprev_O.png')")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calprev.png')")
									}
								}
							}
						}
					}
				}
			},
			"nextbutton" :
			{
				"parent" :
				{
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 15px 0px 5px"),
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menunext.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menunext_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menunext_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Menunext_D.png')")
							}
						}
					},
					"menupopupmenu" :
					{
						"parent" :
						{
							"Menu" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext.png')")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext_O.png')")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext_D.png')")
									}
								}
							}
						}
					},
					"PopupMenu" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2_D.png')")
							}
						}
					},
					"PopupMenuControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popmenunext2_D.png')")
							}
						}
					},
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightN.png\")"),
								"padding" : nexacro.PaddingObject("0px 5px 10px 0px")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightM.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightM.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightM.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightP.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/btn_AF_midRightD.png\")")
							}
						}
					},
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calnext.png')")
									},
									"mouseover" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calnext_O.png')")
									},
									"pushed" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calnext_O.png')")
									},
									"disabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calnext.png')")
									}
								}
							}
						}
					}
				}
			},
			"menuitem" :
			{
				"parent" :
				{
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 8px"),
								"color" : nexacro.ColorObject("#ffffff"),
								"font" : nexacro.FontObject("bold 15px \"Malgun Gothic\",\"Arial\"")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#D6DCE5")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#8497B0")
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#8497B0")
							}
						}
					}
				}
			},
			"menupopupmenu" :
			{
				"parent" :
				{
					"Menu" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#333F50")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#333F50")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#8497B0")
							}
						}
					}
				}
			},
			"popupmenuitem" :
			{
				"parent" :
				{
					"menupopupmenu" :
					{
						"parent" :
						{
							"Menu" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#242D40"),
										"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #8497B0, 0px none"),
										"padding" : nexacro.PaddingObject("3px 8px 3px 8px")
									},
									"mouseover" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"focused" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"selected" :
									{
										"color" : nexacro.ColorObject("#ffffff")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#242D40")
									}
								}
							}
						}
					},
					"PopupMenu" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("8px 5px 8px 5px")
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"focused" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#242D40")
							}
						}
					},
					"PopupMenuControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("8px 5px 8px 5px")
							},
							"selected" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"mouseover" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"focused" :
							{
								"color" : nexacro.ColorObject("#ffffff")
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#242D40")
							}
						}
					}
				}
			},
			"popupmenuitemcheckbox" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 7px 0px 0px"),
												"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Popupmenu_O.png')")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/chk_WF_Popupmenu_O.png')")
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							},
							"PopupMenuControl" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemtext" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"enabled" :
											{
												"color" : nexacro.ColorObject("#8497B0"),
												"padding" : nexacro.PaddingObject("0px 20px 0px 0px")
											},
											"mouseover" :
											{
												"color" : nexacro.ColorObject("#ffffff")
											},
											"disabled" :
											{
												"color" : nexacro.ColorObject("#242D40")
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("2px 10px 1px 4px"),
										"color" : nexacro.ColorObject("#8497B0")
									}
								}
							},
							"PopupMenuControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("2px 10px 1px 4px"),
										"color" : nexacro.ColorObject("#8497B0")
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemhotkeytext" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"enabled" :
											{
												"color" : nexacro.ColorObject("#242D40"),
												"padding" : nexacro.PaddingObject("0px 7px 0px 0px")
											},
											"mouseover" :
											{
												"color" : nexacro.ColorObject("#ffffff")
											},
											"disabled" :
											{
												"color" : nexacro.ColorObject("#242D40")
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#242D40"),
										"padding" : nexacro.PaddingObject("0px 7px 0px 0px")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#8497B0")
									}
								}
							},
							"PopupMenuControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#242D40"),
										"padding" : nexacro.PaddingObject("0px 7px 0px 0px")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#8497B0")
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemexpandimage" :
			{
				"parent" :
				{
					"popupmenuitem" :
					{
						"parent" :
						{
							"menupopupmenu" :
							{
								"parent" :
								{
									"Menu" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 0px 2px 0px"),
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popupexpand.png')")
											}
										}
									}
								}
							},
							"PopupMenu" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popupexpand2.png')")
									}
								}
							},
							"PopupMenuControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Popupexpand2.png')")
									}
								}
							}
						}
					}
				}
			},
			"Plugin" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"PluginControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					}
				}
			},
			"PopupMenu" :
			{
				"self" :
				{
					"enabled" :
					{
						"color" : nexacro.ColorObject("#242D40"),
						"border" : nexacro.BorderObject("0px none")
					},
					"mouseover" :
					{
						"color" : nexacro.ColorObject("#242D40")
					}
				}
			},
			"PopupMenuControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"color" : nexacro.ColorObject("#242D40"),
						"border" : nexacro.BorderObject("0px none")
					}
				}
			},
			"ProgressBar" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #aeaeae, 1px solid #d2d0d1, 1px solid #d2d0d1, 1px solid #d2d0d1")
					}
				}
			},
			"ProgressBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #aeaeae, 1px solid #d2d0d1, 1px solid #d2d0d1, 1px solid #d2d0d1")
					}
				}
			},
			"progressbaritem" :
			{
				"parent" :
				{
					"ProgressBar" :
					{
						"self" :
						{
							"disabled" :
							{
							}
						}
					},
					"ProgressBarControl" :
					{
						"self" :
						{
							"disabled" :
							{
							}
						}
					},
					"progressbar" :
					{
						"parent" :
						{
							"StatusBarControl" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"radioitem" :
			{
				"parent" :
				{
					"Radio" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Radio.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 5px")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Radio_S.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Radio_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Radio_D.png')")
							},
							"disabled_selected" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/rdo_WF_Radio_DS.png')")
							}
						}
					}
				}
			},
			"Sketch" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"disabled" :
					{
					}
				}
			},
			"Spin" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"readonly" :
					{
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"spinedit" :
			{
				"parent" :
				{
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 3px 0px 3px")
							},
							"disabled" :
							{
								"padding" : nexacro.PaddingObject("1px 2px 0px 9px")
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"font" : nexacro.FontObject("bold 14px Malgun Gothic"),
												"color" : nexacro.ColorObject("#ffffff")
											}
										}
									}
								}
							}
						}
					},
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"font" : nexacro.FontObject("bold 14px Malgun Gothic"),
												"color" : nexacro.ColorObject("#ffffff")
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"spinupbutton" :
			{
				"parent" :
				{
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("1px 0px 0px 0px"),
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_P.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spinup_D.png')")
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 10px 0px 5px"),
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup.png')")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_O.png')")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_O.png')")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_D.png')")
											}
										}
									}
								}
							}
						}
					},
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 10px 0px 5px"),
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup.png')")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_O.png')")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_O.png')")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspinup_D.png')")
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"spindownbutton" :
			{
				"parent" :
				{
					"Spin" :
					{
						"self" :
						{
							"enabled" :
							{
								"padding" : nexacro.PaddingObject("0px 0px 2px 0px"),
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_O.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_P.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Spindown_D.png')")
							}
						}
					},
					"yearspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 10px 0px 5px"),
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown.png')")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_O.png')")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_O.png')")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_D.png')")
											}
										}
									}
								}
							}
						}
					},
					"monthspin" :
					{
						"parent" :
						{
							"head" :
							{
								"parent" :
								{
									"DatePickerControl" :
									{
										"self" :
										{
											"enabled" :
											{
												"padding" : nexacro.PaddingObject("0px 10px 0px 5px"),
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown.png')")
											},
											"mouseover" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_O.png')")
											},
											"pushed" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_O.png')")
											},
											"disabled" :
											{
												"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Calspindown_D.png')")
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"Static" :
			{
				"self" :
				{
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"StaticControl" :
			{
				"self" :
				{
					"disabled" :
					{
						"color" : nexacro.ColorObject("#999999")
					}
				}
			},
			"TextArea" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40"),
						"padding" : nexacro.PaddingObject("9px 9px 9px 9px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #D6DCE5")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("black")
					}
				}
			},
			"TextAreaControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40"),
						"padding" : nexacro.PaddingObject("9px 9px 9px 9px")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #D6DCE5")
					},
					"disabled" :
					{
						"color" : nexacro.ColorObject("black")
					}
				}
			},
			"WebBrowser" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #D6DCE5")
					}
				}
			},
			"WebBrowserControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #D6DCE5")
					}
				}
			},
			"tabbuttonitem" :
			{
				"parent" :
				{
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid, 0px solid, 0px solid"),
								"padding" : nexacro.PaddingObject("7px 12px"),
								"color" : nexacro.ColorObject("#8497B0"),
								"font" : nexacro.FontObject("normal 700 13px/12px \"Malgun Gothic\",\"Arial\"")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #333F50,1px solid #EDEFF3,0px solid #ffffff"),
								"color" : nexacro.ColorObject("#EDEFF3")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #333F50,1px solid #EDEFF3,0px solid #ffffff"),
								"color" : nexacro.ColorObject("#EDEFF3")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("2px solid #333F50,1px solid #EDEFF3,0px solid #ffffff"),
								"padding" : nexacro.PaddingObject("6px 12px 7px 12px"),
								"color" : nexacro.ColorObject("#333F50")
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"tabbuttonitemtext" :
			{
				"parent" :
				{
					"tabbuttonitem" :
					{
						"parent" :
						{
							"Tab" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"extrabutton" :
			{
				"parent" :
				{
					"tabbuttonitem" :
					{
						"parent" :
						{
							"Tab" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_AF_tabExtraBtn.png\")"),
										"padding" : nexacro.PaddingObject("0px 0px 0px 12px")
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"tabpage" :
			{
				"parent" :
				{
					"Tab" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #ffffff")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #ffffff")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #ffffff")
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"DatePickerControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #242D40")
					}
				}
			},
			"yearstatic" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\""),
										"color" : nexacro.ColorObject("#ffffff"),
										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#c7d4e2")
									}
								}
							}
						}
					}
				}
			},
			"monthstatic" :
			{
				"parent" :
				{
					"head" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\""),
										"color" : nexacro.ColorObject("#ffffff"),
										"padding" : nexacro.PaddingObject("0px 10px 0px 0px")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("black")
									}
								}
							}
						}
					}
				}
			},
			"weekband" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"weekitem" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"enabled" :
									{
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
									},
									"mouseover" :
									{
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
									},
									"readonly" :
									{
										"color" : nexacro.ColorObject("#ffffff"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
									},
									"sunday" :
									{
										"color" : nexacro.ColorObject("#ee6b67")
									},
									"saturday" :
									{
										"color" : nexacro.ColorObject("#5f9dde")
									}
								}
							}
						}
					}
				}
			},
			"dayitem" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"DatePickerControl" :
							{
								"self" :
								{
									"sunday" :
									{
										"color" : nexacro.ColorObject("#ee6b67")
									},
									"saturday" :
									{
										"color" : nexacro.ColorObject("#5f9dde")
									},
									"enabled" :
									{
										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
									},
									"focused" :
									{
										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
									},
									"readonly" :
									{
										"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
									},
									"selected" :
									{
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\""),
										"color" : nexacro.ColorObject("#ffffff")
									},
									"today" :
									{
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\""),
										"color" : nexacro.ColorObject("#ffffff")
									},
									"trailingday" :
									{
										"color" : nexacro.ColorObject("black")
									},
									"mouseover" :
									{
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
									},
									"mouseover_saturday" :
									{
										"color" : nexacro.ColorObject("#black"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
									},
									"mouseover_sunday" :
									{
										"color" : nexacro.ColorObject("#black"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
									},
									"mouseover_trailingday" :
									{
										"color" : nexacro.ColorObject("#black"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
									},
									"mouseover_today" :
									{
										"color" : nexacro.ColorObject("#black"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
									},
									"mouseover_selected" :
									{
										"color" : nexacro.ColorObject("#black"),
										"font" : nexacro.FontObject("bold 12px \"Malgun Gothic\",\"Arial\"")
									}
								}
							}
						}
					}
				}
			},
			"VScrollBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #b1b1b1"),
						"padding" : nexacro.PaddingObject("2px 2px 2px 2px")
					}
				}
			},
			"HScrollBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #b1b1b1"),
						"padding" : nexacro.PaddingObject("2px 2px 2px 2px")
					}
				}
			},
			"incbutton" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vinc.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vinc_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vinc_D.png')")
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hinc.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hinc_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hinc_D.png')")
							}
						}
					}
				}
			},
			"decbutton" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vdec.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vdec_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Vdec_D.png')")
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hdec.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hdec_O.png')")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Hdec_D.png')")
							}
						}
					}
				}
			},
			"trackbar" :
			{
				"parent" :
				{
					"VScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #888888")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #888888")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #888888")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #a8a8a8")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d8d8d8")
							}
						}
					},
					"HScrollBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("1px solid #c8c8c8")
							},
							"pushed" :
							{
								"border" : nexacro.BorderObject("1px solid #888888")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("1px solid #888888")
							},
							"selected" :
							{
								"border" : nexacro.BorderObject("1px solid #888888")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("1px solid #a8a8a8")
							},
							"disabled" :
							{
								"border" : nexacro.BorderObject("1px solid #d8d8d8")
							}
						}
					},
					"VScrollIndicatorControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("2px solid transparent")
							},
							"pushed" :
							{
							},
							"mouseover" :
							{
							}
						}
					},
					"HScrollIndicatorControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("2px solid transparent")
							},
							"pushed" :
							{
							},
							"mouseover" :
							{
							}
						}
					}
				}
			},
			"StatusBarControl" :
			{
				"self" :
				{
					"disabled" :
					{
					}
				}
			},
			"progressbar" :
			{
				"parent" :
				{
					"StatusBarControl" :
					{
						"self" :
						{
							"mouseover" :
							{
							},
							"focused" :
							{
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"progressstartcap" :
			{
				"parent" :
				{
					"progressbar" :
					{
						"parent" :
						{
							"StatusBarControl" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"progressendcap" :
			{
				"parent" :
				{
					"progressbar" :
					{
						"parent" :
						{
							"StatusBarControl" :
							{
								"self" :
								{
									"mouseover" :
									{
									},
									"disabled" :
									{
									}
								}
							}
						}
					}
				}
			},
			"statustext" :
			{
				"parent" :
				{
					"StatusBarControl" :
					{
						"self" :
						{
							"mouseover" :
							{
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"resizegrip" :
			{
				"parent" :
				{
					"StatusBarControl" :
					{
						"self" :
						{
							"mouseover" :
							{
							},
							"disabled" :
							{
							}
						}
					}
				}
			},
			"TitleBarControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
						"color" : nexacro.ColorObject("#ffffff")
					},
					"disabled" :
					{
						"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
						"color" : nexacro.ColorObject("#ffffff")
					},
					"deactivate" :
					{
						"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
						"color" : nexacro.ColorObject("#ffffff")
					}
				}
			},
			"titleicon" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"mouseover" :
							{
							},
							"disabled" :
							{
							},
							"deactivate" :
							{
							}
						}
					}
				}
			},
			"minbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							},
							"deactivate" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Min.png\")")
							}
						}
					}
				}
			},
			"maxbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							},
							"deactivate" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Max.png\")")
							}
						}
					}
				}
			},
			"normalbutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							},
							"deactivate" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Normal.png\")")
							}
						}
					}
				}
			},
			"closebutton" :
			{
				"parent" :
				{
					"TitleBarControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"focused" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"disabled" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							},
							"deactivate" :
							{
								"icon" : nexacro.UrlObject("URL(\"theme://images/img_TB_Close.png\")")
							}
						}
					}
				}
			},
			"StepControl" :
			{
				"self" :
				{
					"enabled" :
					{
						"padding" : nexacro.PaddingObject("0px 0px 10px 0px")
					}
				}
			},
			"stepitem" :
			{
				"parent" :
				{
					"StepControl" :
					{
						"self" :
						{
							"enabled" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem.png')")
							},
							"mouseover" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
							},
							"pushed" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
							},
							"selected" :
							{
								"icon" : nexacro.UrlObject("URL('theme://images/btn_WF_Stepitem_S.png')")
							}
						}
					}
				}
			},
			"ListView" :
			{
				"self" :
				{
					"enabled" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"color" : nexacro.ColorObject("#666666")
					},
					"readonly" :
					{
						"border" : nexacro.BorderObject("1px solid #d5d5d5"),
						"color" : nexacro.ColorObject("#666666")
					},
					"mouseover" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"focused" :
					{
						"border" : nexacro.BorderObject("1px solid #5a86cd")
					},
					"disabled" :
					{
					}
				}
			},
			"detail" :
			{
				"parent" :
				{
					"ListView" :
					{
						"self" :
						{
							"readonly" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"mouseover" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none, 0px none, 1px solid #dbdee2, 0px none"),
								"font" : nexacro.FontObject("12px Gulim")
							},
							"selected" :
							{
							},
							"disabled" :
							{
								"color" : nexacro.ColorObject("#999999")
							}
						}
					}
				}
			},
			"expandbar" :
			{
				"parent" :
				{
					"body" :
					{
						"parent" :
						{
							"ListView" :
							{
								"self" :
								{
									"enabled" :
									{
										"icon" : nexacro.UrlObject("URL('theme://images/cmb_WF_Drop.png')"),
										"border" : nexacro.BorderObject("1px solid #c2c2c2")
									},
									"mouseover" :
									{
										"border" : nexacro.BorderObject("1px solid #a0a0a0")
									},
									"focused" :
									{
										"border" : nexacro.BorderObject("1px solid #a0a0a0")
									},
									"pushed" :
									{
									},
									"selected" :
									{
									},
									"disabled" :
									{
										"color" : nexacro.ColorObject("#bbbbbb"),
										"border" : nexacro.BorderObject("1px solid #d9d9d9")
									}
								}
							}
						}
					}
				}
			}
		},
		{
			"includeStatusMap" : true
		}
		);

		var imgcache = nexacro._getImageCacheMaps();
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calendar.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calendar_D.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup_P.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spinup_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/spin_WF_spinDownN.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spindown_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spindown_P.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spindown_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_O.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_D.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_S.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_DS.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/com_WF_dropBtnN.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/com_WF_dropBtnM.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/com_WF_dropBtnD.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Grdexpand.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Treeexpand.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Treecollapse.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Treeitem.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Treeexpand.png")] = { width:14, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Treecollapse.png")] = { width:14, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menuprev.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menuprev_O.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menuprev_D.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menunext.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menunext_O.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Menunext_D.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev_O.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev_D.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext_O.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext_D.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Popupmenu_O.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popupexpand.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2_O.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenuprev2_D.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2_O.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popmenunext2_D.png")] = { width:11, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Box_F.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Popupexpand2.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_S.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_O.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_D.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_Radio_DS.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Spindown.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midLeftN.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midLeftM.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midLeftP.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midLeftD.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midRightN.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midRightM.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midRightP.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midRightD.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/tab_AF_tabExtraBtn.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calprev.png")] = { width:6, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calprev_O.png")] = { width:6, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calnext.png")] = { width:6, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calnext_O.png")] = { width:6, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspinup.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspinup_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspinup_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspindown.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspindown_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Calspindown_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vinc.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vinc_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vinc_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec_O.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec_D.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hinc.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hinc_O.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hinc_D.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec_O.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec_D.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/img_TB_Min.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_TB_Max.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_TB_Normal.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_TB_Close.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Stepitem.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Stepitem_S.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/all_WF_iconEssential.png")] = { width:5, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midDownD.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midDownM.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midDownN.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midDownP.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midLeftW.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midRightW.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midUpD.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midUpM.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midUpN.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_AF_midUpP.png")] = { width:7, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close_D.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Close_O.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max_D.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Max_O.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min_D.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Min_O.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal_D.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Normal_O.png")] = { width:30, height:30 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabextra.png")] = { width:9, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabextra_S.png")] = { width:8, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabnext.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabnext_D.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabnext_O.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabprev.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabprev_D.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Tabprev_O.png")] = { width:6, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_Popupmenu.png")] = { width:13, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop_O.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/cmb_WF_Drop_P.png")] = { width:9, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/img_grip.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/img_TF_TitleIcon.png")] = { width:14, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Grdimg.png")] = { width:12, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Htrackbar.png")] = { width:8, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Htrackbar_D.png")] = { width:8, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Menuimage.png")] = { width:210, height:50 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Menuitem2.png")] = { width:10, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Menu_O.png")] = { width:19, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Nexacro.png")] = { width:108, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Popupcheck.png")] = { width:7, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Popupcheck2.png")] = { width:7, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Vtrackbar.png")] = { width:5, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Vtrackbar_D.png")] = { width:5, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_PopItemImg.png")] = { width:8, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/titlebar_icon_nexacro17.ico")] = { width:16, height:16 };
	};
}
)();
