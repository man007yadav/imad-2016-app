var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne= {
  title: "Manoj Yadav | Article one",
  heading : "Article one",
  date : "Sept 23,2016",
  content: `<p>
                This is paragraph one, which is nothing which useful for me or you.
            </p> 
            
            <p>
                This is paragraph two, may be useful for my love.
            </p>
            
            <p>
                This paragraph three, and cant help making this page at all.
            </p>
             `
  
  
    
};

function createTemplate(data){
    
    title=data.title;
    heading=data.heading;
    date=data.date;
    content=data.content;
    
    var htmlTemplate=`<html>
 <head>
     <title>
         ${title};
     </title>
     
     <!--For mobile view-->
     
     <meta name="viewport" content="width=device-width ,intial-scale=1"/>
     
     <link href="/ui/style.css" rel="stylesheet"/>
     
     
     
     
 </head>
 
 <body>
     <div class="container">
         <div>
             <a href='/'>Home</a>
         </div>
         <hr/>
         
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


</html>`;

return htmlTemplate;
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function (req,res) {
   res.send(createTemplate(articleOne)); 
});

app.get('/article-two',function (req,res) {
   res.sendFile(path.join(__dirname,'ui','article-two.html')); 
});
app.get('/article-three',function (req,res) {
   res.sendFile(path.join(__dirname,'ui','article-three.html')); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/images.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
