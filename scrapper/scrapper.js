/***
 *    ___________                     .__
 *    \_   _____/ ____   ____   _____ |__| ____   ______
 *     |    __)_ /    \_/ __ \ /     \|  |/ __ \ /  ___/
 *     |        \   |  \  ___/|  Y Y  \  \  ___/ \___ \
 *    /_______  /___|  /\___  >__|_|  /__|\___  >____  >
 *            \/     \/     \/      \/        \/     \/
 */

// Indices vary by profession!
const enemyTableIndex = 1;
const vulnerabilityColIndex = 7;
const immunityColIndex = 6;
console.log(
    JSON.stringify(
        Array.from(document.querySelectorAll("table")[enemyTableIndex].querySelectorAll("tr"))
            .slice(1).map(row => {
            const cells = row.querySelectorAll("td");
            return {
                name: cells[3]?.textContent?.trim() || "",
                url: cells[3]?.querySelector("a")?.href || "",
                unlockLevel: parseInt(cells[0]?.textContent?.trim() || ""),
                combatLevel: parseInt(cells[1]?.textContent?.trim() || ""),
                vulnerability: `elements.${cells[vulnerabilityColIndex]?.textContent?.trim().toLowerCase() || ""}`,
                immunity: `elements.${cells[immunityColIndex]?.textContent?.trim().toLocaleLowerCase() || ""}`,
            };
        }), null, 2)
        .replaceAll('"elements.none"', 'null')
        .replace(/"elements\.(\w+)"/gm, "elements.$1")
);

/***
 *    ___________            .__                              __
 *    \_   _____/ ________ __|__|_____   _____   ____   _____/  |_
 *     |    __)_ / ____/  |  \  \____ \ /     \_/ __ \ /    \   __\
 *     |        < <_|  |  |  /  |  |_> >  Y Y  \  ___/|   |  \  |
 *    /_______  /\__   |____/|__|   __/|__|_|  /\___  >___|  /__|
 *            \/    |__|        |__|         \/     \/     \/
 */

const equipmentTableIndex = 5; // Index varies by faction!
console.log(
    JSON.stringify(
        Array.from(document.querySelectorAll("table")[equipmentTableIndex].querySelectorAll("tr"))
            .slice(1)
            .map(row => {
                const cells = row.querySelectorAll("td");
                return {
                    name: cells[2]?.querySelector("a")?.title.trim() || "",
                    category: cells[2]?.querySelector("a")?.title.split('(')[0].trim() || "",
                    craftingLevel: parseInt(cells[0]?.textContent?.trim() || ""),
                    maxLevel: parseInt(cells[1]?.textContent?.trim().split('–')[1] || '0'),
                    url: cells[2]?.querySelector("a")?.href || "",
                    materials: Array.from(
                        (cells[4]?.textContent?.trim() || "")
                            .matchAll(/(\d+) × {2}([a-zA-Z ]+)/gm)
                            .map((m) => ({
                                    quantity: parseInt(m[1]),
                                    material: m[2]
                                })
                            )
                    ),
                };
            }), null, 2)
);

