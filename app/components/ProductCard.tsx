import dynamic from 'next/dynamic';
import styles from './ProductCard.module.css'

const AddToCart = dynamic(() => import('./AddToCart'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});

const ProductCard = () => {
    return (
    <div className={styles.card}>
        <AddToCart/>
    </div>
    )
}

export default ProductCard
