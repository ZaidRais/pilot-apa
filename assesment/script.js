$(document).ready(function() {
    $('.toggle-button').click(function() {
        $('.nav-list').toggleClass('show');
    });

    $("#tabCard1 #tab1").addClass("active");
   
    $("#tabCard1  #content1").show();


    $("#tabCard1 .tab").click(function() {
     
      $("#tabCard1 .tab-content").hide();

    
      $("#tabCard1 .tab").removeClass("active");


      $(this).addClass("active");


      var contentId = $(this).attr("id").replace("tab", "#content");
      $(contentId).show();
    });
    

    $(".openModalBtn").click(function(){
        $("#myModal").css("display", "block");
      });
    

      $(".close").click(function(){
        $("#myModal").css("display", "none");
      });
    
 
      $(window).click(function(event) {
        if (event.target.id === "myModal") {
          $("#myModal").css("display", "none");
        }
      });
});