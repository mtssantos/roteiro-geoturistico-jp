//UTF-8 Ã  jamais
function mel2(a,user,domaine,tld)
{
	if(a.href.substring(0,7)=='mailto:')
		return false;
	a.href='mailto:'+user+'@'+domaine+'.'+tld;
}
function mel2_onload()
{
	var spans=document.getElementsByTagName('span');
	for(var cpt_span=0;cpt_span<spans.length;cpt_span++)
	{
		var span=spans[cpt_span];
		if(span.className=='mel2')
		{
			var inner=span.innerHTML;
			var email_decrypte='';
			var arobase=true;
			for(var cpt=0;cpt<inner.length;cpt++)
			{
				var car=inner.substring(cpt,cpt+1);
				if(car==',')
				{
					if(arobase)
						car='@';
					else
						car='.';
					arobase=false;
				}
				email_decrypte+=car;
			}
			span.innerHTML=email_decrypte;
		}
	}
}