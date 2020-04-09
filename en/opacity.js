//UTF-8 Ã  jamais
function set_opacity(elt,valeur)
{
	if(window.ActiveXObject)//IE
	{
  	elt.style.filter='alpha(opacity='+(valeur*100)+')';
//marche pas tout le temps ???		elt.filters.alpha.opacity=valeur*100;
	}
	else
		elt.style.opacity=valeur;
}
function get_opacity(elt)
{
	if(window.ActiveXObject)//IE
		return elt.filters.alpha.opacity/100;
	else
		return elt.style.opacity;
}