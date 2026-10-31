import { response, Router } from "express";
import { SpecificationsRepository } from "../modules/cars/model/repositories/inplementations/SpecificationsRepository";

import { CreateSpecificationService } from "../modules/cars/model/repositories/services/useCases/createSpecification/CreateSpecificationUseCase";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository,
  );

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRoutes };
