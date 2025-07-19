import styles from './page.module.css';
import Hero from './homepage/Hero';
import Categories from './homepage/Categories';
import Products from './homepage/Products';
export default function Home() {
  return (
    <div className='Homepage'>
        <Hero />
        <Categories />
        <Products />

    </div>
  );
}
