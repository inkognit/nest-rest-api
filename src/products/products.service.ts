import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product, ProductDocument } from "./schemas/products.schemas";

@Injectable()
export class ProductsService {
    private products = []
    constructor(
        @InjectModel(Product.name)
        private ProductModel: Model<ProductDocument>) {

    }

    async getAll(): Promise<Product[]> {
        return this.ProductModel.find().exec()
    }

    async getById(id: string): Promise<Product> {
        return this.ProductModel.findById(id)
    }

    async create(productsDto: CreateProductDto) {
        const newProduct = new this.ProductModel(productsDto)
        return newProduct.save()
    }

    async remove(id: string): Promise<Product> {
        return this.ProductModel.findByIdAndRemove(id)
    }

    async update(id: string, productsDto: UpdateProductDto) {
        return this.ProductModel.findByIdAndUpdate(id, productsDto, { new: true })
    }
}