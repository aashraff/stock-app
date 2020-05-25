import * as express from "express";
import { getSeriesData } from "../services/seriesService";
const router = express.Router();

router.get("/:code", (req, res) => {
    const code = req.params.code;
    let codesData;
    try {
        codesData = getSeriesData(code);
        if (codesData) {
            res.json(codesData);
        }
    } catch (e) {
        res.json({}).status(500).send(e.message);
    }
});

export default router;