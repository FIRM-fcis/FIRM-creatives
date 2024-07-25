const handleAPINotFound = (req, res) => {
  res.status(404).send({ body: null, message: "API Not found", status: 404 });
};

export default handleAPINotFound;
