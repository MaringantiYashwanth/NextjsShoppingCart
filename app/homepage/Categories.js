import styles from './categories.module.css';
export default async function Categories() {
    const data = await fetch('https://dummyjson.com/products/categories')
    // fetch('https://dummyjson.com/products/categories')
    // .then(res => res.json())
    // .then(console.log);
    const categories = await data.json();
    console.log(categories);
    
    return (
        <div className={styles.categories}>
                <h2>Our Categories</h2>
                <ul className={`${styles.wrapper} container`}>
                    {
                        categories.map(category => (
                            <li key={category.slug} className={styles.category}>{category.name}</li>
                        ))
                    }
                </ul>
        </div>
    )
}