from flask_paginate import Pagination, get_page_parameter
from flask import Flask, request, jsonify, render_template
from recommender import ProductRecommender
from database import get_all_products

app = Flask(__name__)
recommender = ProductRecommender()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/products')
def list_products():
    all_products = get_all_products()
    page = request.args.get(get_page_parameter(), type=int, default=1)
    per_page = 8
    offset = (page - 1) * per_page
    paginated_products = all_products[offset: offset + per_page]

    pagination = Pagination(page=page, total=len(all_products), per_page=per_page, css_framework='bootstrap4')
    return render_template("products.html", products=paginated_products, pagination=pagination)


@app.route('/product/<int:product_id>')
def product_detail(product_id):
    all_products = get_all_products()
    if product_id >= len(all_products):
        return "Product not found", 404

    product = all_products[product_id]
    recs = recommender.recommend(product["titles"])
    return render_template("product_detail.html", product=product, recommendations=recs)
