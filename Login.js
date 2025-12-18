const form = document.querySelector("#loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(m => m.email === email);

  if (!user) {
    alert("This email is not registered. Please create an account");
    return;
  }

  if (user.password !== password) {
    alert('Enter the correct password');
    return;
  }

  alert(`Welcome back, ${user.username}`);
  form.reset();
    window.location.href = "index.html";

});
