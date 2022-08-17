const { Country, Activity } = require("../db");

const nameAsc = async () => {
  try {
    let az = await Country.findAll({
      order: [["name", "ASC"]],
      include: [Activity],
    });
    return az;
  } catch (error) {
    console.log("Error NameAsc function " + error);
  }
};

const nameDesc = async () => {
  try {
    let za = await Country.findAll({
      order: [["name", "DESC"]],
      include: [Activity],
    });
    return za;
  } catch (error) {
    console.log("Error NameDesc function " + error);
  }
};

const maxPopulation = async () => {
  try {
    let population = await Country.findAll({
      order: [["population", "DESC"]],
      include: [Activity],
    });
    return population;
  } catch (error) {
    console.log("Error MaxPopulation function " + error);
  }
};

const minPopulation = async () => {
  try {
    let population = await Country.findAll({
      order: [["population", "ASC"]],
      include: [Activity],
    });
    return population;
  } catch (error) {
    console.log("Error MinPopulation function " + error);
  }
};

const getContinent = async (cont) => {
  try {
    if (cont.includes(" ")) {
      var continent = cont
        .split(" ")
        .map((word) => {
          return (word = word.charAt(0).toUpperCase() + word.slice(1));
        })
        .join(" ");
    } else {
      continent = cont.charAt(0).toUpperCase() + cont.slice(1);
    }
    //let continent = cont.charAt(0).toUpperCase() + cont.slice(1);
    let byContinent = await Country.findAll({
      where: {
        continents: continent,
      },
      include: [Activity],
    });
    return byContinent;
  } catch (error) {
    console.log("Error getcontinent function " + error);
  }
};

module.exports = {
  nameAsc,
  nameDesc,
  maxPopulation,
  minPopulation,
  getContinent,
};
