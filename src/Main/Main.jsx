import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../bodyMain/Home";
import About from "../bodyMain/About";
import Service from "../bodyMain/Service";
import Gallery from "../bodyMain/Gallery";
import Contact from "../bodyMain/Contact";
import Location from "../bodyMain/Location";
import Profile from "../bodyMain/Profile";
import Login from "../loginRegistration/Login";
import Registration from "../loginRegistration/Registration";
import Error from "../bodyMain/Error";
import Sarees from "../miniNavList/Sarees";
import Groom from "../miniNavList/Groom";
import Bride from "../miniNavList/Bride";
import Kurties from "../miniNavList/Kurties";
import CordKurtis from "../miniNavList/CordKurtis";
import Child from "../miniNavList/Child";
import MensWear from "../miniNavList/MensWear";
import Footer from "../footer/Footer";
import NavBarMain from "../NavBarMain/NavBarMain";
import Protected from "../protected/Protected";
import Offers from "../bodyMain/Offers";
import Founder from "../bodyMain/Founder";
import ViewMore from "../miniNavList/ViewMore";
import ForgetPassword from "../loginRegistration/ForgetPassword";
import SetPassword from "../loginRegistration/SetPassword";
import SuccessPass from "../loginRegistration/SuccessPass";
import Cart from "../bodyMain/Cart";
import Payment from "../bodyMain/Payment";
import PaymentSuccess from "../bodyMain/PaymentSuccess";
import Mens from "../miniNavList/Mens";

const Main = () => {
  return (
    <BrowserRouter>
      <NavBarMain />
      <Routes>
        <Route path="/" element={<Protected comp={<Home/>}/>}/>
        <Route path="/about" element={<Protected comp={<About />}/>} />
        <Route path="/service" element={<Protected comp={<Service />}/>} />
        <Route path="/gallery" element={<Protected comp={<Gallery />}/>} />
        <Route path="/contact" element={<Protected comp={<Contact />}/>} />
        <Route path="/offer" element={<Protected comp={<Offers />}/>} />
        <Route path="/location" element={<Protected comp={<Location />}/>} />
        <Route path="/profile" element={<Protected comp={<Profile />}/>} />
        <Route path="/login" element={<Protected comp={<Login />}/>} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<Error />} />
        <Route path="/cart" element={<Cart/>} /> 
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/paymentSuccess" element={<PaymentSuccess/>}/>
        <Route path="/forget" element={<ForgetPassword/>} />
        <Route path="/setPass/:id" element={<SetPassword/>} />
        <Route path="/success" element={<SuccessPass/>} />
        <Route path="/mens" element={<Protected comp={<Mens/>}/>} />
        <Route path="/viewMore/:id" element={<Protected comp={<ViewMore />}/>} />
        <Route path="/saree" element={<Protected comp={<Sarees />}/>} />
        <Route path="/weddingCollectionForGroom" element={<Protected comp={<Groom />}/>} />
        <Route path="/weddingCollectionForBride" element={<Protected comp={<Bride />}/>} />
        <Route path="/kurtis" element={<Protected comp={<Kurties />}/>} />
        <Route path="/CordKurtis" element={<Protected comp={<CordKurtis />}/>} />
        <Route path="/child" element={<Protected comp={<Child />}/>} />
        <Route path="/MensWear" element={<Protected comp={<MensWear />}/>} />
        <Route path="/founder" element={<Founder />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Main;
