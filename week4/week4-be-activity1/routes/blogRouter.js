const express = require("express");
const router = express.Router();
const {
    getAllBlogs,
    createBlog,
    getBlogById,
    updateBlog,
    deleteBlog,
    // patchBlog

} = require("../controllers/blogController");

// Get /blogs
router.get("/", getAllBlogs);

// POST /blogs
router.post("/", createBlog);

// GET /blogs/:blogId
router.get("/:blogId", getBlogById);

// PUT /blogs/:blogId
router.put("/:blogId", updateBlog);

// DELETE /blogs/:blogId
router.delete("/:blogId", deleteBlog);

// update blog using PATCH
// router.patch("/:blogId", patchBlog)

module.exports = router;



