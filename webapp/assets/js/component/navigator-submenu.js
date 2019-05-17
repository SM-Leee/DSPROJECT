/*subtopic*/

let subtopic = $('#ds-ui-subtopic').find('div');

let subtopic_array = [];

const navigatorSubmenu = function(){
	if($("#ds-ui-subtopic").length != 0){

		$('#ds-ui-subtopic').empty();
		for(i=0;i < subtopic.length; i++){
			subtopic_array.push({id : i, subtopictitle: subtopic.get()[i].textContent});

			let subtopicItem = "<div class='ds-ui-subtopicItem' id='subtopicItem"+i+"'>"+
			"<div class='sub'>"+
			"<a href='"+ subtopic[i].dataset.href +"'>"+subtopic_array[i].subtopictitle+"</a>"+
			"</div>"+					
			"</div>";

			$('#ds-ui-subtopic').append(subtopicItem);

			if(subtopic[i].classList.value == "selected"){

				$('#subtopicItem'+i).addClass("subtopic-selected");
			}
		}


	}
}