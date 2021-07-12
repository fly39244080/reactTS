// BaseLayout.tsx
import { Layout, Menu, Breadcrumb } from 'antd';
import React from 'react';
import Header from './components/Header';
import Navside from './components/Navside';
import Routes from './router/routes';

export default class BaseLayout  extends React.Component<object, object> {
    render() {
        return(
            <Layout className="main">
                <Layout.Header className="main-header">
                    <Header/>
                    </Layout.Header>
                <Layout className="main-content">
                    <Navside/>
                    <Layout.Content>
                        <Routes/>
                    </Layout.Content>
                </Layout>
            </Layout>
        )
    }
}