import * as InternModel from '../models/internModel.js';

export const addIntern = async (internData) => {
  // Your business logic/validation can be added here
  return await InternModel.addIntern(internData);
};

export const getInterns = async () => {
  return await InternModel.getInterns();
};

export const updateIntern = async (id, internData) => {
  // Your business logic/validation can be added here
  return await InternModel.updateIntern(id, internData);
};

export const deleteIntern = async (id) => {
  return await InternModel.deleteIntern(id);
};