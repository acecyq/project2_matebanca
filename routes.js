module.exports = (app, db) => {

	// require controllers
	const users = require('./controllers/users.js')(db)

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

}