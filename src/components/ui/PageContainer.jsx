const PageContainer = ({ children }) => {
    return (
        <div
            style={{
                padding: "24px",
                maxWidth: "1200px",
                margin: "0 auto",
            }}
        >
            {children}
        </div>
    );
};

export default PageContainer;