const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {


    await saveOrphanage(db, {
        lat: "-16.6699",
        lng: "-49.255",
        name: "Lar das meninas",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "91919191",
        images:

        [
            "https://images.unsplash.com/photo-1601057271407-4e8d47924313?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",

            "https://images.unsplash.com/photo-1601373820000-252d8082a239?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
        ].toString(),

        instructions: "Venha como se sentir a vontade e traga muito amor e paciencia para dar.",
        opening_hour: "horario de visitas das 18h as 8h",
        open_on_weekends: "1"
    })
    





    const selectedOrphanage =  await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanage)

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
    console.log(orphanage)
})