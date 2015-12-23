var php = require('phpjs');
  terminal = require('color-terminal');
function generateChar(){
	var limit = Math.floor(Math.random()*30);
	var color = ['%y','%g','%b','%r','%p','%m','%c','%w','%k','%y','%y']
	var colorTmp = color[Math.round(Math.random()*10)]
	var st = 'http://'
	limit = limit>0?limit:8; 

	for(var i =0; i< limit ;i++){
		var md5 = Date()
		var md5 =php.md5(md5);
		 terminal.colorize(colorTmp)
		st +=  md5
	}
	return st+"🃏  🎅  👻  🔐  "+Date();
}

setInterval(function(){ console.log(generateChar());}, 1000)

