function extractCategory(cell) {
    return cell?.querySelector("a")?.title
        .match(/\d+ to \d+ ([a-zA-Z ]+)/)[1];
}

function extractMaterials(cell) {
    return Array.from(
        (cell?.textContent?.trim() || "")
            .matchAll(/(\d+) × {2}([a-zA-Z ]+)/gm)
            .map((m) => ({
                    quantity: parseInt(m[1]),
                    material: m[2]
                })
            )
    );
}

function formatRow(row) {
    const cells = row.querySelectorAll("td");
    return {
        name: cells[2]?.querySelector("a")?.title.trim() || "",
        category: extractCategory(cells[2]),
        craftingLevel: parseInt(cells[0]?.textContent?.trim() || ""),
        minLevel: parseInt(cells[1]?.textContent?.trim().split('–')[0] || '0'),
        maxLevel: parseInt(cells[1]?.textContent?.trim().split('–')[1] || '0'),
        url: cells[2]?.querySelector("a")?.href || "",
        materials: extractMaterials(cells[4]),
    };
}

function scrapEquipment(tableIndex = 5) {
    const table = document.querySelectorAll("table")[tableIndex];
    const rows = Array.from(table.querySelectorAll("tr")).slice(1);
    const data = rows.map(formatRow);
    return JSON.stringify(data, null, 2);
}

console.log(scrapEquipment());
