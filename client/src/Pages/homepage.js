import DisplaySection from "../Components/displaySection"
import Footer from "../Components/footer"
import MainNavbar from "../Components/mainNavbar"

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