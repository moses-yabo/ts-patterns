import { Router } from "express";
import { createAtodo , getTodos,updateTodo,deleteAtodo} from "../controllers/todos";
 const router = Router();
router.post('/',createAtodo);
router.get('/',getTodos);
router.patch('/:id',updateTodo);
router.delete('/:id',deleteAtodo);


export default router;