const { PrismaClient: NeonClient } = require('./prisma/generated/neon');
const neon = new NeonClient();

async function check() {
    console.log("--- Driver Affiliations ---");
    const drivers = await neon.driver.findMany({ include: { Affiliation: true } });
    drivers.forEach(d => {
        console.log(`Driver: ${d.name}, Affiliation: ${d.Affiliation ? d.Affiliation.name : 'NONE'}`);
    });

    console.log("\n--- Active Contract Fees ---");
    const rates = await neon.yongchaRateDetail.findMany({
        include: { YongchaContract: { include: { Affiliation: true } } }
    });
    rates.forEach(r => {
        if (r.YongchaContract?.status === 'ACTIVE') {
            console.log(`Affiliation: ${r.YongchaContract.Affiliation.name}, Region: ${r.region}, Price: ${r.price}, Tonnage: ${r.tonnage}`);
        }
    });

    await neon.$disconnect();
}

check();
