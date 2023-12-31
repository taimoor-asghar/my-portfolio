function addRecommendation() {
    
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
    // If the user has left a recommendation, display a pop-up
    if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New recommendation added");
      //Call showPopup here
      showPopup(true); // Add this line to display the popup
  
      // Create a new 'recommendation' element and set its value to the user's message
      var element = document.createElement("div");
      element.setAttribute("class", "recommendation");
      element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
      // Add this element to the end of the list of recommendations
      document.getElementById("all_recommendations").appendChild(element); 
      
      // Reset the value of the textarea
      recommendation.value = "";
    }
  }
  
  function showPopup(bool) {
    var popup = document.getElementById('popup');
    if (bool) {
      popup.style.visibility = 'visible';
  
      // Add thanks for recommendation in bold to the popup
      var thanksElement = document.createElement("p");
      thanksElement.innerHTML = "<strong>Thanks for recommendation</strong>";
      popup.appendChild(thanksElement);
    } else {
      popup.style.visibility = 'hidden';
  
      // Clear the popup content when hiding it
      popup.innerHTML = '';
    }
  }
  