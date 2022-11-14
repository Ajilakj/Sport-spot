

const createBlogPostFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#post-title').value
    // add in 3 rows of checkboxes for 3 boolean values
    //const t = document.querySelector('#post-content').value
    const content = document.querySelector('#post-content').value
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
        alert('An error has occured in generating your post')
      }
    }
  };
  
  const createblogpost = async (event) => {
    event.preventDefault();}
  
  document
    .querySelector('.post-form')
    .addEventListener('submit', createBlogPostFormHandler);
