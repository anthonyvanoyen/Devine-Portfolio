
function ModuleVO(id, module, subject)
{
	var _id = id;
	var _module = module;
	var _subject = subject;
	
	this.getId = function()
	{
		return _id;
	};
	
	this.getModule = function()
	{
		return _module;
	};
	
	this.getSubject = function()
	{
		return _subject;
	};
};
