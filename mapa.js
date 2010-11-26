$(document).ready(function(){
				var map = new GMap2($("#map").get(0));
				var burnsvilleMN = new GLatLng(22.085639901650328,-101.42578125);
				map.setCenter(burnsvilleMN, 6);
				
				// setup 10 random points
/*
				var bounds = map.getBounds();
				var southWest = bounds.getSouthWest();
				var northEast = bounds.getNorthEast();
				var lngSpan = northEast.lng() - southWest.lng();
				var latSpan = northEast.lat() - southWest.lat();
				var markers = [];
				for (var i = 0; i < 10; i++) {
				    var point = new GLatLng(southWest.lat() + latSpan * Math.random(),
				        southWest.lng() + lngSpan * Math.random());
					marker = new GMarker(point);
					map.addOverlay(marker);
					markers[i] = marker;
				}
				
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
*/
			});
