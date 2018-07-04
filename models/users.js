module.exports = (pool) => {



	// check if email already exist before registering
	const checkEmail = (email, callback) => {

		let queryString = 'SELECT * FROM users WHERE email = $1';
		let value = [email];
		pool.query(queryString, value, callback);

	}



	// register the user details
	const register = (name, email, password, callback) => {

		let queryString = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
		let values = [name, email, password];
		pool.query(queryString, values, callback);

	}



	const login = (email, password, callback) => {

		let queryString = 'SELECT * FROM users WHERE email = $1 AND password = $2'
		let values = [email, password];
		pool.query(queryString, values, callback);

	}



	return {

		checkEmail: checkEmail,
		register: register,
		login: login

	};


}