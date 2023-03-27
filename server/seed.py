from app import app, db
from module import Product, Customer, Order, OrderItem
from faker import Faker

fake = Faker()

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        Product.query.delete()
        Customer.query.delete()
        Order.query.delete()
        OrderItem.query.delete()
        
        # Create some products
        products = []
        for i in range(10):
            product = Product(
                product_name=fake.word(),
                brand=fake.company(),
                category=fake.word(),
                price=fake.pydecimal(left_digits=2, right_digits=2, positive=True),
                description=fake.sentence(),
                image_url=fake.image_url()
            )
            products.append(product)
        db.session.add_all(products)
        db.session.commit()

        # Create some customers
        customers = []
        for i in range(10):
            customer = Customer(
                first_name=fake.first_name(),
                last_name=fake.last_name(),
                email=fake.email(),
                password=fake.password(),
                address=fake.street_address(),
                city=fake.city(),
                state=fake.state(),
                zip_code=fake.zipcode(),
                phone_number=fake.phone_number()
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
                total_amount=fake.pydecimal(left_digits=3, right_digits=2, positive=True),
                status=fake.random_element(elements=('Pending', 'Shipped', 'Delivered'))
            )
            orders.append(order)
        db.session.add_all(orders)
        db.session.commit()

        # Add some order items
        order_items = []
        for i in range(20):
            order_item = OrderItem(
                order_id=fake.random_int(min=1, max=10),
                product_id=fake.random_int(min=1, max=10),
                quantity=fake.random_int(min=1, max=5),
                price=fake.pydecimal(left_digits=2, right_digits=2, positive=True)
            )
            order_items.append(order_item)
        db.session.add_all(order_items)
        db.session.commit()