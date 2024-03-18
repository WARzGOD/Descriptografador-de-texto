const colocarTexto = document.getElementById ("colocarTexto");
const btnEncriptar = document.getElementById ("btnEncriptar");
const btnDesencriptar = document.getElementById ("btnDesencriptar");
const btnCopiar = document.getElementById ("btnCopiar");
const mensagemFinal = document.getElementById ("mensagemFinal");
const boneco = document.getElementById ("boneco");
const informacao = document.getElementById ("informacao");
const direita = document.getElementById ("direita");


//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

let reutilizar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]
    
const remplace = (novoValor) => {
     mensagemFinal.innerHTML = novoValor;

    boneco.style.display = "none";

    colocarTexto.value=""
    informacao.style.display = "none";
    btnCopiar.style.display = "block";
    direita.classList.add("ajustar");
    mensagemFinal.classList.add("ajustar");
}

const reset = () => {
    mensagemFinal.innerHTML = "";
    boneco.style.display = "block";
    informacao.style.display = "block";
    btnCopiar.style.display = "none";
    direita.classList.remove("ajustar");
    mensagemFinal.classList.remove("ajustar");    
    colocarTexto.focus();
}

btnEncriptar.addEventListener("click", () => {
    const texto = colocarTexto.value.toLowerCase();
    if(texto != "") {
        function encriptar(newText) {
            for(let i = 0; i < reutilizar.length; i++){
                if (newText.includes(reutilizar[i][0])){
                    newText = newText.replaceAll(reutilizar[i][0], reutilizar[i][1]);
                };
            };
            return newText;
        };
    
    } else {
        alert("Insira o texto no encriptador");
        reset();
    }



    //const textoEncriptado = encriptar(texto);

    remplace(encriptar(texto));

    mensagemFinal.innerHTML = encriptar(texto);

});
btnDesencriptar.addEventListener("click", () => {
    const texto = colocarTexto.value.toLowerCase();
    if(texto != "") {
        function desencriptar(newText) {
            for(let i = 0; i < reutilizar.length; i++){
                if(newText.includes(reutilizar[i][1])) {
                    newText = newText.replaceAll(reutilizar[i][1], reutilizar[i][0]);
                };
            };
            return newText
        };
        remplace(desencriptar(texto));
    } else {
        alert("Insira o texto no encriptador");
        reset();
    }
    

});

btnCopiar.addEventListener("click", () => {
    let texto = mensagemFinal;
    //navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand('copy');
    alert("Texto Copiado");
    reset();

});

