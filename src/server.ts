import express, { NextFunction, Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res.status(200).json({ foo: "sucesso total!" });
});

app.listen(3333, () => {
	console.log("Aplicação executando na porta 3333!");
});
