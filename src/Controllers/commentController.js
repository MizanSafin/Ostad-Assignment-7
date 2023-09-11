exports.create = async (req, res) => {
  res.status(200).json({ status: "success", data: "Created a comment" });
};

exports.read = async (req, res) => {
  res.status(200).json({ status: "success", data: "Read a comment" });
};

exports.delete = async (req, res) => {
  res.status(200).json({ status: "success", data: null });
};

exports.update = async (req, res) => {
  res.status(200).json({ status: "success", data: "Updated a comment" });
};
