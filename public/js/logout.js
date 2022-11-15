const logout = async () => {
  if (req.session){
    req.session.destroy(err => {
      if (err) {
        res.status(400).send('Unable to log out')
      } else {
        res.redirect('/')
      }
    });
  } else {
    res.end()
  }
}

  
  
  
  
//   const response = await fetch("/api/users/logout", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//   });

//   if (response.ok) {
//     document.location.replace("/");
//   } else {
//     alert("Failed to log out.");
//   }
// };

document
  .getElementById("logout-btn")
  .addEventListener("click", logout);