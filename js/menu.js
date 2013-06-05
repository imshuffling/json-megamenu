$(document).ready(function(){
			$(['nav1', 'nav2', 'nav3', 'nav4', 'nav5']).each(function(){
				var nav = this;
				var con = $("#"+nav).children('.menu-container');
				$("#"+nav).hover(
					function(){
						$(".hover").mouseout();
						$(this).addClass('hover');
						var cache = $(con).children('ul');
						//check to see if content was loaded previously
						if(cache.size()){
							con.show();
						}
						else {
							$(con).show();
							$(con).html('<img class="loading" src="imgs/ajax-loader.gif" alt="Loading..." />');
							$.ajax({
								url: 'js/'+nav+'.json',
								type: 'get',
								success: function(json){					
									// output in dropdown area
									html = '';
									$.each(json.navigation, function (idx, obj) {	
										if (this.headingArray) {
											html += '<ul class="heading">';
												$.each(this.headingArray, function () {
													$.each(this.heading, function () {
														html += '<li class="heading"><a class="heading" href="' + this.link + '">' + this.title + '</a>';
														if (this.subheading) {
															html += '<ul>';
																$.each(this.subheading, function () {
																	html += '<li class="nested"><a href="' + this.link + '">' + this.title + '</a></li>';
																});
															html += '</ul>';
														}
													});
													html += '</li>';
												});
											html += '</ul>';
										} else if (this.subheading) {
											html += '<ul class="subheading">';
												$.each(this.subheading, function () {
													html += '<li class="nested"><a href="' + this.link + '">' + this.title + '</a></li>';
												});
											html += '</ul>';
										} else {
											html += 'There has been a error';
										}
									});								
									$(con).html(html);
								}
							});
						}
					},
					//mouseout
					function(){
						if($.browser.msie){
							$(con).hide();
						}
						else {
							$(con).fadeOut(250);
						}
						$(this).removeClass('hover');
					}
				);	
			});
		});