import { Navbar, Hero, Highlights, Model, Features, HowItWorks, Footer } from './components/index.js';
import * as Sentry from '@sentry/react'

const App = () => (
  <main className='bg-black'>
    <Navbar />
    <Hero />
    <Highlights />
    <Model />
    <Features />
    <HowItWorks />
    <Footer />
  </main>
);

export default Sentry.withProfiler(App);
