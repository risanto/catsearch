import sortResult from "./sortResult";

const input = [
  {
    weight: { imperial: "8 - 15", metric: "4 - 7" },
    id: "asho",
    name: "American Shorthair",
    life_span: "15 - 17",
  },
  {
    weight: { imperial: "7 - 15", metric: "3 - 7" },
    id: "aslo",
    name: "Asian Semi-longhair",
    life_span: "12 - 15",
  },
  {
    weight: { imperial: "8 - 18", metric: "4 - 8" },
    id: "braz",
    name: "Brazilian Shorthair",
    life_span: "14 - 20",
  },
  {
    weight: { imperial: "12 - 20", metric: "5 - 9" },
    id: "bsho",
    name: "British Shorthair",
    life_span: "12 - 17",
  },
  {
    weight: { imperial: "4 - 10", metric: "2 - 5" },
    id: "csho",
    name: "Colorpoint Shorthair",
    life_span: "12 - 16",
  },
  {
    weight: { imperial: "6 - 12", metric: "3 - 6" },
    id: "mexi",
    name: "Mexican Hairless Cat",
    life_span: "8 - 14",
  },
  {
    id: "thai",
    name: "Thai",
  },
];

test("should correctly sort name ascending", () => {
  expect(sortResult(input, "name", "asc")).toEqual([
    {
      weight: { imperial: "8 - 15", metric: "4 - 7" },
      id: "asho",
      name: "American Shorthair",
      life_span: "15 - 17",
    },
    {
      weight: { imperial: "7 - 15", metric: "3 - 7" },
      id: "aslo",
      name: "Asian Semi-longhair",
      life_span: "12 - 15",
    },
    {
      weight: { imperial: "8 - 18", metric: "4 - 8" },
      id: "braz",
      name: "Brazilian Shorthair",
      life_span: "14 - 20",
    },
    {
      weight: { imperial: "12 - 20", metric: "5 - 9" },
      id: "bsho",
      name: "British Shorthair",
      life_span: "12 - 17",
    },
    {
      weight: { imperial: "4 - 10", metric: "2 - 5" },
      id: "csho",
      name: "Colorpoint Shorthair",
      life_span: "12 - 16",
    },
    {
      weight: { imperial: "6 - 12", metric: "3 - 6" },
      id: "mexi",
      name: "Mexican Hairless Cat",
      life_span: "8 - 14",
    },
    {
      id: "thai",
      name: "Thai",
    },
  ]);
});

test("should correctly sort name descending", () => {
  expect(sortResult(input, "name", "desc")).toEqual([
    { id: "thai", name: "Thai" },
    {
      weight: { imperial: "6 - 12", metric: "3 - 6" },
      id: "mexi",
      name: "Mexican Hairless Cat",
      life_span: "8 - 14",
    },
    {
      weight: { imperial: "4 - 10", metric: "2 - 5" },
      id: "csho",
      name: "Colorpoint Shorthair",
      life_span: "12 - 16",
    },
    {
      weight: { imperial: "12 - 20", metric: "5 - 9" },
      id: "bsho",
      name: "British Shorthair",
      life_span: "12 - 17",
    },
    {
      weight: { imperial: "8 - 18", metric: "4 - 8" },
      id: "braz",
      name: "Brazilian Shorthair",
      life_span: "14 - 20",
    },
    {
      weight: { imperial: "7 - 15", metric: "3 - 7" },
      id: "aslo",
      name: "Asian Semi-longhair",
      life_span: "12 - 15",
    },
    {
      weight: { imperial: "8 - 15", metric: "4 - 7" },
      id: "asho",
      name: "American Shorthair",
      life_span: "15 - 17",
    },
  ]);
});

test("should correctly sort weight ascending", () => {
  expect(sortResult(input, "weight", "asc")).toEqual([
    { id: "thai", name: "Thai" },
    {
      weight: { imperial: "4 - 10", metric: "2 - 5" },
      id: "csho",
      name: "Colorpoint Shorthair",
      life_span: "12 - 16",
    },
    {
      weight: { imperial: "6 - 12", metric: "3 - 6" },
      id: "mexi",
      name: "Mexican Hairless Cat",
      life_span: "8 - 14",
    },
    {
      weight: { imperial: "7 - 15", metric: "3 - 7" },
      id: "aslo",
      name: "Asian Semi-longhair",
      life_span: "12 - 15",
    },
    {
      weight: { imperial: "8 - 15", metric: "4 - 7" },
      id: "asho",
      name: "American Shorthair",
      life_span: "15 - 17",
    },
    {
      weight: { imperial: "8 - 18", metric: "4 - 8" },
      id: "braz",
      name: "Brazilian Shorthair",
      life_span: "14 - 20",
    },
    {
      weight: { imperial: "12 - 20", metric: "5 - 9" },
      id: "bsho",
      name: "British Shorthair",
      life_span: "12 - 17",
    },
  ]);
});

test("should correctly sort weight descending", () => {
  expect(sortResult(input, "weight", "desc")).toEqual([
    {
      weight: { imperial: "12 - 20", metric: "5 - 9" },
      id: "bsho",
      name: "British Shorthair",
      life_span: "12 - 17",
    },
    {
      weight: { imperial: "8 - 18", metric: "4 - 8" },
      id: "braz",
      name: "Brazilian Shorthair",
      life_span: "14 - 20",
    },
    {
      weight: { imperial: "8 - 15", metric: "4 - 7" },
      id: "asho",
      name: "American Shorthair",
      life_span: "15 - 17",
    },
    {
      weight: { imperial: "7 - 15", metric: "3 - 7" },
      id: "aslo",
      name: "Asian Semi-longhair",
      life_span: "12 - 15",
    },
    {
      weight: { imperial: "6 - 12", metric: "3 - 6" },
      id: "mexi",
      name: "Mexican Hairless Cat",
      life_span: "8 - 14",
    },
    {
      weight: { imperial: "4 - 10", metric: "2 - 5" },
      id: "csho",
      name: "Colorpoint Shorthair",
      life_span: "12 - 16",
    },
    { id: "thai", name: "Thai" },
  ]);
});

test("should correctly sort lifespan ascending", () => {
  expect(sortResult(input, "life_span", "asc")).toEqual([
    { id: "thai", name: "Thai" },
    {
      weight: { imperial: "6 - 12", metric: "3 - 6" },
      id: "mexi",
      name: "Mexican Hairless Cat",
      life_span: "8 - 14",
    },
    {
      weight: { imperial: "7 - 15", metric: "3 - 7" },
      id: "aslo",
      name: "Asian Semi-longhair",
      life_span: "12 - 15",
    },
    {
      weight: { imperial: "4 - 10", metric: "2 - 5" },
      id: "csho",
      name: "Colorpoint Shorthair",
      life_span: "12 - 16",
    },
    {
      weight: { imperial: "12 - 20", metric: "5 - 9" },
      id: "bsho",
      name: "British Shorthair",
      life_span: "12 - 17",
    },
    {
      weight: { imperial: "8 - 18", metric: "4 - 8" },
      id: "braz",
      name: "Brazilian Shorthair",
      life_span: "14 - 20",
    },
    {
      weight: { imperial: "8 - 15", metric: "4 - 7" },
      id: "asho",
      name: "American Shorthair",
      life_span: "15 - 17",
    },
  ]);
});

test("should correctly sort lifespan descending", () => {
  expect(sortResult(input, "life_span", "desc")).toEqual([
    {
      weight: { imperial: "8 - 15", metric: "4 - 7" },
      id: "asho",
      name: "American Shorthair",
      life_span: "15 - 17",
    },
    {
      weight: { imperial: "8 - 18", metric: "4 - 8" },
      id: "braz",
      name: "Brazilian Shorthair",
      life_span: "14 - 20",
    },
    {
      weight: { imperial: "12 - 20", metric: "5 - 9" },
      id: "bsho",
      name: "British Shorthair",
      life_span: "12 - 17",
    },
    {
      weight: { imperial: "4 - 10", metric: "2 - 5" },
      id: "csho",
      name: "Colorpoint Shorthair",
      life_span: "12 - 16",
    },
    {
      weight: { imperial: "7 - 15", metric: "3 - 7" },
      id: "aslo",
      name: "Asian Semi-longhair",
      life_span: "12 - 15",
    },
    {
      weight: { imperial: "6 - 12", metric: "3 - 6" },
      id: "mexi",
      name: "Mexican Hairless Cat",
      life_span: "8 - 14",
    },
    { id: "thai", name: "Thai" },
  ]);
});
