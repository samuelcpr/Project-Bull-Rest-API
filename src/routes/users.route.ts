import { NextFunction, Request, response, Response, Router } from "express";
import statusCode from "http-status-codes";

const usersRoute = Router();

// get/users
// get /users/:uuid
// post /users
// put /users/:uuid
// delete /users/:uuid

usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
	const users = [{ userName: "Samuel" }];
	res.status(statusCode.OK).send(users);
});

usersRoute.get(
	"/users/:uuid",
	(req: Request, res: Response, next: NextFunction) => {
		const uuid = req.params.uuid;
		res.status(200).send({ uuid });
	}
);
usersRoute.post("/users", (req: Request, res: Response, next: NextFunction) => {
	const newUser = req.body;

	console.log(req.body);
	res.status(statusCode.CREATED).send(newUser);
});

usersRoute.put(
	"/users/:uuid",
	(req: Request, res: Response, next: NextFunction) => {
		const uuid = req.params.uuid;
		const modifiedUser = req.body;

		modifiedUser.uuid = uuid;
		console.log(modifiedUser);
		res.status(statusCode.OK).send({ modifiedUser });
	}
);

usersRoute.delete(
	"/users/:uuid",
	(req: Request, res: Response, next: NextFunction) => {}
);

export default usersRoute;
