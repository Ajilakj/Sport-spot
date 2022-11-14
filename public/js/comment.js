const commentContent = document.getElementById("comment-content");
const commentButton = document.getElementById("add-comment-btn");

const commentFormHandler = async (event) => {
    event.preventDefault();
}

const response = await fetch(`/api/post/:id`, {
    method: 'POST',
    body: JSON.stringify({ 
        content
    }),
    headers: { 
        'Content-Type': 'application/json'
    },
});
    document.location.replace(`/api/post/:id}`);


btn.addEventListener('click', commentFormHandler);
