import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';
export default function Header(params) {
    return (
        <header className={styles['app-header']}>
            
            <div className={`${styles.wrapper} container`}>
                <aside>
                    <Link href="/">
                        <Image src="/logo.png" alt="Website Logo"
                        width={108} height={22} />
                    </Link>
                    
                Logo
            </aside>
            <aside>
                <nav>
                    <ul>
                        <Link href="/"><li>Home</li></Link>
                        <Link href="/products"><li>Products</li></Link>
                        <Link href="/basket"><li>Shopping Bag</li></Link>      
                    </ul>
                </nav>
            </aside>
            </div>
        </header>
    )
}