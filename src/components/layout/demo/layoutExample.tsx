import React, { Fragment } from 'react';
import Content from '../content';
import Header from '../header';
import Footer from '../footer';
import Layout from '../layout';

const LayoutExample = () => {
  return (
    <Fragment>
      <h3>例子1</h3>
      <Layout style={{ height: '600px', border: '1px solid red' }}>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
      <h3 style={{ marginTop: '12px' }}>例子2</h3>
      <Layout style={{ height: '600px', border: '1px solid red' }}>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Fragment>
  );
};

export default LayoutExample;
