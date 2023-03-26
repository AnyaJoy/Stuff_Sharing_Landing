import Navbar from '../components/navbar'
import Footer from '../components/footer'
import USP from '../components/landing/usp'
import Description from '../components/landing/description'
import Instruction from '../components/landing/instruction'
import Mission from '../components/landing/mission'
import Client from '../components/landing/client'

export default function Home() {
  return (
    <div className="min-h-screen flex bg-white text-lg text-black">
      <div>
        <Navbar />
        <USP />
        <Description />
        <Instruction />
        <Mission />
        <Client />
        <Footer />
      </div>
    </div>
  );
}
