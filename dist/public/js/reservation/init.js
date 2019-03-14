$(function() {
	
	periodRateFn();
	tabFn();
	
});

// 기간 비율 조정
function periodRateFn() {
	$(".edit-tbl tr .cell.read").on("click", function() {
		var thisTr = $(this).closest("tr");
		thisTr.find(".cell.read").hide();
		thisTr.siblings().removeClass("edit");
		thisTr.addClass("edit");
		thisTr.find(".fn-off").on("click", function() {
			thisTr.find(".cell.read").show();
			thisTr.removeClass("edit");
		});
	});
}

// 탭 기능
function tabFn() {
	var box = $(".fn-tabShow");
	box.find(".tab-list > a").on("click", function() {
		var idx = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		box.find(".item-list > div").eq(idx).addClass("on").siblings().removeClass("on");
		box.find(".item-list > div").eq(idx).show().siblings().hide();
	});
}