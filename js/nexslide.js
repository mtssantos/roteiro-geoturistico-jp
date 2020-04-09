//UTF-8 Ã  jamais
var nexslide_legende_opacity=0.6;

function nexslide_onload()
{
	var tab_nexslide=getElementsByClassName('nexslide');
	for(var cpt=0;cpt<tab_nexslide.length;cpt++)
	{
		tab_nexslide[cpt].id='nexslide_'+cpt;
		nexslide_init(tab_nexslide[cpt].id);
	}
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
function fcthasClass(element,className)
{
  return ( 
    element.className && 
    element.className.match( new RegExp( "\\b"+className+"\\b" ) ) 
  ) ? true : false;
}


function nexslide(id,sens)
{
	var mon_nexslide=document.getElementById(id);
	var mon_ul=mon_nexslide.getElementsByTagName('UL')[0];
	var nb_img=mon_ul.getElementsByTagName('LI').length;
	var mon_li=mon_ul.getElementsByTagName('LI')[0];
	var largeur_img=mon_li.clientWidth;
	if(mon_ul.id=='')
		nexslide_init(id);
	if(!(mon_nexslide.num_img_aff>=1))
		mon_nexslide.num_img_aff=1;

	var ma_position=-largeur_img*(mon_nexslide.num_img_aff-1);
	var mon_img_suivante=mon_nexslide.num_img_aff+sens;
	var multiple_pas=nb_img;
	if(mon_img_suivante>nb_img)
		mon_img_suivante=1;
	else if(mon_img_suivante<1)
		mon_img_suivante=nb_img;
	else
		multiple_pas=1;
	var ma_position_suivante=-largeur_img*(mon_img_suivante-1);
	mon_nexslide.num_img_aff=mon_img_suivante;
	effet_block(mon_ul.id,'left',ma_position,ma_position_suivante,multiple_pas);
}
function nexslide_init(id)
{
	var mon_nexslide=document.getElementById(id);
	var mon_ul=mon_nexslide.getElementsByTagName('UL')[0];
	if(typeof(mon_ul)=='undefined')
		return;
	mon_ul.id=mon_nexslide.id+'_ul';
	if(mon_ul.style.left=='')
		mon_ul.style.left='0px';

	// --- le lien prÃ©cÃ©dent ---
	var mon_a_prec=document.createElement('a');
	mon_a_prec.href='#';
	mon_a_prec.className='prec';
	mon_a_prec.onclick=function(){nexslide(id,-1);return false;};
	mon_a_prec.innerHTML='<img src="picto/nexslide-precedent.png" alt="" />';
	mon_nexslide.appendChild(mon_a_prec);

	// --- le lien suivant ---
	var mon_a_suiv=document.createElement('a');
	mon_a_suiv.href='#';
	mon_a_suiv.className='suiv';
	mon_a_suiv.onclick=function(){nexslide(id,1);return false;};
	mon_a_suiv.innerHTML='<img src="picto/nexslide-suivant.png" alt="" />';
	mon_nexslide.appendChild(mon_a_suiv);

	// --- les lÃ©gendes des images ---
	var mes_lis=mon_ul.getElementsByTagName('LI');
	for(var cpt=0;cpt<mes_lis.length;cpt++)
	{
		var mon_li=mes_lis[cpt];
		mon_li.onclick=function(){
			nexslide(this.parentNode.parentNode.id,1);
		}
/*		mon_li.onmousemove=function(e){
			if(this.parentNode.timeout_effet_block)
				return;
			if(e)
				x=e.pageX+document.body.scrollLeft-this.parentNode.parentNode.offsetLeft;
			else if(event)
				x=event.x+document.body.scrollLeft;
			else
				return;
			if(x<30)
				nexslide(this.parentNode.parentNode.id,-1);
			else if(x>170)
				nexslide(this.parentNode.parentNode.id,1);
		}*/
		var mon_img=mon_li.getElementsByTagName('IMG')[0];
		if(mon_img.title!="")
		{
			var mon_span=document.createElement('span');
			var mon_p=document.createElement('p');
			mon_p.innerHTML=mon_img.title;
			mon_span.appendChild(mon_p);
			mon_span.id=mon_ul.id+'_span_'+cpt;;
			mon_li.appendChild(mon_span);
			set_opacity(mon_span,nexslide_legende_opacity);
			/* effet a revoir car apparait/disparait quand la souris passe sur la bas de l'image, ou lors du slide entre deux images
			mon_li.onmouseover=function(){
				var mon_span=this.getElementsByTagName('SPAN')[0];
//				mon_span.opacity_originale=get_opacity(mon_span);
				mon_span.opacity_originale=nexslide_legende_opacity;
//				alert(mon_span.opacity_originale);
				effet_block(mon_span.id,'opacity',mon_span.opacity_originale,0);
			}
			mon_li.onmouseout=function(){
				var mon_span=this.getElementsByTagName('SPAN')[0];
				effet_block(mon_span.id,'opacity',0,mon_span.opacity_originale);
			}*/
			mon_img.title="";
		}
	}
}

function effet_block(id,propriete,point_en_cours,point_arrivee,multiple_pas)
{
	if(propriete!='opacity'&&eval('(document.getElementById(id).style.'+propriete+'!="")'))
	{
		eval('(point_en_cours=document.getElementById(id).style.'+propriete+')')
		point_en_cours=point_en_cours.replace('px','');
	}
	point_en_cours=point_en_cours*1;
	var temps=15;
	if(propriete=='opacity')
		var pas=0.03;
	else
		var pas=20*multiple_pas;
//	alert(point_en_cours+ '!='+point_arrivee);
	if(point_en_cours!=point_arrivee)
	{
		var distance_restante=point_arrivee-point_en_cours;
		var distance_deplace=distance_restante/Math.abs(distance_restante)*Math.min(Math.abs(pas),Math.abs(distance_restante));
		
		if(propriete=='opacity')
			opacity(document.getElementById(id),point_en_cours+distance_deplace);
		else
			eval('(document.getElementById(id).style.'+propriete+'=point_en_cours+distance_deplace+"px")');
		point_en_cours=(point_en_cours*1)+(distance_deplace*1);

		clearTimeout(document.getElementById(id).timeout_effet_block);
		document.getElementById(id).timeout_effet_block=setTimeout("effet_block('"+id+"','"+propriete+"',"+point_en_cours+",'"+point_arrivee+"',"+multiple_pas+")",temps);
	}
	else
	{
		clearTimeout(document.getElementById(id).timeout_effet_block);
		document.getElementById(id).timeout_effet_block=false;
	}
}