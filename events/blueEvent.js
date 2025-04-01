let button1, button2, button3;

// 실제 게임에선 2차원 배열을 통해 입력받을 예정
class BlueEvent {
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
    this.results = ["", ""]
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 2; j++) {
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
    textSize(18);

    //280-390, 410-520
    button1 = new ChoiceButton(220, 360, 360, 50, this.choice[0]);
    button2 = new ChoiceButton(220, 420, 360, 50, this.choice[1]);
    button3 = new Button(522, 470, 60, 30, "다음", 15);

    if (this.choiceNum != -1) {
      textSize(18);
      text(this.cMessage[this.choiceNum], 485, 370);
      textSize(17);
      text(this.results[this.choiceNum], 377, 480);
      imageMode(CENTER);
      image(this.image[this.choiceNum], 300, 380, this.size[this.choiceNum][0], this.size[this.choiceNum][1]);
      imageMode(CORNER);
      button3.show();
      if (button3.selection(mouseX, mouseY)) {
        this.next = true;
      }
    } else {
      text(this.message, 400, 325);
      button1.show();
      button2.show();
    }
  }

  changeValue() {
    if (this.choiceNum == -1) {
      if (button1.selection(mouseX, mouseY)) {
        this.choiceNum = 0;
      } else if (button2.selection(mouseX, mouseY)) {
        this.choiceNum = 1;
      }
    }
  }
}