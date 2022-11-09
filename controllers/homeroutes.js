const router = require('express').Router();
const { Sport, Post } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbGalleryData = await Sport.findAll({
      include: [
        {
          model: Post,
          attributes: ['postname', 'description'],
        },
      ],
    });
    