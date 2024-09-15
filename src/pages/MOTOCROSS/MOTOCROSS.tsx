import { Catalog } from "../../components/Catalog/Catalog"
import { Hero } from "../../components/Hero/Hero"
import { catalogMOTOCROSS } from "../../data/catalog"

const heroMOTOCROSSPage ={
    imageUrl: 'https://motocrossactionmag.com/wp-content/uploads/2024/01/Desmo450-MX-ZOOM.jpg',
    imageText: 'Crosss para competir',
    headline: 'Lo mejor par los amantes de el Enduro',
    button: {
        href: '/',
        label: 'VER AQUI'
    }
}


const MOTOCROSSPage = () => {
    return<>
        <Hero {...heroMOTOCROSSPage} />
        <Catalog productList={catalogMOTOCROSS}/> 
    </>
}

export { MOTOCROSSPage };