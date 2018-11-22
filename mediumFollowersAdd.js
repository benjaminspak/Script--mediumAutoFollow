// Go to https://medium.com/@USERNAME/followers & run in console.

function addPeople() {
  
  // Outer Card Container
  var listContainer = document.querySelector("div.js-profileStreamBlock");

  // Each Section Card Component
  var firstCard = listContainer.querySelector("div.streamItem--userPreview");
  var buttonToClick = firstCard.querySelector("button.js-followButton");
  var buttonText = firstCard.querySelector("button.is-active");

  while(firstCard && count < 125) { // stop after adding 125 people (Medium Max)
    var count = 0; // How many people you've added so far  
    // Following
    if (buttonText != null) {
      console.log("Already Following ...");
      listContainer.removeChild(firstCard);
      addPeople();
    }
    // Not Following
    if (buttonText == null){
      buttonToClick.click();
        count += 1;
        console.log("Your have followed " + count + " people so far.");
        listContainer.removeChild(firstCard);
        addPeople();
      }
    }
}
addPeople();