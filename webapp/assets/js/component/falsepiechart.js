/*piechart*/
var falsepiechart = function(){
	if($("#ds-ui-piechart").length == 1){
		var dsPiechart = "<canvas id='tutorial' width=300 height=300></canvas>";
		$('#ds-ui-piechart').append(dsPiechart);

		var canvas = document.getElementById("tutorial");
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0,0,300,300);


		var prev_radian = 0;
		var next_radian = 0;
		for(i=0; i<chart.length; i++){
			ctx.beginPath();
			ctx.moveTo(150,150);

			next_radian = next_radian + (chart[i].percent/100)*360;

			var color = "rgb("+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+","+Math.floor(Math.random() * 256)+")";

			//무시해도되는 오류
			//부채꼴 그리고 코드
			ctx.arc(150 , 150, 100,(Math.PI/180)*prev_radian,(Math.PI/180)*next_radian,false);	

			ctx.fillStyle = color;
			ctx.fill();
			ctx.strokeStyle = "rgb(255,255,255)";
			ctx.stroke();

			//
			var rkqt = 200;
			var rkqt2 = 208;
			ctx.fillStyle = color;
			ctx.fillRect(10, rkqt+ i*15, 10, 10);

			ctx.fillStyle = '#000';
			ctx.font = '10px Arial';

			ctx.fillText(chart[i].title, 25, rkqt2+ i*15);

			// text 그리는 코드
			var text_radian = (prev_radian + next_radian)/2;
			ctx.font = '15px Arial';
			ctx.fillStyle = '#ffffff';

			ctx.fillText(chart[i].percent+"%", 138+70*Math.cos(text_radian*(Math.PI/180)), 156+ 70 * Math.sin(text_radian*(Math.PI/180)));
			prev_radian = next_radian;
		}
	}
}