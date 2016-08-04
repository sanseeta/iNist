$(document).ready(function(){
						var sem = localStorage.getItem("sem");
						if(sem=="seventh")
						{
							$('#eightBox').css('display','none');
							$('#eightHead').css('display','none');
						}
						else if(sem=="sixth")
						{
							$('#eightBox').css('display','none');
							$('#eightHead').css('display','none');
							$('#seventhBox').css('display','none');
							$('#seventhHead').css('display','none');
						}
						else if(sem=="fifth")
						{
							$('#eightBox').css('display','none');
							$('#eightHead').css('display','none');
							$('#seventhBox').css('display','none');
							$('#seventhHead').css('display','none');
							$('#sixthBox').css('display','none');
							$('#sixthHead').css('display','none');
						}
						else if(sem=="fourth")
						{
							$('#eightBox').css('display','none');
							$('#eightHead').css('display','none');
							$('#seventhBox').css('display','none');
							$('#seventhHead').css('display','none');
							$('#sixthBox').css('display','none');
							$('#sixthHead').css('display','none');
							$('#fifthBox').css('display','none');
							$('#fifthHead').css('display','none');
						}
						else if(sem=="third")
						{
							$('#eightBox').css('display','none');
							$('#eightHead').css('display','none');
							$('#seventhBox').css('display','none');
							$('#seventhHead').css('display','none');
							$('#sixthBox').css('display','none');
							$('#sixthHead').css('display','none');
							$('#fifthBox').css('display','none');
							$('#fifthHead').css('display','none');
							$('#forthBox').css('display','none');
							$('#forthHead').css('display','none');
						}
						else if(sem=="second")
						{
							$('#eightBox').css('display','none');
							$('#eightHead').css('display','none');
							$('#seventhBox').css('display','none');
							$('#seventhHead').css('display','none');
							$('#sixthBox').css('display','none');
							$('#sixthHead').css('display','none');
							$('#fifthBox').css('display','none');
							$('#fifthHead').css('display','none');
							$('#forthBox').css('display','none');
							$('#forthHead').css('display','none');
							$('#thirdBox').css('display','none');
							$('#thirdHead').css('display','none');
						}
						else if(sem=="first")
						{
							$('#eightBox').css('display','none');
							$('#eightHead').css('display','none');
							$('#seventhBox').css('display','none');
							$('#seventhHead').css('display','none');
							$('#sixthBox').css('display','none');
							$('#sixthHead').css('display','none');
							$('#fifthBox').css('display','none');
							$('#fifthHead').css('display','none');
							$('#forthBox').css('display','none');
							$('#forthHead').css('display','none');
							$('#thirdBox').css('display','none');
							$('#thirdHead').css('display','none');
							$('#secondBox').css('display','none');
							$('#secondHead').css('display','none');
						}
					});
					var sem1=0,sem2=0,sem3=0,sem4=0,sem5=0,sem6=0,sem7=0,sem8=0;
					$('#eightHead').click(function(){
						if(sem8==0)
						{
							var url="../index.php?table=eight&roll="+localStorage.getItem("roll");
							var table = document.getElementById("myTable8");
							$.getJSON(url,function(result){
							    $.each(result, function(i, field){
								     // Pushing the JSON Data to the table
								     //alert("test");
								   	var ab = "<tr><td class='mdl-data-table__cell--non-numeric'>"+field.sub+"</td>" + 
								    					"<td class='mdl-data-table__cell--non-numeric'>"+field.ct1+"</td>" +
								       					"<td class='mdl-data-table__cell--non-numeric'>"+field.ct2+"</td></tr>";
								  	//alert(ab);
								   	table.innerHTML +=ab;
								});
							});
							sem8=1;
						}
					});
					$('#seventhHead').click(function(){
						if(sem7==0)
						{
							var url="../index.php?table=seventh&roll="+localStorage.getItem("roll");
							var table = document.getElementById("myTable7");
							$.getJSON(url,function(result){
							    $.each(result, function(i, field){
								     // Pushing the JSON Data to the table
								     //alert("test");
								   	var ab = "<tr><td class='mdl-data-table__cell--non-numeric'>"+field.sub+"</td>" + 
								    					"<td class='mdl-data-table__cell--non-numeric'>"+field.ct1+"</td>" +
								       					"<td class='mdl-data-table__cell--non-numeric'>"+field.ct2+"</td></tr>";
								  	//alert(ab);
								   	table.innerHTML +=ab;
								});
							});
							sem7=1;
						}
							
					});
					$('#sixthHead').click(function(){
						if(sem6==0)
						{
							var url="../index.php?table=sixth&roll="+localStorage.getItem("roll");
							var table = document.getElementById("myTable6");
							$.getJSON(url,function(result){
							    $.each(result, function(i, field){
								     // Pushing the JSON Data to the table
								     //alert("test");
								   	var ab = "<tr><td class='mdl-data-table__cell--non-numeric'>"+field.sub+"</td>" + 
								    					"<td class='mdl-data-table__cell--non-numeric'>"+field.ct1+"</td>" +
								       					"<td class='mdl-data-table__cell--non-numeric'>"+field.ct2+"</td></tr>";
								  	//alert(ab);
								   	table.innerHTML +=ab;
								});
							});
							sem6=1;
						}
					});
					$('#fifthHead').click(function(){
						if(sem5==0)
						{
							var url="../index.php?table=fifth&roll="+localStorage.getItem("roll");
							var table = document.getElementById("myTable5");
							$.getJSON(url,function(result){
							    $.each(result, function(i, field){
								     // Pushing the JSON Data to the table
								     //alert("test");
								   	var ab = "<tr><td class='mdl-data-table__cell--non-numeric'>"+field.sub+"</td>" + 
								    					"<td class='mdl-data-table__cell--non-numeric'>"+field.ct1+"</td>" +
								       					"<td class='mdl-data-table__cell--non-numeric'>"+field.ct2+"</td></tr>";
								  	//alert(ab);
								   	table.innerHTML +=ab;
								});
							});
							sem5=1;
						}			
					});
					$('#fourthHead').click(function(){
						if(sem4==0)
						{
							var url="../index.php?table=fourth&roll="+localStorage.getItem("roll");
							var table = document.getElementById("myTable4");
							$.getJSON(url,function(result){
							    $.each(result, function(i, field){
								     // Pushing the JSON Data to the table
								     //alert("test");
								   	var ab = "<tr><td class='mdl-data-table__cell--non-numeric'>"+field.sub+"</td>" + 
								    					"<td class='mdl-data-table__cell--non-numeric'>"+field.ct1+"</td>" +
								       					"<td class='mdl-data-table__cell--non-numeric'>"+field.ct2+"</td></tr>";
								  	//alert(ab);
								   	table.innerHTML +=ab;
								});
							});
							sem4=0;
						}
					});
					$('#thirdHead').click(function(){
						if(sem3==0)
						{
							var url="../index.php?table=third&roll="+localStorage.getItem("roll");
							var table = document.getElementById("myTable3");
							$.getJSON(url,function(result){
							    $.each(result, function(i, field){
								     // Pushing the JSON Data to the table
								     //alert("test");
								   	var ab = "<tr><td class='mdl-data-table__cell--non-numeric'>"+field.sub+"</td>" + 
								    					"<td class='mdl-data-table__cell--non-numeric'>"+field.ct1+"</td>" +
								       					"<td class='mdl-data-table__cell--non-numeric'>"+field.ct2+"</td></tr>";
								  	//alert(ab);
								   	table.innerHTML +=ab;
								});
							});
							sem3=1;
						}
					});
					$('#secondHead').click(function(){
						if(sem2==0)
						{
							var url="../index.php?table=second&roll="+localStorage.getItem("roll");
							var table = document.getElementById("myTable2");
							$.getJSON(url,function(result){
							    $.each(result, function(i, field){
								     // Pushing the JSON Data to the table
								     //alert("test");
								   	var ab = "<tr><td class='mdl-data-table__cell--non-numeric'>"+field.sub+"</td>" + 
								    					"<td class='mdl-data-table__cell--non-numeric'>"+field.ct1+"</td>" +
								       					"<td class='mdl-data-table__cell--non-numeric'>"+field.ct2+"</td></tr>";
								  	//alert(ab);
								   	table.innerHTML +=ab;
								});
							});
							sem2=1;
						}
					});
					$('#firstHead').click(function(){
						if(sem1==0)
						{
							var url="../index.php?table=first&roll="+localStorage.getItem("roll");
							var table = document.getElementById("myTable1");
							$.getJSON(url,function(result){
							    $.each(result, function(i, field){
								     // Pushing the JSON Data to the table
								     //alert("test");
								   	var ab = "<tr><td class='mdl-data-table__cell--non-numeric'>"+field.sub+"</td>" + 
								    					"<td class='mdl-data-table__cell--non-numeric'>"+field.ct1+"</td>" +
								       					"<td class='mdl-data-table__cell--non-numeric'>"+field.ct2+"</td></tr>";
								  	//alert(ab);
								   	table.innerHTML +=ab;
								});
							});
							sem1=1;
						}
					});

function snack(string) {
					    var snackbarContainer = document.querySelector('#toast');
					    var data = { message: string, timeout: 2000 };
					    snackbarContainer.MaterialSnackbar.showSnackbar(data);
					}
					
					//alert(num+" "+semis[num-1]);
					$('#myGraph8').click(function(){
						$('#table8').css('display','none');
						$('#myGraph8').css('display','none');
						$('#view8').css('display','block');
						$('#mytable8').css('display','block');
						$('#mytable8').click(function(){
							$('#table8').css('display','block');
							$('#myGraph8').css('display','block');
							$('#view8').css('display','none');
							$('#mytable8').css('display','none');
						});
						var url="../index.php?table=eight&roll="+localStorage.getItem("roll");
					    var sub=[];
					    var CT1=[];
					    var CT2=[];
					     $.getJSON(url,function(result){
						       $.each(result, function(i, field){
							       // Pushing the JSON Data to the array
							       	sub.push(field.sub);
							       	CT1.push(field.ct1);
							       	CT2.push(field.ct2);
							     });
						      //Assigning X and Y axes to the data var, and plotting the graph.
						      	var data1 = {
								  x: sub,
								  y: CT1,
								  name: 'CT 1',
								  type: 'bar'
								};

								var data2 = {
								  x: sub,
								  y: CT2,
								  name: 'CT 2',
								  type: 'bar'
								};

								var data = [data1, data2];	

								var layout = {
									barmode: 'group',
									title: 'Graphical Report'
								};

 								Plotly.newPlot('gra8', data,layout);
						 });
					});

					$('#myGraph7').click(function(){
						$('#table7').css('display','none');
						$('#myGraph7').css('display','none');
						$('#view7').css('display','block');
						$('#mytable7').css('display','block');
						$('#mytable7').click(function(){
							$('#table7').css('display','block');
							$('#myGraph7').css('display','block');
							$('#view7').css('display','none');
							$('#mytable7').css('display','none');
						});
						var url="../index.php?table=seventh&roll="+localStorage.getItem("roll");
					    var sub=[];
					    var CT1=[];
					    var CT2=[];
					     $.getJSON(url,function(result){
						       $.each(result, function(i, field){
							       // Pushing the JSON Data to the array
							       	sub.push(field.sub);
							       	CT1.push(field.ct1);
							       	CT2.push(field.ct2);
							     });
						      //Assigning X and Y axes to the data var, and plotting the graph.
						      	var data1 = {
								  x: sub,
								  y: CT1,
								  name: 'CT 1',
								  type: 'bar'
								};

								var data2 = {
								  x: sub,
								  y: CT2,
								  name: 'CT 2',
								  type: 'bar'
								};

								var data = [data1, data2];	

								var layout = {
									barmode: 'group',
									title: 'Graphical Report'
								};

 								Plotly.newPlot('gra7', data,layout);
						 });
					});

					$('#myGraph6').click(function(){
						$('#table6').css('display','none');
						$('#myGraph6').css('display','none');
						$('#view6').css('display','block');
						$('#mytable6').css('display','block');
						$('#mytable6').click(function(){
							$('#table6').css('display','block');
							$('#myGraph6').css('display','block');
							$('#view6').css('display','none');
							$('#mytable6').css('display','none');
						});
						var url="../index.php?table=sixth&roll="+localStorage.getItem("roll");
					    var sub=[];
					    var CT1=[];
					    var CT2=[];
					     $.getJSON(url,function(result){
						       $.each(result, function(i, field){
							       // Pushing the JSON Data to the array
							       	sub.push(field.sub);
							       	CT1.push(field.ct1);
							       	CT2.push(field.ct2);
							     });
						      //Assigning X and Y axes to the data var, and plotting the graph.
						      	var data1 = {
								  x: sub,
								  y: CT1,
								  name: 'CT 1',
								  type: 'bar'
								};

								var data2 = {
								  x: sub,
								  y: CT2,
								  name: 'CT 2',
								  type: 'bar'
								};

								var data = [data1, data2];	

								var layout = {
									barmode: 'group',
									title: 'Graphical Report'
								};

 								Plotly.newPlot('gra6', data,layout);
						 });
					});

					$('#myGraph5').click(function(){
						$('#table5').css('display','none');
						$('#myGraph5').css('display','none');
						$('#view5').css('display','block');
						$('#mytable5').css('display','block');
						$('#mytable5').click(function(){
							$('#table5').css('display','block');
							$('#myGraph5').css('display','block');
							$('#view5').css('display','none');
							$('#mytable5').css('display','none');
						});
						var url="../index.php?table=fifth&roll="+localStorage.getItem("roll");
					    var sub=[];
					    var CT1=[];
					    var CT2=[];
					     $.getJSON(url,function(result){
						       $.each(result, function(i, field){
							       // Pushing the JSON Data to the array
							       	sub.push(field.sub);
							       	CT1.push(field.ct1);
							       	CT2.push(field.ct2);
							     });
						      //Assigning X and Y axes to the data var, and plotting the graph.
						      	var data1 = {
								  x: sub,
								  y: CT1,
								  name: 'CT 1',
								  type: 'bar'
								};

								var data2 = {
								  x: sub,
								  y: CT2,
								  name: 'CT 2',
								  type: 'bar'
								};

								var data = [data1, data2];	

								var layout = {
									barmode: 'group',
									title: 'Graphical Report'
								};

 								Plotly.newPlot('gra5', data,layout);
						 });
					});

					$('#myGraph4').click(function(){
						$('#table4').css('display','none');
						$('#myGraph4').css('display','none');
						$('#view4').css('display','block');
						$('#mytable4').css('display','block');
						$('#mytable4').click(function(){
							$('#table4').css('display','block');
							$('#myGraph4').css('display','block');
							$('#view4').css('display','none');
							$('#mytable4').css('display','none');
						});
						var url="../index.php?table=fourth&roll="+localStorage.getItem("roll");
					    var sub=[];
					    var CT1=[];
					    var CT2=[];
					     $.getJSON(url,function(result){
						       $.each(result, function(i, field){
							       // Pushing the JSON Data to the array
							       	sub.push(field.sub);
							       	CT1.push(field.ct1);
							       	CT2.push(field.ct2);
							     });
						      //Assigning X and Y axes to the data var, and plotting the graph.
						      	var data1 = {
								  x: sub,
								  y: CT1,
								  name: 'CT 1',
								  type: 'bar'
								};

								var data2 = {
								  x: sub,
								  y: CT2,
								  name: 'CT 2',
								  type: 'bar'
								};

								var data = [data1, data2];	

								var layout = {
									barmode: 'group',
									title: 'Graphical Report'
								};

 								Plotly.newPlot('gra4', data,layout);
						 });
					});

					$('#myGraph3').click(function(){
						$('#table3').css('display','none');
						$('#myGraph3').css('display','none');
						$('#view3').css('display','block');
						$('#mytable3').css('display','block');
						$('#mytable3').click(function(){
							$('#table3').css('display','block');
							$('#myGraph3').css('display','block');
							$('#view3').css('display','none');
							$('#mytable3').css('display','none');
						});
						var url="../index.php?table=third&roll="+localStorage.getItem("roll");
					    var sub=[];
					    var CT1=[];
					    var CT2=[];
					     $.getJSON(url,function(result){
						       $.each(result, function(i, field){
							       // Pushing the JSON Data to the array
							       	sub.push(field.sub);
							       	CT1.push(field.ct1);
							       	CT2.push(field.ct2);
							     });
						      //Assigning X and Y axes to the data var, and plotting the graph.
						      	var data1 = {
								  x: sub,
								  y: CT1,
								  name: 'CT 1',
								  type: 'bar'
								};

								var data2 = {
								  x: sub,
								  y: CT2,
								  name: 'CT 2',
								  type: 'bar'
								};

								var data = [data1, data2];	

								var layout = {
									barmode: 'group',
									title: 'Graphical Report'
								};

 								Plotly.newPlot('gra3', data,layout);
						 });
					});

					$('#myGraph2').click(function(){
						$('#table2').css('display','none');
						$('#myGraph2').css('display','none');
						$('#view2').css('display','block');
						$('#mytable2').css('display','block');
						$('#mytable2').click(function(){
							$('#table2').css('display','block');
							$('#myGraph2').css('display','block');
							$('#view2').css('display','none');
							$('#mytable2').css('display','none');
						});
						var url="../index.php?table=second&roll="+localStorage.getItem("roll");
					    var sub=[];
					    var CT1=[];
					    var CT2=[];
					     $.getJSON(url,function(result){
						       $.each(result, function(i, field){
							       // Pushing the JSON Data to the array
							       	sub.push(field.sub);
							       	CT1.push(field.ct1);
							       	CT2.push(field.ct2);
							     });
						      //Assigning X and Y axes to the data var, and plotting the graph.
						      	var data1 = {
								  x: sub,
								  y: CT1,
								  name: 'CT 1',
								  type: 'bar'
								};

								var data2 = {
								  x: sub,
								  y: CT2,
								  name: 'CT 2',
								  type: 'bar'
								};

								var data = [data1, data2];	

								var layout = {
									barmode: 'group',
									title: 'Graphical Report'
								};

 								Plotly.newPlot('gra2', data,layout);
						 });
					});

					$('#myGraph1').click(function(){
						$('#table1').css('display','none');
						$('#myGraph1').css('display','none');
						$('#view1').css('display','block');
						$('#mytable1').css('display','block');
						$('#mytable1').click(function(){
							$('#table1').css('display','block');
							$('#myGraph1').css('display','block');
							$('#view1').css('display','none');
							$('#mytable1').css('display','none');
						});
						var url="../index.php?table=first&roll="+localStorage.getItem("roll");
					    var sub=[];
					    var CT1=[];
					    var CT2=[];
					     $.getJSON(url,function(result){
						       $.each(result, function(i, field){
							       // Pushing the JSON Data to the array
							       	sub.push(field.sub);
							       	CT1.push(field.ct1);
							       	CT2.push(field.ct2);
							     });
						      //Assigning X and Y axes to the data var, and plotting the graph.
						      	var data1 = {
								  x: sub,
								  y: CT1,
								  name: 'CT 1',
								  type: 'bar'
								};

								var data2 = {
								  x: sub,
								  y: CT2,
								  name: 'CT 2',
								  type: 'bar'
								};

								var data = [data1, data2];	

								var layout = {
									barmode: 'group',
									title: 'Graphical Report'
								};

 								Plotly.newPlot('gra1', data,layout);
						 });
					});

					$("#logout").click(function(){
						localStorage.setItem("login","False");
						window.open("index.html","_self");
					});
					$("#attend").click(function(){
						window.open("attendance.html","_self");
					});
					$("#dues").click(function(){
						window.open("dues.html","_self");
					});
					$("#internal").click(function(){
						window.open("internal.html","_self");
					});
					$("#msg").click(function(){
						window.open("msg.html","_self");
					});