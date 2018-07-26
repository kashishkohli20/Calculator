// var i = 0;
// function change() {
//   var doc = document.getElementById("background");
//   var color = ["black", "blue", "brown", "green"];
//   doc.style.backgroundColor = color[i];
//   i = (i + 1) % color.length;
// }
// setInterval(change, 1000);

//SET THE VALUE FROM BUTTON ON THE INPUT FIELD
// function val(val){
// 	document.getElementById("data").value+=val;
// }

//DISPLAY THE RESULT ON THE INPUT FIELD
// function result(){
// 	var total = eval(document.getElementById('data').value);
// 	document.getElementById('data').value = total;
// }

//DELETE THE VALUE OF THE INPUT FIELD
// function del(){
// 	document.getElementById('data').value="";
// }

// function on_enter(event){
// 	if (event.which==13) {
// 		// setInterval(function res(){
// 		// 	var total = eval(document.getElementById('data').value);
// 		// 	document.getElementById('data').value = total;
// 		// }, 9000);
// 		result();
// 	}
// 	if (event.which==8) {
// 		del();
// 	}
// }
// window.addEventListener("keydown",
//              setTimeout(function(){
//                onKeyDown()
//               }, 5000)
//   , false);

document.getElementById("equal").addEventListener("click", function(){
	var total = eval(document.getElementById('data').value);
	document.getElementById('data').value = total;
});

var elem = document.querySelectorAll('#num');
var len = elem.length;
for(var i = 0; i< len; i++){
	elem[i].addEventListener("click", function(){
		var num=this.value;
		document.getElementById("data").value+=num;//document.getElementById('num').value;
	});
}

var op = document.querySelectorAll('#oper');
var l = op.length;
for(var i = 0; i< l; i++){
	op[i].addEventListener("click", function(){
		var operator=this.value;
		document.getElementById("data").value+=operator;//document.getElementById('num').value;
	});
}


document.getElementById("del-but").addEventListener("click", function(){
	document.getElementById("data").value="";
});

document.getElementById('data').addEventListener("keyup", function(event){
	var total, tot;
	if (event.keyCode==13) {
 		//total = eval(document.getElementById('data').value);
		total = document.getElementById('data').value ;//= total;
		var res = eval(total);
		document.getElementById('data').value = res;
	}
});
