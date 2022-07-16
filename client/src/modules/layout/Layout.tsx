
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    children: any
}

export default function Layout(layoutProps: LayoutProps){
    return (
        <main>
            <Header />
            { layoutProps.children }
            <Footer />
        </main>
    );
}