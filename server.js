var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {

    'article-one' :{
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
    },
    
    'article-two' :{
      title: "Manoj Yadav | Article two",
      heading : "Article two",
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
    },
    
    'article-three' :{
      title: "Manoj Yadav | Article three",
      heading : "Article three",
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
    }
  
    
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

app.get('/:articleName',function (req,res) {
    //articleName==article-one
    //article[articleName]==content {} article one
    var articleName=request.params.articleName;
   res.send(createTemplate(articleName[articleName])); 
});

//<!--app.get('/article-two',function (req,res) {
  // res.sendFile(path.join(__dirname,'ui','article-two.html')); 
    
//});
//app.get('/article-three',function (req,res) {
 //  res.sendFile(path.join(__dirname,'ui','article-three.html')); 
//});//-->

//app.get('/ui/style.css', function (req, res) {
  //res.sendFile(path.join(__dirname, 'ui', 'style.css'));
//});

app.get('/ui/images.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
