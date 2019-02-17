   
 var accessToken = "1bf3f80217ef43ceb02e6fed1ccef165";
    var baseUrl = "https://api.dialogflow.com/v1/";
    $(document).ready(function() {
      $("#input").keypress(function(event) {
        if (event.which == 13) {
          $('.chatBox').append('<span class="userInput"><img src="img/user.png" width=22px;" height=22px; image-align:center"/>' + ' : '+ $('input').val() + '</span></br></br>')
          event.preventDefault();
          let query  = $('input').val()
          $('input').val('');
	 
          var text = query;
	  if(text!="")
	  {
      	  $.ajax({
         type: "POST",
         url: baseUrl + "query?v=20150910",
         contentType: "application/json; charset=utf-8",
         dataType: "json",
         headers: {
          "Authorization": "Bearer " + accessToken
         },
        data: JSON.stringify({ query: text, lang: "en", sessionId: "AskFundRaiserHer" }),
        success: function(data) {
          $('.chatBox').append('<span class="responseData"><img src="img/chatbot.png" width=22px;" height22px;"/>'+' : ' + data.result.fulfillment.speech + '</span></br></br>');
        setAutoScroll();	
        }
      });
	}
        }
      });
    });


   function setAutoScroll() {
	chatWindow = document.getElementById('panel'); 

	var xH = chatWindow.scrollHeight; 
	chatWindow.scrollTo(0, xH);
   }
        
    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }
    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }