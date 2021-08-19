class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder","Enter Your Name");
   //Create a input box to enter the number
    this.input2=createInput("").attribute("placeholder","Enter Option No.");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.title1=createElement('h3');
    this.title2=createElement('h4');
    this.title3=createElement('h4');
    this.title4=createElement('h4');
    this.title5=createElement('h4');


    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.title1.hide();
    this.message.hide();
    //Add hide() for questions, options & input box
    this.input2.hide();
    this.title2.hide();
    this.title3.hide();
    this.title4.hide();
    this.title5.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.title1.html("Question- What starts and ends with the letter 'E', but has only one letter?")
    this.title1.position(150,70);
    this.input2.position(390,260)
    this.input1.position(200, 260);
    this.button.position(290, 300);
    this.title2.html("1. Everyone");
    this.title2.position(150,120);
    this.title3.html("2. Envelope");
    this.title3.position(150,140);
    this.title4.html("3. Estimate");
    this.title4.position(150,160);
    this.title5.html("4. Example");
    this.title5.position(150,180);
    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    var message=`
      <br>Thank you, your answer has been submitted.</br>`;
      this.message.html(message);
      this.message.position(150,320);
    })


  }
}
