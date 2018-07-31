const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(morgan('tiny'));


app.get('/', (req, res) => {
  res.send(homepage);
});

app.get('/upper/:str', (req, res) => {
  var string= req.params// returns an object {str:'hi'}
  var object= {
    oldStr: string.str, 
    Result: string.str.toUpperCase()
  }
  var jsonOBJ= JSON.stringify(object)
  console.log(jsonOBJ)

  res.send(jsonOBJ);
});

app.get('/lower/:str', (req, res) => {
  var string= req.params// returns an object {str:'hi'}
  var object= {
    oldStr:string.str, 
    Result:string.str.toLowerCase()
  }
  var jsonOBJ= JSON.stringify (object)
  console.log(jsonOBJ)
  res.send(jsonOBJ);
});

app.get('/length/:str', (req, res) => {
  var string= req.params// returns an object {str:'hi'}
  var length= string.str.length
  var object= {
    oldStr:string.str,
    Result:length
  }
  var jsonOBJ= JSON.stringify (object)
  console.log(jsonOBJ)
  res.send(jsonOBJ);
});

app.get('/reverse/:str', (req, res) => {
  var string= req.params// returns an object {str:'hi'}
  
  var reverse= string.str.split('').reverse().join('')
  var object= {
    oldStr:string.str,
    Result:reverse
  }
  var jsonOBJ= JSON.stringify (object)
  console.log(jsonOBJ)
  res.send(jsonOBJ);
});

app.listen(port, () => {
  console.log(`running on port ${port}`);
});

const homepage = `
<html>
  <head>
    <title>Mid Program String Modifier</title>
    <link href="app.css"
          type="text/css" rel="stylesheet">
    <link rel="icon" type="image/x-icon"
          href="favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Itim" rel="stylesheet">
    <script src="app.js"></script>
    </head>
  <body>
    <h1>Mid Program String Modifier</h1>
    <input type="text" name="string"
           placeholder="type a string" id='text'>
    <p id="modP">modified strong goes here</p>
    <button id="nullB">nullB</button>
    <button id="upper">Upper</button>
    <button id="lower">Lower</button>
    <button id="length">Length</button>
    <button id="reverse">Reverse</button>
  </body>
</html>
`;
