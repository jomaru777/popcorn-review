
export interface Popcorn {
    theaterId: string,
    flavor: string,
    rating: number,
    prices: {
        name: string,
        price: number
    }[],
    comment: string,
    movieTitle: string[]
}

export const popcorns: Popcorn[] = [
    {
        theaterId: "toho-midorii",
        flavor: "キャラメル",
        rating: 4.5,
        prices:[
            {
                name: "ポップコーンペアセット",
                price: 1290,
            }
        ],
        comment: "美味しい",
        movieTitle: [
            "ジュラシック・ワールド／復活の大地"
        ],
    },
    {
        theaterId: 'aeon-hiroshima',
        flavor: "塩",
        rating: 4.5,
        prices:[
            {
                name: "ポップコーンペアセット",
                price: 1300,
            }
        ],
        comment: "塩と思ったら高いが、クレジットカードで映画が割引になるのでそこがGOOD",
        movieTitle: [
            "劇場版「鬼滅の刃」無限城編 第一章 猗窩座再来"
        ],
    },
    {
        theaterId: '109-hiroshima',
        flavor: "キャラメル",
        rating: 4.5,
        prices:[
            {
                name: "ポップコーンペアセット",
                price: 1430,
            }
        ],
        comment: "味はいいが少し小さい気がする",
        movieTitle: [
            "劇場版『チェンソーマン レゼ篇』"
        ],
    },
    {
        theaterId: 'movix-hiroshimaeki',
        flavor: "キャラメル",
        rating: 4.5,
        prices:[
            {
                name: "ポップコーンセットL",
                price: 1350,
            }
        ],
        comment: "美味しい",
        movieTitle: [
            "劇場版『名探偵コナン 隻眼の残像』"
        ],
    },
    {
        theaterId: 'baruto11',
        flavor: "キャラメル",
        rating: 4.5,
        prices: [
            {
                name: "ポップコーンセット",
                price: 900,
            },
            {
                name: "ポップコーンペアセットL",
                price: 1350
            },
        ],
        comment: "美味しい",
        movieTitle: [
            "劇場版「僕の心のヤバイやつ」",
            "劇場版『名探偵コナン ハイウェイの堕天使』"
        ],
    },
];