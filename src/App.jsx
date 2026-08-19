import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Financing from './components/Financing.jsx'
import Steps from './components/Steps.jsx'
import ApplyCta from './components/ApplyCta.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Financing />
        <Steps />
        <ApplyCta />
      </main>
      <Footer />
    </>
  )
}

export default App
