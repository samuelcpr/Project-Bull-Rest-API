import { NextFunction, Request, response, Response, Router } from "express";

const usersRoute = Router();

// get/users
// get /users/:uuid
// post /users
// put /users/:uuid
// delete /users/:uuid

usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
	const users = [{ userName: "Samuel" }];
	res.status(200).send(users);
});

usersRoute.get(
	"/users/:uuid",
	(req: Request, res: Response, next: NextFunction) => {
		res.sendStatus(200);
	}
);

export default usersRoute;
