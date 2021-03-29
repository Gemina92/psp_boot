(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
			"Edit" :
			{
				"class" :
				{
					"main_chart" :
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
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" :
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				}
			},
			"EditControl" :
			{
				"class" :
				{
					"main_chart" :
					{
						"self" :
						{
							"enabled" :
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("1px 9px 0px 9px")
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
		
	};
}
)();
