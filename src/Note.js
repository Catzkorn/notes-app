class Note {
  constructor(message, time = new Date()) {
    this.message = message;
    this.time = time;
  };

  getMessage() {
    return this.message;
  };

  getTime() {
    return this.time;
  };
}