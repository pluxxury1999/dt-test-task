export interface IVehicleMake {
    MakeId: number;
    MakeName: string;
}

export interface IFormFieldsProps {
    makes: IVehicleMake[];
    years: number[];
}

export interface IButtonProps {
    makeId: number;
    makeYear: number;
}

interface IOption {
    value: number | string;
    label: string;
}

export interface ISelectProps {
    value: number | string | undefined;
    onChange: (newValue: number | string) => void;
    options: IOption[];
    placeholder?: string;
}

// export interface IModelYearPageProps {
//     params: Promise<{ makeId: string; year: string }>;
// }

export type Params = Promise<{ makeId: string; year: string }>;

export interface IVehicleModels {
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
}
