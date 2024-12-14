import Link from "next/link";
import styles from "./Button.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";

interface IButtonProps {
    makeId: number;
    makeYear: number;
}

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