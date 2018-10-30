// Main
$(function(){
	unitTotal()
	console.log(' Start !')
	$("#ori").on("change",function(){
		unitTotal()
	})
	$("#unit").on("change",function(){
		unitTotal()
		
	})
	$("#opt").on("change",function(e){
		shipTotal(e,total)
	})
	$("#discount").on("change",function(){
		discountTotal(total);
	})

})

var total;


function unitTotal(){
	var ori= parseInt($("#ori").val());
	var unit =parseInt($("#unit").val());
		total= unit*ori
		$("#total").text(total);
		console.log("Unit "+total)
	};

function shipTotal(e,total){
	unitTotal()
	var ship=0;
	if(e.target.value == 1){
		ship=total;
		console.log("Ship "+ship)

	}else if(e.target.value == 2){
		ship= total+500;
		console.log("Ship "+ship)

	}else if(e.target.value == 3){
		ship = total +100
		console.log("Ship "+ship)

	}else if(e.target.value == 4){
		ship = total +200
		console.log("Ship "+ship)
	}

	$("#total").text(ship);
}
function discountTotal(total){
	unitTotal()
	var code =$("#discount").val();
	var discount=0;
	console.log("Code " + code);

	if(code=== "AA"){
		discount=total - ((10 * total) / 100) 
		console.log("first discount")
		console.log(discount)

	}
	else if(code==="BB"){
		discount=total - ((20 * total) / 100) 
		console.log("second discount")
		console.log(discount)

	}
	else{
		discount=total
		console.log("not Discount")
		console.log(discount)

	}
	$("#total").text(discount);
}
	
