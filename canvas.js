//Change Version here
var version = "v1.1";

//Canvas Init
var canvas = document.querySelector('canvas');
var c = canvas.getContext("2d");

//Canvas Sizing

var wid = window.innerWidth;
var hig = window.innerHeight;
canvas.width = wid;
canvas.height = hig;

//Font Size for Canvas Text
var fontSize = '33px';

//Canvas arc Props
c.lineWidth = (0.05) * (wid / 2);
c.lineCap = 'round';
c.shadowBlur = 0.02 * (wid / 2);

//Clock Radius
var radSec = 0.55 * wid / 2;
var radMin = 0.70 * wid / 2;
var radHrs = 0.85 * wid / 2;
//For the sake of Responsive Web Design
if (wid > hig) {
      radSec = 0.4 * hig / 2;
      radMin = 0.55 * hig / 2;
      radHrs = 0.7 * hig / 2;
      c.lineWidth = (0.05) * (hig / 2);
      c.shadowBlur = 0.02 * (hig / 2);
      fontSize = '45px';
}

//Awesomeness Begins
function renderClock() {

      //Getting the time data
      var d = new Date();
      var mili = d.getMilliseconds();
      var sec = d.getSeconds();
      var min = d.getMinutes();
      var hrs = d.getHours();
      var newSec = sec + (mili / 1000);


      //Setting up the background
      var gradient = c.createRadialGradient(wid / 2, hig / 2, radSec, wid / 2, hig / 2, radHrs * 2);
      gradient.addColorStop(0, "#353535");
      gradient.addColorStop(1, "#03614a");
      c.fillStyle = gradient;
      c.fillRect(0, 0, wid, hig);

      //Seconds Knob
      c.beginPath();
      c.arc(wid / 2, hig / 2, radSec, rad2Deg(-90), rad2Deg((newSec * 6 - 90)), false);
      c.strokeStyle = "#30f7d9";
      c.shadowColor = '#30f7d9';
      c.stroke();


      //Minutes Knob
      c.beginPath();
      c.arc(wid / 2, hig / 2, radMin, rad2Deg(-90), rad2Deg((min + (newSec / 60)) * 6 - 90), false);
      c.strokeStyle = '#ff4683';
      c.shadowColor = '#ff4683';
      c.stroke();



      //Hrs Knob
      c.beginPath();
      c.arc(wid / 2, hig / 2, radHrs, rad2Deg(-90), rad2Deg((hrs + (min / 60)) * 15 - 90), false);
      c.strokeStyle = '#fff346';
      c.shadowColor = '#fff346';
      c.stroke();

      //Decorating the time text altering
      if (sec < 10) {
            sec = '0' + sec;
      }
      if (min < 10) {
            min = '0' + min;
      }
      if (hrs < 10) {
            hrs = '0' + hrs;
      }


      //Text_timer
      c.font = `${fontSize} Arial`;
      c.fillStyle = '#f6b1ff';
      c.shadowColor = '#fe56fe';
      c.fillText(`${hrs}:${min}:${sec}`, wid / 2, hig / 2, 0.9 * (radSec) * 2);
      c.textAlign = "center";

      //Credits Text
      c.font = `25px Calibri`;
      c.fillStyle = '#fff';
      c.shadowColor = '#fff';
      c.fillText('GitHub / pranshuchittora', wid / 2, (hig) * 0.95, wid);
      //Version
      c.font = `20px Calibri`;
      c.fillStyle = '#ccc';
      c.fillText(`${version}`, wid * 0.93, (hig) * 0.98, wid);




}
setInterval(renderClock, 50); // Refreshing the time

//For converting radians to degree
function rad2Deg(degree) {
      factor = Math.PI / 180;
      return degree * factor;
}