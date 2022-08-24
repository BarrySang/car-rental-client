import React from "react";
import Layout from "./layout-components/Layout";

class Main extends React.Component {
    render() {
        const Content = () => {
            return (
                <p>Placeholder for the body content</p>
            )
        }

        return (
            <div className="container">
                <Layout Content={Content}></Layout>
            </div>
        )
    }
}

export default Main;