

const createBlogPostFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#post-title').value
    const content = document.querySelector('#post-content').value
    // console.log(title)
    if (title) {
      const sports_id = document.getElementById('selectsport').value
      const looking_for_players = document.getElementById('playerscheckbox').checked
      const looking_for_coach = document.getElementById('coachcheckbox').checked
      const looking_for_students = document.getElementById('studentscheckbox').checked
      const response = await fetch('/api/blogs/create', {
        method: 'POST',
        body: JSON.stringify({ title, content, looking_for_players, looking_for_coach, looking_for_students, sports_id}),
        headers: { 'Content-Type': 'application/json' },
      });
      const result = await response.json()
      console.log(result)
      if (response.ok){
        location.reload()  
      } else {
        alert('An error has occurred in generating your post')
      }
    }
  };
  
  const createblogpost = async (event) => {
    event.preventDefault();}
  
  document
    .querySelector('#add-blog-post-btn')
    .addEventListener('submit', createBlogPostFormHandler);
