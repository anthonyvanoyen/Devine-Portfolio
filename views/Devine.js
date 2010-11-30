// includes
Titanium.include('../models/DatabaseModel.js');
Titanium.include('../models/ModulesModel.js');

// global declarations
var currentWindow = Titanium.UI.currentWindow;
var databaseModel = new DatabaseModel();
var modulesModel = new ModulesModel();

// functions
function openWindowHandler(e)
{
	// database installeren
	databaseModel.install();
	
	// modules ophalen
	modulesModel.getModules();
};

// events
currentWindow.addEventListener('open', openWindowHandler);