import Education from '../models/educationModel.js';

// Create a new education entry
export const createEducation = async (req, res) => {
  const {
    institution,
    degree,
    field_of_study,
    start_year,
    end_year,
    cgpa,
    percentage,
    location,
  } = req.body;
  
  const student = req.user._id;  // Assuming you have user authentication middleware that sets req.user

  try {
    const newEducation = new Education({
      student,
      institution,
      degree,
      field_of_study,
      start_year,
      end_year,
      cgpa,
      percentage,
      location,
    });

    await newEducation.save();
    res.status(201).json(newEducation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all education entries
export const getEducations = async (req, res) => {
  try {
    const educations = await Education.find().populate('student');
    res.status(200).json(educations);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get education entries by student ID
export const getEducationByStudent = async (req, res) => {
  const studentId = req.user._id;  // Assuming you have user authentication middleware that sets req.user

  try {
    const educations = await Education.find({ student: studentId }).populate('student');
    res.status(200).json(educations);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an education entry
export const updateEducation = async (req, res) => {
  const { id } = req.params;
  const {
    institution,
    degree,
    field_of_study,
    start_year,
    end_year,
    cgpa,
    percentage,
    location,
  } = req.body;

  try {
    const updatedEducation = await Education.findByIdAndUpdate(
      id,
      {
        institution,
        degree,
        field_of_study,
        start_year,
        end_year,
        cgpa,
        percentage,
        location,
      },
      { new: true }
    );

    if (!updatedEducation) {
      return res.status(404).json({ message: 'Education entry not found' });
    }

    res.status(200).json(updatedEducation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an education entry
export const deleteEducation = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedEducation = await Education.findByIdAndDelete(id);

    if (!deletedEducation) {
      return res.status(404).json({ message: 'Education entry not found' });
    }

    res.status(200).json({ message: 'Education entry deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
