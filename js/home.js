$(document).ready(function(){
	$(".clickme").click(function(event){
               $(".target").toggle('slow', function(){
                  $(".log").text('Back to top');
               });
            });

});