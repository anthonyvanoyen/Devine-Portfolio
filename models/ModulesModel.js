Titanium.include('../data/ModuleVO.js');

function ModulesModel()
{
	this.getModules = function()
	{
		var db = Titanium.Database.open('DevinePortfolio');
		var rows = db.execute("SELECT M_Id, Modules.Name as Module, Subjects.Name as Subject FROM Modules, Subjects WHERE Subjects.S_Id = Modules.S_Id");
		var results = [];
		
		while (rows.isValidRow())
		{
			var moduleVO = new ModuleVO(rows.fieldByName('M_id'), rows.fieldByName('Module'), rows.fieldByName('Subject'));
			rows.next();
		}
		
		rows.close();
		db.close();
		
		return results;
	};
};
