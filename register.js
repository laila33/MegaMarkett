const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("regEmail").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("regPassword").value.trim();

  if (!username || !email || !phone || !password) {
    alert("Please fill all fields!");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.some((user) => user.email === email);
  if (userExists) {
    alert("This email is already registered. Please login.");
    return;
  }

  users.push({ username, email, phone, password });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created successfully!");
  registerForm.reset();
  window.location.href = "index.html";
});

const icon = document.getElementById("toggleIcon");

icon.addEventListener("click", function () {
  this.classList.toggle("fa-regular");
  this.classList.toggle("fa-circle");

  this.classList.toggle("fa-solid");
  this.classList.toggle("fa-circle-check");

  this.classList.toggle("text-[#56BFFF]");
  this.classList.toggle(" text-[#56BFFF]");
});
