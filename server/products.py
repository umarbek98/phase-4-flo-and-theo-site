
from app import app, db
from model import Product, Customer, Order, OrderProduct, Ingredient, ProductIngredient

with app.app_context():


    Product.query.delete()
    product1 = Product(product_name = "Wild Mint Soap", category = 'Soap', description= 'Rich, earthy and herbaceous, the scent of our Fresh Woodlands soap bar is one that both men and women can appreciate.  Fresh Woodlands is a completely vegan, animal and eco-friendly soap bar containing no synthetics or petroleum. It is handcrafted in small batches in the USA, using the old-fashioned cold process method. FLO+THEO soap bars provide a rich creamy lather and are made with luxurious oils and butters, herbs, glycerin (a natural humectant), natural mineral pigments and 100% pure essential oils.', directions ='rub on wet skin', image_url = 'https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1383223537639-NGJFBOKH8D0JZWVPAUT4/Fire_Soap.jpg?format=750w', price=10)

    product2 = Product(product_name = "Lavender Flower Soap", category = 'Soap', description= 'The aroma of our Lavender Flower soap bar is reminiscent of a bright bouquet of fresh, flowering lavender with a sweet and delicate finish. Lavender Flower is a completely vegan, animal and eco-friendly soap bar containing no synthetics or petroleum. It is handcrafted in small batches in the USA, using the old-fashioned cold process method. FLO+THEO soap bars provide a rich creamy lather and are made with luxurious oils and butters, herbs, glycerin (a natural humectant), natural mineral pigments and 100% pure essential oils.', directions ='rub on wet skin', image_url = 'https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1383223562958-DZ77DNBEYAMRULUJ52IA/Lavender_Soap.jpg?format=500w', price=10)

    product3 = Product(product_name = "Orange Harvest Soap", category = 'Soap', description= 'Our Orange Harvest soap bar is a crisp and clean blend. It will have you feeling, like you are walking through a grove of citrus trees on a beautiful, sunny Sunday morning. It is completely vegan, animal and eco-friendly and contains no synthetics or petroleum. It is handcrafted in small batches in the USA, using the old-fashioned cold process method. FLO+THEO soap bars provide a rich creamy lather and are made with luxurious oils and butters, herbs, glycerin (a natural humectant), natural mineral pigments and 100% pure essential oils', image_url = 'https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1383223585363-JFPAQVQQB1E5SYWYPJXV/Orange_Soap.jpg?format=500w', price=10)

    product4 = Product(product_name = "Lemon Orchard Soap", category = 'Soap', description= 'Lather up with our Lemon Orchard soap bar. This soap bar has an aroma best described as a light, lemony romantic scent with herbal undertones.  Lemon Orchard is a completely vegan, animal and eco-friendly soap bar, containing no synthetics or petroleum. It is handcrafted in small batches in the USA, using the old-fashioned cold process method. FLO+THEO soap bars provide a rich creamy lather and are made with luxurious oils and butters, herbs, glycerin (a natural humectant), natural mineral pigments and 100% pure essential oils.', directions ='rub on wet skin', image_url = 'https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1383223649198-E3AI7T9UWN2Q9UVI4LVO/Lemon_Soap.jpg?format=500w', price=10)

    product5 = Product(product_name = "Wild Mint Soap", category = 'Soap', description= 'Whoa Nelly! This is often the initial reaction from customers when they experience the scent of our Wild Mint for the first time. The minty and herbal aroma notes of Wild Mint is certainly guaranteed to wake you up in the morning and will leave you feeling refreshed and revitalized. Wild Mint is a completely vegan, animal and eco-friendly soap bar, containing no synthetics or petroleum. It is handcrafted in small batches in the USA, using the old-fashioned cold process method. FLO+THEO soap bars provide a rich creamy lather and are made with luxurious oils and butters, herbs, glycerin (a natural humectant), natural mineral pigments and 100% pure essential oils.', directions ='rub on wet skin', image_url = 'https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1383223649198-E3AI7T9UWN2Q9UVI4LVO/Lemon_Soap.jpg?format=500w', price=10)

    product6 = Product(product_name = "Activated Charcoal Soap", category = 'Soap', description= 'The key ingredient in this unscented black soap bar is activated charcoal.  Activated charcoal is known for its superb absorption powers and for its ability to draw out oil, dirt and other substances from clogged pores. Activated Charcoal is a completely vegan, animal and eco-friendly soap bar containing no synthetics or petroleum. It is handcrafted in small batches in the USA, using the old-fashioned cold process method. ', directions ='rub on wet skin', image_url = 'https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1427166993792-AV6LQ2ZNZ0XKNBPG7KIY/CharcoalSoap.jpg?format=500w', price=10)

    product7 = Product(product_name = "LAVENDER FLOWER BODY BUTTER", category = 'Body Butter',
    description= 'Lavender Flower Body Butter is a deliciously, creamy natural moisturizer. This whipped to perfection body butter is highly concentrated with the finest ingredients, nature has to offer (meaning a little goes a very long way).',
    directions ='melt on your skin', image_url = 'https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1383064238252-ADGOHKIS6NTS9JMVCKN6/Lavender_butter_3.png?format=1000w', price=28)

    product8 = Product(product_name = "LEMON ORCHARD BODY BUTTER", category = 'Body Butter',
    description= 'Our Lemon Orchard handmade, whipped body butter is all you need to hydrate dry and thirsty skin. Ingredients such as Cocoa Butter, Shea Butter and Coconut Oil are filled with vitamins A, E, F and fatty acids, nourishing and protecting the skin. ',
    directions ='melt on your skin', image_url = 'https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1383064298915-GK3JWZQP88FP8X76NB4L/Lemon_butter_3.png?format=1000w', price=28)

    product9 = Product(product_name = "ORANGE HARVEST BODY BUTTER", category = 'Body Butter',
      description= 'Orange Harvest Body Butter is a simple yet effective blend of Cocoa Butter, Shea Butter , Coconut, Oil and Essential oils. The body butter is filled with active anti-oxidants, vitamins and nutrients that will ensure your skin remains super moisturized and hydrated.',
      directions ='melt on your skin', image_url = 'https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1383064328273-4YSQIM4DUZT4TSAT00VL/Orange_butter_3.png?format=1000w', price=28)

    product10 = Product(product_name = "WILD MINT BODY BUTTER", category = 'Body Butter',
    description= 'Rich, aromatic, vegan and 100% natural, Wild Mint Body Butter has a lot of moisturizing power. The blend of Cocoa Butter, Shea Butter and Coconut Oil, means that this mixture is bursting with vitamins, minerals and antioxidants.',
    directions ='melt on your skin', image_url = 'https://images.squarespace-cdn.com/content/v1/52594417e4b030e5f06cf43c/1383064362956-D3OMUI518AMPH39H9EV5/Mint_butter_3.png?format=1000w', price=28)

    


    products = [product1, product2, product3, product4,product5,product6, product6, product7, product8, product9, product10]

    db.session.add_all(products)
    db.session.commit()
