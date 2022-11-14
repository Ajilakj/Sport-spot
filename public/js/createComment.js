
const commentButton = document.getElementById("add-comment-btn");

const createCommentFormHandler = async (event) => {
    event.preventDefault();
    const commentContent = document.querySelector("#comment-content").value;
    if (commentContent) {
        const response = await fetch ('/api/comment/create', {
            method: 'POST',
            body: JSON.stringify({content}),
            headers: {'Content-Type': 'application/json'},
        });
        const result = await response.json()
        console.log(result)
        if (response.ok) {
            location.reload()
        } else {
            alert('An error has occured in generating your comment')
        }
    }
};

const createComment = async (event) => {
    event.preventDefault();
}

document.querySelector('#commentButton').addEventListener('submit', createCommentFormHandler);
