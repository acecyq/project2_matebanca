window.onload = () => {

	// get level and topics select, all select and upload form elements
	let select0 = document.getElementsByTagName('select')[0];
	let select1 = document.getElementsByTagName('select')[1];
	let select2 = document.getElementsByTagName('select')[2];
	let selects = document.getElementsByTagName('select');
	let practiceForm = document.getElementById('practiceForm');
	let searchBtn = document.getElementsByTagName('input')[0];
	let question = document.getElementById('practiceform-image0');
	let solution = document.getElementById('practiceform-image1');
	let cookieId = document.cookie.charAt(document.cookie.indexOf('user_id') + 8);
	let del = document.getElementsByClassName('delete')[0];
	let input0 = document.getElementsByTagName('input')[0];
	let deleteBtn = document.getElementById('delete');
	let delqnsurl, delsolurl;


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

			let res;
			let msg = document.getElementsByTagName('p')[0]
			let h6 = document.getElementsByTagName('h6');

			if (this.responseText === "nothing") {

				msg.textContent = "No results";
				question.src="";
				solution.src="";
				for (let i = 0; i < h6.length; i++) {
					h6[i].style.visibility = "hidden";
				}

			} else {

				res = JSON.parse(this.responseText);
				msg.textContent = "";
				question.src = "https://res.cloudinary.com/dzn61n5gq/image/upload/w_700,h_350,c_scale/" + res.question.img;
				solution.src = "https://res.cloudinary.com/dzn61n5gq/image/upload/w_700,h_350,c_scale/" + res.solution.img;
				delqnsurl = res.question.img;
				delsolurl = res.solution.img;
				console.log('delqnsurl');
				console.log(delqnsurl);
				console.log('delsolurl');
				console.log(delsolurl);
				for (let i = 0; i < h6.length; i++) {
					h6[i].style.visibility = "visible";
				}
				
			}

			// if question is made by user, delete button will show to allow the user to delete the image
			if (this.responseText !== "nothing" && res.question.user_id === parseInt(cookieId, 10)) {

				del.style.visibility = 'visible';

			} else {

				del.style.visibility = 'hidden';

			}
			
		}

		let url = "/qns/getqns?level=" + select0.value + "&topic=" + select1.value + "&difficulty=" + select2.value;
		let request = new XMLHttpRequest();

		request.addEventListener("load", responseHandler);
		request.open("GET", url);
		request.send();

	});


	// display image used to update before confirming to update
	// input0.addEventListener('change', () => {

	// 	let img = document.getElementsByTagName('img')[1]
	// 	let file = input0.files[0];
	// 	let reader = new FileReader();
	// 	reader.onload = () => {
	// 		readResult = reader.result;
	// 		console.log(reader.result);
	// 		img.src = reader.result;
	// 		img.height = "350";
	// 		img.width = "700";
	// 	};
	// 	if (file) {
	// 		reader.readAsDataURL(file);	
	// 	} else {
	// 		img.src = "";
	// 		img.height = "0";
	// 		img.width = "0";
	// 	}

	// });


	deleteBtn.addEventListener('click', () => {

		function responseHandler1() {

			if (this.responseText === "ok") {
	
				alert("question deleted!");
				window.location = '/qns/practice';
	
			}
			
		}

		let url = "/qns/deleted?qns=" + delqnsurl + "&sol=" + delsolurl;
		console.log(url);
		let request = new XMLHttpRequest();

		request.addEventListener("load", responseHandler1);
		request.open("DELETE", url);
		request.send();

	});
	
}