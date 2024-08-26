import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function carousel(){
    return (
        <div>
        <div className='oito'>
        <Carousel className='fish'
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}  
                showThumbs={false}
                dynamicHeight>
                    <div >
                    <img className='manga' src='public/Gold/1.png'/>
                    </div>
                    <div>
                    <img className='manga' src='public/Gold/2.png'/>
                    </div>
                    <div>
                    <img className='manga' src='public/Gold/3.png'/>
                    </div>
            </Carousel>
            </div>  
            </div>
    )
}