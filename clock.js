function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function currentTime(){
    const tonight = new Date();
    let hh = tonight.getHours();
    let mm = tonight.getMinutes();
    let ss = tonight.getSeconds();
    hh = checkTime(hh);
    mm = checkTime(mm);
    ss = checkTime(ss);
    
    let session = "AM";
    
    if (hh === 0) {
      hh = 12;
    }
    if (hh > 12) {
      hh = hh - 12;
      session = "PM";
    }
    document.getElementById("time").innerHTML = hh + ":" + mm + ":" + ss + " " + session;
    
    setTimeout(currentTime, 1000);
  }
  
  currentTime();
  
  function checkTime(i) {
    if(i<10) {i = "0" + i};
    return i;
  }
  
  var button = 0;
  function toggle() {
    if (button == 0) {
      button++;
      startTime();
      document.getElementById("clock").style.display="block";
    document.getElementById("time").style.display="none";
    }
    else {
      button--;
      currentTime();
      document.getElementById("clock").style.display="none";
    document.getElementById("time").style.display="block";
    }
  }
  