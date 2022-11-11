// const posttUser = document.getElementById("post-user");
// const postDate = document.getElementById("post-date");
// const postContent = document.getElementById("post-content");
// const postButton = document.getElementById("add-post-btn");

// matching this to the comment.js????


const createBlogPostFormHandler = async (event) => {
    event.preventDefault();
  
    const blogpost = document.querySelector('#blogpost-create')
  
    if (blogpost) {
      const response = await fetch('/api/home-routes/', {
        method: 'POST',
        body: JSON.stringify({ blogpost }),
        headers: { 'Content-Type': 'application/json' },
      });
    }
  };
  
  const createblogpost = async (event) => {
    event.preventDefault();}
  
  document
    .querySelector('.createblogpost-form')
    .addEventListener('submit', createBlogPostFormHandler);
