//UTF-8 Ã  jamais
/* IMAGES HOME */
var defile_entete_timeout;
function preload_images_image_home()
{
	defile_entete_timeout=setTimeout('defile_entete();',5000);
}
function defile_entete()
{
	clearTimeout(defile_entete_timeout);
	defile_entete_image_suivante();
	defile_entete_timeout=setTimeout('defile_entete();',5000);
}
function defile_entete_image_suivante()
{
	tab_li=ID('image_home').getElementsByTagName('li');
	tab_li_puce=ID('image_home_puce').getElementsByTagName('li');
	if(tab_li.length>0)
	{
		add_class_sel=false;
		for(cpt_li=0;cpt_li<tab_li.length;cpt_li++)
		{
			if(add_class_sel==true)
			{
				addClass(tab_li[cpt_li],'sel');
				addClass(tab_li_puce[cpt_li],'sel');
				break;
			}
			if(hasClass(tab_li[cpt_li],'sel'))
			{
				add_class_sel=true;
				delClass(tab_li[cpt_li],'sel');
				delClass(tab_li_puce[cpt_li],'sel');
			}
		}
		if(cpt_li==tab_li.length)
		{
			addClass(tab_li[0],'sel');
			addClass(tab_li_puce[0],'sel');
		}
	}
}
function image_home_sel(num)
{
	clearTimeout(defile_entete_timeout);
	tab_li=ID('image_home').getElementsByTagName('li');
	tab_li_puce=ID('image_home_puce').getElementsByTagName('li');
	if(tab_li.length>0)
	{
		for(cpt_li=0;cpt_li<tab_li.length;cpt_li++)
		{
			delClass(tab_li[cpt_li],'sel');
			delClass(tab_li_puce[cpt_li],'sel');
		}
		addClass(tab_li[num],'sel');
		addClass(tab_li_puce[num],'sel');
	}
}