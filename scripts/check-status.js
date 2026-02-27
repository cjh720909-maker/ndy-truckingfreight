const { PrismaClient } = require('../prisma/generated/neon');
const neon = new PrismaClient();

async function check() {
    try {
        const affs = await neon.affiliation.count();
        const drivers = await neon.driver.count();
        const contracts = await neon.yongchaContract.count();
        const history = await neon.settlementHistory.count();
        
        console.log({
            affiliations: affs,
            drivers: drivers,
            contracts: contracts,
            history: history
        });
    } catch (e) {
        console.error(e);
    } finally {
        await neon.$disconnect();
    }
}

check();
