import { Poppins,Itim } from '@next/font/google';
import { ConfigProvider, Layout } from 'antd';
import Navbar from '../Navbar';

interface Props {
    children: React.ReactNode;
}

const poppins = Poppins({
    weight: ['400'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    preload: true,
});

const itim = Itim({
    weight:['400'],
    style:['normal'],
    subsets:['latin'],
    preload:true,
    variable: '--font-itim',
})

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
            <style jsx global>{`
                * {
                    font-family: ${poppins.style.fontFamily};
                }
            `}</style>

            <Layout className={`bg-[#ffffff] ${itim.variable}`} hasSider>
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
