import * as express from "express";
import { getCodes } from "../services/codesService";
const router = express.Router();

router.get("/", (req, res) => {
    res.json(getCodes());
});

export default router;