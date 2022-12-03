const axios = require('axios');

const httpRequestPubSub = async (dailyPromotion) => {
    dailyPromotion.items.forEach(async value => {
        const { data: gameDetails } = await axios({
            method: 'get',
            url: `https://store.steampowered.com/api/appdetails/?appids=${value.id}`
        })

        gameDetails[value.id].data.genres.forEach(async (genre, i) => {
            await axios({
                method: 'post',
                url: `http://localhost:3060/publish`,
                data: {
                    channel: genre.description,
                    content: {
                        ...value,
                        ...gameDetails[value.id].data.price_overview,
                        date: new Date().toLocaleString()
                    }
                }
            })
        })

        await axios({
            method: 'post',
            url: `http://localhost:3060/publish`,
            data: {
                channel: `${gameDetails[value.id].data.name.toUpperCase().replace(/\W/g, '')}*`,
                content: {
                    ...value,
                    ...gameDetails[value.id].data.price_overview,
                    date: new Date().toLocaleString()
                }
            }
        })

    })
}

const httpRequestSteam = async () => {
    const { data } = await axios({
        method: 'get',
        url: 'https://store.steampowered.com/api/featuredcategories'
    })

    const parameter = Object.getOwnPropertyNames(data)
    let dailyPromotion
    parameter.forEach(value => {
        if (data[value].id === 'cat_dailydeal') {
            dailyPromotion = data[value]
        }
    })

    await httpRequestPubSub(dailyPromotion)
    return
};

(async () => {
    var i = 0;

    while (
        await new Promise(async resolve => {

            await httpRequestSteam()

            setTimeout(() => resolve(i++), 72000000)
        }) < 100000
    ) {
        console.log(`Rotina ${i}`);
    }
})();

