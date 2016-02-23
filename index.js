var words=['こぶた','たぬき','きつね','ねこ'];
var index = 0;
setInterval(function() {
	var word = words[index++ % words.length];
	var position = 0;

	var tm = setInterval(function() {
		process.stdout.write(word[position++]);
		if (position >= word.length) {
			clearInterval(tm);
		}
	}, 100);

	setTimeout(function() {
		process.stdout.write('\b\b  \b\b');
	}, 800);

}, 1000);
