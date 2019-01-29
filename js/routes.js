Path.map('#/portfolio').to(function () {
    $('#content').load('./portfolio.html');
});

Path.map('#/about').to(function () {
    $('#content').load('./about.html');
});

Path.map('#/partner').to(function () {
	$('#content').load('./partner.html'); 
});

Path.map('#/contact').to(function () {
	$('#content').load('./contact.html'); 
});

Path.listen();