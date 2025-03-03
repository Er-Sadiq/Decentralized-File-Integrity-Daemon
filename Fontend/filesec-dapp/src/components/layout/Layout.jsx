import bg from "../../assets/bbg1.jpg";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
export default function Layout({children}) {



  
  return (
    <div className="w-screen  h-screen overflow-hidden relative">
      <div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})`, opacity: 1 }}
      />
      <div className="absolute z-10 w-full h-full bg-[linear-gradient(270deg,rgba(0,0,0,0)_0.17%,rgba(4,7,38,0.95)_55%),linear-gradient(0deg,rgba(153,153,153,0)_0%,rgba(153,153,153,0)_100%)]"></div>
      </div>

      <div className="w-full h-full flex flex-col z-20 items-center relative">
        <Navbar />

        <div className="w-full h-full container flex flex-col justify-center items-center">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}
