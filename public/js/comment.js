const commentUser = document.getElementById("comment-user");
const commentTime = document.getElementById("comment-time");
const commentFormContent = document.getElementById("comment-from-content");
const commentContent = document.getElementById("comment-content");
const commentButton = document.getElementById("add-comment-btn");


commentButton.addEventListener("click", async()=> {
    if (commentFormContent) {
        const response = await fetch('/api/sport/post', {
            method: 'POST',
            body: JSON.stringify({ user_id, date_created, content }),
            headers: { 'Content-Type': 'application/json' },
          });
        
        commentUser.innerText = user_id;
        commentTime.innerText = date_created;
        commentContent.innerText = content;
    }
}) 
