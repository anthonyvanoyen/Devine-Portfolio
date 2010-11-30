
function DatabaseModel()
{
	this.install = function()
	{
		try
		{
			var db = Titanium.Database.open('DevinePortfolio');
			
			// addresses table
			db.execute("CREATE TABLE IF NOT EXISTS Addresses (A_Id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, Title VARCHAR(60), Subtitle TEXT, Latitude FLOAT, Longitude FLOAT)");
			db.execute("DELETE FROM Addresses");
			db.execute("INSERT INTO Addresses (Title, Subtitle, Latitude, Longitude) VALUES ('Departement PIH', 'Graaf Karel de Goedelaan 5', 50.824793, 3.250408)");
			db.execute("INSERT INTO Addresses (Title, Subtitle, Latitude, Longitude) VALUES ('Departement Hiepso', 'Renaat de Rudderlaan 6', 50.824793, 3.2844285)");
			
			// subjects table
			/*
			db.execute('CREATE TABLE IF NOT EXISTS Subjects (S_Id INTEGER PRIMARY KEY AUTOINCREMENT, Name VARCHAR(40))');
			db.execute("DELETE FROM Subjects");
			db.execute("INSERT INTO Subjects (S_Id,Name) VALUES ('Programming')");
			db.execute("INSERT INTO Subjects (S_Id,Name) VALUES ('Development')");
			db.execute("INSERT INTO Subjects (S_Id,Name) VALUES ('Integration')");
			db.execute("INSERT INTO Subjects (S_Id,Name) VALUES ('Design Skills')");
			db.execute("INSERT INTO Subjects (S_Id,Name) VALUES ('Design Tools')");
			
			// modules table
			db.execute("CREATE TABLE IF NOT EXISTS Modules (M_Id INTEGER PRIMARY KEY AUTOINCREMENT, S_Id INTEGER, Name VARCHAR(40))");
			db.execute("DELETE FROM Modules");
			db.execute("INSERT INTO Modules (M_Id,S_Id,Name) VALUES (1, 'Online Game Programming')");
			db.execute("INSERT INTO Modules (M_Id,S_Id,Name) VALUES (2, 'New Media Development')");
			db.execute("INSERT INTO Modules (M_Id,S_Id,Name) VALUES (3, 'Major Atelier V')");
			db.execute("INSERT INTO Modules (M_Id,S_Id,Name) VALUES (4, 'Cross Media Design III')");
			db.execute("INSERT INTO Modules (M_Id,S_Id,Name) VALUES (5, 'Motion III')");
			*/
			
			db.close();
			
			
		} catch (error) {
			Titanium.API.info(error);
		};
	};
	
};
