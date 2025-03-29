import db from "./db";

export default function handler(req, res) {
    res.status(200).json(db.eventos);
}