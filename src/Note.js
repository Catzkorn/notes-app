class Note {
  constructor(text, time = new Date()) {
    this.text = text;
    this.time = time;
  };



  noteText() {
    console.log(this.text);
    return this.text;
  };

  noteTime() {
    console.log(this.time);
    return this.time;
  };



}