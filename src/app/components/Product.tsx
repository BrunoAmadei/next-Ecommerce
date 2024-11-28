import { ProductType } from "@/types/ProductType"
import ProductImage from "./ProductImage"

type ProductsProps = {
    product: ProductType
}

export default function Product({ product }: ProductsProps) {
    return (
        <div className="flex flex-col shadow-lg h-96 bg-slate-800 p-5 text-gray-300">
            <div className="relative max-h-72 flex-1">
                <ProductImage product={product} fill />
            </div>
            <div className="flex justify-between font-bold my-3">
                <p className="w-40 truncate">
                    {product.title}
                </p>
                <p className="text-md text-teal-300">
                    {product.price}
                </p>
            </div>
            <button className="rounded-md bg-teal-600 text-white px-3.5 py-.5 text-sm text-center">Adicionar ao carrinho</button>
        </div>
    )
}