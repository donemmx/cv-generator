import "../styles/globals.css";
import '../components/header.css'
import '../components/footer.css'
import '../components/hero/hero.css'
import "../pages/generator/generator.css";
import "../components/forms/education"
import "../components/forms/employmentHistory"
import "../components/forms/hobbies"
import "../components/forms/languages"
import "../components/forms/personalDetail"
import "../components/forms/professioanalSumary"
import "../components/forms/reference"
import "../components/forms/skillComponent"
import "../components/forms/website"
import "../components/forms/forms.css"
import "../components/cv-templates/templateOne"
import "../components/cv-templates/templateTwo"
import "../components/cv-templates/templateThree"
import "../components/cv-templates/templateFour"
import "../components/cv-templates/templateOne.css"
import "../components/cv-templates/templateTwo.css"
import "../components/cv-templates/templateThree.css"
import "../components/cv-templates/templateFour.css"


import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 
import { Inter } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })


export default function App({ Component, pageProps }) {
  return (
      <main className={inter.className}>
      <Component {...pageProps} />
      </main>
  );
}
