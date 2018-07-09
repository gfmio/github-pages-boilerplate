/**
 * @module helpers/generate-title
 * Exports a function generateTitle() to generate page titles
 */

import { pageTitle, titleSeparator } from "../config";

export function generateTitleFactory(separator, reverse: boolean, ...fixedParts: string[]) {
    return reverse
        ? (...parts: string[]) => [...fixedParts, ...parts].reverse().join(separator)
        : (...parts: string[]) => [...fixedParts, ...parts].join(separator);
}

export const generateTitle = generateTitleFactory(titleSeparator, true, pageTitle);
