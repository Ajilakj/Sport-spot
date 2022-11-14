

const createBlogPostFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#post-title').value
    const content = document.querySelector('#post-content').value
    const t = document.querySelector('#post-content').value
    console.log(title)
    if (title) {
      const response = await fetch('/api/blogs/create', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
      const result = await response.json()
      console.log(result)
      if (response.ok){
        location.reload()  
      } else {
        alert('error has occured in generating post')
      }
    }
  };
  
  const createblogpost = async (event) => {
    event.preventDefault();}
  
  document
    .querySelector('.post-form')
    .addEventListener('submit', createBlogPostFormHandler);
