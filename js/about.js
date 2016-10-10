$(document).ready(function(){
	$(".clickme").click(function(event){
               $(".target").toggle('slow', function(){
                  $(".log").text('Unlocking Potential');
               });
            });

});