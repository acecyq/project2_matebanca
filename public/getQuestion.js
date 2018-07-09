window.onload = () => {

	// get level and topics select, all select and upload form elements
	let select0 = document.getElementsByTagName('select')[0];
	let select1 = document.getElementsByTagName('select')[1];
	let select2 = document.getElementsByTagName('select')[2];
	let selects = document.getElementsByTagName('select');
	let practiceForm = document.getElementById('practiceForm');
	let searchBtn = document.getElementsByTagName('input')[0];
	let question = document.getElementById('practiceform-image');
	let updateForm = document.getElementById('updateForm');
	let cookieId = document.cookie.charAt(document.cookie.indexOf('user_id') + 8);


	// when level is selected, topics for that level will appear as options
	let responseHandler = function() {

		let res = JSON.parse(this.responseText);
		select1.innerHTML = "<option value=''>Select topic</option>";

		res[select0.value].forEach(el => {

			let opt = document.createElement('option');
			opt.value = el;
			opt.textContent = el;
			select1.appendChild(opt);

		});

	};


	// when level is selected, get data from AJAX url to find the topics for that level
	select0.addEventListener('change', () => {

		let url = "/qns/select";
		let request = new XMLHttpRequest();

		request.addEventListener("load", responseHandler);
		request.open("GET", url);
		request.send();

	});


	// user is only able to select image file to upload when all parameters are selected
	let showForm = () => {
		let show = true;
		for (let i = 0; i < selects.length; i++) {
			if (selects[i].value === "") {
				show = false;
			}
		}
		if (show === true) {
			practiceForm.style.visibility = "visible";
		} else {
			practiceForm.style.visibility = "hidden";
		}
	}


	// add event listener to all select elements
	for (let i = 0; i < selects.length; i++) {
		selects[i].addEventListener('change', showForm);
	}


	// on form submission page does not reload and loads image
	practiceForm.addEventListener('submit', (event) => {

		event.preventDefault();

		function responseHandler() {
			let qns = JSON.parse(this.responseText);
			let selected = qns[Math.floor(Math.random() * qns.length)];
			question.src = "https://res.cloudinary.com/dzn61n5gq/image/upload/w_720,h_360,c_scale/" + selected.img;

			// if question is made by user, user is able to update the question
			if (selected.user_id === parseInt(cookieId, 10)) {
				updateForm.style.visibility = 'visible';
			} else {
				updateForm.style.visibility = 'hidden';
			}
		}

		let url = "/qns/getqns?level=" + select0.value + "&topic=" + select1.value + "&difficulty=" + select2.value;
		let request = new XMLHttpRequest();

		request.addEventListener("load", responseHandler);
		request.open("GET", url);
		request.send();

	})


	updateForm.addEventListener('submit', (event) => {

		event.preventDefault();

		function responseHandler() {

			console.log(this);

		}

		let url = "/qns/updated";
		let request = new XMLHttpRequest();

		request.add("load", responseHandler);
		request.open("POST", url);
		request.send();

	});
	
}