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
	const uploading = (req, res) => {

		// let img;
		// let id = req.cookies['user_id'];
		// console.log(req.body);

		// const submit = cloudinary.uploader.upload(req.file.path, (result) => {

		// 	console.log("the result is: " + result);
		// 	img = result;

		// }, {

		//     crop: 'scale',
		//     width: 720,
		//     height: 360

		// })

		cloudinary.uploader.upload(req.file.path, {width: 720, height: 360, crop: "scale"})
		.then(result => {

			db.qns.uploading(result.public_id, req.body.level, req.body.topic, req.body.difficulty, req.cookies['user_id'])

		})
		.then((error1, result1) => {

			console.log(result1);
			res.redirect('/qns/upload');

		})
		.catch(error => {

			res.send("uploading error: " + error);

		});

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


	return {

		uploadForm: uploadForm,
		uploading: uploading,
		selectList: selectList,
		practice: practice

	}

}