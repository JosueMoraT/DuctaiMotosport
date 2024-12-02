import { Carousel } from "../../components/carousel/Carousel";
import { Hero } from "../../components/Hero/Hero";
import { sales } from "../../data/sales";
import { trendingProducts } from "../../data/trending-products";
import { Footer } from "../../components/Footer/Footer";
import { motion } from "framer-motion";

const heroProps = {
    imageUrl: 'https://motorcyclesports.net/wp-content/uploads/2025-Yamaha-YZF1000R1GYTR-EU-Primer_Black-Static-002-03.webp',
    imageText: 'yamaha-back',
    headline: 'Yamaha R1 La mejor conbinacion de torque y velcidad para los amantes de la adrenlina',
    button: {
      href: '/SUPERDEPORTIVAS',
      label: 'COMPRAR AHORA'
    }
  };
const Homepage = () => {
    return<>

      <Hero {...heroProps} />
      
      <Carousel title="tendencias" items={trendingProducts} />
      <div className='app-body'>
    <motion.div
      initial={{opacity:0, scale:0}}
      animate={{opacity:1, scale:1}}
      transition={{duration:1}}
    >
      <Carousel title="Yamaha" items={sales}/>
    </motion.div>
      </div>
      </>
      
    
}

export { Homepage }