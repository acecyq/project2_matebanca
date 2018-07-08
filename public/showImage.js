window.onload = () => {


	let input0 = document.getElementsByTagName('input')[0];

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