const Product = require('../models/Product')


exports. GetAllProduct = async (req,res) => {

    const { category=false , price=100 ,search=false, } = req.query

    try {
        // Build dynamic filter object
        let filter = {};

        if (category && category !== "false") {
            filter.category = { $regex: category, $options: "i" };
        }
        if (price) {
            // Example: price=100 or price=100-200
            if (price.includes("-")) {
                const [min, max] = price.split("-").map(Number);
                filter.price = { $gte: min, $lte: max };
            } else {
                filter.price = { $gte: Number(price)}
            }
        }
        if (search && search !== "false") {
            filter ={ title: { $regex: search, $options: "i" } } 
        }

        let products;
        if (req.query.orderBy && req.query.order) {
            const sort = {};
            sort[req.query.orderBy] = req.query.order === "desc" ? -1 : 1;
            products = await Product.find(filter).sort(sort);
        } else {
            products = await Product.find(filter);
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

