let timeOutput = document.querySelector("#time");
let minuteCapture = 0;
let seconds = 60;
let intervalSec = 0;
let intervalRestart = 0;
let counterStarted = false;
const addZero = "0";

const startMinCountdown = () => {
  // Bedingung checkt, ob ein Countdown schon im Gange ist. Falls ja, wird die Funktion nicht mehr ausgeführt und eine "Überlappung" der Funktion wird verhindert
  if (counterStarted) {
    return;
  }

  //   Funktion wird normal ausgeführt. Der Input als Zahl wird gespeichert
  let minutesInput = Number(document.querySelector("#minutes").value);
  //   Der Countdown wird in einem Intervall von 1 Sek gestartet
  intervalSec = setInterval(updateCounterSec, 1000);
  //   Gleichzeitig wird der eingegebene Minutenzahl 1 abgezogen und in einer gesonderten Variable gespeichert
  minuteCapture = minutesInput - 1;
  //   Gleichzeitig wird der Sekundenzahl 1 abgezogen, damit der Counter bei 59 runterzählt
  seconds = 60 - 1;
  //   Die Funktion für das ausgeben der Minute und der Sekunden wird gestartet.
  outputData();
  //   Der Countdown wurde nun gestartet und der Boolean wird auf true gesetzt, damit bei einem erneuten Betätigen des Buttons nicht nochmal gestartet wird(siehe oben)
  counterStarted = true;
};

const updateCounterSec = () => {
  counterStarted = true;
  //   Countdown läuft und es werden verschiedene Bedingungen geprüft. Wenn die Minutenzahl und die Sekundenzahl auf 0 fällt, wird der Intervall zurückgesetzt und die Funktion gestoppt.
  if (minuteCapture == 0 && seconds == 0) {
    clearInterval(intervalSec);
    return;
    // Wenn die Sekundenzahl auf 0 fällt, wird der Minutenzahl 1 abgezogen und die Sekundenzahl fängt wieder von vorne an
  } else if (seconds == 0) {
    minuteCapture--;
    seconds = 60;
  } else {
  }
  //   Ansonsten wird die Sekunden runtergezählt und die OutputFunktion wieder gefeuert.
  seconds--;
  outputData();
};

const pauseMinCountdown = () => {
  // Beim Klicken des Pausebuttons, wird der Intervall gestoppt, damit der Countdown nicht weiter runterzählt.
  clearInterval(intervalSec);
  //   Gleichzeitig wird die aktuellen Minuten und Sekundenzahl im HTML ausgegeben, indem die Outputfunktion gefeuert wird
  outputData();
};

const restartMinCountdown = () => {
  // Beim Klicken wird der Countdown fortgesetzt und zwar an der Stelle, wo die Funktion durch das clearen des Intervalls gestoppt wurde
  intervalSec = setInterval(updateCounterSec, 1000);
  //   Gleichzeitig wird die aktuellen Minuten und Sekundenzahl im HTML ausgegeben, indem die Outputfunktion gefeuert wird
  outputData();
};

const outputData = () => {
  // Hier werden die Zahlen im HTML ausgegeben. Damit der Countdown bei Zahlen unter 10 eine führende Null hinzufügen kann, werden die Variablen gesondert gespeichert
  let formattedMinute = minuteCapture;
  let formattedSecond = seconds;

  //   Durch diese Bedingungen werden nun geprüft, ob die Minute oder die Sekunde kleiner oder gleich 9 ist. Dann wird als String die Zahl Null hinzugefügt und im HTML ausgegeben.
  if (seconds <= 9) {
    formattedSecond = `${addZero}${seconds}`;
  }

  if (minuteCapture <= 9) {
    formattedMinute = `${addZero}${minuteCapture}`;
  }
  timeOutput.innerHTML = `${formattedMinute}:${formattedSecond}`;
};
