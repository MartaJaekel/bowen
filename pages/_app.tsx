import "./styles.css";
 
interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
