export default class Language {
    label: string
    id: number
    imagePath: string
    text: object

    constructor({
        label,
        id,
        imagePath,
        text,
    } : {
        label: string,
        id: number,
        imagePath: string,
        text: object,
    }) {
        this.label = label;
        this.id = id;
        this.imagePath = imagePath;
        this.text = text;
    }
}