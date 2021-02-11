
import { row, col, css } from './../utils';

class Block {
    constructor(value, options) {

        this.value = value
        this.options = options
    }

    toHTML() {
        throw new Arrow('метод toHTML должен быть реализован')
    }

}

export class TitleBlock extends Block {
    constructor(value, options) {
        super( value, options)

    }
    toHTML() {
        const { tag = 'h1', styles } = this.options
        return row(col(` <${tag}>${this.value}</${tag}>`), css(styles))
    }

}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }
    toHTML() {
        const { styles } = this.options
        return row(col(`<p>${this.value}</p>`), css(styles))

    }
}
export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options)

    }
    toHTML() {
        const { styles, imageStyles: is, alt = '' } = this.options
        return row(`<img src=${this.value} alt="${alt}" style="${css(is)}"/>`, css(styles))
    }
}
export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options)

    }
    toHTML() {
        const { styles } = this.options
        const html = this.value.map(item => col(item))
        return row(html.join(''), css(styles))
    }
}
