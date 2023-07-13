import DisplaySection from "../Components/homepageComponents/mainComponents/displaySection"
import Footer from "../Components/homepageComponents/mainComponents/footer"
import MainNavbar from "../Components/homepageComponents/mainComponents/mainNavbar"

const HomePage = ()=>{
    return(
        <div className="homepage">
            <MainNavbar/>
            <DisplaySection/>     
            <Footer/>
        </div>
    )
}
export default HomePage