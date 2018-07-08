module.exports = (app, db) => {

	// require controllers
	const users = require('./controllers/users.js')(db);
	const qns = require('./controllers/qns.js')(db);

	// require multer
	const multer  = require('multer');
	const upload = multer({ dest: 'uploads/' });

	/*
	*****************************************************************************************
	*****************************************************************************************
	
										USERS ROUTES

	*****************************************************************************************
	*****************************************************************************************
	*/

	app.get('/', users.home);
	app.get('/users/register', users.registerForm);
	app.get('/users/login', users.loginForm);
	app.get('/users/logout', users.logout);

	app.post('/users/registered', users.register);
	app.post('/users/loggedin', users.login);

	/*
	*****************************************************************************************
	*****************************************************************************************
	
										QUESTION ROUTES

	*****************************************************************************************
	*****************************************************************************************
	*/

	app.get('/qns/upload', qns.uploadForm);
	app.get('/qns/select', qns.selectList);
	// app.get('/qns/practice', qns.practice);
	
	app.post('/qns/uploaded', upload.single('question'), qns.uploading);

}