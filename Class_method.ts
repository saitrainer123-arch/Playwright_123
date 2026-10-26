class Tv {
  //Data tyes
  readonly channel: string;
  ch_num: number;
  constructor(c: string, ch_n: number) {
    // this.channel = c;
    this.ch_num = ch_n;


  }

  // Method to show current channel
  showChannel() {
    console.log("Now watching: " + this.channel);
    console.log("Channel Number: " + this.ch_num);

  }

  // Method to change channel
  changeChannel(newChannel: string, newNumber: number) {
    this.channel = newChannel;
    this.ch_num = newNumber;
    console.log("Channel changed to: " + this.channel);
  }


}

// Object creation = Nothing But Remote  ------let or const varable = new classname(values)
const tv1 = new Tv("Maa TV", 101);

tv1.showChannel();
tv1.changeChannel("Zee TV", 102);





