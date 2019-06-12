/*subtopic*/

let subtopic = $('#ds-ui-subtopic').find('div');

let subtopic_array = [];
let subtopicLength = subtopic.length;

const navigatorSubmenu = function(){
	if($("#ds-ui-subtopic").length != 0){

		$('#ds-ui-subtopic').empty();
		$('#ds-ui-subtopic').append(
				'<div class="ds-ui-subtopic-box" id="subtopic-box0" data-ds-page="0">'+
				'</div>'
				);
		//4개를 넘으면 밀리도록 하는 작업
		if(subtopicLength > 4){
			subtopicLength = 4*(Math.floor(subtopicLength/4) + 1)
		}
		for(let i=0;i < subtopicLength; i++){
			if(i%4 == 0 && i > 3){
				$('#subtopic-box'+((i/4)-1)).after(
						'<div class="ds-ui-subtopic-box" id="subtopic-box'+(Math.floor(i/4))+'" data-ds-page="'+(Math.floor(i/4))+'">'+
						'</div>');
			}
			
			if(subtopic[i] == undefined){
				let subtopicItem =
					"<div class='ds-ui-subtopicItem' id='subtopicItem"+i+"'>"+
					"<div class='sub'>"+
					"<a href='#'></a>"+
					"</div>"+					
					"</div>";
				$('#subtopic-box'+Math.floor(i/4)).append(subtopicItem);
				//$('#subtopicItem'+i+' a').prop("disabled", true)
			} else {
				subtopic_array.push({id : i, subtopictitle: subtopic.get()[i].textContent});
				let subtopicItem;
				if(subtopic[i].dataset.href == undefined){
					subtopicItem =
						"<div class='ds-ui-subtopicItem' id='subtopicItem"+i+"'>"+
						"<div class='sub'>"+
						"<a href=>"+subtopic_array[i].subtopictitle+"</a>"+
						"</div>"+					
						"</div>";										
				} else {
					subtopicItem =
						"<div class='ds-ui-subtopicItem' id='subtopicItem"+i+"'>"+
						"<div class='sub'>"+
						"<a href='"+ subtopic[i].dataset.href +"'>"+subtopic_array[i].subtopictitle+"</a>"+
						"</div>"+					
						"</div>";					
				}

				$('#subtopic-box'+Math.floor(i/4)).append(subtopicItem);

				if(subtopic[i].classList.value == "selected"){

					$('#subtopicItem'+i).addClass("subtopic-selected");
				}
			}
		}
		initSubtopic($('.subtopic-selected').parent('div').data('ds-page'))
	}
}

const initSubtopic = function(locate){
	$('.ds-ui-subtopic-box').each(function(i){
		if(i !== locate){
			this.style.display = 'none';
		}
	})
}