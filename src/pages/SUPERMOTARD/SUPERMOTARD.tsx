import { Catalog } from "../../components/Catalog/Catalog"
import { Hero } from "../../components/Hero/Hero"
import { catalogSUPERMOTARD } from "../../data/catalogsupermotard"


const heroSUPEMRMOTARDPage ={
    imageUrl: 'https://www.yamaha-motor.com.br/file/v4092077966796018393/products/lateral-mtseries-mt09-321-abs-30120-fx01-img-01-v01-desktop.jpg',
    imageText: 'El mejor diseño Naked',
    headline: 'El Master of Torque',
    button: {
        href: '/',
        label: 'VER AQUI'
    }
}


const SUPERMOTARDPage = () => {
    return<>
        <Hero {...heroSUPEMRMOTARDPage} />
        <Catalog productList={catalogSUPERMOTARD}/> 
    </>
}

export { SUPERMOTARDPage };