//UTF-8 Ã  jamais
function ID(identifiant)
{
	return document.getElementById(identifiant);
}
function je_suis_un_element_svg(element)
{
	if(element.tagName=='HTML')
		return false;
	else if(element.tagName=='svg')
		return true;
	else
		return je_suis_un_element_svg(element.parentNode);
}
function responsive_palier()
{
	var div=ID('responsive_palier');
	if(div.currentStyle)
		var palier=parseInt(div.currentStyle['width']);
	else if (window.getComputedStyle)
		var palier=parseInt(window.getComputedStyle(div).width);
	return palier;
}
function get_mouse_target(e)
{
	if(e)
		return e.target?e.target:e.srcElement;
	else
		return event.target?event.target:event.srcElement;
}
function recherche_parent_node_ou_element(element,element_id)
{
	if(!element.parentNode)
		return false;
	if(element.parentNode.id==element_id)
		return true;
	return recherche_parent_node_ou_element(element.parentNode,element_id);
	/*		
	if(element.parentNode.tagName!=tag)
		return recherche_parent_node_ou_html(element.parentNode,tag);
	else
		return element.parentNode;
	*/
}