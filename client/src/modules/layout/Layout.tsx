
import Box from '@mui/material/Box';
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    children: any
}

export default function Layout(layoutProps: LayoutProps){
    return (
        <Box
            sx={{
                backgroundColor: '#f7f7f7'
            }}
        >
            <Header />
                { layoutProps.children }
            <Footer />
        </Box>
    );
}