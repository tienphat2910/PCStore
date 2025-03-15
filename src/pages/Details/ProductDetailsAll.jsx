import { useEffect, useState } from "react";
import ProductDetailsHead from "../../components/ProductDetails/ProductDetailsHead";
import OutplayCompetition from "../../components/ProductDetails/OutplayCompetition";
import ImageDisplay from "../../components/ProductDetails/ImageDisplay";
import Features from "../Home/Features";
import FeaturesDetails from "../../components/ProductDetails/FeaturesDetails";
import { useLocation } from "react-router-dom";
import FakeSpecs from "../../components/ProductDetails/FakeSpecs";

const mockProducts = [
    {
        id: "1",
        name: "MSI MPG Trident 3",
        description: "Powerful gaming desktop with RTX 3060, 16GB RAM, 1TB SSD.",
        price: "$1499",
        image: "https://via.placeholder.com/400",
        color: ["red", "blue", "black"],
        details: ["Intel i7-12700F", "NVIDIA RTX 3060", "16GB DDR4 RAM", "1TB SSD"]
    },
    {
        id: "2",
        name: "Asus ROG Strix G15",
        description: "High-performance gaming laptop with Ryzen 7, RTX 3070.",
        price: "$1799",
        image: "https://via.placeholder.com/400",
        color: ["gray", "white"],
        details: ["AMD Ryzen 7 5800H", "NVIDIA RTX 3070", "16GB DDR4 RAM", "512GB SSD"]
    }
];

const ProductDetailsAll = () => {
    const [activeTab, setActiveTab] = useState("about");
    const id = useLocation().pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [selectedColor, setSelectedColor] = useState("");

    useEffect(() => {
        const foundProduct = mockProducts.find((p) => p.id === id);
        if (foundProduct) {
            setProduct(foundProduct);
            setSelectedColor(foundProduct.color[0]);
        }
    }, [id]);

    return (
        <>
            <ProductDetailsHead activeTab={activeTab} setActiveTab={setActiveTab} price={product.price} />
            <div className="container my-4">
                <h1>{product?.name}</h1>
                <p>{product?.description}</p>
                <img src={product?.image} alt={product?.name} className="img-fluid mb-3" />
                <div>
                    {product?.color?.map((color, index) => (
                        <span
                            key={index}
                            style={{ backgroundColor: color, width: 20, height: 20, display: "inline-block", marginRight: 5, cursor: "pointer", borderRadius: "50%", border: color === selectedColor ? "2px solid black" : "1px solid gray" }}
                            onClick={() => setSelectedColor(color)}
                        />
                    ))}
                </div>
                <ul>
                    {product?.details?.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
            <FakeSpecs />
            <OutplayCompetition />
            <ImageDisplay />
            <FeaturesDetails />
            <Features />
        </>
    );
};

export default ProductDetailsAll;
