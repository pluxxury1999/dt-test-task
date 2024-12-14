import Link from "next/link";
import styles from "./Button.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";

import { IButtonProps } from "@/types/propTypes";

export default function Button({ makeId, makeYear }: IButtonProps) {
    const isDisabled = !makeId && !makeYear;
    return (
        <Link
            href={
                isDisabled
                    ? "#"
                    : `http://localhost:3000/result/${makeId}/${makeYear}`
            }
            className={`${styles.button} ${isDisabled ? styles.buttonDisabled : styles.buttonEnabled}`}
        >
            Next <IoIosArrowRoundForward />
        </Link>
    );
}
