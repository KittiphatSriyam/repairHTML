const sanitizeHtml = require("sanitize-html");

export const repairHTML = element => {
  element = element
    .replace(/\t/g, "")
    .replace(/\r/g, "")
    .replace(/\n/g, "");

  var contentSantize = sanitizeHtml(element, {
    allowedTags: ["p", "br", "div", "h1", "h2", "h3", "h4", "span"],
    allowedAttributes: {
      "*": ["style"]
    }
  });
  return contentSantize;
};
