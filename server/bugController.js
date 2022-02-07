const fs = require("fs").promises;

exports.getBugs = async (_, res) => {
  try {
    const data = await fs.readFile(`${__dirname}/data/bugs.json`, "utf-8");
    const bugs = JSON.parse(data);
    res.status(200).json({
      status: "success",
      data: bugs,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: "Cannot read data for the request",
      error: err,
    });
  }
};

exports.createBug = async (req, res) => {
  const { description } = req.body;
  try {
    //Read Data
    const data = await fs.readFile(`${__dirname}/data/bugs.json`, "utf-8");
    const bugs = JSON.parse(data);

    //Create New Bug and Update Data
    const newBug = {
      id: Date.now(),
      description,
      resolved: false,
    };
    bugs.push(newBug);
    const newData = JSON.stringify(bugs);

    //Post New Data
    await fs.writeFile(`${__dirname}/data/bugs.json`, newData);

    res.status(201).json({
      status: "success",
      data: newBug,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Unable to create new bugs",
      error: err,
    });
  }
};

exports.updateBug = async (req, res) => {
  const { id } = req.params;
  try {
    //Read Data
    const data = await fs.readFile(`${__dirname}/data/bugs.json`, "utf-8");
    const bugs = JSON.parse(data);

    //Find Bug and Update Data
    let bugToUpdate = bugs.find((bug) => bug.id === parseInt(id));
    if (!bugToUpdate) throw new Error(`Cannot find Bug with id = ${id}`);

    if ("resolved" in req.body) bugToUpdate.resolved = req.body.resolved;
    else if ("memberId" in req.body) bugToUpdate.memberId = req.body.memberId;
    else
      throw new Error(
        "Cannot find 'resolved' or 'memberId' or 'projectId' properties in request."
      );

    const newData = JSON.stringify(bugs);

    //Post Updated Data
    await fs.writeFile(`${__dirname}/data/bugs.json`, newData);

    res.status(201).json({
      status: "success",
      data: bugToUpdate,
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
      error: err,
    });
  }
};

exports.deleteBug = async (req, res) => {
  const { id } = req.params;
  try {
    //Read Data
    const data = await fs.readFile(`${__dirname}/data/bugs.json`, "utf-8");
    const bugs = JSON.parse(data);

    //Delete Bug and Update Data
    const bugToDeleteIndex = bugs.findIndex((bug) => bug.id === parseInt(id));
    bugs.splice(bugToDeleteIndex, 1);

    const newData = JSON.stringify(bugs);

    //Post New Data
    await fs.writeFile(`${__dirname}/data/bugs.json`, newData);

    res.status(204).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: "Unable to delete the bug",
      error: err,
    });
  }
};
