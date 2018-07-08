// run 'npm install pg'
const pg = require('pg');

configs = {
	user: 'acechua',
	host: '127.0.0.1',
	database: 'matebanca',
	port: 5432
};

const poolObj = new pg.Pool(configs);

poolObj.on('error', (err) => {
	console.log('idle client error', err.message, err.stack);
});

module.exports = {
	pool: poolObj,
	user: require('./models/users.js')(poolObj),
	qns: require('./models/qns.js')(poolObj)
};