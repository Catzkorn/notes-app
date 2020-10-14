class Note {
  constructor(message, time = new Date()) {
    this.message = message;
    this.time = `On ${time.getDate()}/${(time.getMonth() + 1).toString().replace(/^(\d)$/, '0$1')}/${time.getFullYear()} at ${time.getHours()}:${time.getUTCMinutes().toString().replace(/^(\d)$/, '0$1')} `;
  };

  getMessage() {
    return this.message;
  };

  getTime() {
    return this.time;
  };

}