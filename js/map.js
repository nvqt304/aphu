var mapObj = null;
	var defaultCoord = [21.02203554495359, 105.88932424267651]; // coord mặc định, 9 giữa HCMC
	var zoomLevel = 15;
	var mapConfig = {
		attributionControl: false, // để ko hiện watermark nữa
		center: defaultCoord, // vị trí map mặc định hiện tại
		zoom: zoomLevel, // level zoom
	};
	
	window.onload = function() {
		// init map
		mapObj = L.map('deviceMap', {attributionControl: false}).setView(defaultCoord, zoomLevel);
		
		// add tile để map có thể hoạt động, xài free từ OSM
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(mapObj);

		let iconRunning = L.icon({
			iconUrl: "./img/green.png",
			iconSize: [40,60]
		})
		let iconLost = L.icon({
			iconUrl: "./img/gray.png",
			iconSize: [40,60]
		})
        var arrLocation = [
            {coordinates: [21.02203554495359, 105.88932424267651],
			 iconOptions: {
				icon: iconRunning
			 }
			},
            {coordinates: [21.024969838324175, 105.89091211028435],
				iconOptions: {
				   icon: iconLost
				}
			},
            {coordinates: [21.024789576232727, 105.88417440178618],
				iconOptions: {
				   icon: iconLost
				}
			}
        ]
        for(const location of arrLocation)
        {
            var marker = L.marker(location.coordinates, location.iconOptions).addTo(mapObj);
            var popup = L.popup();
            popup.setContent(`<b><h4>Địa điểm x</h4></b><a href='tructuyen.html'>Xem chi tiết </a>`);
            marker.bindPopup(popup);
            marker.openPopup();
        }
        
	};