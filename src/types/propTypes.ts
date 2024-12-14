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

export interface IModelYearPageProps {
    params: {
        makeId: string;
        year: string;
    };
}
