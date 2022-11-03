function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4D2fGk4vu/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    
    console.log(results);
  }
  random_number_r = Math.floor(Math.random() * 255) + 1;
  random_number_g = Math.floor(Math.random() * 255) + 1;
  random_number_b = Math.floor(Math.random() * 255) + 1;

  document.getElementById("result_label").innerHTML = 'Escucho:  '+ results[0].label;
  document.getElementById("result_confidence").innerHTML = 'Presición:  '+ (results[0].confidence*100).toFixed(2)+" %";
  document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
  document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    var images = [
      "perroladra.gif",
      "gato.gif",
      "vaca1.gif",
      "tigre.gif"
    ];

    
    if (results[0].label == "ladridos") {
     document.getElementById("imagen_online").src = images[0];
    } else if (results[0].label == "maullidos") {
      document.getElementById("imagen_online").src = images[1];
    } else if (results[0].label == "mujidos") {
      document.getElementById("imagen_online").src = images[2];
    }else{
      document.getElementById("imagen_online").src = images[3];
    }
  }


