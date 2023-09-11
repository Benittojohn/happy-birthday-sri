function checkLogin() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username == "Miglepavana" && password == "Rosejasmine") {
		alert("Login successful!");
		window.location.href = "birthday.html";
	} else {
		alert("Invalid username or password. Please try again.");
	}
}
