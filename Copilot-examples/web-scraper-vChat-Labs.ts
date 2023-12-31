// Started with the code generated by the Copilot Chat tool.
// List Steps brush to add comments
// Add Types brush to add all the missing types, or at least best that it could

// Define a class named WebScraper
class WebScraper {
    // The constructor takes a single parameter named url
    constructor(url) {
        // Store the url in an instance variable named url
        this.url = url;
    }
    /// Use the Labs fix tool here to show that it can 'usually' fix basic bugs, or sometimes more complicated bugs

    // Define an async method named scrape
    async scrape(): Promise<{ pageTitle: string; link: string }[]> {
        // Load the contents of the url and store in a variable named response
        const response: Response = await fetch(this.url);

        // Convert the response to text and store in a variable named text
        const text: string = await response.text();

        // Create a new DOMParser instance named parser
        const parser: DOMParser = new DOMParser();

        // Parse the text into an HTML document named htmlDoc
        const htmlDoc: Document = parser.parseFromString(text, "text/html");

        // Get all <a> elements from the htmlDoc
        const links: HTMLCollectionOf<HTMLAnchorElement> = htmlDoc.getElementsByTagName("a");

        // Create a new array named results
        const results: { pageTitle: string; link: string }[] = [];

        // Loop through all of the links
        for (let i: number = 0; i < links.length; i++) {
            // Get the href and textContent of the link
            const link: string = links[i].href;
            const title: string = links[i].textContent.trim();

            // If the link starts with "http" and has a title
            if (link && link.startsWith("http") && title) {
                // Add an object to the results array
                results.push({ pageTitle: title, link: link });
            }
        }

        // Return the results array
        return results;
    }
}
