const { PrismaClient } = require('/home/red/바탕화면/scratch/ndy-truckingfreight/prisma/generated/neon');
const prisma = new PrismaClient();

async function main() {
    try {
        console.log("--- Searching for Driver: 김귀헌 ---");
        const driver = await prisma.driver.findFirst({
            where: { name: { contains: '김귀헌' } },
            include: { Affiliation: true }
        });
        console.log("Driver Data:", JSON.stringify(driver, null, 2));

        console.log("\n--- Searching for Affiliation: 이룸 ---");
        const affs = await prisma.affiliation.findMany({
            where: { name: { contains: '이룸' } },
            include: { 
                YongchaContract: { 
                    include: { YongchaRateDetail: true } 
                } 
            }
        });
        console.log("Affiliation Data:", JSON.stringify(affs, null, 2));

        if (driver && driver.Affiliation) {
            console.log("\n--- Checking matched fees for this driver's affiliation ---");
            const driverAffName = driver.Affiliation.name;
            const matchedFees = await prisma.yongchaRateDetail.findMany({
                where: {
                    tonnage: driver.tonnage || '1T',
                    YongchaContract: {
                        Affiliation: { name: driverAffName },
                        status: 'ACTIVE'
                    }
                }
            });
            console.log(`Matched Fees for ${driverAffName} (${driver.tonnage}):`, JSON.stringify(matchedFees, null, 2));
        }

    } catch (e) {
        console.error("Debug Error:", e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
