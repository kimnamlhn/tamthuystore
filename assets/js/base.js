$(document).ready(function () {
	// Tab with swiper
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		if($($(this).attr("href")).find(".swiper-container").length) {
			var target = $($(this).attr("href")).find(".swiper-container");
			if (!target.hasClass("loaded")) {
				target.addClass("loaded");
				newSwiper(target);
			}
		}
	});
	// Danh sách hàm khởi tạo cơ sở
	var overrideList = {
		menuMobileInit: function() {
			$(window).resize(function(){
				if(window.matchMedia("(min-width: 768px)").matches)
					$('a[href="#menu-mobile-container"]').attr("href", "javascript:void(0)");
				else
					$("#menu-mobile #menu-mobile-container").mmenu();
			});
			$(window).trigger('resize');
		},
	};
	// Kiểm tra hàm ghi lại trong file script.js (theme hoặc default)
	for (functionName in overrideList) {
		if (typeof window[functionName] === "function")
			window[functionName]();
		else if (typeof overrideList[functionName] === "function")
			overrideList[functionName]();
	}
});

function changeTitle(str){str=str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a").replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e").replace(/ì|í|ị|ỉ|ĩ/g,"i").replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o").replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u").replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y").replace(/đ/g,"d").replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g,"A").replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g,"E").replace(/Ì|Í|Ị|Ỉ|Ĩ/g,"I").replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g,"O").replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g,"U").replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g,"Y").replace(/Đ/g,"D");str=str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g,"");str=str.replace(/\u02C6|\u0306|\u031B/g,"");str=str.trim().replace(/[^a-zA-Z0-9]+/g,"-");return str.toLowerCase();}

$(document).ready(function(){if(!window.matchMedia("(max-width:991px)").matches&&0!=$("[data-zoom-url]").length){var z=1.6;$("[data-zoom-url],[data-zoom-url] *").removeAttr("title");$("[data-zoom-url]").each(function(){$(this).css("background-image","url(\'"+$(this).attr("data-zoom-url")+"\')");});$("[data-zoom-url]").attr("onmouseover","zoomOver(this);");$("[data-zoom-url]").attr("onmouseleave","zoomLeave(this);");$("[data-zoom-url]").attr("onmousemove","zoomMove(this,event,"+z+");");var a=document.createElement("style");a.append(`[data-zoom-url]{position:relative;background-position:center;background-size:calc(100%*`+z+`) auto;background-repeat:no-repeat;cursor:crosshair}[data-zoom-url] *{cursor:inherit;}[data-zoom-url]:before{content:"";position:absolute;z-index:-1;top:0;right:0;bottom:0;left:0;pointer-events:none;background:#fff;border:solid 1px #ddd;-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s;}[data-zoom-url]:hover:before{background:transparent;-webkit-transition:all 1s .2s;-o-transition:all 1s .2s;transition:all 1s .2s;}[data-zoom-url]:after{content:"";position:absolute;z-index:1;top:0;right:0;bottom:0;left:0;pointer-events:none;border:solid 1px #fff;}`);var b=document.createElement("script");b.append(`function zoomOver(obj) {$(obj).find(">*").stop().animate({"opacity":0},500);}function zoomLeave(obj){$(obj).find(">*").stop().animate({"opacity":1},1000);}function zoomMove(obj, e, z){var t=$(e.currentTarget);var X=e.offsetX;var Y=e.offsetY;X=-X*(z-1)+50-(X*50*2/(t.outerWidth()));Y=-Y*(z-1)+50-(Y*50*2/(t.outerHeight()));t.animate({"background-position-x":X+"px"},0);t.animate({"background-position-y":Y+"px"},0);}`);$("body").append(a);$("body").append(b)}});