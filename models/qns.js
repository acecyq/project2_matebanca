module.exports = (pool) => {


	// insert question details into questions table
	const uploading = (img, level, topic, difficulty, user_id, callback) => {

		let queryString = 'INSERT INTO questions (img, level, topic, difficulty, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *'
		let values = [img, level, topic, difficulty, user_id];
		pool.query(queryString, values, callback);

	}


	const getQns = (level, topic, difficulty, callback) => {

		let queryString = 'SELECT * FROM questions WHERE level = $1 AND topic = $2 AND difficulty = $3';
		let values = [level, topic, difficulty];
		pool.query(queryString, values, callback);

	}

	return {

		uploading: uploading,
		getQns: getQns

	};


}