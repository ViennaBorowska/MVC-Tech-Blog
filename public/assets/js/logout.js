const logoutBtn = $("#logout-btn");

const handleLogout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    window.location.replace("/");
  } else {
    alert("Failed to logout");
  }
};

logoutBtn.on("click", handleLogout);
