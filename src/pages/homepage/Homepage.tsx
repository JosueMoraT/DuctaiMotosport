import { Carousel } from "../../components/carousel/Carousel";
import { Hero } from "../../components/Hero/Hero";
import { sales } from "../../data/sales";
import { trendingProducts } from "../../data/trending-products";
import { Footer } from "../../components/Footer/Footer";

const heroProps = {
    imageUrl: 'https://images.ctfassets.net/x7j9qwvpvr5s/RmQXF9JOHHJbMkcPaeVcS/451cdb4458608fadf9c4eac9f93f003e/Model-Menu-MY24-Streetfighter-V4-Supreme.png',
    imageText: 'ducati-back',
    headline: 'Ducati Streetfighter V4 Supreme Una edición especial limitada y numerada nacida de una nueva colaboración exclusiva',
    button: {
      href: '/SUPERDEPORTIVAS',
      label: 'COMPRAR AHORA'
    }
  };
const Homepage = () => {
    return<>
    <Hero {...heroProps} />
      <div className='app-body'>
      <Carousel title="tendencias" items={trendingProducts} />
      <Carousel title="Ducati" items={sales}/>
      <Footer/>
      </div>
      </>
    
}

export { Homepage }