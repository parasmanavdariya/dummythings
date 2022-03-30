import DocumentHead from "../components/DocumentHead";
import Navbar from '../components/Navbar'
import Banner from '../components/banner'
export default function Home() {
  return (
    <div>
      <DocumentHead title={"Home"}/>
      <Navbar/>
      <Banner/>
    </div>
  )
}
