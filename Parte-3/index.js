let textInput = document.querySelector('.userName');
let username;
let comment;

let textComment = document.querySelector('#userComment');

const addCommentButton = document.querySelector('#submit');

let commentSection = document.querySelector('.seccionComments');

function addNewComment(){

	username = textInput.value;

	comment = textComment.value;

	if(username && comment){
		$(commentSection).append("<h3>" + username + " </h3><p> " + comment + "</p");
	}

}

addCommentButton.addEventListener("click", function(e){
	e.preventDefault();
	addNewComment();
});

