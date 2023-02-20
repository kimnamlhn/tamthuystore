$(function () {
	// $("body").contextmenu(function (e) {
	// 	e.preventDefault();
	// 	e.stopPropagation();
	// });
	$("#menu-center .menu-center-child-item a[data-active]").each(function () {
		$(this).closest(".menu-center-item").find("> a").attr("data-active", "");
	});
	$(document).scroll(function () {
		var sctop = $(this).scrollTop();
		$("[animation]").each(function () {
			var ittop = $(this).offset().top + Number($(this).css("padding-top").replace("px", ""));
			if (sctop + $(window).outerHeight() - 100 > ittop)
				$(this).attr("animated", "");
			else if (sctop + $(window).outerHeight() <= ittop)
				$(this).removeAttr("animated");
		});
	});
	$(document).trigger("scroll");

	// js-fullbg
	$('.js-fullbg').each(function () {
		var $this = $(this);
		var $img = $this.children('img');
		if (!$img.length) {
			return true;
		}
		var src = $img.attr('src');
		var pos = 'center center';
		if ($this.hasClass('js-fullbg-top')) {
			pos = 'center top';
		}
		$this.css({
			backgroundSize: 'cover',
			backgroundImage: 'url(' + src + ')',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: pos
		});
		$img.hide();
	});
});