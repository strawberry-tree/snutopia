// 실제 게임에선 2차원 배열을 통해 입력받을 예정
class GreenEvent {
  constructor(_title, _message, _change, _image, _size) {
    this.soundPlayed = false;
    this.title = _title;
    this.message = _message;
    this.change = _change;
    this.image = _image;
    this.size = _size;
    this.next = false;
    this.yellow = false;
    this.results = ""
    this.changestat = [];
    for (let i = 0; i < 5; i++) {
      if (this.change[i] < 0) {
        this.results += `${statnames[i]} ${this.change[i]} `
      } else if (this.change[i] == 0) {

      } else {
        this.results += `${statnames[i]} +${this.change[i]} `
      }

      this.changestat[i] = stats[i] + this.change[i];
    }
  }

  display() {
    let yellowArray = [6, 19, 22];
    if (yellowArray.includes(eventNo)) {
      diceBackground(190, 230, 420, 280, color(255, 230, 10));
      if (eventNo == 6 && this.soundPlayed == false) {
        // 코로나 효과음 삽입 바람
        sound_COVID.play();
        this.soundPlayed = true;
      } else if (this.soundPlayed == false) {
        // 정기입, 오종환교수님 효과음 삽입 바람
        sound_wow.play();
        this.soundPlayed = true;
      }
    } else {
      diceBackground(190, 230, 420, 280, color(99, 218, 200));
    }

    fill(0);
    textAlign(CENTER, CENTER);
    fill(27, 66, 105);
    noStroke();
    textSize(33);
    text(this.title, 400, 265);
    textSize(18);
    text(this.message, 485, 370);
    textSize(17);
    text(this.results, 377, 480);

    stroke(0);
    let button = new Button(522, 470, 60, 30, "다음", 15);
    button.show();
    this.next = button.selection(mouseX, mouseY);
    imageMode(CENTER);
    image(this.image, 300, 380, this.size[0], this.size[1])
    imageMode(CORNER);

  }
}