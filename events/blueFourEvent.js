let buttonA, buttonB, buttonC, buttonD, buttonE, fontsize;

// 실제 게임에선 2차원 배열을 통해 입력받을 예정
class BlueFourEvent {
  constructor(_title, _message, _change, _image, _size) {
    this.title = _title;
    this.message = _message[0];
    this.choice = _message[1];
    this.cMessage = _message[2];
    this.change = _change;
    this.image = _image;
    this.size = _size;
    // 아직 안 골랐을 때 -1, 골랐을 때는 차례로 0, 1....
    this.choiceNum = -1;
    this.next = false;
    this.results = ["", "", "", ""]
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.change[j][i] < 0) {
          this.results[j] += `${statnames[i]} ${this.change[j][i]} `
        } else if (this.change[j][i] == 0) {} else {
          this.results[j] += `${statnames[i]} +${this.change[j][i]} `
        }
      }
    }
  }

  display() {
    diceBackground(190, 230, 420, 280, color(173, 188, 231));
    fill(0);
    textAlign(CENTER, CENTER);
    fill(27, 66, 105);
    noStroke();
    textSize(33);
    text(this.title, 400, 265);
    textSize(17);

    //190-210, 215-395, 395-405, 405-585, 590-610
    if(eventNo == 10){
      fontsize = [13, 13, 13, 13]
    } else if (eventNo == 15){
      fontsize = [13, 13, 18, 18]
    } else {
      fontsize = [18, 18, 18, 18];
    }
    buttonA = new ChoiceButton(215, 357, 180, 53, this.choice[0], fontsize[0]);
    buttonB = new ChoiceButton(405, 357, 180, 53, this.choice[1], fontsize[1]);
    buttonC = new ChoiceButton(215, 417, 180, 53, this.choice[2], fontsize[2]);
    buttonD = new ChoiceButton(405, 417, 180, 53, this.choice[3], fontsize[3]);
    buttonE = new Button(522, 470, 60, 30, "다음", 15);

    if (this.choiceNum != -1) {
      textSize(18);
      text(this.cMessage[this.choiceNum], 485, 370);
      textSize(17);
      text(this.results[this.choiceNum], 377, 480);
      buttonE.show();
      imageMode(CENTER);
      image(this.image[this.choiceNum], 300, 380, this.size[this.choiceNum][0], this.size[this.choiceNum][1]);
      imageMode(CORNER);

      if (buttonE.selection(mouseX, mouseY)) {
        this.next = true;
      }
    } else {
      text(this.message, 400, 318);
      buttonA.show();
      buttonB.show();
      buttonC.show();
      buttonD.show();
    }
  }

  changeValue() {
    if (this.choiceNum == -1) {
      if (buttonA.selection(mouseX, mouseY)) {
        this.choiceNum = 0;
      } else if (buttonB.selection(mouseX, mouseY)) {
        this.choiceNum = 1;
      } else if (buttonC.selection(mouseX, mouseY)) {
        this.choiceNum = 2;
      } else if (buttonD.selection(mouseX, mouseY)) {
        this.choiceNum = 3;
      }
    }
  }
}