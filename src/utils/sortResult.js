const sortResult = (searchResult, sortBy, sortOrder) => {
  const sorted = searchResult.sort((a, b) => {
    let aSortBy = a[sortBy],
      bSortBy = b[sortBy];

    if (sortBy === "weight") {
      const aWeight = a.weight?.metric.split("-") ?? [0, 0],
        bWeight = b.weight?.metric.split("-") ?? [0, 0];

      aSortBy = +aWeight[0];
      bSortBy = +bWeight[0];

      if (aSortBy === bSortBy) {
        if (sortOrder === "asc") {
          return +aWeight[1] - +bWeight[1];
        } else {
          return +bWeight[1] - +aWeight[1];
        }
      }
    } else if (sortBy === "life_span") {
      const aLifespan = a.life_span?.split("-") ?? [0, 0],
        bLifespan = b.life_span?.split("-") ?? [0, 0];

      aSortBy = +aLifespan[0];
      bSortBy = +bLifespan[0];

      if (aSortBy === bSortBy) {
        if (sortOrder === "asc") {
          return +aLifespan[1] - +bLifespan[1];
        } else {
          return +bLifespan[1] - +aLifespan[1];
        }
      }
    }

    if (sortOrder === "asc") {
      return aSortBy > bSortBy ? 1 : -1;
    } else {
      return aSortBy < bSortBy ? 1 : -1;
    }
  });
  return sorted;
};

export default sortResult;
