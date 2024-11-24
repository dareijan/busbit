function aloitaAjanTutkiminen() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = paljonkoKelloOn(m);
    s = paljonkoKelloOn(s);
    document.getElementById('kéllonaikanyt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(aloitaAjanTutkiminen, 1000);
  }
  
  function paljonkoKelloOn(i) {
    if (i < 10) {i = "0" + i};  // pienille kellonajoille se etunolla
    return i;
  }