import { Catalog } from "../../components/Catalog/Catalog"
import { Hero } from "../../components/Hero/Hero"
import { catalogCUATRIMOTOS } from "../../data/catalogcuatrimotos"


const heroCUATRIMOTOSPage ={
    imageUrl: 'https://smgmedia.blob.core.windows.net/images/129570/1920/yamaha-yfm700r-raptor-petrol-352b86124f7b.jpg',
    imageText: 'Yamaha Raptor',
    headline: 'Lo mejor para la aventura Of Road',
    button: {
        href: '/',
        label: 'VER AQUI'
    }
}


const CUATRIMOTOSPage = () => {
    return<>
        <Hero {...heroCUATRIMOTOSPage} />
        <Catalog productList={catalogCUATRIMOTOS}/> 
    </>
}

export { CUATRIMOTOSPage };