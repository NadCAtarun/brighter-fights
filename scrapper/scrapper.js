// Use that on the Brighter Shores Wiki via the Console to extract the enemies
let tableIndex = 1; // Index varies by profession!
console.log(
    JSON.stringify(
        Array.from(document.querySelectorAll("table")[tableIndex].querySelectorAll("tr"))
            .slice(1).map(row => {
            const cells = row.querySelectorAll("td");
            return {
                name: cells[3]?.textContent?.trim() || "",
                url: cells[3]?.querySelector("a")?.href || "",
                unlockLevel: parseInt(cells[0]?.textContent?.trim() || ""),
                combatLevel: parseInt(cells[1]?.textContent?.trim() || ""),
                vulnerability: `elements.${cells[6]?.textContent?.trim().toLowerCase() || ""}`,
                immunity: `elements.${cells[6]?.textContent?.trim().toLocaleLowerCase() || ""}`,
            };
        }), null, 2)
        .replaceAll('"elements.none"', 'null')
        .replace(/"elements\.(\w+)"/gm, `elements.$1`)
);
