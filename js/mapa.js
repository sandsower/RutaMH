$(document).ready(function(){
				var map = new GMap2($("#map").get(0));
				var burnsvilleMN = new GLatLng(21.156879,-100.931654);
				map.setCenter(burnsvilleMN, 5);
				map.addControl(new GLargeMapControl());

				var markers = [];

				    var point1 = new GLatLng(21.156879,-100.931654);
					marker = new GMarker(point1);
					map.addOverlay(marker);
					markers[1] = marker;

				    var point2 = new GLatLng(20.917292,-100.745354);
					marker = new GMarker(point2);
					map.addOverlay(marker);
					markers[2] = marker;

				    var point3 = new GLatLng(20.91734,-100.745358);
					marker = new GMarker(point3);
					map.addOverlay(marker);
					markers[3] = marker;

				    var point4 = new GLatLng(21.018756,-101.258047);
					marker = new GMarker(point4);
					map.addOverlay(marker);
					markers[4] = marker;

				    var point5 = new GLatLng(19.317036,-99.383204);
					marker = new GMarker(point5);
					map.addOverlay(marker);
					markers[5] = marker;

				    var point6 = new GLatLng(20.681293,-103.342552);
					marker = new GMarker(point6);
					map.addOverlay(marker);
					markers[6] = marker;

				    var point7 = new GLatLng(20.623265,-103.06828);
					marker = new GMarker(point7);
					map.addOverlay(marker);
					markers[7] = marker;

				    var point8 = new GLatLng(25.435446,-100.983324);
					marker = new GMarker(point8);
					map.addOverlay(marker);
					markers[8] = marker;

				    var point9 = new GLatLng(22.769831,-102.578487);
					marker = new GMarker(point9);
					map.addOverlay(marker);
					markers[9] = marker;

				    var point10 = new GLatLng(28.637041,-106.089134);
					marker = new GMarker(point10);
					map.addOverlay(marker);
					markers[10] = marker;


					$("a.p1").click(function(e){
					        e.preventDefault();
					        var link = this.href;
							map.panTo(markers[1].getLatLng());
							$("#info1").toggle('slow',function(){
								$("#info1").load("info.html");
							});
							$("#info1").show('slow');
						});
					$("a.p2").click(function(e){
					            e.preventDefault();
							map.panTo(markers[2].getLatLng());
							$("#info1").hide('slow',function(){
								$("#info1").load("info2.html");
							}).show();
							$("#info1").show('slow');
						});
					$("a.p3").click(function(e){
					            e.preventDefault();
							map.panTo(markers[3].getLatLng());
							$("#info1").hide('slow',function(){
								$("#info1").load("info3.html");
							}).show();
							$("#info1").show('slow');
						});
					$("a.p4").click(function(e){
					            e.preventDefault();
							map.panTo(markers[4].getLatLng());
							$("#info1").hide('slow',function(){
								$("#info1").load("info4.html");
							}).show();
							$("#info1").show('slow');
						});
					$("a.p5").click(function(e){
					            e.preventDefault();
							map.panTo(markers[5].getLatLng());
							$("#info1").hide('slow',function(){
								$("#info1").load("info5.html");
							}).show();
							$("#info1").show('slow');
						});
					$("a.p6").click(function(e){
					            e.preventDefault();
							map.panTo(markers[6].getLatLng());
							$("#info1").hide('slow',function(){
								$("#info1").load("info6.html");
							}).show();
							$("#info1").show('slow');
						});
					$("a.p7").click(function(e){
					            e.preventDefault();
							map.panTo(markers[7].getLatLng());
							$("#info1").hide('slow',function(){
								$("#info1").load("info6.html");
							}).show();
							$("#info1").show('slow');
						});
					$("a.p8").click(function(e){
					            e.preventDefault();
							map.panTo(markers[8].getLatLng());
							$("#info1").hide('slow',function(){
								$("#info1").load("info7.html");
							}).show();
							$("#info1").show('slow');
						});
					$("a.p9").click(function(e){
					            e.preventDefault();
							map.panTo(markers[9].getLatLng());
							$("#info1").hide('slow',function(){
								$("#info1").load("info8.html");
							}).show();
							$("#info1").show('slow');
						});
					$("a.p10").click(function(e){
					            e.preventDefault();
							map.panTo(markers[10].getLatLng());
							$("#info1").hide('slow',function(){
								$("#info1").load("info9.html");
							}).show();
							$("#info1").show('slow');
						});
					
				/*
					GEvent.addListener(marker, "click", function(){
						displayPoint(marker, 1);
					});
				
				$("#message").appendTo(map.getPane(G_MAP_FLOAT_SHADOW_PANE));
				function displayPoint(marker, index){
					$("#message").hide();
					
					var moveEnd = GEvent.addListener(map, "moveend", function(){
						var markerOffset = map.fromLatLngToDivPixel(marker.getLatLng());
						$("#message")
							.fadeIn()
							.css({ top:markerOffset.y, left:markerOffset.x });
					
						GEvent.removeListener(moveEnd);
					});
					map.panTo(marker.getLatLng());
				}
*/
			});
