//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
img_width = 150;
img_height = 200;

var img_image;

img_x = 100;
img_y = 100;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_width = 75;
greencar_height =100;

greencar_x = 5;
greencar_y= 225;
//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

   greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;

}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);


}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
	
}

function upload_1() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function upload_2() {
	ctx.drawImage(greencar_imgTag, img_x, img_y, 80, 100);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up() {
    if (img_y >= 0) {
        img_y = img_y - 10;
        upload_1();
        upload_2();
    }
}

function down() {
    if (img_y <= 500) {
        img_y = img_y + 10;
        upload_1();
        upload_2();
    }
}

function left() {
    if (img_x >= 0) {
        img_x = img_x - 10;
        upload_1();
        upload_2();
    }
}

function right() {
    if (img_x <= 700) {
        img_x = img_x + 10;
        upload_1();
        upload_2();
    }
}