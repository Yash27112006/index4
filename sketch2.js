//creates the variable
var email;

function preload(){
    //loads the image 
    backImg3 = loadImage("design_files/images/backImg3.jpg");
}
function setup(){
    //creates the canvas
    canvas = createCanvas(windowWidth, windowHeight);

    //creates the page for sending mail with class Mail
    email = new Mail();
    email.sendMail();

  //creates a button to logout
  var button3 = createButton('Back to Home');
  button3.position(windowWidth/2+windowWidth/2-150,20);
  button3.style('width','100px');
  button3.style('height','30px')

  //creates the function for pressing the button2
  button3.mousePressed(()=>{
     window.location.href = "index.html";
  });

}
function draw(){
    //sets the background
    background(backImg3);

    //displays the text
    fill("yellow");
    textSize(20);
    text("Send the email to the Police regarding where and how did you find the thief and the thief's name",300,115);
    text("Please don't send fake news to POLICE or you will get in trouble",430,80);
    text("Also after sending the mail, check your mail as the police can contact you through the email address you enter in the box below",150,150);
}