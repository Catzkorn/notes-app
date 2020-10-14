class Note {
  constructor(message, time = new Date()) {
    this.message = message;
    this.time = `On ${time.getDate()}/${time.getMonth()}/${time.getFullYear()} at ${time.getHours()}:${time.getMinutes()} : ` ;
  };

  getMessage() {
    return this.message;
  };

  getTime() {
    return this.time;
  };

}