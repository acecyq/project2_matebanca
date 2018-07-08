window.onload = () => {

	// get level and topics select, all select and upload form elements
	let select0 = document.getElementsByTagName('select')[0];
	let select1 = document.getElementsByTagName('select')[1];
	let selects = document.getElementsByTagName('select');
	let uploadForm = document.getElementById('uploadForm');
	let input0 = document.getElementsByTagName('input')[0];


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
	let showInput = () => {
		let show = true;
		for (let i = 0; i < selects.length; i++) {
			if (selects[i].value === "") {
				show = false;
			}
		}
		if (show === true) {
			uploadForm.style.visibility = "visible";
		} else {
			uploadForm.style.visibility = "hidden";
		}
	}


	// add event listener to all select elements
	for (let i = 0; i < selects.length; i++) {
		selects[i].addEventListener('change', showInput);
	}


	// display image for preview
	const showImage = () => {
		console.log('ok');
		let img = document.getElementsByTagName('img')[0]
		let file = input0.files[0];
		let reader = new FileReader();
		reader.onload = () => {
			img.src = reader.result;
			img.height = "350";
			img.width = "700";
		};
		if (file) {
			reader.readAsDataURL(file);	
		} else {
			img.src = "";
			img.height = "0";
			img.width = "0";
		}
	}


	// preview image before uploading
	input0.addEventListener('change', showImage);

}