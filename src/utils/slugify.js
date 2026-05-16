export const generateSlug = (text) => {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
};

export const normalizeSearchText = (text) => {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^\w\s]/g, '')        // Remove all special chars except spaces
    .replace(/\s+/g, ' ')           // Replace multiple spaces with single space
    .trim();
};
