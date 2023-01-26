// This is the custom document of our app which helps us to update the html and body tags
// that make up the html document that is rendered on the server. Since it is server
// rendered, there are no event handlers until the Main component is hydrated on the client

import React from 'react';
import { Document, Main, Head } from '@react-ssr/express';

// Document is a class component that structures the html document of our page. We are
// modelling our custom document after this class.
export default class extends Document {
    render() {
        return (
            <html lang='en'>
                <Head>
                    <title>SmartTrader - Best FOREX Trading Signals</title>
                </Head>
                <body>
                    <Main />
                </body>
            </html>
        )
    }
} 