const createBlogForm = $("#create-blog-form");

const handleCreateBlog = async (event) => {
  event.preventDefault();

  const title = $("#title").val();
  const content = $("#content").val();

  const payload = JSON.stringify({
    title,
    content,
  });

  const response = await fetch("/api/blogs", {
    method: "POST",
    body: payload,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    window.location.replace("/profile");
  } else {
    alert("Failed to create project");
  }
};

createProjectForm.on("submit", handleCreateProject);
