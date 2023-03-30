from app import app, db
from model import Product, Customer, Order, OrderProduct, Ingredient, ProductIngredient
from faker import Faker
import random

fake = Faker()

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        Product.query.delete()
        Customer.query.delete()
        Order.query.delete()
        OrderProduct.query.delete()
        Ingredient.query.delete()
        ProductIngredient.query.delete()

        db.session.commit()
        
        # Create some products
        products = []
        for i in range(10):
            product = Product(
                product_name=fake.word(),
                category=fake.word(),
                price=fake.pydecimal(left_digits=2, right_digits=2, positive=True),
                description=fake.sentence(),
                image_url=fake.image_url(),
                directions=fake.sentence()
            )
            products.append(product)
        db.session.add_all(products)
        db.session.commit()

        # Create some ingredients
        ingredients = []
        for i in range(10):
            ingredient = Ingredient(
                ingredient_name=fake.word(),
                ingredient_description=fake.sentence(),
                ingredient_image=fake.image_url(),
            )
            ingredients.append(ingredient)
        db.session.add_all(ingredients)
        db.session.commit()

        # Add random ingredients to product
        for product in Product.query.all():
            number_to_add = random.randint(2,5)
            for i in range(number_to_add):
                random_ingredient = random.choice(Ingredient.query.all())
                product_ingredient = ProductIngredient(
                    product_id = product.product_id,
                    ingredient_id = random_ingredient.ingredient_id
                )
                db.session.add(product_ingredient)
                db.session.commit()

        # Create some customers
        customers = []
        for i in range(10):
            customer = Customer(
                first_name=fake.first_name(),
                last_name=fake.last_name(),
                email=fake.email(),
                password=fake.password(),
                # address=fake.street_address(),
                # city=fake.city(),
                # state=fake.state(),
                # zip_code=fake.zipcode(),
                # phone_number=fake.phone_number()
            )
            customers.append(customer)
        db.session.add_all(customers)
        db.session.commit()

        # Create some orders
        orders = []
        for i in range(10):
            order = Order(
                customer_id=fake.random_int(min=1, max=10),
                order_date=fake.date_this_year(),
                # total_amount=fake.pydecimal(left_digits=3, right_digits=2, positive=True),
                status=fake.random_element(elements=('Pending', 'Shipped', 'Delivered'))
            )
            orders.append(order)
        db.session.add_all(orders)
        db.session.commit()

        # Add some order items
        order_items = []
        for i in range(20):
            order_item = OrderProduct(
                order_id=fake.random_int(min=1, max=10),
                product_id=fake.random_int(min=1, max=10),
                quantity=fake.random_int(min=1, max=5),
                # price=fake.pydecimal(left_digits=2, right_digits=2, positive=True)
            )
            order_items.append(order_item)
        db.session.add_all(order_items)
        db.session.commit()