import { Parallax } from 'react-parallax';
import image2 from '../assets/img/image1.png';

const ImageTwo = () => (
    <Parallax className='relative h-[100vh] bg-cover bg-center bg-fixed' bgImage={image2} strength={800}>
        <div className='flex items-center justify-center h-full'>
                <h1 className='pt-100 text-white text-4xl font-bold'>Explore</h1>
            </div>
    </Parallax>
);

export default ImageTwo;