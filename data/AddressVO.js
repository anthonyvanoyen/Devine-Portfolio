
function AddressVO(id, title, subtitle, latitude, longitude)
{
	var _id = id;
	var _title = title;
	var _subtitle = subtitle;
	var _latitude = latitude;
	var _longitude = longitude;
	
	this.getId = function()
	{
		return _id;
	};
	
	this.getTitle = function()
	{
		return _title;
	};
	
	this.getSubtitle = function()
	{
		return _subtitle;
	};
	
	this.getLatitude = function()
	{
		return _latitude;
	};
	
	this.getLongitude = function()
	{
		return _longitude;
	};
};