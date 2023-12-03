var level = 1;
var compOrder = [];
var userOrder = [];
var butt_obj = {
    1: "green",
    2: "red",
    3: "yellow",
    4: "red"
 }


$(document).keyup(function(){

        startNewRound();
   
})

function startNewRound(){

    setTimeout(function(){$("h1").text("Level " + level);}, 100)

    userOrder.length = 0; //at the start of each new round, the userOrder array is emptied so that the player has to reclick the buttons in the correc order, which is, of course the, the point of the game

    var butt_name = generateRandomNo(butt_obj);
    console.log("Computer Value: " + compOrder);
    handleSoundandAnimation(butt_name);
    compOrder.push(butt_name);
    
    
}

var number_of_clicks = 0;

$(".btn").click(function(){

    


    var button_clicked = $(this);
    var buttonID = button_clicked.attr("id");

    console.log("User Values: " + userOrder);
    
    userOrder.push(buttonID);
    
    handleClickAnimation(button_clicked);
    handleClickSound(buttonID);

    

    number_of_clicks++;
        
    if(number_of_clicks==compOrder.length){
        handleComparison(userOrder, compOrder);  
    }
})


function handleComparison(userOrder, compOrder) {
    var arraysMatch = userOrder.every(function(element, index) {
        return element == compOrder[index];
    });

    if (arraysMatch) {
        level++;
        number_of_clicks = 0;
        //$("h1").text("Level " + level);
        setTimeout(function(){startNewRound()}, 1000); // Delay before starting a new round
        
    } else {
        $("h1").text("Game Over, press any key to restart");
        number_of_clicks = 0;
        userOrder = [];
        compOrder.length = [];
        $("body").addClass("game-over");
        var gameover = new Audio("sounds/wrong.mp3");
        gameover.play();
        setTimeout(function(){$("body").removeClass("game-over")},70);
        level = 1;
        //return;//exit function and again listen for keypress that will start new round
    
    }
}



function generateRandomNo(butt_obj){ //generates random number to flash a random button
    
 
     var rn = Math.random();
     rn = rn*4;
     var randynum = Math.floor(rn)+1;
 
     var butt_name = butt_obj[randynum];
     //handleSoundandAnimation(butt_name);

     return butt_name;

}


function handleSoundandAnimation(butt_name){  //plays sound and shows animation when user initially presses any key to start the game which generates a random number to play a random button
    switch (butt_name) {
        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            $("#green").addClass("pressed");
            setTimeout(function(){
                $("#green").removeClass("pressed")
                }, 100);

            break;
       
        case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
            $("#red").addClass("pressed");
            setTimeout(function(){
                $("#red").removeClass("pressed")
                }, 100);
            break;
    
        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            $("#blue").addClass("pressed");
            setTimeout(function(){
                $("#blue").removeClass("pressed")
                }, 100);
            break;
        
        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            $("#yellow").addClass("pressed");
            setTimeout(function(){
                $("#yellow").removeClass("pressed")
                }, 100);
            break;
            
        default:
            break;
    }
}

function handleClickAnimation(button_clicked){ //shows animation when user clicks
    button_clicked.addClass("pressed");

    setTimeout(function(){
    button_clicked.removeClass("pressed")
    }, 100);
}


function handleClickSound(buttonID){ //plays sound when user clicks
    

    switch (buttonID) {
        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;
       
        case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;
    
        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
        
        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
            
        default:
            break;
    }
}