//var operacoes = require("./operacoes.js").default; --> old method with module.exports
//var operacoes2 = require("./operacoes2.js").default; --> old method with module.exports

import operacoes from "./operacoes.js"; //new method with export default
import operacoes2 from "./operacoes2.js"; //new method with export default
import {divisao,resto} from "./operacoes3.js";

console.log(operacoes.soma(2, 3));
console.log(operacoes.subtrai(5, 3));
console.log(operacoes2.multiplicacao(2, 3));
console.log(operacoes.nome);
console.log(divisao(4,2));
console.log(resto(7,2));