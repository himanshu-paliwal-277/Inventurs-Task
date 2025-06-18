const User = require("../models/User");

module.exports.getAllUsers = async (req, res) => {
  const search = req.query.search ? req.query.search.trim() : "";
  const sortOrder = req.query.sortOrder === "desc" ? -1 : 1;
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  console.log("Search value", search);
  console.log("sort order", sortOrder);

  try {
    const users = await User.find({
      name: { $regex: search, $options: "i" },
    })
      .sort({ name: sortOrder })
      .skip((page - 1) * limit)
      .limit(limit);
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Error fetching users" });
  }
};
