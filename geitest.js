console.log("a");
const btnci = document.getElementById("ci");
const btnnon = document.getElementById("non");

const formulario = document.getElementById('quest');
const enviarButton = document.getElementById('ok_jusgame');
enviarButton.addEventListener('click', function() {
  const ci = document.querySelector('input[id="ci"]:checked');
  const non = document.querySelector('input[id="non"]:checked');
  if (ci || non) {
    let respuesta = ci ? 'sí' : 'no';
    if (ci) {
      alert('Weko');
    } else {
      alert('q grande');
    }
  } else {
    alert('responde la wea');
  }
});

