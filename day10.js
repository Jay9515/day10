function bandNamesSort(bandNames) {
  const articlesRegex = /^(The|A|An)\s/i;

  function customSort(a, b) {
    const bandNameA = a.replace(articlesRegex, "").toLowerCase();
    const bandNameB = b.replace(articlesRegex, "").toLowerCase();
    return bandNameA.localeCompare(bandNameB);
  }

  return bandNames.sort(customSort);
}

console.log(
  bandNamesSort([
    "The Rolling Stones",
    "A Tribe Called Quest",
    "The Strokes",
    "Anathema",
  ])
);
console.log(
  bandNamesSort([
    "The Police",
    "A Perfect Circle",
    "The Killers",
    "Anberlin",
    "Alice in Chains",
  ])
);
console.log(
  bandNamesSort([
    "The Black Keys",
    "A Day to Remember",
    "The White Stripes",
    "Anathallo",
    "All Time Low",
  ])
);
