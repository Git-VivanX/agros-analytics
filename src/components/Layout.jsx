import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div style={{ padding: "0 20px" }}>
                {children}
            </div>
        </div>
    );
};

export default Layout;