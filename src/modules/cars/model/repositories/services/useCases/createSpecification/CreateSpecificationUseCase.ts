import { ISpecificationsRepository } from "../../../ISpecificationsRepository";

interface IRequest {
  name: string
  description: string
}

class CreateSpecificationUseCase{
  constructor(private specificationssRepository: ISpecificationsRepository){}

  execute({name, description}: IRequest): void{
    const specificationAlreadyExists = this.specificationssRepository.findByName(name)
    
    if(specificationAlreadyExists){
      throw new Error("Specification already exists!")
    }
    
    this.specificationssRepository.create({
      name,
      description,
      
    })
  }
}

export { CreateSpecificationUseCase }