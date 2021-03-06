//Wrap everything in this to wait for html to load then load jQuery
$(function() {
    //global variables
    // wins, losses, targetScore, userScore
    var wins = 0;
    var losses = 0;
    var counter = 0;
    var targetNumber = randomValue(120, 19);
    var winMessage = "YOU WIN!"
    var loseMessage = "YOU LOSE!"

    
    var imageArray = ["assets/images/fire-monster.png",
    "assets/images/water-elemental.png",
    "assets/images/air-elemental.png",
    "assets/images/earth-elemental.png"];


    //Displays score board vaules
    function displayScoreBoard() {
    $("#target-number").text(targetNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    // $("#counter").text(counter);
    }

    //Generates random numbers for both target number and values assiged to Elementals.
    function randomValue(max, min) {
        return Math.floor((Math.random() * (max - min)+ min));
    };

    function resetGame() {
        counter = 0;
        $("#counter").text(counter);

        targetNumber = randomValue(120,19);
        $("#target-number").text(targetNumber);

        $("#elements img").remove();
        displayElements();
    };

    //Adds images and assigns randome values to images
    function displayElements () {
        for (var i = 0; i < imageArray.length; i++) {
        
            var imageElement = $("<img>");
            
            imageElement.addClass("element-image");
            imageElement.attr("src", imageArray[i]);
            imageElement.attr("data-elementvalue", randomValue(12, 1));
            //Add Id to each image to be referenced for specific  onClick sounds?  Think I will need to refer to "bubbling"
            imageElement.attr("id", "elemental-" + i);
            $("#elements").append(imageElement);
            console.log($(imageElement).attr("data-elementvalue"));
            
        };
    }
    //Define click sounds linked to IDs to be called in on click function
    function elementalClickSound () {

    };
    
    displayScoreBoard();
    resetGame()
    

    $("#elements").on("click", ".element-image", function() {
        var elementValue = ($(this).attr("data-elementvalue"));
        elementValue = parseInt(elementValue);
        
        counter += elementValue;
        // alert("New Score: " + counter);
        $("#counter").text(counter);

        if (counter === targetNumber) {
            wins++;
            $("#wins").text(wins);
            $("#game-message").text(winMessage);
            //Play Win Sound
            resetGame();
            // alert("you win");
        } else if (counter >= targetNumber) {
            losses++;
            $("#losses").text(losses);
            $("#game-message").text(loseMessage);
            //Play Lose Sound
            resetGame();
            // alert("you lose");
        }
    });

});



