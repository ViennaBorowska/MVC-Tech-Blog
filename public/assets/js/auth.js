// const signUpForm = $("#sign-up-form");
// const loginForm = $("#login-form");

// const handleSignUp = async (event) => {
//   event.preventDefault();

//   const username = document.getElementById("usernameInput").value.trim();
//   const password = document.getElementById("passwordInput").value.trim();

//   // const payload = JSON.stringify({
//   //   password: password,
//   //   username: username,
//   // });

//   // const response = await fetch("/api/users/signup", {
//   //   method: "POST",
//   //   body: payload,
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   // });

//   // if (response.ok) {
//   //   window.location.replace("/dashboard");
//   // } else {
//   //   alert("Failed to sign up");
//   // }
// };

// const handleLogin = async (event) => {
//   event.preventDefault();

//   const username = document.getElementById("usernameInput").value.trim();
//   const password = document.getElementById("passwordInput").value.trim();

//   // const payload = JSON.stringify({
//   //   username: username,
//   //   password: password,
//   // });
//   console.log(username, password);
// const response = await fetch("/api/users/login", {
//   method: "POST",
//   body: payload,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// if (response.ok) {
//   window.location.replace("/dashboard");
// } else {
//   alert("Failed to login");
// }
// };

// signUpForm.on("submit", handleSignUp);
// loginForm.on("submit", handleLogin);
