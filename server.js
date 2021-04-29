var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home',{
        text: 'Fourscore and seven years ago',
        imageUrl: 'https://www.biography.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTcwMzk0MjM3ODAyNjUyODk2/gettyimages-104411905.jpg',

    });
});

app.get('/test', function(req, res) {
    res.render('test', {
        announcement: 'If this had been a test of the emergency broadcast system, the tone you just heard would have been followed by a set of instructions.'
    })
})



app.listen(3000);