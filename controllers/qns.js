module.exports = (db) => {


	// require cloudinary
	let cloudinary = require('cloudinary');
	
	// set configs api_key and api_secret
	cloudinary.config({ 
	  cloud_name: 'dzn61n5gq', 
	  api_key: '151698649535996', 
	  api_secret: 'gLBP1I3PCXx4_jWUiPDSunS5IHY' 
	});


	// require hash
	const sha256 = require('js-sha256');
	const salt = "cuckoobird rocks";


	// check if there is any user logged in
	const checkCookies = (cookies) => {

		if (cookies['session'] === undefined || cookies['session'] !== sha256(cookies['user_id'] + 'login' + salt)) {

			return null;

		} else {

			return cookies['user_id'];

		}

	}


	// upload question form
	const uploadForm = (req, res) => {

		if (checkCookies(req.cookies) === null) {

			res.render('./qns/pleaseLogin');

		} else {

			res.render('./qns/uploadForm');

		}

	}


	// upload question
	const uploading = async function(req, res) {

		if (req.files.length < 2) {

			res.cookie('upload', 'fail');
			res.redirect('/qns/upload');

		} else {

			try {

				const result = await cloudinary.v2.uploader.upload(req.files[0].path, {width: 1080, height: 830, crop: "scale"});
				const result1 = await db.qns.uploadQ(result.public_id, req.body.level, req.body.topic, req.body.difficulty, req.cookies['user_id']);
				const result2 = await cloudinary.v2.uploader.upload(req.files[1].path, {width: 1080, height: 830, crop: "scale"});
				const result3 = await db.qns.uploadS(result2.public_id, req.cookies['user_id'], result1.rows[0].id);
				res.redirect('/qns/practice');

			} catch(err) {

				console.log('ERR: ', err);
				error.push(err);

			}

		}

	}


	// JSON file records topics for every level
	const selectList = (req, res) => {

		const list = {
			// "p1" : [
			// 	"Numbers Up to 100",
			// 	"Addition and Subtraction",
			// 	"Multiplication and Division",
			// 	"Money",
			// 	"Measurement",
			// 	"Geometry",
			// 	"Data Representation and Interpretation"
			// ],
			// "p2" : [
			// 	"Numbers Up to 1000",
			// 	"Addition and Subtraction",
			// 	"Multiplication and Division",
			// 	"Fractions of a Whole",
			// 	"Addition and Subtraction of Fractions",
			// 	"Money",
			// 	"Measurement",
			// 	"Time",
			// 	"Geometry",
			// 	"3D Shapes",
			// 	"Data Representation and Interpretation"
			// ],
			// "p3" : [
			// 	"Numbers Up to 10,000",
			// 	"Addition and Subtraction",
			// 	"Multiplication and Division",
			// 	"Mental Calculation",
			// 	"Equivalent Fractions",
			// 	"Addition and Subtraction of Fractions",
			// 	"Length, Mass and Volume",
			// 	"Time",
			// 	"Money",
			// 	"Area and Perimeter",
			// 	"Perpendicular and Parallel Lines",
			// 	"Angles",
			// 	"Bar Graphs"
			// ],
			// "p4" : [
			// 	"Numbers Up to 100,000",
			// 	"Multiplication and Division",
			// 	"Factors and Multiples",
			// 	"Mixed numbers and Improper Fractions",
			// 	"Addition and Subtraction of Fractions",
			// 	"Fraction of a Set of Objects",
			// 	"Addition and Subtraction of Fractions",
			// 	"Multiplication of Fractions",
			// 	"Decimals Up to 3 Decimal Places",
			// 	"Addition and Subtraction of Decimals",
			// 	"Multiplcation and Division of Decimals",
			// 	"Perpendicular and Parallel Lines",
			// 	"Time",
			// 	"Money",
			// 	"Area and Perimeter",
			// 	"Bar Graphs",
			// 	"Perpendicular and Parallel Lines",
			// 	"Angles",
			// 	"Rectangle and Square",
			// 	"Symmetry",
			// 	"Tessellation",
			// 	"Tables",
			// 	"Line Graph"
			// ],
			// "p5" : [
			// 	"Numbers Up to 10,000,000",
			// 	"Four Operations",
			// 	"Order of Operations",
			// 	"Four Operations of Fractions",
			// 	"Four Operations of Decimals",
			// 	"Percentage",
			// 	"Ratio",
			// 	"Length, Mass and Volume",
			// 	"Volume of Cube and Cuboid",
			// 	"Angles",
			// 	"Triangle",
			// 	"Parallelogram, Rhombus and Trapezium",
			// 	"Average of a Set of Data"
			// ],
			// "p6" : [
			// 	"Fractions",
			// 	"Percentage",
			// 	"Ratio",
			// 	"Speed",
			// 	"Measurement",
			// 	"Geometry",
			// 	"Data Analysis",
			// 	"Algebra"
			// ],
			"s1" : [
				"Factors and Multiples",
				"Real Numbers",
				"Approximation and Estimation",
				"Introduction to Algebra",
				"Algebraic Manipulation",
				"Simple Equations in One Variable",
				"Angles and Parallel Lines",
				"Triangles and Polygons",
				"Ratio, Rate and Speed",
				"Percentage",
				"Number Patterns",
				"Coordinates and Linear Functions",
				"Simple Inequalities",
				"Perimeter and Area of Plane Figures",
				"Volume and Surface Area of Solids",
				"Data Handling"
			],
			"s2" : [
				"Proportion",
				"Expansion and Factorisation of Algebraic Expressions",
				"Simple Algebraic Fractions",
				"Quadratic Functions and Equations",
				"Linear Equations in Two Variables",
				"Congruency and Similarity",
				"Pythagoras' Theorem",
				"Trigonometric Ratios of Acute Angles",
				"Mensuration of Pyramids, Cones and Spheres",
				"Data Analysis",
				"Probability"
			],
			"s3" : [
				"Arithmetic",
				"Algebra",
				"Solutions to Quadratic Equations",
				"Linear Inequalities",
				"Number Sequences and Problem Solving",
				"Coordinate Geometry",
				"Graphs and Graphical Solution of Equations",
				"Kinematics/ Travel Graphs/ Conversion Graphs"
			],
			"s3a" : [
				"Simultaneous Equations",
				"Indices and Surds",
				"Quadratic Equations and Inequalities",
				"Polynomials",
				"Partial Fractions",
				"Binomial Theorem",
				"Exponential and Logarithmic Functions",
				"Power and Modulus Functions",
				"Coordinate Geometry",
				"Linear Law"
			],
			"s4" : [
				"Mensuration",
				"Congruence and Similarity",
				"Geometrical Properties of Angles and Circles, Angle Properties of Triangles, Quadrilaterals and Polygons",
				"Pythagoras' Theorem, Trigonometry, Bearings and Three-Dimensional Problems",
				"Set Language and Notation",
				"Matrices",
				"Vectors",
				"Probability",
				"Statistics"
			],
			"s4a" : [
				"Trigonometric Functions",
				"Trigonometric Identities and Equations",
				"Plane Geometry",
				"Differentiation",
				"Derivatives of Trigonometric, Exponential and Logarithmic Functions",
				"Applications of Differentiation",
				"Integration",
				"Applications of Integration",
				"Kinematics"
			]
		};

		res.send(list);

	}



	const practice = (req, res) => {

		if (checkCookies(req.cookies) === null) {

			res.render('./qns/pleaseLogin');

		} else {

			res.render('./qns/practice');

		}

	}


	// get question and solution data from sql database
	const getQns = async function(req, res) {

		if (checkCookies(req.cookies) === null) {

			res.render('./qns/pleaseLogin');

		} else {

			try {

				const result = await db.qns.getQns(req.query.level, req.query.topic, req.query.difficulty);
				res.send(result);	

			} catch(error) {

				console.log("ERR: " + error);
				res.send(error);
				
			}
			

		}

	}


	// delete question
	const deleted = async function(req, res) {

		

		try {
			
			await cloudinary.v2.uploader.destroy(req.query.qns);
			await cloudinary.v2.uploader.destroy(req.query.sol);
			await db.qns.deletedQ(req.query.qns);
			await db.qns.deletedS(req.query.sol);
			res.send("ok");

		} catch(error) {

			res.send(error);

		}

		// // remove image from cloud server
		// cloudinary.v2.uploader.destroy(req.query.qns, (error, result) => {

		// 	if (error) {

		// 		res.send(error);

		// 	} else {

		// 		// remove image from database
		// 		console.log(result);

		// 	}

		// });

		// // delete question from database
		// db.qns.deleted(req.query.img, (error1, result1) => {

		// 	if (error1) {

		// 		res.send(error1);

		// 	} else {

		// 		console.log(result1.rows[0]);
		// 		res.send('/qns/practice');

		// 	}

		// });

	}


	return {

		uploadForm: uploadForm,
		uploading: uploading,
		selectList: selectList,
		practice: practice,
		getQns: getQns,
		deleted: deleted

	}

}