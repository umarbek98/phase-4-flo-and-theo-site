from flask import Flask, jsonify, request, make_response
from flask_sqlalchemy import SQLAlchemy
import bcrypt
from model import db, Product, Customer, Order, OrderProduct
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

migrate = Migrate(app, db)

@app.route('/products')
def get_products():
    products = Product.query.all()
    return jsonify([product.to_dict() for product in products])

@app.route('/products/<int:product_id>')
def get_product(product_id):
    product = Product.query.get(product_id)
    if product:
        return jsonify(product.to_dict())
    else:
        return jsonify({'error': 'Product not found'}), 404

@app.route('/products', methods=['POST'])
def create_product():
    data = request.get_json()
    product = Product(
        product_name=data['product_name'],
        # brand=data['brand'],
        category=data['category'],
        price=data['price'],
        description=data['description'],
        directions=data["directions"],
        image_url=data['image_url']
    )
    db.session.add(product)
    db.session.commit()
    return jsonify(product.to_dict()), 201

@app.route('/products/<int:product_id>', methods=['PATCH'])
def update_product(product_id):
    product = Product.query.get(product_id)
    if not product:
        return jsonify({'error': 'Product not found'}), 404
    data = request.get_json()
    product.product_name = data.get('product_name', product.product_name)
    product.brand = data.get('brand', product.brand)
    product.category = data.get('category', product.category)
    product.price = data.get('price', product.price)
    product.description = data.get('description', product.description)
    product.image_url = data.get('image_url', product.image_url)
    db.session.commit()
    return jsonify(product.to_dict())

@app.route('/products/<int:product_id>', methods=['DELETE'])
def delete_product(product_id):
    product = Product.query.get(product_id)
    if not product:
        return make_response(jsonify({'error': 'Product not found'})), 404
    db.session.delete(product)
    db.session.commit()
    return make_response(jsonify({}), 204)

@app.route('/customers')
def get_customers():
    customers = Customer.query.all()
    return jsonify([customer.to_dict() for customer in customers])

@app.route('/customers/<int:customer_id>')
def get_customer(customer_id):
    customer = Customer.query.get(customer_id)
    if customer:
        return jsonify(customer.to_dict())
    else:
        return jsonify({'error': 'Customer not found'}), 404

@app.route('/customers', methods=['POST'])
def create_customer():
    data = request.get_json()
    customer = Customer(
        first_name=data['firstName'],
        last_name=data['lastName'],
        email=data['email'],
        password=data['password'],
        # address=data['address'],
        # city=data['city'],
        # state=data['state'],
        # zip_code=data['zip_code'],
        # phone_number=data['phone_number']
    )
    db.session.add(customer)
    db.session.commit()
    return jsonify(customer.to_dict()), 201

@app.route('/customers/<int:customer_id>', methods=['PATCH'])
def update_customer(customer_id):
    customer = Customer.query.get(customer_id)
    if not customer:
        return jsonify({'error': 'Customer not found'}), 404
    data = request.get_json()
    customer.first_name = data.get('first_name', customer.first_name)
    customer.last_name = data.get('last_name', customer.last_name)
    customer.email = data.get('email', customer.email)
    if 'password' in data:
        customer.password = data['password']
    customer.address = data.get('address', customer.address)
    customer.city = data.get('city', customer.city)
    customer.state = data.get('state', customer.state)
    customer.zip_code = data.get('zip_code', customer.zip_code)
    customer.phone_number = data.get('phone_number', customer.phone_number)
    db.session.commit()
    return jsonify(customer.to_dict())

@app.route('/customers/<int:customer_id>', methods=['DELETE'])
def delete_customer(customer_id):
    customer = Customer.query.get(customer_id)
    if not customer:
        return jsonify({'error': 'Customer not found'}), 404
    db.session.delete(customer)
    db.session.commit()
    return '', 204

@app.route('/orders')
def get_orders():
    orders = Order.query.all()
    return jsonify([order.to_dict() for order in orders])

@app.route('/orders/<int:order_id>')
def get_order(order_id):
    order = Order.query.get(order_id)
    if order:
        return jsonify(order.to_dict())
    else:
        return jsonify({'error': 'Order not found'}), 404

@app.route('/orders', methods=['POST'])
def create_order():
    data = request.get_json()
    customer_id = data['customer_id']
    customer = Customer.query.get(customer_id)
    if not customer:
        return jsonify({'error': 'Customer not found'}), 404
    order = Order(
    customer_id=customer_id,
    order_date=data['order_date'],
    total_amount=data['total_amount'],
    status=data['status']
    )
    for item_data in data['order_items']:
        product_id = item_data['product_id']
        product = Product.query.get(product_id)
        if not product:
            return jsonify({'error': 'Product not found'}), 404
    order_item = OrderProduct(
    product_id=product_id,
    quantity=item_data['quantity'],
    price=product.price
    )
    order.order_items.append(order_item)
    db.session.add(order)
    db.session.commit()
    return jsonify(order.to_dict()), 201

@app.route('/orders/', methods=['PATCH'])
def update_order(order_id):
    order = Order.query.get(order_id)
    if not order:
        return jsonify({'error': 'Order not found'}), 404
    data = request.get_json()
    order.customer_id = data.get('customer_id', order.customer_id)
    order.order_date = data.get('order_date', order.order_date)
    order.total_amount = data.get('total_amount', order.total_amount)
    order.status = data.get('status', order.status)
    order.order_items = []
    for item_data in data['order_items']:
        product_id = item_data['product_id']
        product = Product.query.get(product_id)
        if not product:
            return jsonify({'error': 'Product not found'}), 404
    order_item = OrderProduct(
    product_id=product_id,
    quantity=item_data['quantity'],
    price=product.price
    )
    order.order_items.append(order_item)
    db.session.commit()
    return jsonify(order.to_dict())

@app.route('/orders/', methods=['DELETE'])
def delete_order(order_id):
    order = Order.query.get(order_id)
    if not order:
        return jsonify({'error': 'Order not found'}), 404
    db.session.delete(order)
    db.session.commit()
    return '', 204



    

@app.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')

    customer = Customer.query.filter_by(email=email).first()
    if not customer or not customer.verify_password(password):
        return jsonify({'message': 'Invalid email or password'}), 401

    # Login successful, return customer data
    return jsonify(customer.to_dict())

if "__name__" == '__main__':
    app.run(debug=True)