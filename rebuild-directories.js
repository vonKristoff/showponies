var glob = require("glob")
var fs = require('fs')
 
// options is optional
glob("public/*.html", (er, files) => {
	const views = files.map(path => path.replace("public/", "").replace(".html", ""))
	
	files.forEach((path, index) => {
		if(views[index] !== 'index') {
			fs.rename(path, `./public/${views[index]}/index.html`, () => console.log(`${views[index]} has been renamed`))
		}	
	})

})