import FormFields from "@/components/form-fields/FormFields";
import styles from "./Form.module.css";

export default async function Form() {
    const res = await fetch("http://localhost:3000/api/vehicleMakesId", {
        cache: "no-cache",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch makes");
    }

    const data = await res.json();

    const years = Array.from({ length: 2024 - 2015 + 1 }, (_, i) => 2015 + i);

    return (
        <div className={styles.wrapper}>
            <FormFields makes={data} years={years} />
        </div>
    );
}
