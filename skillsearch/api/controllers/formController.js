const { company, skill, area } = require("../models");

const formController = {};

formController.newForm = (req, res, next) => {
  area
    .find({ areaName: req.body.area })
    .then((searchArea) => {
      if (!searchArea.length) {
        return area.create({ areaName: req.body.area });
      }
      return searchArea;
    })
    .then((area) => {
      area = Array.isArray(area) ? area[0] : area;
      const newSkills = req.body.skills.map((skill) => {
        return {
          skillName: skill,
          area: area._id,
        };
      });
      skill.create(newSkills).then((skills) => {
        company
          .create({
            companyName: req.body.company,
            contact: req.body.contact,
            skills: skills,
            area: area,
          })
          .then((formComplete) => {
            res.status(201).send(formComplete);
          });
      });
    });
};

module.exports = formController;
