//UTF-8 Ã  jamais
function hasClass(element,classe)
{
	if(element.className==classe)//que cette classe
		return true;
	if(element.className.indexOf(' '+classe+' ')>=0)//cette classe au mileu d'autres
		return true;
	if(element.className.indexOf(classe+' ')==0)//cette classe au dÃ©but
		return true;
	var classe_end=' '+classe;
	if(element.className.indexOf(classe_end)>=0&&element.className.indexOf(classe_end)==element.className.length-classe_end.length)//cette classe Ã  la fin
		return true;
	return false;
}
function addClass(element,classe)
{
	element.className=element.className+' '+classe;
}
function delClass(element,classe)
{
	var classe_end=' '+classe;
	if(element.className==classe)//que cette classe
		element.className='';
	else if(element.className.indexOf(' '+classe+' ')>=0)//cette classe au mileu d'autres
		element.className=element.className.replace(' '+classe+' ',' ');
	else if(element.className.indexOf(classe+' ')==0)//cette classe au dÃ©but
		element.className=element.className.replace(classe+' ','');
	else if(element.className.indexOf(classe_end)==element.className.length-classe_end.length)//cette classe Ã  la fin
		element.className=element.className.replace(' '+classe,'');
}
function getElementsByClassName(className)
{
	return getSousElementsByClassName(document,className);
}
function getSousElementsByClassName(elt,className,tag)
{
	if(typeof(tag)=='undefined')
		var elts=elt.getElementsByTagName('*');
	else
		var elts=elt.getElementsByTagName(tag);
	var classArray=new Array();
	for(var j=0;j<elts.length;++j)
	{
		if(je_suis_un_element_svg(elts[j])==false)
		{
			if(fcthasClass(elts[j],className))
				classArray.push(elts[j]);
		}
	}
	return classArray;
}