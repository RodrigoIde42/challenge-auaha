import React, { Fragment } from 'react';
import NeedHelp from '../components/NeedHelp';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Products from './sections/Products';
import Promotions from './sections/Promotions';
import NewTrending from './sections/NewTrending';
import Feedback from './sections/Feedback';
import SignIn from './sections/SignIn';
import Footer from './sections/Footer';

export default function HomePage() {
    return (
        <Fragment>
            <NeedHelp />
            <Header />
            <main>
                <Hero />
                <Products />
                <Promotions />
                <NewTrending />
                <Feedback />
                <SignIn />
            </main>
            <Footer />
        </Fragment>
    )
}