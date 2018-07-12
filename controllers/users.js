module.exports = (db) => {


	// render the home page
	const home = (req, res) => {

		res.render('./users/home', {name: req.cookies['name']});

	}


	// user registration form
	const registerForm = (req, res) => {

		res.render('./users/registerForm');

	}


	// require hash
	const sha256 = require('js-sha256');
	const salt = "cuckoobird rocks";


	// register user
	const register = (req, res) => {

		db.user.checkEmail(req.body.email, (err, result) => {

			if (err) {

				res.send("db error: " + err);

			} else if (result.rows.length > 0) {

				res.cookie('login', 'fail');
				res.redirect('/users/register');

			} else {

				db.user.register(req.body.name, req.body.email, sha256(req.body.password), (err1, result1) => {

					if (err1) {

						res.send("db error 1: " + err);

					} else {

						res.cookie('user_id', result1.rows[0].id);
						res.cookie('session', sha256(result1.rows[0].id + 'login' + salt));
						res.cookie('log_in', 'pass');
						res.cookie('name', result1.rows[0].name);
						res.redirect('/');

					}

				});

			}

		});

	}



	// user log in form
	const loginForm = (req, res) => {

		res.render('./users/loginForm');

	}



	// log in user
	const login = (req, res) => {

		db.user.login(req.body.email, sha256(req.body.password), (err, result) => {

			if (err) {

				res.send("db error: " + err);

			} else {

				if (result.rows.length > 0) {

					res.cookie('user_id', result.rows[0].id);
					res.cookie('session', sha256(result.rows[0].id + 'login' + salt));
					res.cookie('login', 'pass');
					res.cookie('name', result.rows[0].name);
					res.redirect('/');

				} else {

					res.cookie('login', 'fail');
					res.redirect('/users/login');

				}

			}

		});

	}



	// user log out
	const logout = (req, res) => {

		res.clearCookie("login");
		res.clearCookie("session");
		res.clearCookie("user_id");
		res.clearCookie("name");
		res.redirect('/users/login');

	}

	return {

		home: home,
		registerForm: registerForm,
		register: register,
		loginForm: loginForm,
		login: login,
		logout: logout
	
	};

}