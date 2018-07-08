// get value of login cookie
let dc = document.cookie;
console.log(dc);
let n = dc.indexOf("login=");
let val = dc.slice(n+6, n+10);
console.log(val);


// if login fail, display "wrong email" or "account already exists" message
if (val === "fail") {

	if (window.location.href.includes("register")) {

		document.getElementsByTagName('p')[0].textContent = "Account already exists. Please log in instead."

	} else {

		document.getElementsByTagName('p')[0].textContent = "Wrong email or password. Please try again."

	}

}


// deletes login cookie
document.cookie = "login=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";