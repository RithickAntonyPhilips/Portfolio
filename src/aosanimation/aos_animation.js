import Aos from "aos";
import "aos/dist/aos.css"

export const Home = () => {
    Aos.init({
        duration: 4000,
        easing: "ease-in",
        once: false,
        offset: 50,
    })
}