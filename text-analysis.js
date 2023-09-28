

// Determine whether the sentiment of text is positive
// Use a web service to determine the sentiment of text

const fetch = require("node-fetch");

async function isPositive(text) {
    const response = await fetch(`http://text-processing.com/api/sentiment/`, {
        method: "POST",
        body: `text=${text}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      const json = await response.json();
      return json.label === "pos";
}


async function phrases(text) {
  const response = await fetch(`http://text-processing.com/api/phrases/`, {
      method: "POST",
      body: `text=${text}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const json = await response.json();
    return json;
}

// Stem a word in a given language
async function stem(word, language) {
    const response = await fetch(`http://text-processing.com/api/stem/`, {
        method: "POST",
        body: `language=${language}&text=${word}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      const json = await response.json();
      return json;
}

// OCR text from a url using hugginsfaces OCR service
// This code uses the fetch() function to make a request to the Haven OnDemand OCR Document API, using the URL of a document as the input. It then returns the result of the request as a JSON object.
async function extract(url) {
    const response = await fetch(`http://api.havenondemand.com/1/api/sync/ocrdocument/v1?url=${url}&apikey=YOUR_API_KEY`, {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      const json = await response.json();
      return json;
}


module.exports = { isPositive, phrases, stem, extract };

