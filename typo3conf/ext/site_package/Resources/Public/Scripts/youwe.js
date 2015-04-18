window.onload = function() {
	masonry();
};

window.onresize = function() {
	masonry();
};

function checkForDOMChange() {
	masonry();
}

function masonry() {

	if ($('#posts').length != 0) {
		if ($(window).width() <= 768) {
			$('#posts').masonry('destroy');
		} else {
			if ($(window).width() >= 990) {
				var blokWidth = $('.item').first().outerWidth();
			} else {
				var blokWidth = 0;
			}
			$('#posts').masonry({
				columnWidth: blokWidth,
				itemSelector: '.item'
			});
		}
	}

	fitAll();
	//setTimeout(fitAll, 1000);

}

function fitAll() {

	$('.sticky').each(function () {
		if ($(window).width() <= 768) {
			if ($(this).is("#myScrollspy")) {
				$(this).css('width', $(this).parent().outerWidth());
			} else {
				$(this).css('width', $(this).parent().width());
			}
		} else {
			$(this).css('width', $(this).parent().width());
		}
	});

	$('section#content').removeAttr('style');

	var pathName = window.location.pathname;
	var pageId = /[^/]*$/.exec(pathName)[0];

	if($('.tx_ncgovpermits_filter_topbox').length <= 0 && $('#disqus_thread').length <= 0 && $('.gsc-control-cse').length <= 0) {

		if ($('section#content').outerHeight()+$('footer').height() <= $(window).height()){
			$('section#content').css('height', $(window).height()-$('footer').height());
		}

	}
}

$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 500);
			return false;
		}
	}
});

$('body').scrollspy({ target: '#myScrollspy' });

$('#defaultCross').click(function() {
	$('.hokjeGroot .content').empty();
	var defaultInfo = "<H3>College burgemeester en wethouders</H3>" +
		"<P>Het college van de gemeente Woudenberg bestaat uit de burgemeester, twee wethouders en de gemeentesecretaris.</P>" +
		"<P>Het college van burgemeester en wethouders van " +
		"Woudenberg is een coalitie die gevormd wordt " +
		"door GBW (GemeenteBelangen Woudenberg) en " +
		"CDA (Christen Democratisch Appèl).</P>" +
		"<H3>De gemeenteraad</H3>" +
		"<P>De raad van Woudenberg bestaat uit 15 leden, verdeeld over " +
		"5 fracties. De burgemeester is de voorzitter van de gemeenteraad.</P>" +
		"<P>De zetels in de gemeenteraad van Woudenberg</P>" +
		"<table>" +
		"<th>Politieke partij</th>" +
		"<th>Aantal raadsleden</th>" +
		"<tr>" +
		"<td>GBW (GemeenteBelangen Woudenberg)</td>" +
		"<td align='center'>6</td>" +
		"</tr>" +
		"<tr>" +
		"<td>SGP (Staatkundig Gereformeerde Partij)</td>" +
		"<td align='center'>3</td>" +
		"</tr>" +
		"<tr>" +
		"<td>CDA (Christen Democratisch Appèl)</td>" +
		"<td align='center'>2</td>" +
		"</tr>" +
		"<tr>" +
		"<td>CU (ChristenUnie)</td>" +
		"<td align='center'>2</td>" +
		"</tr>" +
		"<tr>" +
		"<td>PvdA (Partij van de Arbeid )</td>" +
		"<td align='center'>1</td>" +
		"</tr>" +
		"<tr>" +
		"<td>VVD (Volkspartij voor Vrijheid en Democratie)</td>" +
		"<td align='center'>1</td>" +
		"</tr>" +
		"</table>";
	$('.hokjeGroot .content').append(defaultInfo);
});

$('.mouseOver').click(function(event) {
	$('.hokjeGroot .content').empty();
	var divInfo = $(this).siblings(".hiddenInfo").html();
	$('.hokjeGroot .content').append(divInfo);
	$('.hokjeGroot .content').css("background-color", "#e6e6e6");
});