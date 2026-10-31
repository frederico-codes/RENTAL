import { Router } from "express";
import multer from "multer";
import { createCategoryController } from "../modules/cars/model/repositories/services/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/model/repositories/services/useCases/listCategories";

import { importCategoryController } from "../modules/cars/model/repositories/services/useCases/importCategory";

const categoriesRouter = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRouter.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRouter.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRouter.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRouter };
