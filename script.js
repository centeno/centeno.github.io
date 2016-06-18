$(document).ready(function(){
	try {
		$('#backToTheTut').hover(function(){
			$(this).stop().animate({'left':-20},'slow');
		},function(){
			$(this).stop().animate({'left':-410},'slow');
		});
		
		setTimeout(function(){$('#backToTheTut').animate({'left':-410},'slow');},2000);
	} catch(ex){}
	
	try {
		$("#title").textShadow();
		$("#article").textShadow();
		$("#article a").textShadow();
	} catch(ex){}

});