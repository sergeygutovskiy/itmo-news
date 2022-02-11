export default class NewsArticle {
    id: number
    title: string
    date: string
    lead: string
    imagePath: string

    constructor({
        id,
        title,
        date,
        lead,
        imagePath,
    } : {
        id: number
        title: string
        date: string,
        lead: string
        imagePath: string
    }) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.lead = lead;
        this.imagePath = imagePath;
    }

    static fromJSON(data: any) : NewsArticle {
        return new NewsArticle({
            id: data.id,
            title: data.title,
            date: data.date,
            lead: data.lead,
            imagePath: data.image_big,
        });
    }
}