function calcularRank(vitorias, derrotas) {

    let saldo = vitorias - derrotas;

    
    let rank;
    if (vitorias <= 10) {
        rank = "Ferro";
    } else if (vitorias <= 20) {
        rank = "Bronze";
    } else if (vitorias <= 50) {
        rank = "Prata";
    } else if (vitorias <= 80) {
        rank = "Ouro";
    } else if (vitorias <=90) {
        rank = "Diamante";
    } else if (vitorias <= 100) {
        rank = "Lendário";
    } else {
        rank = "Imortal";
    }

    return {
        saldo: saldo,
        rank: rank
    };
}
        
let resultado = calcularRank (97, 23);
console.log(`Saldo: ${resultado.saldo}, Rank: ${resultado.rank}`);







































