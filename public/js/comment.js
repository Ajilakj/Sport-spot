const commentContent = document.getElementById("comment-content");
const commentButton = document.getElementById("add-comment-btn");

const commentFormHandler = async (event) => {
    event.preventDefault();
}

const response = await fetch(`/post/:id`, {
    method: 'POST',
    body: JSON.stringify({ 
        content
    }),
    headers: { 
        'Content-Type': 'application/json'
    },
});
    document.location.replace(`/post/:id}`);


btn.addEventListener('click', commentFormHandler);
