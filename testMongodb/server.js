const express= require('express');
const bodyParser=require('body-parser')
const MongoClient= require('mongodb').MongoClient
var db
const app=express();
app.use(bodyParser.urlencoded({extended:true}))

MongoClient.connect('mongodb://user1:user1@ds023213.mlab.com:23213/projectfahridb',(err, database)=>{
		if(err) return console.log('masih error')
		db=database
		app.listen(3000,()=>{
			console.log('listening on 3000')
		})
	})


//app.set('view engine', 'ejs')
app.get('/',function(req,res) {
	res.sendFile(__dirname + '/home.html')
	var cursor=db.collection('quotes').find().toArray(function(err, results) {
  console.log(results)})
})
app.post('/quotes',(req,res)=>{
	db.collection('quotes').save(req.body,(err,result)=>{
		if(err) return console.log(err)

		console.log('saved to database')
		  res.redirect('/respon')

	})
})
app.get('/respon', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})