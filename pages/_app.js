import "../styles/globals.css";
import '../components/header.css'
import '../components/footer.css'
import '../components/hero/hero.css'
import "../pages/generator/generator.css";
import { RecoilRoot } from "recoil";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 
import { Inter } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })


export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <main className={inter.className}>
      <Component {...pageProps} />
      </main>
    </RecoilRoot>
  );
}
