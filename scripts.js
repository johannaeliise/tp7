//JavaScript for TP7


//function to load file from the URL "fromFile" into the object intetified by "whereTo"
function loadFileInto(fromFile, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {
    if ((this.readyState == 4) && (this.status == 200)) {
      document.querySelector(whereTo).innerHTML = this.responseText;

    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);
    }

  } // end ajax.onreadystatechange function

  // initiate request and wait for response
  ajax.send();

}

// new recipe object
function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {

  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;
  this.ingredients = ingredientsURL;
  this.equipment = equipmentURL;
  this.directions = directionsURL;

  this.displayRecipe = function() {

    document.querySelector("#titleBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imageURL + ")";
    loadFileInto(this.ingredients, "#ingredients ul");
    loadFileInto(this.equipment, "#equipment ul");
    loadFileInto(this.directions, "#directions ol");
  }
}

Tiramisu = new Recipe("Tiramisu", "Johanna", "https:images.unsplash.com/photo-1585198330882-f32e816d0320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", "ingredients.html", "equipment.html", "directions.html");

FrenchToast = new Recipe("French Toast", "Andrew Witsoe","https://github.com/AndrewWitsoe/tp7/blob/main/frenchtoast.jpg?raw=true","FrenchToast-ingredients.html", "FrenchToast-equipment.html", "FrenchToast-directions.html");
 
GoodOldFashionedPancakes = new Recipe("Good old fashioned pancakes", "Maddy Szczypka", "https://images.unsplash.com/photo-1590137876181-2a5a7e340308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80", "Pancakes-ingredients.html", "Pancakes-equipment.html", "Pancakes-directions.html");

window.onload = function() {

  document.querySelector("#firstRecipe").onclick = function() {
    Tiramisu.displayRecipe();
  }
   document.querySelector("#secondRecipe").onclick = function() {
    FrenchToast.displayRecipe();
  }
 document.querySelector("#thirdRecipe").onclick = function() {
    GoodOldFashionedPancakes.displayRecipe();
 }

} // end window-onload