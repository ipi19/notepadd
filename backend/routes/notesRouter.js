import express from "express";

const router = express.Router();

router.get("/notes", async (req, res) => {
  try {
    const notess = await Note.find();
    res.json(notess);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/notes/:id", async (req, res) => {
  const { title, content } = req.body;
  const noteId = req.params.id;

  try {
    const updateNote = await Note.findByIdAndUpdate(
      noteId,
      { title, content },
      { new: true }
    );
  } catch (error) {
    res.status(404).json({ message: "Note not found" });
  }
});

router.post("/api/notes", async (req, res) => {
  const { title, content } = req.body;

  const note = new Note({ title, content });

  try {
    const newNote = await note.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
