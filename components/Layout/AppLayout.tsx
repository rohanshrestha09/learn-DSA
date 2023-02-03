import { ConfigProvider, Layout } from 'antd';
import Navbar from '../Navbar';

interface Props {
    children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
    const { Sider, Content } = Layout;

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#177ddc',
                },
            }}
        >
            <Layout className='bg-[#ffffff]' hasSider>
                <Sider>
                    <Navbar />
                </Sider>

                <Layout>
                    <Content className='bg-[#ffffff]'>{children}</Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

export default AppLayout;
