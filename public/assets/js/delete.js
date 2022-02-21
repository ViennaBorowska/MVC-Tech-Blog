const deleteBtn = $("#delete-btn");

const handleDeleteBlog = async (event) => {
  const currentTarget = $(event.currentTarget);
  const blogId = currentTarget.attr("data-id");

  const response = await fetch(`/api/projects/${blogId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    window.location.replace("/dashboard");
  } else {
    alert("Failed to delete project");
  }
};

deleteBtn.on("click", handleDeleteBlog);
