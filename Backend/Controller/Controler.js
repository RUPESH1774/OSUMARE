let tasks = [];
let currentId = 1;

// Validation helper
const validateTask = (data) => {
  const { title, description } = data;
  if (!title || !description) {
    return "Title and description are required.";
  }
  return null;
};

// GET /tasks
exports.getAllTasks = (req, res) => {
  let result = [...tasks];

  // Filtering
  if (req.query.title) {
    result = result.filter(task =>
      task.title.toLowerCase().includes(req.query.title.toLowerCase())
    );
  }

  // Sorting
  if (req.query.sortBy) {
    const sortBy = req.query.sortBy;
    const order = req.query.order === "desc" ? -1 : 1;
    result.sort((a, b) => (a[sortBy] > b[sortBy] ? order : -order));
  }

  // Pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || result.length;
//   const start = (page - 1) * limit;
//   const paginated = result.slice(start, start + limit);

  res.status(200).json({
    total: result.length,
    page,
    limit,
    // tasks: paginated,
  });
};

// GET /tasks/:id
exports.getTaskById = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found." });
  }

  res.status(200).json(task);
};

// POST /tasks
exports.createTask = (req, res) => {
  const error = validateTask(req.body);
  if (error) {
    return res.status(400).json({ error });
  }

  const { title, description } = req.body;
  const newTask = { id: currentId++, title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

// PUT /tasks/:id
exports.updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found." });
  }

  const error = validateTask(req.body);
  if (error) {
    return res.status(400).json({ error });
  }

  task.title = req.body.title;
  task.description = req.body.description;
  res.status(200).json(task);
};

// DELETE /tasks/:id
exports.deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Task not found." });
  }

  tasks.splice(index, 1);
  res.status(200).json({ message: "Task deleted successfully." });
};
