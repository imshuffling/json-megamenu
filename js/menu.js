$(document).ready(function(){
			//$(".container").hide();
			$('body').addClass('js');
			$(['nav1', 'nav2', 'nav3', 'nav4', 'nav5']).each(function(){
				var nav = this;
				var con = $("#"+nav).children('.container');
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
									
									/*
									var u = $('#nav1 li.heading').first(); //select your first ul element, you can do it by id or class selector
									u.append(u.next().html());
									u.next().remove();
									*/
									
									//if ( $('#nav1 ul.heading li').length > 3 ) {
										//console.log($('#nav1 li.heading').size());
									//}
									
									
									$(con).html(html);
									
									//console.log($('#nav1 li.heading').length);
									
									
									// IF GREATER THAN 3 LI.HEADING
									
									// USE DIFFERENT LAYOUT
									// 3 COLS
									
									
									
									
									if ( $('#nav1 li.heading').length > 3 ) {
										//console.log($('#nav1 li.heading').size());
										console.log($('#nav1 li.heading').length);
										//$("li").parent().remove().end().wrapAll("<ul>").appendTo("body");
										
										//$("li.heading").eq(3).addClass("blue");
										$("ul.heading").find("li.heading").eq(2).addClass("third");
										
										
										//$(".third").remove().end().wrapAll("<ul>").appendTo("body");
										
										/*$(".third").remove()
													.prev()
													.appendTo("li.heading");
										*/

										//$(".third").append().prev("li.heading");
													//.appendTo().prev("li.heading");
													
										//$(".third").appendTo()
													
										
										
										
										
										
									}
									
									
									
									
									
									
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