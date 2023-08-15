import { Express } from "express";
import { getFeedPost, getUserPost, likePost} from "../controllers/todos"

const router = express.Router();

router.get("/", verifyToken, getUserPost);
router.get("/:userId/potss", verifyToken, getUserPost);

/*update*/
router.patch("/:id/like", verifyToken, likePost);

export default router;