$(function() {

	periodRateFn();
	
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
