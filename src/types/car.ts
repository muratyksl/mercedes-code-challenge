export interface ICar {
  id: number;
  carId: string;
  inStock: boolean;
  price: number;
  horsePower: number;
  color: IColor;
}

type tempCar = Omit<ICar, "color">;

export interface ICarForm extends tempCar {
  color: string;
}

export interface IColor {
  hexCode: string;
  name: string;
}
