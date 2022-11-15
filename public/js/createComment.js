

async function addComment(newComment, postID) {
  console.log(newComment);
  console.log(postID);
  const response = await fetch ("api/comment", {
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
  console.log(commentText);
  const postID = window.location.pathname.split("/")[2];
  console.log(postID);
  setTimeout(() => {
    addComment(commentText, postID);
  }, 750);
};

const addCommentBtn = document.getElementById("submit-comment");
if(addCommentBtn) {
  addCommentBtn.addEventListener("submit", createCommentFormHandler);
}