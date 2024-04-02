import {AssetsCategory} from "./enums";

export interface AssetsDto {
    amount: number;
    incomeDate: Date;
    category: AssetsCategory;
}