import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "../../button";
import styles from "./index.module.css";

const AuthElement = (): JSX.Element => {
    const { data: session, status } = useSession();

    // Type cast to access custom property safely
    const userId = (session?.user as { fdlst_private_userId?: string })?.fdlst_private_userId;

    return (
        <>
            {status === "authenticated" && (
                <span className={styles.name}>
                    Hi <b>{session?.user?.name}</b>
                </span>
            )}
            <nav className={styles.root}>
                {status === "authenticated" && (
                    <>
                        <Button variant="outline">
                            <Link href={`/list/${userId}`}>
                                Your wish list
                            </Link>
                        </Button>

                        <Button variant="blue" clickHandler={() => signOut()}>
                            Sign out
                        </Button>
                    </>
                )}

                {status === "unauthenticated" && (
                    <>
                        <Button variant="blue" clickHandler={() => signIn()}>
                            Sign in
                        </Button>
                    </>
                )}
            </nav>
        </>
    );
};

export default AuthElement;

