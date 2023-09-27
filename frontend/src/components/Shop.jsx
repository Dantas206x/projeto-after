import { useGetAllProductsQuery } from "../features/productsApi";

const Shop = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();
    return ( 
        <h2>
            oi
        </h2>
     );
}
 
export default Shop;