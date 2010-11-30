Titanium.include('../data/AddressVO.js');

function AddressModel()
{	
	this.getAddresses = function()
	{
		var db = Titanium.Database.open('DevinePortfolio');
		var rows = db.execute('SELECT * FROM Addresses');
		var results = [];
		
		while (rows.isValidRow())
		{
			var addressVO = new AddressVO(rows.fieldByName('A_Id'), rows.fieldByName('Title'), rows.fieldByName('Subtitle'), rows.fieldByName('Latitude'), rows.fieldByName('Longitude'));
			results.push(addressVO);
			rows.next();
		}
		
		rows.close();
		db.close();
		
		return results;
	};
};
