import express, { NextFunction, Request, Response } from "express";
import statusRoute from "routes/status.route";
import usersRoute from "./routes/users.route";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(usersRoute);
app.use(statusRoute);

app.get("/users", (req: Request, res: Response, next: NextFunction) => {
	res.status(200).send({ foo: "sucesso total!" });
});

app.listen(3333, () => {
	console.log("Aplicação executando na porta 3333!");
});
