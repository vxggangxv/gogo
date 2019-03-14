$(function() {
	
	popShowFn();
	popClsFn();
	datePick();
	ascending();
	
});

// 팝업 기능 등록
var popFn = {
	show: function(obj_name) {
		$(obj_name).show();
	}
}

// 팝업 닫기 기능
function popClsFn() {
	var containerName = ".popup-container",
		popContainer = $(containerName),
		btn_cls = popContainer.find(".fn-cls");
	
	btn_cls.on("click", function() {
		$(this).closest(containerName).hide();
	});
	popContainer.find(".bg-back").on("click", function() {
		$(this).closest(containerName).hide();
	});
}

// 팝업 노출 기능
function popShowFn() {
	var containerName = ".popup-container",
		popContainer = $(containerName),
		btn_cls = popContainer.find(".fn-cls"),
		btn_evtRoomManage = $(".fn-evtRoomManage"),
		btn_evtRoomDead = $(".fn-evtRoomDead"),
		btn_booking = $(".fn-booking"),
		btn_bookingType2 = $(".fn-booking.fn-type-2"),
		btn_sms = $(".fn-sms"),
		btn_detail = $(".fn-detail"),
		btn_deadline = $(".fn-deadline");
	
	btn_evtRoomDead.on("click", function() {
		$(".pop-evtRoomDead").show();
	});
	btn_evtRoomManage.on("click", function() {
		$(".pop-evtRoomManage").show();
	});
	btn_booking.on("click", function() {
		$(".pop-booking").show();
	});
	btn_bookingType2.on("click", function() {
		$(this).closest(containerName).toggleClass("type-2");
	});
	btn_sms.on("click", function() {
		$(".pop-sms").show();
	});
	btn_detail.on("click", function() {
		$(".pop-detail").show();
	});
	btn_deadline.on("click", function() {
		$(".pop-deadline").show();
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
