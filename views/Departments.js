// includes
Titanium.include('../models/AddressModel.js');

// global declarations
var currentWindow = Titanium.UI.currentWindow;
var addressModel = new AddressModel();

var map = Titanium.Map.createView({
	animate: true,
	mapType: Titanium.Map.STANDARD_TYPE,
	userLocation: false,
	region: {latitude: 50.82794, longitude: 3.264835, latitudeDelta: 0.04, longitudeDelta: 0.04 },
	regionFit: true
});

// functions
function getAddresses()
{	
	var results = addressModel.getAddresses();
	
	for (var i = 0; i < results.length; i++)
	{
		var annotation = Titanium.Map.createAnnotation({
			title: results[i].getTitle(),
			subtitle: results[i].getSubtitle(),
			latitude: results[i].getLatitude(),
			longitude: results[i].getLongitude(),
			pincolor: Titanium.Map.ANNOTATION_RED,
			rightButton: '../assets/images/direction_arrow.png',
			data: results[i]
		});
				
		map.addAnnotations([annotation]);
	}
};

function openWindowHandler(e)
{
	// Google Maps toevoegen
	currentWindow.add(map);
	
	// Adressen inladen en weergeven op de map
	getAddresses();
};

function mapClickHandler(e)
{
	if (e.clicksource == "rightButton") {
				
		Titanium.App.fireEvent('directionRequest', { 
			id: e.annotation.data.getId(), 
			title: e.annotation.data.getTitle(), 
			latitude: e.annotation.data.getLatitude(), 
			longitude: e.annotation.data.getLongitude()
		});
		
		map.removeEventListener('click', mapClickHandler);
	}
};

// events
currentWindow.addEventListener('focus', openWindowHandler);
map.addEventListener('click', mapClickHandler);
