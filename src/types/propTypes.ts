export interface IVehicleMake {
    MakeId: number;
    MakeName: string;
}

export interface IFormFieldsProps {
    makes: IVehicleMake[];
    years: number[];
}
