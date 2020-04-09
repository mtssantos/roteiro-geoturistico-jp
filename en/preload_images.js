//UTF-8 Ã  jamais
function preload_images()
{
	var tab_preload_images=getElementsByClassName('preload_images');
	for(var cpt=0;cpt<tab_preload_images.length;cpt++)
		preload_images_bloc(tab_preload_images[cpt]);
}
var tab_img_preload=new Array();
function preload_images_bloc(bloc)
{
	tab_img_preload[bloc.id]=new Array();
	tab_img_preload[bloc.id]=bloc.getElementsByTagName('IMG');
	if(tab_img_preload[bloc.id].length>0)
		preload_images_image(bloc.id);
}
function preload_images_image(id_bloc,image_en_cours)
{
	if(typeof(image_en_cours)=='undefined')
		image_en_cours=0;
	var newIMG=document.createElement('IMG');
	var image_en_cours_suivante=image_en_cours+1;
	if(image_en_cours_suivante<tab_img_preload[id_bloc].length)//ce n'est pas la derniÃ¨re image
		newIMG.setAttribute('onload','preload_images_image("'+id_bloc+'",'+image_en_cours_suivante+')');
	else//c'est la derniÃ¨re image
	{
		if(typeof(this.window['preload_images_'+id_bloc])=='function')//il y a une fonction de callback Ã  appeler quand toutes les images seront chargÃ©es
			newIMG.setAttribute('onload','preload_images_'+id_bloc+'()');
	}
	newIMG.src=tab_img_preload[id_bloc][image_en_cours].src;
}