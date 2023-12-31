const jwt = require("jsonwebtoken");

const readFile = require("fs");

const secret = readFile.readFileSync("../backend/jwt.evaluation.key", {
  encoding: "utf-8",
});

const getToken = (payload) =>
  jwt.sign({ payload }, secret);

const verifyToken = (authorization) => {
  try {
    const payload = jwt.verify(authorization, secret);
    return payload;
  } catch (error) {
    throw new Error("ERROR");
  }
};
module.exports = { getToken, verifyToken };
