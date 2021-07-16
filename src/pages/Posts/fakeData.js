const faker = require("faker");

const data = [];

function makeTitleCase(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

for (let i = 0; i < 100; i++) {
  data.push({
    postId: faker.datatype.uuid(),
    profileImg: faker.internet.avatar(),
    author: faker.internet.userName(),
    datetime: faker.datatype
      .datetime()
      .toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    title: makeTitleCase(faker.lorem.sentence()),
    text: faker.helpers.shuffle([
      faker.lorem.paragraph(),
      faker.lorem.paragraphs(),
    ])[0],
    hasThumbnail: faker.datatype.boolean(),
    thumbnailSrc: faker.image.image(),
    liked: faker.datatype.boolean(),
  });
}

export default data;
