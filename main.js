const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');

const lancamento = "01 oct 2023";

function countDown(){

    const dataLanc = new Date(lancamento);
    const hoje = new Date();

    const segTotal = (dataLanc - hoje) / 1000;

    const finalDia = Math.floor(segTotal / 60/ 60/ 24);
    const finalHora = Math.floor(segTotal / 60/ 60) % 24;
    const finalMinuto = Math.floor(segTotal / 60) % 60;
    const finalSeg = Math.floor(segTotal) % 60;

    dia.innerHTML = finalDia + 'D';
    hora.innerHTML = finalHora + 'H';
    minuto.innerHTML = finalMinuto + 'M';
    segundo.innerHTML = finalSeg + 'S';


}

countDown();

setInterval(countDown,1000)