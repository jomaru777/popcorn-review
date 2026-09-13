export interface Theater {
    id: string,
    name: string,
    address: string,
    lat: number,
    lng: number,
    price?: {
        name: string,
        price: number
    }[],
}

export const theaters: Theater[] = [
    {
        id: 'toho-midorii',
        name: "TOHOシネマズ緑井",
        address: "広島県広島市安佐南区緑井1-5-2 フジグラン緑井3F",
        lat: 34.463,
        lng: 132.476,
        price: [
            {
                name: "レイトショー",
                price: 1500
            },
            {
                name: "水曜日",
                price: 1300
            }
        ]
    },
    {
        id: 'aeon-seifushinto',
        name: "イオンシネマ広島西風新都",
        address: "広島県広島市佐伯区石内東4-1-1 THE OUTLETS HIROSHIMA 1F",
        lat: 34.436,
        lng: 132.366,
    },
    {
        id: 'aeon-hiroshima',
        name: "イオンシネマ広島",
        address: "広島県広島市南区段原南1-3-52 広島段原ショッピングセンター6F",
        lat: 34.387,
        lng: 132.475,
    },
    {
        id: '109-hiroshima',
        name: "109シネマズ広島",
        address: "広島県広島市西区草津南4-7-1 アルパーク北棟3F",
        lat: 34.392,
        lng: 132.392,
    },
    {
        id: 'movix-hiroshimaeki',
        name: "MOVIX広島駅",
        address: "広島県広島市南区松原町2-37 ミナモア7F",
        lat: 34.397,
        lng: 132.476,
        price: [
            {
                name: "レイトショー",
                price: 1600
            },
            {
                name: "ペア50割引",
                price: 3200
            },
            {
                name: "水曜日",
                price: 1400
            }
        ]
    },
    {
        id: 'hacchoza',
        name: "八丁座",
        address: "広島県広島市中区胡町6-26 福屋八丁堀本店8F",
        lat: 34.393,
        lng: 132.466,
    },
    {
        id: 'saron-shinema',
        name: "サロンシネマ",
        address: "広島県広島市中区八丁堀16-10 広島東映プラザビル8F",
        lat: 34.394,
        lng: 132.461,
    },
    {
        id: 'yokogawa-shinema',
        name: "横川シネマ",
        address: "広島県広島市西区横川町3-1-12",
        lat: 34.409,
        lng: 132.451,
    },
    {
        id: 'baruto11',
        name: "広島バルト11",
        address: "広島県安芸郡府中町大須2-1-1イオンモール広島府中4F",
        lat: 34.3946133068579,
        lng: 132.49981241043605,
        price: [
            {
                name: "レイトショー",
                price: 1600
            },
            {
                name: "水曜日",
                price: 1400
            }
        ]
    },
];