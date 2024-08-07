import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import {
  getComments,
  getComment,
  createComment,
  deleteComment,
  updateComment
} from '../controllers/comments.controller.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createCommentSchema } from '../schemas/comment.schema.js'

const router = Router()

router.get('/comments', authRequired, getComments)

router.post('/comments/:id', authRequired, getComment)

router.post(
  '/comments',
  authRequired,
  validateSchema(createCommentSchema),
  createComment
)

router.put('/comments/:id', authRequired, updateComment)

router.delete('/comments/:id', authRequired, deleteComment)

export default router
