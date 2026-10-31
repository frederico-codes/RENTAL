import { Category } from "../../../../Category";
import { ICategoriesRepository } from "../../../ICategoriesRepository";

class ListCategoriesUseCase{
  constructor(private categoriesRepostoriy: ICategoriesRepository){}

  execute(): Category[]{
    const categories = this.categoriesRepostoriy.list()

    return categories
  }
}

export { ListCategoriesUseCase }