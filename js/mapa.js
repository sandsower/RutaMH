$(document).ready(function(){
				var map = new GMap2($("#map").get(0));
				var burnsvilleMN = new GLatLng(20.603864,-100.279083);
				map.setCenter(burnsvilleMN, 5);
				map.addControl(new GLargeMapControl());

				var markers = [];

				    var point1 = new GLatLng(20.917292,-100.745354);
					marker = new GMarker(point1);
					map.addOverlay(marker);
					markers[1] = marker;

				    var point2 = new GLatLng(20.91734,-100.745358);
					marker = new GMarker(point2);
					map.addOverlay(marker);
					markers[2] = marker;

				    var point3 = new GLatLng(21.018756,-101.258047);
					marker = new GMarker(point3);
					map.addOverlay(marker);
					markers[3] = marker;

				    var point4 = new GLatLng(19.317036,-99.383204);
					marker = new GMarker(point4);
					map.addOverlay(marker);
					markers[4] = marker;

				    var point5 = new GLatLng(20.681293,-103.342552);
					marker = new GMarker(point5);
					map.addOverlay(marker);
					markers[5] = marker;

				    var point6 = new GLatLng(20.623265,-103.06828);
					marker = new GMarker(point6);
					map.addOverlay(marker);
					markers[6] = marker;

				    var point7 = new GLatLng(25.435446,-100.983324);
					marker = new GMarker(point7);
					map.addOverlay(marker);
					markers[7] = marker;

				    var point8 = new GLatLng(22.769831,-102.578487);
					marker = new GMarker(point8);
					map.addOverlay(marker);
					markers[8] = marker;

				    var point9 = new GLatLng(28.637041,-106.089134);
					marker = new GMarker(point9);28.637041,-106.089134
					map.addOverlay(marker);
					markers[9] = marker;
				//var path=color:0x0000ff|weight:5|22.769831,-102.578487|28.637041,-106.089134

				
				$(markers).each(function(i,marker){
					$("<li />")
						.html("Point "+i)
						.click(function(){
							displayPoint(marker, i);
						})
						.appendTo("#list");
					
					GEvent.addListener(marker, "click", function(){
						displayPoint(marker, i);
					});
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
			});
