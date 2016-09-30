var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={

'article-one': {
    title:'Article One I chandana',
    heading:'Article one',
    date:'sep 4 2016',
    content: '<p>This is my article</p>'
},  
'article-two':{ title:'Article two I chandana',
    heading:'Article Two',
    date:'sep 14 2016',
    content: '<p>This is my  second article</p>'
    
},
'article-three':{ title:'Article three I chandana',
    heading:'Article Three',
    date:'sep 22 2016',
    content: '<p>This is my  third article</p>'
}
};

function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate= 
    <html>
      <head>
       <title>
           ${title}
           
       </title> 
       <link href="/ui/style.css" rel="stylesheet" />
       
      </head>
    <body>
        <div class=container>
        <div>
        <a href='/'>Home</a>
        </div>
        <h2>
            ${heading}
        </h2>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
        
      </body>
    </html>
    ;

return htmltemplate;
}

   

    

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
    
   res.send(createTemplate(articles[articlename]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
