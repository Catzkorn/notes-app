class Note {
  constructor(message, time = new Date()) {
    this.message = message;
    this.time = time;
  };

  getMessage() {
    console.log(this.message);
    return this.message;
  };

  getTime() {
    console.log(this.time);
    return this.time;
  };
}