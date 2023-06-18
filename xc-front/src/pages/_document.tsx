import Document, { Html, Head, Main, NextScript } from 'next/document'
import Link from "next/link";
class SampleDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="dns-prefetch" href="//www.google.co.jp" />
                </Head>
                <body>
                <HeaderElement />
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

const HeaderElement = () => {
    return (
        <header>
            <div style={{
                display: "flex",
                alignItems: "center",
            }}>
                <h1>Header</h1>
                <Link href={"/"} style={{
                    textDecoration: "none",
                }}>
                    <p>aa</p>
                </Link>
            </div>
        </header>
    )
};

export default SampleDocument
