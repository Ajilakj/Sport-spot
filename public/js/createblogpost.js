const createBlogPostFormHandler = async (event) => {
    event.preventDefault();
  
    const blogpost = document.querySelector('#blogpost-create').value.trim();
  
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
