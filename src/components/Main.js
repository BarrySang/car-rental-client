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
            <Layout Content={Content}></Layout>
        )
    }
}

export default Main;