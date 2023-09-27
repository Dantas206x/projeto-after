import { useGetAllProductsQuery } from "../features/productsApi";

const Shop = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();
    console.log("Api", isLoading);
    return (
        <h2>
            shop
        </h2>
    );
}

export default Shop;