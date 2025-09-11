document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // para hindi mag-refresh ang page

  // Gamitin ang object para hawakan ang form data
  let loginData = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value
  };

  console.log("Form Data as Object:", loginData);

  // Halimbawa, gamitin sa validation
  if (loginData.username && loginData.password) {
    alert("Welcome " + loginData.username + "!");
  } else {
    alert("Please fill in all fields.");
  }
});
