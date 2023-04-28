# login: test@gmail.com
# password: test

from app import app, db
from model import Product, Customer, Order, OrderProduct, Ingredient, ProductIngredient
from faker import Faker
import random

fake = Faker()

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        # Create some orders for test
        orders = []
        for i in range(10):
            order = Order(
                customer_id=11,  # Test customer_id
                order_number=fake.ean(),
                order_date=fake.date_this_year(),
                order_address=fake.address(),
                # total_amount=fake.pydecimal(left_digits=3, right_digits=2, positive=True),
                status=fake.random_element(
                    elements=('Pending', 'Shipped', 'Delivered'))
            )
            orders.append(order)
        db.session.add_all(orders)
        db.session.commit()

        # Add some order items
        order_items = []
        for i in range(20):
            order_item = OrderProduct(
                order_id=fake.random_int(min=11, max=21),
                product_id=fake.random_int(min=1, max=10),
                quantity=fake.random_int(min=1, max=5),
                # price=fake.pydecimal(left_digits=2, right_digits=2, positive=True)
            )
            order_items.append(order_item)
        db.session.add_all(order_items)
        db.session.commit()
