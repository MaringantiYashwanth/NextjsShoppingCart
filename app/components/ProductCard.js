import styles from './productCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
export default async function ProductCard({product}) {
    return (
        <Link href={`/product/${product.id}`}>
        <li className={styles['product-card']}>
                <img src={product.thumbnail} width={256} height={256} alt={`Image of ${product.title}`}/>
                <div className={styles.info}>
                    <h3>{product.title}</h3>
                    <h3>{product.price}</h3>
                </div>
            </li>
        </Link>
            
    )
}