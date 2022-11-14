//POST for blog post to create a new post
router.post('/post/create', async (req, res) => {
    try {
      const postData = await Post.create({
        ...req.body, 
        //making code less verbose, grabbing everything in body
        // title: req.body.title,
        // content: req.body.content,
        // looking_for_players: req.body.looking_for_players,
        // looking_for_coach: req.body.looking_for_coach,
        // looking_for_students: req.body.looking_for_students,
        date_posted: Date.toLocalDateString(),
    });
    //not really needed here since should be logged in, need nothing here as global variable
      // req.session.save(() => {
      //   req.session.loggedIn = true;
        res.status(200).json(postData);
      // });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  //PUT route for user to edit their own blog posts
  router.put('/post/:id', (req, res) => {
    Post.update(
      {
        ...req.body, 
        //example username:req.body.user, user is what the frontend called it and username is what it is called in model
        // listed fields are fields that can be edited
        // letting them edit all fields so if for example looking for 5 players then get a few and now only need 2 that they can update the post to reflect what they currently need
        //making code less verbose
        // title: req.body.title,
        // content: req.body.content,
        // looking_for_players: req.body.looking_for_players,
        // looking_for_coach: req.body.looking_for_coach,
        // looking_for_students: req.body.looking_for_students,
        //updated posts populate near top so new information isn't buried, in future any abuse of this system of dates could be punished on the site
        date_posted: Date.toLocalDateString(),
      },
      {
        // Gets the blog post based on id
        where: {
          id: req.params.id,
        },
      }
    )
      .then((updated) => {
        // Sends the updated post as json
        res.json(updatedPost);
      })
      .catch((err) => res.json(err));
  });
  