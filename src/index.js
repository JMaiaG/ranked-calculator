function calcularRank(vitorias, derrotas) {

    let saldo = vitorias - derrotas;

    
    let rank;
    if (saldo <= 10) {
        rank = "Ferro";
    } else if (saldo <= 20) {
        rank = "Bronze";
    } else if (saldo <= 50) {
        rank = "Prata";
    } else if (saldo <= 80) {
        rank = "Ouro";
    } else if (saldo <= 90) {
        rank = "Diamante";
    } else if (saldo <= 100) {
        rank = "Lendário";
    } else {
        rank = "Imortal";
    }

    return {
        saldo: saldo,
        rank: rank
    };
}
        
let resultado = calcularRank (40, 10);
console.log(`Saldo: ${resultado.saldo}, Rank: ${resultado.rank}`);







































