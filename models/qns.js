module.exports = (pool) => {


	// insert image details into questions table
	const uploadQ = async function(img, level, topic, difficulty, user_id) {

		let queryString = 'INSERT INTO questions (img, level, topic, difficulty, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *'
		let values = [img, level, topic, difficulty, user_id];
		try {

			let res = await pool.query(queryString, values);
			return res;

		} catch(err) {

			console.log(err);
			return err;

		}

	}


	// insert image details into answers table
	const uploadS = async function(img, user_id, question_id) {

		let queryString = 'INSERT INTO answers (img, user_id, question_id) VALUES ($1, $2, $3) RETURNING *'
		let values = [img, user_id, question_id];
		try {

			let res = await pool.query(queryString, values);
			return res;

		} catch(err) {

			console.log(err);
			return err;

		}

	}


	// get question and solution from database
	const getQns = async function(level, topic, difficulty) {

		// let queryString = 'SELECT * FROM questions WHERE level = $1 AND topic = $2 AND difficulty = $3';
		let queryString = 'SELECT * FROM questions WHERE id = 18';
		let values = [level, topic, difficulty];
		let queryString1 = 'SELECT * FROM answers WHERE question_id = $1';

		try {
			// const result = await pool.query(queryString, values);
			const result = await pool.query(queryString);
			const question = result.rows[Math.floor(Math.random() * result.rows.length)]
			let value = [question.id];
			const result1 = await pool.query(queryString1, value);
			return {
				"question" : question,
				"solution" : result1.rows[0]
			}
		} catch(error) {
			console.log("ERR: " + error);
		}

	}


	// delete question from database
	const deleted = (img, callback) => {

		let queryString = 'DELETE FROM questions WHERE img = $1 RETURNING *';
		let value = [img];
		pool.query(queryString, value, callback);

	}


	return {

		uploadQ: uploadQ,
		uploadS: uploadS,
		getQns: getQns,
		deleted: deleted

	};


}