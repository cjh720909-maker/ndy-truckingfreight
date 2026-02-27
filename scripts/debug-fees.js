const { PrismaClient: NeonClient } = require('../prisma/generated/neon');
const neon = new NeonClient();

async function debug() {
    console.log("=== 1. Drivers Sample ===");
    const drivers = await neon.driver.findMany({ 
        take: 5,
        include: { Affiliation: true } 
    });
    console.log(JSON.stringify(drivers.map(d => ({
        name: d.name,
        affiliationName: d.Affiliation?.name,
        tonnage: d.tonnage
    })), null, 2));

    console.log("\n=== 2. Fee Master Sample (Active Only) ===");
    const activeContracts = await neon.yongchaContract.findMany({
        where: { status: 'ACTIVE' },
        include: { Affiliation: true, YongchaRateDetail: { take: 5 } }
    });
    
    activeContracts.forEach(c => {
        console.log(`Contract: ${c.Affiliation?.name} (${c.year})`);
        c.YongchaRateDetail.forEach(r => {
            console.log(`  - Region: [${r.region}], Tonnage: [${r.tonnage}], Price: ${r.price}`);
        });
    });

    console.log("\n=== 3. Affiliations List ===");
    const affs = await neon.affiliation.findMany();
    console.log(affs.map(a => a.name).join(', '));

    await neon.$disconnect();
}

debug().catch(console.error);
