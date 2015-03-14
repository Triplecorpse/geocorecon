//Retrieving html to paste into links
var url = document.location.href;
url = url.slice(0, url.indexOf("?"));
//console.log(url);

var htmls = {forks:'\
<div class="list-group">\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=steering_column_length.html">\
		Обрезка рулевой трубы вилки\
	</a>\
</div>',
grips:null,
handlebars:null,
headsets:'\
<div class="list-group">\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=headet_standards.html">\
		Стандарты рулевых колонок\
	</a>\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=conventional_threadless.html">\
		Обслуживание безрезьбовых колонок\
	</a>\
</div>'}

console.log('url, cat: ' url + ' ' + cat);

//-------------------------------------------------------------------------------------------------------------

