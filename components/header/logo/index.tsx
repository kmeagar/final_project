import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

const Logo = (): JSX.Element => {
    return (
        <Link href="/" passHref className={styles.root}>
            <Image
                src="/assets/logo.svg" // ✅ Use public path directly
                alt="Logo: Food Finder"
                width={100} // You can adjust these values
                height={100}
                priority
            />
        </Link>
    );
};

export default Logo;
