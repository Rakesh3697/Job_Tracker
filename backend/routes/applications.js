const express = require('express');
const router = express.Router();
const {
  getAllApplications,
  createApplication,
  updateApplication,
  deleteApplication
} = require('../controllers/applications');

// GET all applications
router.get('/', getAllApplications);

// POST new application
router.post('/', createApplication);

// PUT update application
router.put('/:id', updateApplication);

// DELETE application
router.delete('/:id', deleteApplication);

module.exports = router;