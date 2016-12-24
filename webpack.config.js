/**
 * webpack.config.js
 *
 * Arquivo de configuração do webpack ao qual se define o arquivo de entrada (entry), 
 * para ser manipulado, e o arquivo final de saída (output)
 *
 * Também são definidos os loaders a serem utilisados e os presets
 *  
 */

module.exports = {
	entry : './app/app.js' ,
	output : {
		filename : 'public/bundle.js'
	} , 
	module : {
		loaders : [
			{
				test : /\.js$/ ,
				exclude : /node_modules/ ,
				loader : 'babel' ,
				query : {
					presets : ['react' , 'es2015']
				}
			}
		]
	}
}