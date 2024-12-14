"use client";

import React from "react";
import styles from "./Select.module.css";

interface IOption {
    value: number | string;
    label: string;
}

interface ISelectProps {
    value: number | string | undefined;
    onChange: (newValue: number | string) => void;
    options: IOption[];
    placeholder?: string;
}

export default function Select({
    value,
    onChange,
    options,
    placeholder,
}: ISelectProps) {
    return (
        <div className={styles.selectWrapper}>
            <select
                className={styles.selectElement}
                value={value || ""}
                onChange={(e) =>
                    onChange(
                        isNaN(Number(e.target.value))
                            ? e.target.value
                            : Number(e.target.value)
                    )
                }
            >
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
