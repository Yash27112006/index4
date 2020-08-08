class Mail{
  
    //creates the inputs
    constructor(){
        this.from = createInput('Enter your email Address');
        this.myTextArea = createElement('textarea');
        this.myTextArea.attribute("rows","10");
        this.myTextArea.attribute("cols","101");
        this.to = "wantedchorpolice@gmail.com";
        this.button = createButton("Send Email");
    }

    //creates the fuction and sets the position of the inputs
    sendMail(){
       this.from.position(400,230);
       this.myTextArea.position(400,330);
       this.button.position(400,550);
       this.from.style('width','500px');
       this.from.style('height','50px');
       this.button.style('width','150px');
       this.button.style('height','50px');

       //creates the function on pressing the mouse
       this.button.mousePressed(()=>{
          Email.send({
            SecureToken : "8f3f3aff-06d2-493b-aa98-1d135b73a48b",
            To : this.to,
            From : this.from.value(),
            Subject : "Found Someone",
            Body :this.myTextArea.value()
          })
          .then(
            message => alert('Email is sent successfully')
          ); 
       });
    }
}

