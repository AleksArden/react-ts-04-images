export interface IImages {
    id: string,
    webformatURL: string,
    tags: string,
    largeImageURL: string,
}

export interface ICurrentImage {
    src: string,
    alt: string,
}

export type Item = Pick<IImages, 'webformatURL' | 'tags' | 'largeImageURL'>