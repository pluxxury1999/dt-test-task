import styles from "./Form.module.css";
import Button from "@/components/button/Button";
import { Suspense } from "react";
import Loader from "@/components/loader/Loader";

export default function Form() {
    return (
        <Suspense fallback={<Loader />}>
            <div className={styles.wrapper}>
                <Button makeId={123} makeYear={123} />
            </div>
        </Suspense>
    );
}
