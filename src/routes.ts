import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
	CreateCourseService.execute({
		name: "Nodejs",
		educator: "Samuel",
		duration: 20,
	});
	return response.send();
}
