class Note {
  constructor(message, time = new Date()) {
    this.message = message;
    var day = time.getDate();
    var month = time.getMonth();
    var year = time.getFullYear();
    var hour = time.getHours();
    var minute = time.getMinutes();
    this.time = `On ${day}/${month}/${year} at ${hour}:${minute} : ` ;
  };

  getMessage() {
    return this.message;
  };

  getTime() {
    return this.time;
  };

  // formatDate(date) {
  //   var day = date.getDate();
  //   var month = date.getMonth();
  //   var year = date.getFullYear();
  //   var hour = date.getHours();
  //   var minute = date.getMinutes();
  //   return `${day}, ${month} ${year} at ${hour}:${minute}` 
  // }
}