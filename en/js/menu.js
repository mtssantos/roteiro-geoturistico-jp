//UTF-8 Ã  jamais
function aff_sous_menu(id_menu)
{
	ouvre_sous_menu();
	tab_li=ID('sous_menu').getElementsByTagName('LI');
	if(tab_li.length>0)
	{
		for(cpt_li=0;cpt_li<tab_li.length;cpt_li++)
			delClass(tab_li[cpt_li],'on');
	}
	addClass(getSousElementsByClassName(ID('sous_menu'),'menu_'+id_menu,'LI')[0],'on');
	tab_div=getSousElementsByClassName(ID('bloc_sous_menu'),'entour_sous_menu_detail','DIV');
	if(tab_div.length>0)
	{
		for(cpt_div=0;cpt_div<tab_div.length;cpt_div++)
			delClass(tab_div[cpt_div],'sel');
	}
	addClass(ID('entour_sous_menu_detail_'+id_menu),'sel');
	if(responsive_palier()==768)
	{
		tab_li=getSousElementsByClassName(ID('menu_tactile'),'menu','UL')[0].getElementsByTagName('LI');
		if(tab_li.length>0)
		{
			for(cpt_li=0;cpt_li<tab_li.length;cpt_li++)
			{
				if(hasClass(tab_li[cpt_li],'menu_'+id_menu))
				{
					if(!hasClass(tab_li[cpt_li],'sel'))
						addClass(tab_li[cpt_li],'sel');
				}
				else
					delClass(tab_li[cpt_li],'sel');
			}
		}
	}
}
function ouvre_sous_menu()
{
	if(!hasClass(ID('bloc_sous_menu'),'sel'))
		addClass(ID('bloc_sous_menu'),'sel');
}
function ferme_sous_menu()
{
	delClass(ID('bloc_sous_menu'),'sel');
}
function ouvre_menu_tactile()
{
	if(!hasClass(ID('menu_tactile'),'aff'))
	{
		addClass(ID('menu_tactile'),'aff');
		tab_li=getSousElementsByClassName(ID('menu_tactile'),'menu','UL')[0].getElementsByTagName('LI');
		if(tab_li.length>0)
		{
			for(cpt_li=0;cpt_li<tab_li.length;cpt_li++)
			{
				if(hasClass(tab_li[cpt_li],'sel'))
				{
					menu_id=0;
					tab_class=tab_li[cpt_li].className.split(' ');
					for(cpt_class=0;cpt_class<tab_class.length;cpt_class++)
					{
						if(tab_class[cpt_class].indexOf('menu_')>=0)
						{
							menu_id=tab_class[cpt_class].split('_')[1];
							break;
						}
					}
					if(ID('entour_sous_menu_detail_'+menu_id))
						addClass(ID('bloc_sous_menu'),'sel');
				}
			}
		}
		addClass(ID('cache_page'),'sel');
	}
}
function ferme_menu_tactile()
{
	delClass(ID('menu_tactile'),'aff');
	delClass(ID('bloc_sous_menu'),'sel');
	delClass(ID('cache_page'),'sel');
}
function sous_menu_retour()
{
	if(responsive_palier()==320)
		delClass(ID('bloc_sous_menu'),'sel');
}
function recherche_load()
{
	document.onclick=recherche_ferme_clic;
}
function recherche_ouvre()
{
	addClass(ID('bloc_moteur_recherche'),'sel');
}
function recherche_ferme()
{
	delClass(ID('bloc_moteur_recherche'),'sel');
}
function recherche_ferme_clic(e)
{
	element_clic=get_mouse_target(e);
	if(element_clic.id!='bloc_moteur_recherche'&&!recherche_parent_node_ou_element(element_clic,'bloc_moteur_recherche')&&element_clic.id!='acces_recherche'&&!recherche_parent_node_ou_element(element_clic,'acces_recherche'))
		recherche_ferme();
}