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
grips:'<div class="alert alert-info">В этом разделе нет статей.</div>',
handlebars:'\
<div class="list-group">\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=seatpost_stem_seized.html">\
		Удаление прикипевших глаголов и выносов\
	</a>\
</div>',
headsets:'\
<div class="list-group">\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=headset_standards.html">\
		Стандарты рулевых колонок\
	</a>\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=conventional_threadless.html">\
		Обслуживание безрезьбовых колонок\
	</a>\
</div>',

//-------------------------------------------------------------------------------------------------------------

hubs:'<div class="alert alert-info">В этом разделе нет статей.</div>',
spokes:'<div class="alert alert-info">В этом разделе нет статей.</div>',
rims:'\
<div class="list-group">\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=wheel_building.html">\
		Как собрать велосипедное колесо\
	</a>\
</div>',
tires:'\
<div class="list-group">\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=inner_tube_repair.html">\
		Ремонт велосипедной камеры и покрышки\
	</a>\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=tire_tube_removal_installaton.html">\
		Установка и удаление покрышки и камеры\
	</a>\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=ust_tubeless.html">\
		Установка и обслуживание бескамерных покрышек\
	</a>\
</div>',

//-------------------------------------------------------------------------------------------------------------


pedals:'<div class="alert alert-info">В этом разделе нет статей.</div>',
cranksets:'\
<div class="list-group">\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=isis_octalink_removal_installation.html">\
		Установка и удаление шатунов: ISIS и Octalink\
	</a>\
</div>',
cassetes:'\
<div class="list-group">\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=cassette_freewheel_remove.html">\
		Установка и удаление кассеты\
	</a>\
</div>',
chains:'\
<div class="list-group">\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=chain_install.html">\
		Установка цепи на многоскоростные велосипеды\
	</a>\
</div>',

//-------------------------------------------------------------------------------------------------------------

shifters:'<div class="alert alert-info">В этом разделе нет статей.</div>',
brakes:'\
<div class="list-group">\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=avid_bleed.html">\
		Подгонка длины гидролинии и прокачка тормозов Avid\
	</a>\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=disc_adj.html">\
		Установка и настройка дискового тормоза: Post &amp; IS\
	</a>\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=rotor_service.html">\
		Установка и обслуживание ротора\
	</a>\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=v_br_service.html">\
		Обслуживание тормоза: V-brake\
	</a>\
</div>',
frontDerailleurs:'\
<div class="list-group">\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=fd_adjust.html">\
		Настройка переднего переключателя\
	</a>\
</div>',
rearDerailleurs:'\
<div class="list-group">\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=rd_adjust.html">\
		Настройка заднего переключателя\
	</a>\
</div>',
rigEtc:'<div class="alert alert-info">В этом разделе нет статей.</div>',

//-------------------------------------------------------------------------------------------------------------

bikes:'\
<div class="list-group">\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=bike_history.html">\
		История развития велосипеда\
	</a>\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=recumbent.html">\
		История развития рикамбента\
	</a>\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=mtb.html">\
		История развития горного велосипеда\
	</a>\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=bmx.html">\
		История развития BMX\
	</a>\
</div>',
frames:'\
<div class="list-group">\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=frame_materials.html">\
		Велосипедная рама – из чего она сделанна\
	</a>\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=aluminium_frames.html">\
		Материалы велосипедных рам. Алюминиевые сплавы\
	</a>\
</div>',
saddles:'\
<div class="list-group">\
	<a class="list-group-item" href="' + url + '?cat=' + cat + '&art=seatpost_stem_seized.html">\
		Удаление прикипевших глаголов и выносов\
	</a>\
</div>',

//-------------------------------------------------------------------------------------------------------------

electronics:'<div class="alert alert-info">В этом разделе нет статей.</div>',
carriers:'<div class="alert alert-info">В этом разделе нет статей.</div>',
flasks:'<div class="alert alert-info">В этом разделе нет статей.</div>',
auxilliariesEtc:'<div class="alert alert-info">В этом разделе нет статей.</div>'};

//-------------------------------------------------------------------------------------------------------------
