const signUpEl = document.getElementById$("#sign-up-submit");
const loginForm = $("#login-form");
const logoutBtn = $("#logout-btn");
import { signUp, login, logout } from "../../../src/controllers/api/users";
// const handleSignUp = async (event) => {
//   event.preventDefault();

//   const username = document.getElementById("username-input").value.trim();
//   const password = document.getElementById("password-input").value.trim();

//   if (username && password) {
//     const response = await fetch("/api/users/signup", {
//       method: "POST",
//       body: JSON.stringify({ username, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert("Failed to sign up");
//     }
//   }
// };

// //   const payload = JSON.stringify({
// //     password: password,
// //     username: username,
// //   });

// //   const response = await fetch("/api/users/signup", {
// //     method: "POST",
// //     body: payload,
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //   });

// //   if (response.ok) {
// //     window.location.replace("/dashboard");
// //   } else {
// //     alert("Failed to sign up");
// //   }
// // };

// // signUpEL.addEventListener("click", async (event) => {
// //   event.preventDefault();

// //   const userNameEL = document.getElementById("username-input").value.trim();
// //   const passWordEl = document.getElementById("password-input").value.trim();
// //   const newUser = await fetch("/api/users/", {
// //     method: "POST",
// //     body: JSON.stringify({
// //       username: userNameEL,
// //       password: passWordEl,
// //     }),
// //     headers: { "Content-Type": "application/json" },
// //   });

// //   if (newUser.ok) {
// //     document.location.replace("/dashboard");
// //   } else {
// //     alert("Sign up failed! Please try again.");
// //   }
// // });

// const handleLogin = async (event) => {
//   event.preventDefault();

//   const username = document.getElementById("username-input").value.trim();
//   const password = document.getElementById("password-input").value.trim();

//   // const payload = JSON.stringify({
//   //   username: username,
//   //   password: password,
//   // });
//   console.log(username, password);
//   const response = await fetch("/api/users/login", {
//     method: "POST",
//     body: JSON.stringify({ username, password }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (response.ok) {
//     window.location.replace("/dashboard");
//   } else {
//     alert("Failed to login");
//   }
// };

// const handleLogout = async () => {
//   const response = await fetch("/api/users/logout", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (response.ok) {
//     window.location.replace("/login");
//   } else {
//     alert("Failed to logout");
//   }
// };
document.querySelector(".sign-up-submit").addEventListener("submit", signUp);

document.querySelector(".login-form").addEventListener("submit", login);

document.querySelector(".logout-button").addEventListener("submit", logout);

// signUpForm.on("submit", handleSignUp);
// loginForm.on("submit", handleLogin);
// logoutBtn.on("click", handleLogout);
