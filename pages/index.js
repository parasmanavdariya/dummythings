import DocumentHead from "../components/DocumentHead";
import Navbar from '../components/Navbar'
import Banner from '../components/banner'
import CTA from "../components/CTA";
import Feature from "../components/Feature";
export default function Home() {
  return (
    <div>
      <DocumentHead title={"Home"}/>
      <Navbar/>
      <Banner/>
      <Feature/>
      <CTA/>
    </div>
  )
}
