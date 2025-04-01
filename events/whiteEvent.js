let restartButton = new Button (360, 465, 80, 30, "다시 하기", 15);

class WhiteEvent {
  constructor(stats) {
    this.stats = stats;
    this.sum = 0;
    for (let i = 0; i < 5; i++){
      this.sum += this.stats[i];
    }
    if (this.sum / 5 >= 35){
      this.image = badImgArray[5];
      this.message = `모든 분야를 통달한 만능인인 당신! 몸이 몇 개이셨던 거예요?`;
      this.grade = 'A';
      this.h = 250;
      this.w = 300;
    } else if (this.sum / 5 < 35 && 20 <= this.sum/ 5) {
      this.image = badImgArray[6];
      this.message = `존중하며 버텨온 당신, 인간미 넘치는 삶을 사셨군요.\n 졸업 후엔 화창한 일만 있길 바라요.`;
      this.grade = 'B';
      this.h = 250;
      this.w = 300;
    } else {
      this.image = badImgArray[7];
      this.message = `교수님. 제가 귀여우면 됐지 뭘 더 원하세요.\n (눈물을 닦고 고개를 들어 재수강을 본다)`
      this.grade = 'C';
      this.h = 250;
      this.w = 300;
    }
  }

  display() {
    // 졸업 효과음 삽입 바람
    if(endSoundPlayed == false){
      sound_graduation.play();
      endSoundPlayed = true;
    }
    
    noStroke();
    fill(255, 223, 85);
    rect(75, 55, 650, 450, 20);
    fill(27, 66, 105)
    textSize(37);
    textAlign(CENTER, CENTER);
    text(`대학생 ${name}의 졸업!`, 400, 100);
    textSize(20);
    text(this.message, 400, 425);
    image(this.image, 100, 135, this.w, this.h);
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
    for(let i = 0; i < 3; i++){
      text(statnames[i], 445 + 90 * i, 173);
      text(stats[i], 445 + 90 * i, 235);
    }
    
    for(let i = 0; i < 2; i++){
      text(statnames[i + 3], 445 + 90 * i, 293);
      text(stats[i + 3], 445 + 90 * i, 355);
    }
    
    text("학점", 625, 293);
    textSize(40);
    text(this.grade, 625, 353);
    
    restartButton.show();
    
    if (restartButton.selection(mouseX, mouseY)){
      reset();
    }
  }
}