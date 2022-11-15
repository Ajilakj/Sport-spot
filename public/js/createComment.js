const createCommentFormHandler = async (event) => {
  event.preventDefault();
  const content = document.querySelector("#new-comment-content").value;
  if (content) {
    const response = await fetch ("/api/comment", {
      method: "POST",
      body: JSON.stringify({ content }),
      headers: { "Content-Type": "application/json" },
    });
    // const result = await response.json();
    if (response.ok) {
      document.location.reload();
    } else {
      alert("An error has occured in generating your comment");
      console.log(error);
    }
  }
};

// const createComment = async (event) => {
//   event.preventDefault();
// };

document.querySelector(".comment-form").addEventListener("submit", createCommentFormHandler);