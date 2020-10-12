import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import '../../styles/style.less';
import { useSelector } from 'react-redux';
import NavBar from './NavBar';
import Body from './Body';
const { Content } = Layout;

// The Canvas component is the blueprint for what is draw to the DOM
// It renders the navbar by default but if you want to render other components use the 'main' and 'side' props
// If 'side' props are provided they will be displayed in the sidebar to the far left of the browser. (WARNING! 'main' props must be provided for 'side' props to be rendered)
// 'main' props will be displayed to the right or centered underneath the nav bar if their are no 'side' props

export default ({ Main, Side }) => {
  const theme = useSelector(state => state.theme);

  return (
    <Layout
      className="layout"
      style={{
        backgroundColor: theme.bgDark,
        minHeight: '100vh',
        maxHeight: '100vh',
      }}
    >
      <Content style={{ minHeight: '100vh', maxHeight: '100vh' }}>
        <NavBar />
        <Body
          Main={Main ? Main : false}
          Side={Side ? Side : false}
          style={{
            minHeight: '100vh',
            maxHeight: '100vh',
            display: 'inline-block',
          }}
        />
      </Content>
    </Layout>
  );
};
