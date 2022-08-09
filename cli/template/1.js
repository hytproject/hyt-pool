

const question = "Please choose a config to generate.\n\
	1) Global\n\
>";
// 	2) Holoyolo - Panthera Algo\
// 	3) Holoyolo - Progpow Algo\
// ",
module.exports = cli => cli.question(question, ans => {
	const parse = cli.parseInt(ans);
	if(!parse) {
		cli.quit();
		return;
	}

	cli.getTask(`${parse}`)(cli);

});
