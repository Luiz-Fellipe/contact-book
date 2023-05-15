/**
 * Represents a pagination link with page and limit values.
 */
interface PaginationLink {
  page: number;
  limit: number;
}

/**
 * Represents pagination links with corresponding keys.
 */
interface PaginationLinks {
  [key: string]: PaginationLink;
}

/**
 * Parses the pagination links from the input string and returns them as an object.
 * @param input The input string containing pagination links.
 * @returns An object containing the parsed pagination links or null.
 */
export function parseHeaderLinks(input: string): PaginationLinks | null {
  if (input.length === 0) return null;

  const links: PaginationLinks = {};

  const regex = /<([^>]+)>; rel="([^"]+)"/g;

  const matches = Array.from(input.matchAll(regex));

  matches.forEach((match) => {
    const url = match[1];
    const rel = match[2];
    const key = rel.split('-')[0]; // Extract the key from "rel" value

    const queryParams = new URLSearchParams(url.split('?')[1]);
    const page = Number(queryParams.get('_page'));
    const limit = Number(queryParams.get('_limit'));

    links[key] = { page, limit };
  });

  return links;
}

/**
 * Parses the pagination data based on the current page and pagination links.
 * @param page The current page.
 * @param links The pagination links.
 * @returns Pagination data indicating whether there are previous or next pages.
 */
export function parsePaginationData(
  page: number,
  links: PaginationLinks | null
) {
  if (!links) return null;
  return {
    first: page > links?.first?.page,
    last: page === links?.last?.page,
  };
}
