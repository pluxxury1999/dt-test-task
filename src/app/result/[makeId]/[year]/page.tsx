import { IModelYearPageProps } from "@/types/propTypes";
import { IVehicleModels } from "@/types/propTypes";
import { generateStaticParams } from "./generateStaticParams";
import styles from "./ModelYearPage.module.css";

export default async function ModelYearPage({ params }: IModelYearPageProps) {
    const { makeId, year } = params;

    const fetchUrl = generateStaticParams(makeId, year);

    const res = await fetch(fetchUrl);

    const data = await res.json();

    if (!res.ok) {
        throw new Error(`Failed to fetch data from ${fetchUrl}`);
    }

    if (data.Results.length === 0) {
        return (
            <div className={styles.wrapper}>
                <h3 className={styles.title}>Nothing Found</h3>
            </div>
        );
    }

    return (
        <section className={styles.wrapper}>
            <h3 className={styles.title}>Search Results</h3>
            <p className={styles.subTitle}>picked year: {year}</p>
            <ul className={styles.listWrapper}>
                {data.Results.map((item: IVehicleModels) => (
                    <li
                        key={item.Make_ID + item.Model_Name}
                        className={styles.listItem}
                    >
                        <p className={styles.mark}>{item.Make_Name}</p>
                        <p className={styles.model}>{item.Model_Name}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
