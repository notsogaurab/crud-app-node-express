import * as InternService from '../services/internService.js';

export const addIntern = async (req, res) => {
  try {
    const internData = req.body;
    await InternService.addIntern(internData);
    res.status(201).json({ message: 'Intern added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getInterns = async (req, res) => {
  try {
    const interns = await InternService.getInterns();
    res.json(interns);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateIntern = async (req, res) => {
  try {
    const id = req.params.id;
    const internData = req.body;
    await InternService.updateIntern(id, internData);
    res.json({ message: 'Intern updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteIntern = async (req, res) => {
  try {
    const id = req.params.id;
    await InternService.deleteIntern(id);
    res.json({ message: 'Intern deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
