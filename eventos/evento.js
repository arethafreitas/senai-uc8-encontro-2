
let eventos = [];
let dataAtual = new Date();
let dataInformada = new Date('2022-02-10');
if (dataInformada > dataAtual) {
	let evento = {
		descricaoEvento: 'Zero to Hero JavaScript',
		dataEvento: dataInformada,
		relacaoParticipantes: [],
	};
	eventos.push(evento);
} else {
	console.log("Informe uma data inferior à data atual!");
}
/**
 * Valida a idade dos participantes e quantidade já cadastrada
 *  */ 
let idadeInformada = 18;
if (eventos[0].relacaoParticipantes.length >= 100) {
	console.log("O evento já está lotado!");
} else {
	if (idadeInformada < 18) {
		console.log('Evento para maiores de 18 anos!');
	} else {
		eventos[0].relacaoParticipantes.push('Ada Lovelace');
	}
}
/**
 * Exibir resultado final
 */
console.log(eventos);