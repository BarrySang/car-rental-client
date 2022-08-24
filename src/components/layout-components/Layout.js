import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({Content}) => {
    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-3">
                    <SideBar />
                </div>
                <div className="col-9">
                    <Content />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;