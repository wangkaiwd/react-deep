import React, { Fragment } from 'react';
import Content from '../content';
import Header from '../header';
import Footer from '../footer';
import Layout from '../layout';
import Aside from '../aside';

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
        <Layout>
          <Aside>Aside</Aside>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
      <h3 style={{ marginTop: '12px' }}>例子3</h3>
      <Layout style={{ height: '600px', border: '1px solid red' }}>
        <Header>Header</Header>
        <Layout>
          <Content>Content</Content>
          <Aside>Aside</Aside>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
      <h3 style={{ marginTop: '12px' }}>例子4</h3>
      <Layout style={{ height: '600px', border: '1px solid red' }}>
        <Aside>Aside</Aside>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
};

export default LayoutExample;
