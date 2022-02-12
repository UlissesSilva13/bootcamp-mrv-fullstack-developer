/* var firstName = 'João';
let lasName = 'Souza';

if (firstName === 'João') {
    let lasName = 'Rodrigues';
    var firstName = 'Pedro';
    lasName = 'Silva';

    console.log(lasName);

}

console.log(firstName, lasName); */

/* const FIRST_NAME = "Ulisses";

console.log(FIRST_NAME); */

// solução 1
function verificaPalindromo(string) {
	if (!string) return;
	console.log(string === string.split('').reverse().join(''));
}
verificaPalindromo('cat');

// solução 2

function varificaPalindromo2(string) {
	if (!string) return;
	if (!string.length) return;

	for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

varificaPalindromo2('asa');

