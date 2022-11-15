const addCommentForm = document.getElementById("comment-form");

async function addComment(newComment, postID) {
  const response = await fetch (`api/comment/${postID}`, {
    method: "POST",
    body: JSON.stringify({
      commentContents: newComment,
      post_id: postID,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace(`/post/${postID}`);
  } else {
    alert(response.statusText);
  }
}

const createCommentFormHandler = async (event) => {
  event.preventDefault();

  const commentText = document.querySelector("comment-content").value;
  const postID = window.location.pathname.split("/")[2];
  setTimeout(() => {
    addComment(commentText, postID);
  }, 750);
};

addCommentForm.addEventListener("submit", createCommentFormHandler);
