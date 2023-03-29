from flask_sqlalchemy import SQLAlchemy
import bcrypt
 
db = SQLAlchemy()
 
class Product(db.Model):
    __tablename__ = 'products'
    product_id = db.Column(db.Integer, primary_key=True)
    product_name = db.Column(db.String(255))
    # brand = db.Column(db.String(255))
    category = db.Column(db.String(255))
    price = db.Column(db.Float)
    description = db.Column(db.Text)
    directions = db.Column(db.Text)
    image_url = db.Column(db.String(255))
    ingredients = db.relationship("ProductIngredient", backref="product")
    order_items = db.relationship('OrderItem', backref='product')
 
    def to_dict(self):
        print(self.ingredients)
        return {
            'product_id': self.product_id,
            'product_name': self.product_name,
            # 'brand': self.brand,
            'category': self.category,
            'price': self.price,
            'description': self.description,
            'image_url': self.image_url,
            "ingredients": [ingredient.to_dict() for ingredient in self.ingredients]
            # 'order_items': [order_item.to_dict() for order_item in self.order_items]
        }
    
class Ingredient(db.Model):
    __tablename__ = "ingredients"
    ingredient_id = db.Column(db.Integer, primary_key=True)
    ingredient_name = db.Column(db.String)
    ingredient_description = db.Column(db.String)
    ingredient_image = db.Column(db.String)
    products = db.relationship("ProductIngredient", backref="ingredient")

    def to_dict(self):
        return {
            "ingredient_id": self.ingredient_id,
            "ingredient_name": self.ingredient_name,
            "ingredient_description": self.ingredient_description,
            "ingredient_image": self.ingredient_image,
        }

class ProductIngredient(db.Model):
    __tablename__ = "product_ingredients"
    id = db.Column(db.Integer,primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey("products.product_id"))
    ingredient_id = db.Column(db.Integer, db.ForeignKey("ingredients.ingredient_id"))

    def to_dict(self):
        ingredient = Ingredient.query.filter(Ingredient.ingredient_id == self.ingredient_id).first()
        return {
            "ingredient_id": self.ingredient_id,
            "ingredient_name": ingredient.ingredient_name,
            "ingredient_description": ingredient.ingredient_description,
            "ingredient_image": ingredient.ingredient_image
        }

    
        
 
class Customer(db.Model):
    __tablename__ = 'customers'
    customer_id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(255))
    last_name = db.Column(db.String(255))
    email = db.Column(db.String(255))
    password_hash = db.Column(db.String(255))
    address = db.Column(db.String(255))
    city = db.Column(db.String(255))
    state = db.Column(db.String(255))
    zip_code = db.Column(db.String(255))
    phone_number = db.Column(db.String(255))
    orders = db.relationship('Order', backref='customer')

    @property
    def password(self):
        raise AttributeError('password is not a readable attribute')

    @password.setter
    def password(self, password):
        self.password_hash = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    def verify_password(self, password):
        return bcrypt.checkpw(password.encode('utf-8'), self.password_hash.encode('utf-8'))

    def to_dict(self):
        return {
            'customer_id': self.customer_id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'zip_code': self.zip_code,
            'phone_number': self.phone_number,
            'orders': [order.to_dict() for order in self.orders]
        }
 
class Order(db.Model):
    __tablename__ = 'orders'
    order_id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.customer_id'))
    order_date = db.Column(db.DateTime)
    total_amount = db.Column(db.Float)
    status = db.Column(db.String(255))
    order_items = db.relationship('OrderItem', backref='order')
 
    def to_dict(self):
        return {
            'order_id': self.order_id,
            'customer_id': self.customer_id,
            'order_date': self.order_date,
            'total_amount': self.total_amount,
            'status': self.status,
            'order_items': [order_item.to_dict() for order_item in self.order_items]
        }
 
class OrderItem(db.Model):
    __tablename__ = 'order_items'
    order_item_id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('orders.order_id'))
    product_id = db.Column(db.Integer, db.ForeignKey('products.product_id'))
    quantity = db.Column(db.Integer)
    price = db.Column(db.Float)
 
    def to_dict(self):
        return {
            'order_item_id': self.order_item_id,
            'order_id': self.order_id,
            'product_id': self.product_id,
            'quantity': self.quantity,
            'price': self.price,
            'product': self.product.to_dict()
        }



    