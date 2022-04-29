
function gerarRecibo() {
    document.getElementById("nome_inquilino").innerHTML = document.getElementById("inquilino").value;
    document.getElementById("inquilinoImovel").innerHTML = document.getElementById("inquilino").value;
    document.getElementById("valor_recibo").innerHTML = document.getElementById("valorInput").value;
    document.getElementById("mesAno_Recibo").innerHTML = document.getElementById("mesRef").value;
    document.getElementById("mesAno").innerHTML = document.getElementById("anoInput").value;
    document.getElementById("cidade_imovel").innerHTML = document.getElementById("cidadeImovel").value;
    document.getElementById("estado_imovel").innerHTML = document.getElementById("estadoImovel").value;
    document.getElementById("dataRecibo").innerHTML = dataAtual();
    window.print();
}
function dataAtual() {
    let data = new Date();
    return data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
}    