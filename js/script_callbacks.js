function saveTextValue(){
  var positionValue = document.getElementsByName("position")[0].value;
  saveToCookie("Posición",positionValue,successMessage);
}

function saveRadioValue(){
  var radioValue;
  var radioOptions = document.getElementsByName("department");
  for (var i = 0; i< radioOptions.length; i++){
    if(radioOptions[i].checked){
      radioValue = radioOptions[i].value;
      break;
    }
  }
  saveToCookie("Departamento",radioValue,function(result){
    window.alert("Felicitaciones eres muchísimo más pro por haber guardado:\n"+result);
  });
}

function saveToCookie(key, value, onCompletion){
  var cookie = key + ";" + value;
  document.cookie = cookie;
  onCompletion(cookie);
}

function successMessage(result){
  window.alert("Felicitaciones eres muy pro por haber guardado: "+result);
}

function changedEvent(){
  console.log("Event changed");
}
