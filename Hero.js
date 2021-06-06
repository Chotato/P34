class Hero extends BaseClass {
  constructor(x,y){
    super(x,y,100,100);
    this.image = loadImage("hero.png");
  }

  display() {
    super.display();
  }
}
