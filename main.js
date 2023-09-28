const form = document.getElementById("form-contato");
let linhas =" ";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputNome = document.getElementById("Nome-contato")
    const inputNumero = document.getElementById("Numero-contato")

    let linha = "<tr>";
    linha += "<td>" + inputNome.value + "</td>";
    linha += "<td>" + inputNumero.value + "</td>";
    linha += "</tr>";

    linhas += linha;

    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;

    inputNome.value = " ";
    inputNumero.value = " ";
    
})



