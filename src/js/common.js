$(function() {

	popClsFn();
	datePick();
	ascending();
	tabFn();

});

// 팝업 기능 등록
var popFn = {
	show: function(obj_name) {
		$(obj_name).show();
	}
}

// 팝업 닫기 기능
function popClsFn() {
	var containerName = ".pop-container",
		popContainer = $(containerName),
		btn_cls = popContainer.find(".fn-cls");

	btn_cls.on("click", function() {
		$(this).closest(containerName).hide();
	});
	popContainer.find(".bg-back").on("click", function() {
		$(this).closest(containerName).hide();
	});
}

// 달력 ui
function datePick() {
	$( "input.date-ui" ).datepicker({
		dateFormat: 'yy-mm-dd'
	});
}

// 결과 오름차순 토글
function ascending() {
	$(".order-ui").on("click", function() {
		$(this).toggleClass("ascending");
	});
}

// 탭 기능
function tabFn() {
	var box = $(".fn-tabShow");
	box.find(".tab-list > li").on("click", function() {
		var idx = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		box.find(".item-list > div").eq(idx).addClass("on").siblings().removeClass("on");
		box.find(".item-list > div").eq(idx).show().siblings().hide();
	});
}
