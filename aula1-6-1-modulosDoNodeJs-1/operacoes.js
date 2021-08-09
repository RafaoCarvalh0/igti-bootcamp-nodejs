const nome = "importing test"

function soma(a, b) {
    return a+b;
}

function subtrai(a, b) {
    return a-b;
}

//module.exports = {soma, subtrai, nome}; --> old method
export default {soma, subtrai, nome}; // new method