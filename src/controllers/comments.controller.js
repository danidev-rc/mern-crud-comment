import Comment from '../models/coment.model.js'

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({
      user: req.user.id
    }).populate('user')
    res.json(comments)
  } catch (error) {
    return res.status(500).json({message: 'Something went wrong'})
  }
}

export const createComment = async (req, res) => {
  try {
    const { content, date } = req.body

    const newComment = new Comment({
      content,
      date,
      user: req.user.id
    })
    const savedComment = await newComment.save()
    res.json(savedComment)
  } catch (error) {
    return res.status(500).json({message: 'Something went wrong'})
  }
}

export const getComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id).populate('user')
    if (!comment) return res.status(404).json({ message: 'Comment not found' })
    res.json(comment)
  } catch (error) {
    return res.status(404).json({ message: 'Comment not found' })
  }
}

export const deleteComment = async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id)
    if (!deletedComment) {
      return res.status(404).json({ message: 'Comment not found' })
    }
    return res.sendStatus(204)
  } catch (error) {
    return res.status(404).json({ message: 'Comment not found' })
  }
}

export const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!comment) return res.status(404).json({ message: 'Comment not found' })
    res.json(comment)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
