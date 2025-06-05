const express = require("express");
const taskRoutes = require("./Routes/Route");

const app = express();
const port = 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('The backend Are Runing ✅')
})
// Use Routes
app.use("/tasks", taskRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Unexpected Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
