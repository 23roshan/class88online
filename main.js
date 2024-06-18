var canvas = new fabric.Canvas("myCanvas");
var blockwidth = 30;
var blockheight = 30;
playerx = 10;
playery = 10;
var playerobjects = "";
var blockimage = "";

function playerupdate()
{
      fabric.Image.fromURL("player.png", function(Img)
    {
        playerobjects = Img;
        playerobjects.scaleToWidth(150);
        playerobjects.scaleToHeight(140);
        playerobjects.set({
            top:playery , 
            left:playerx
        });
        canvas.add(playerobjects);
    }
    );
}
    function new_image(getimage){
        fabric.Image.fromURL(getimage, function(Img){
            blockimage = Img;

                blockimage.scaleToWidth(blockwidth);
                blockimage.scaleToHeight(blockheight);
                blockimage.set({
                    top:playery , 
                    left:playerx
                });
                canvas.add(blockimage);
            
        });
    }

    window.addEventListener("keydown", mykeydown);
    function mykeydown(e){

        keyPressed = e.keyCode;
        console.log(keyPressed);
        if (e.shiftKey == true && keyPressed == '80'){
            console.log("p and shiftkey pressed together");
            blockwidth = blockwidth + 10;
            blockheight = blockheight + 10;
            document.getElementById("span1").innerHTML = blockwidth;
            document.getElementById("span2").innerHTML = blockheight;
        }
        if (e.shiftKey == true && keyPressed == '77'){
            console.log("m and shiftkey pressed together");
            blockwidth = blockwidth - 10;
            blockheight = blockheight - 10;
            document.getElementById("span1").innerHTML = blockwidth;
            document.getElementById("span2").innerHTML = blockheight;
        }
        if (keyPressed == '38'){
            up();
            console.log("up");
        }
        if (keyPressed == '40'){
            down();
            console.log("down");
        }
        if (keyPressed == '37'){
            left();
            console.log("left");
        }
        if (keyPressed == '39'){
            right();
            console.log("right");
        }
        if (keyPressed == '67'){
            new_image('cloud.jpg');
            console.log("c");
        }
        if (keyPressed == '68'){
            new_image('dark_green.png');
            console.log("d");
        }
        if (keyPressed == '71'){
            new_image('ground.png');
            console.log("g");
        }
        if (keyPressed == '76'){
            new_image('light_green.png');
            console.log("l");
        }
        if (keyPressed == '82'){
            new_image('roof.jpg');
            console.log("r");
        }
        if (keyPressed == '84'){
            new_image('trunk.jpg');
            console.log("t");
        }
        if (keyPressed == '85'){
            new_image('unique.png');
            console.log("u");
        }
        if (keyPressed == '87'){
            new_image('wall.jpg');
            console.log("w");
        }
        if (keyPressed == '89'){
            new_image('yellow_wall.png');
            console.log("y");
        }

        function up(){
            if (playery >= 0 ){
                playery = playery - blockheight;
                console.log("blockheight" + blockheight);
            
                console.log("when up arrow is pressed , x ="+ playerx , "y ="+playery);
                canvas.remove(playerobjects);
                playerupdate();
            }
        }
        
        function down(){
            if (playery <= 500 ){
                playery = playery + blockheight;
                console.log("blockheight" + blockheight);
            
                console.log("when up arrow is pressed , x ="+ playerx , "y ="+playery);
                canvas.remove(playerobjects);
                playerupdate();
            }
        }
        
        function left(){
            if (playerx >  0 ){
                playerx = playerx - blockwidth;
                console.log("blockwidth" + blockwidth);
            
                console.log("when left arrow is pressed , x ="+ playerx , "y ="+playery);
                canvas.remove(playerobjects);
                playerupdate();
            }
        }

        function right(){
            if (playerx <= 750 ){
                playerx = playerx + blockwidth;
                console.log("blockwidth" + blockwidth);
            
                console.log("when right arrow is pressed , x ="+ playerx , "y ="+playery);
                canvas.remove(playerobjects);
                playerupdate();
            }
        }
        
    }
    


    