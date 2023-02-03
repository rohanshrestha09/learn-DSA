import 'antd/dist/reset.css';
import 'styles/globals.scss';
import type { AppProps } from 'next/app';
import AppLayout from 'components/Layout/AppLayout';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AppLayout>
            <Component {...pageProps} />
        </AppLayout>
    );
}
