
// click and make it strike through plus color gray
$("ul").on("click" , "li" , function(){

$(this).toggleClass("completed");

// long method:
//  // if its gray make it back to normal with no strike
// if($(this).css("color") === "rgb(128, 128, 128)") {

// $(this).css({
// color : "black",
// textDecoration: "none"
// });

// }
// // else make it strike through and gray
// else{
// $(this).css({
// 	color : "gray",
// 	textDecoration : "line-through"
// });	
// }

});


// delete todo
$("ul").on("click" , "span" , function(event){
$(this).parent().fadeOut(500,function(){
$(this).remove();
});
event.stopPropagation();

});


// add new todos
$("input[type = 'text']").keypress(function(event){
if(event.which === 13){

var todotext = $(this).val();
$(this).val("");

$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todotext + "</li>");
}


});

$(".fa-plus-square").click(function(){
$("input[type = 'text']").fadeToggle();

});
