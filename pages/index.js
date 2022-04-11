import DocumentHead from "../components/DocumentHead";
import Navbar from '../components/Navbar'
import Banner from '../components/banner'
import CTA from "../components/CTA";
import Feature from "../components/Feature";
import HeaderBanner from "../components/HeaderBanner";
export default function Home() {
  return (
    <>
      <DocumentHead title={"Home"}/>
      <HeaderBanner/>
      <Navbar/>
      <Banner/>
      <Feature/>
      <CTA/>
    </>
  )
}
