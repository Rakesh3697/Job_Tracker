const Application = require('../models/Application');

// Get all applications
exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new application
exports.createApplication = async (req, res) => {
  try {
    const application = new Application(req.body);
    await application.save();
    res.status(201).json(application);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update application
exports.updateApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await Application.findByIdAndUpdate(id, req.body, { 
      new: true,
      runValidators: true
    });
    
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    
    res.json(application);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete application
exports.deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await Application.findByIdAndDelete(id);
    
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }
    
    res.json({ message: 'Application deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};