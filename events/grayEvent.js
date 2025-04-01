let restartButtonB = new Button (360, 465, 80, 30, "다시 하기", 15);

class GrayEvent {
  constructor(_message, _image, _size) {
    let badEndArray = [`${name}님은 말하는 감자셨군요?`, `세상에서 제일 재미있는 것중 하나가 탕진이라던데, 맞나요? ${name}님?`, `${name}님과 제일 자주 연락하시는 분은? 재난관리본부.`, `${name}님은 요절하셨습니다. 건강이 최고입니다.`,   `확고한 비연애주의자, ${name}. 역사에 이름을 남기다.`];
    this.number = _message;
    this.title = statnames[_message];
    this.message = badEndArray[_message];
    this.image = _image;
    this.size = _size;
    this.grade = "F";
  }
  
  display() {
    //  효과음 삽입 바람
    if(endSoundPlayed == false){
      sound_stop.play();
      endSoundPlayed = true;
    }
    noStroke();
    fill(255, 223, 85);
    rect(75, 55, 650, 450, 20);
    fill(27, 66, 105)
    textSize(35);
    textAlign(CENTER, CENTER);
    text(`${this.title} 게임 오버!`, 400, 100);
    textSize(20);
    text(this.message, 400, 430);
    imageMode(CENTER);
    image(this.image, 255, 280, this.size[0], this.size[1]);
    imageMode(CORNER);
    restartButtonB.show();
    
    textSize(26);
    stroke(27, 66, 105);
    strokeWeight(3);
    for(let i = 0; i < 5; i++){
      line(400, 150 + 60 * i, 670, 150 + 60 * i);
    }
    for(let i = 0; i < 4; i++){
      line(400 + 90 * i, 150, 400 + 90 * i, 390);
    }
    
    noStroke();
    fill(27, 66, 105)
    for(let i = 0; i < 3; i++){
      if(this.number == i){
        fill(255, 0, 0);
      } else {
        fill(27, 66, 105);
      }
      text(statnames[i], 445 + 90 * i, 173);
      text(stats[i], 445 + 90 * i, 235);
    }
    
    for(let i = 0; i < 2; i++){
      if(this.number == i + 3){
        fill(255, 0, 0);
      } else {
        fill(27, 66, 105);
      }
      text(statnames[i + 3], 445 + 90 * i, 293);
      text(stats[i + 3], 445 + 90 * i, 355);
    }
    
    fill(27, 66, 105);
    text("학점", 625, 293);
    textSize(40);
    text(this.grade, 625, 353);
    
    
    if (restartButtonB.selection(mouseX, mouseY)){
      reset();
    }
  }
  
  
}