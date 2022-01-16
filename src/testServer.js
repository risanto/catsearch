import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("https://api.thecatapi.com/v1/breeds/search", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          weight: {
            imperial: "5 - 9",
            metric: "2 - 4",
          },
          id: "munc",
          name: "Munchkin",
          vetstreet_url: "http://www.vetstreet.com/cats/munchkin",
          temperament: "Agile, Easy Going, Intelligent, Playful",
          origin: "United States",
          country_codes: "US",
          country_code: "US",
          description:
            "The Munchkin is an outgoing cat who enjoys being handled. She has lots of energy and is faster and more agile than she looks. The shortness of their legs does not seem to interfere with their running and leaping abilities.",
          life_span: "10 - 15",
          indoor: 0,
          lap: 1,
          alt_names: "",
          adaptability: 5,
          affection_level: 5,
          child_friendly: 4,
          dog_friendly: 5,
          energy_level: 4,
          grooming: 2,
          health_issues: 3,
          intelligence: 5,
          shedding_level: 3,
          social_needs: 5,
          stranger_friendly: 5,
          vocalisation: 3,
          experimental: 0,
          hairless: 0,
          natural: 0,
          rare: 0,
          rex: 0,
          suppressed_tail: 0,
          short_legs: 1,
          wikipedia_url: "https://en.wikipedia.org/wiki/Munchkin_(cat)",
          hypoallergenic: 0,
          reference_image_id: "j5cVSqLer",
        },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };