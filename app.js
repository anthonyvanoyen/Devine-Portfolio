// default background color
Titanium.UI.setBackgroundColor('#FFF');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


// the windows
var mainWindow = Titanium.UI.createWindow({
	title: 'Devine',
	url: 'views/Devine.js'
});

var departmentsWindow = Titanium.UI.createWindow({
	title: 'Departments',
	url: 'views/Departments.js'
});

var directionWindow = Titanium.UI.createWindow({
	title: 'Directions',
	url: 'views/Directions.js'
});

// the tabs
var mainTab = Titanium.UI.createTab({  
    title: 'Devine',
    window: mainWindow
});

var departmentsTab = Titanium.UI.createTab({  
    title: 'Dedqsdsqpartments',
    window: departmentsWindow
});


// events
Titanium.App.addEventListener('directionRequest', function(e) {
	directionWindow.destination = e;
	departmentsTab.open(directionWindow);
});

//  add tabs
tabGroup.addTab(mainTab);  
tabGroup.addTab(departmentsTab);  

// open tab group
tabGroup.open();