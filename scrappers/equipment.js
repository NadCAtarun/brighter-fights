/**
 * Extracts a category name from a given table cell element.
 *
 * @param {HTMLElement} cell - The table cell element to extract the category from. It should contain an anchor tag with a title attribute.
 * @return {string|undefined} The extracted category name from the title attribute, or undefined if the pattern is not matched or the cell is invalid.
 */
function extractCategory(cell) {
    return cell?.querySelector("a")?.title
        .match(/\d+ to \d+ ([a-zA-Z ]+)/)[1];
}

/**
 * Extracts a list of materials and their quantities from the text content of a given cell.
 *
 * @param {HTMLElement} cell - The HTML element from which materials and quantities will be extracted.
 * @return {Array<Object>} Returns an array of objects, where each object contains the `quantity` (number) and `material` (string).
 */
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

/**
 * Formats a table row element into an object with specific properties extracted.
 *
 * @param {HTMLElement} row - The table row element to be formatted.
 * @return {Object} An object containing the extracted and formatted data, including:
 * - name: The title from the third cell's anchor tag, trimmed.
 * - category: The extracted category from the third cell.
 * - craftingLevel: The parsed crafting level from the first cell.
 * - minLevel: The parsed minimum level from the second cell.
 * - maxLevel: The parsed maximum level from the second cell.
 * - url: The href attribute of the anchor tag in the third cell.
 * - materials: The extracted materials from the fifth cell.
 */
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

/**
 * Extracts and formats equipment data from a specified HTML table, then converts it to a JSON string.
 *
 * @param {number} [tableIndex=5] - The index of the table in the document to scrape. Defaults to 5.
 * @return {string} A JSON-formatted string representing the extracted equipment data.
 */
function scrapeEquipment(tableIndex = 5) {
    const table = document.querySelectorAll("table")[tableIndex];
    const rows = Array.from(table.querySelectorAll("tr")).slice(1);
    const data = rows.map(formatRow);
    return JSON.stringify(data, null, 2);
}

console.log(scrapeEquipment());
