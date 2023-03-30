import styles from './About.module.css'

const About = () => {
    return (
        <div className='container'>
            <div className= {styles.sistersContainer}>
            <h1>THE FLO+THEO STORY</h1>
            <p>FLO+THEO founded in Queens, NY formulates 100% vegan skin care products, utilizing
            only the freshest ingredients suitable even for the most delicate skin. The conception of
            FLO+THEO grew out a real need, that of the founders to find suitable products for their
            sensitive skin. Through years of research, learning and experimentation, they were able to create nutritious
            and beneficial formulations. The creation of FLO+THEO brings together the founders love for creativity, innovation and healthy skin care.



            The brand is a collaboration between two sisters, Mayona and Ebony.
            Born in Nigeria and raised in England and Ireland, the two sisters now call New York home.
            FLO+THEO is named after two great heroes in their lives, the FLO stands for florence, their mother's name whilst the THEO is the honor and memory of their Uncle. </p>

            <h3>MEET THE TEAM</h3>
            </div>


            <div className ="photo" >
                <img src = {require("../images/Mayowa-Cofounder.jpg")} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', height: '500px', }}/>
            </div>

            <div className = {styles.mayowaContainer}>
                <h3>MAYOWA, CO-FOUNDER</h3>
                <p>
                Truly believing that less can be more, Mayowa co-founded FLO+THEO in order to create simple yet effective products.
                With a backgound in Sofware Engineering and E-commerce, she is often tinkering away on the FLO+THEO website and handling the more
                technical aspects of the business. On her days off, she can be found wandering around the city in search of vintage pieces of furniture,
                new vegan restaurants or taking a fitness class.</p>
            </div>
            <div >
                <img className = "picture" src = {require("../images/Ebony Cofounder.jpg")} height ={620} width={770} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} />
            </div>
            <div className = {styles.ebonyContainer}>
                <h3>EBONY, CO-FOUNDER</h3>
                <p> Inspired and passionate about all things beauty, co-founder Ebony left a career in law, in order to follow her dreams,
                of starting FLO+THEO. Now, instead of finding her in a courtroom, you can now find her and her sister, around markets in NYC, introducing vegan, artisanal skin care
                products to savvvy New Yorkers. Ebony enjoys entrepreneurship (thinks being a co-founder of FLO+THEO is awesome), photography
                and looking ofr delicious and strange things to eat in NYC.

                </p>
            </div>

        </div>

    )

}

export default About;
