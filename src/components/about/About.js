import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './About.css'

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className='about'>
                <Container>
                <div className="aboutContent">
                    <img className="rounded-circle" src="https://lh3.googleusercontent.com/teBvcZV7W7vbfawVUL8teCe1-mBtQE1MwWkVeUQVJkaKVAHADR28_NeossFrMDI0zWREK4Z0bcar_FIGWnLPwNUZaHtoF_YEosmR5attsitD-QvNNL9g86pADNFSbicrAhIPW984-r5tw-iSP02rNni0X__ol2d6KWh0oR_PZTPJjq8155f3iGP-l0Aeoh7COiWXruiJ5r4u-VUDO7K7tIQTjIgyZ13PPnB3KTnlt88rki4abdBYe4RXwJAxs375u0zhsN9_P6cKXZj-fItf0G842UXSQfpsn9VB3JQYRLB8qnwz1drVe8MN_ggqXqYKTxah7r5S0lGEmP9oj78G1zNy0lxT7UUIUv_3lU6oRrgXl0NJTTUYrxE4xXGsM02Wqoy0J6meTgOReiVNWSs4Lrlkc4tNcUo6ptiM8mE_aStlK9wcgixW-nlXY4cNv9UJYmnG1F6X_Jk1MKeS2IWA5Togn1pHmSzsRpLyQ-29VWcuheQdxYbZIyp2uqfwAuK9MbWDEgnGrp27UN1FXO6XpUzLRUZ5LTiat-i7Oy0tp7BsfvbwRQdekr153XXy4WCczy5S-MZpoEVMU8T8KD5H1cJoHz99pvv6bPbeuUCx-7UAqwPGcCA-FQmtl6YjAjHRzK59SZwYNnl2ja2oO8VWcBnvRZeBK54k-iEonKZAXScYHfvWhdHpoXdA8wL7vUlswX5WF4bx9RUh-Juj=w942-h937-no?authuser=0" alt="" width="350" />
                    <p className="w-50 mt-4">Hey there, Thanks to be here. I'm Mehedi Hasan for you. Doing front-end development for a couple of years. I'm glad you are here. I created this plateform for people who want to learn through online</p>
                </div>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;