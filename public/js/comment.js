
// const commentButton = document.getElementById("add-comment-btn");

// const commentFormHandler = async (event) => {
//   event.preventDefault();
//   const commentContent = document.getElementById("comment-content");
//   console.log(commentContent);

//   const response = await fetch("/comment/create", {
//     method: "POST",
//     body: JSON.stringify({
//       content
//     }),
//     headers: {
//       "Content-Type": "application/json"
//     },
//   });
//   const result = await response.json();
//   console.log(result);
//   if (response.ok) {
//     location.href=`/post/${post_id}`;
//   } else {
//     alert("An error has occured in generating your comment");
//   }
// };

// const createComment = async (event) => {
//   event.preventDefault();
// };

// commentButton.addEventListener("click", commentFormHandler);
