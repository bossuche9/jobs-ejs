const Exercise = require("../models/Exercises");

const getAllExercises = async (req, res) => {
  res.send("display All exercises");
};

const createExercise = async (req, res) => {
  res.send("add new exercise");
};

const PutnewExercise = async (req, res) => {
  res.send("put new exercise");
};

const editExercise = async (req, res) => {
  res.send("edit an exercise");
};

const updateExercise = async (req, res) => {
  res.send("update an exercise");
};

const deleteExercise = async (req, res) => {
  res.send("delete an exercise");
};

module.exports = {
  getAllExercises,
  createExercise,
  PutnewExercise,
  editExercise,
  updateExercise,
  deleteExercise,
};
