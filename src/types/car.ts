export interface ICar {
  id: number;
  carId: string;
  inStock: boolean;
  price: number;
  horsePower: number;
  color: IColor;
}

export interface IColor {
  hexCode: string;
  name: string;
}
