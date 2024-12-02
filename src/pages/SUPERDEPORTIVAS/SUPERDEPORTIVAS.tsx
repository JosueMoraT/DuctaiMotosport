import { Catalog } from "../../components/Catalog/Catalog"
import { Hero } from "../../components/Hero/Hero"
import { catalogSUPERDEPORTIVAS } from "../../data/catalogsuperdeportivas"

const heroSUPERDEPORTIVASPage ={
    imageUrl: 'https://fast-mag.com/mag/wp-content/uploads/2022/02/Copia-de-10_2022_YZR_M1_21.jpg',
    imageText: 'Yamaha YZR-1M',
    headline: 'La mejor superdeportiva del mercado',
    button: {
        href: '/',
        label: 'VER AQUI'
    }
}


const SUPERDEPORTIVASPage = () => {
    return<>
        <Hero {...heroSUPERDEPORTIVASPage} />
        <Catalog productList={catalogSUPERDEPORTIVAS}/> 
    </>
}

export { SUPERDEPORTIVASPage };