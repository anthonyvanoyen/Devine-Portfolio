// includes

// global declarations
var currentWindow = Titanium.UI.currentWindow;
var destination = currentWindow.destination;
var directionsData = [];

var map = Titanium.Map.createView({
	animate: true,
	mapType: Titanium.Map.STANDARD_TYPE,
	height: '100',
	userLocation: false,
	region: {latitude: 50.82794, longitude: 3.264835, latitudeDelta: 0.5, longitudeDelta: 0.4},
	regionFit: true,
	top: 0
});

var directionsTable = Titanium.UI.createTableView({
	headerTitle: 'Directions to: ' + destination.title,
	top: '100'
});

// functions
function getRoute(origin, destination)
{
	var url = "http://maps.googleapis.com/maps/api/directions/xml?origin=" + origin + "IL&destination=" + destination + "&sensor=false";
	
	var httpClient = Titanium.Network.createHTTPClient();
	httpClient.open('GET', url);
	
	httpClient.onload = function()
	{
		var xml = this.responseXML;		
		var steps = xml.documentElement.getElementsByTagName('step');
		
		for (var i=0; i < steps.length; i++)
		{
			title = steps.item(i).getElementsByTagName("html_instructions").item(0).text;
			distance = steps.item(i).getElementsByTagName("distance").item(0).firstChild.text + " m";
			
			//directionsSteps.push({title: title.replace(/(<([^>]+)>)/ig,""), distance: distance});
						
			var lblTitle = Titanium.UI.createLabel({
				text: title.replace(/(<([^>]+)>)/ig,""),
				left: 10, top: 0,
				font: { fontSize: 12, fontWeight: 'bold' },
				color: '#999999',
				height: 'auto',
				width: '220'
			});
			
			var view = Titanium.UI.createView({height: 'auto', width: 'auto', layout: 'vertical', top:5, right:5, bottom:5, left:5})
			view.add(lblTitle);
			
			var row = Titanium.UI.createTableViewRow({height: 'auto'});
			row.className = 'item' + i;			
			row.add(view);
			
			directionsTable.appendRow(row);
		}
		
	};
	
	httpClient.send();
};

function openWindowHandler(e)
{
	// map aanmaken
	currentWindow.add(map);
	currentWindow.add(directionsTable);
	
	// route ophalen
	getRoute("Kortrijk", "Grote Markt, Kortrijk");
};


// events
currentWindow.addEventListener('focus', openWindowHandler);