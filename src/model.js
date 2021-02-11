import image from './assets/img/placeimg_640_480_nature.jpg'
import { TitleBlock, TextBlock, ImageBlock, ColumnsBlock } from './classes/blocks';

export const model = [
    new TitleBlock('Конструктор на JS', {
        tag: 'h2',
        styles: {
            'background': 'linear-gradient(to right, #ff0099, #493240)',
            'color': ' #fff',
            'text-align': 'center',
            'padding': '1.5rem'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: 'auto',
            height: 'auto'
        },
        alt: "nature"
    }),
    new TextBlock('here we go with some text', {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
    new ColumnsBlock([
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, praesentium?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, praesentium?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, praesentium?'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }

    })
]
