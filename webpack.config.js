const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        // expressao regular sempre entre //, aqui estamos escapando . com \ e dizendo para a lógica procurar por ".js" no final ($) do arquivo.
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i, //Procura qualquer arquivo gif, png e jpg (ou jpeg) com o nome da extenção em maiúsculas ou minúsculas ("i" de insensitive)
        use: [
          { loader: 'file-loader' },
        ]
      },
    ]
  }
};