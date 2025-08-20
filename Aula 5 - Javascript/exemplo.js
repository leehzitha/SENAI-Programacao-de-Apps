// let num = 1;
// const vari = "oi";

// let fruta = {
//     nome: "Melancia",
//     preço: 12.99,
//     vendido: false
// }


let title = document.getElementById('abc').innerHTML;
console.log(title + " funfou");

const changeColor = () => {
    let quadrado = document.getElementById('quadrado');
    if (quadrado.className == "quadrado ok") {
        quadrado.classList.remove('ok');
        quadrado.classList.add('bad');
    }
    else {
        quadrado.classList.remove('bad');
        quadrado.classList.add('ok');
    }
    
}

const color = () => {
    let cor = document.getElementById('color').value;
    let quadrado = document.getElementById('quadrado2');

    quadrado.style.backgroundColor = cor;

}






