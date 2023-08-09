import express from "express";
import reservationData from "../models/reservationData.js";

const router = express.Router();

// Saving the post
router.post("/reservationData/save", async (req, res) => {
  try {
    const newPost = new reservationData(req.body);
    await newPost.save();
    res.status(200).json({ success: "Reservation saved successfully" });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Get all posts
router.get("/reservationData/", async (req, res) => {
  try {
    const posts = await reservationData.find({});
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Get a specific post
router.get("/reservationData/:id", async (req, res) => {
  try {
    const post = await reservationData.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Update a post
router.put("/reservationData/:id", async (req, res) => {
  try {
    await reservationData.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ success: "Reservation updated successfully" });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// Delete a post
router.delete("/reservationData/:id", async (req, res) => {
  try {
    const deletedPost = await reservationData.findByIdAndRemove(req.params.id);
    res.status(200).json({ success: "Reservation deleted successfully", deletedPost });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

export default router;
