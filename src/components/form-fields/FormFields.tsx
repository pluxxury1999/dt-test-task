"use client";

import { useState } from "react";
import Button from "@/components/button/Button";
import Select from "@/components/select/Select"; // шлях скоригуйте під ваш проект
import styles from "./FormFields.module.css";
import { IFormFieldsProps } from "@/types/propTypes";

export default function FormFields({ makes, years }: IFormFieldsProps) {
    const [selectedMakeId, setSelectedMakeId] = useState<number | undefined>(
        undefined
    );
    const [selectedYear, setSelectedYear] = useState<number | undefined>(
        undefined
    );

    if (!makes || makes.length === 0) {
        return <div>No data to render</div>;
    }

    const makeOptions = makes.map((make) => ({
        value: make.MakeId,
        label: make.MakeName,
    }));

    const yearOptions = years.map((year) => ({
        value: year,
        label: year.toString(),
    }));

    return (
        <div className={styles.wrapper}>
            <Select
                value={selectedMakeId}
                onChange={(val) => setSelectedMakeId(val as number)}
                options={makeOptions}
                placeholder="Select Mark"
            />

            <Select
                value={selectedYear}
                onChange={(val) => setSelectedYear(val as number)}
                options={yearOptions}
                placeholder="Select Year"
            />

            <Button makeId={selectedMakeId || 0} makeYear={selectedYear || 0} />
        </div>
    );
}
