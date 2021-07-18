const faker = require("faker");

const today = new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const data = [];

const NUM_SHORTNER_RANGE = {
  'K': {
    min: 1000,
    max: 99999
  },
  'M': {
    min: 100000,
    max: 9999999
  },
  'B': {
    min: 100000000,
    max: 9999999999
  }
}

let generateChannelName = () => {
  const myVar = faker.lorem.sentence(faker.datatype.number({ min: 1, max: 3 }));
  // For avoiding Full Stop(.) at the end
  return myVar.substring(0, myVar.length - 1);
};

for (let i = 0; i < 15; i++) {
  let getChannelName = generateChannelName();
  let uuid = faker.datatype.uuid();
  data.push({
    id: uuid,
    thumbnailImgSrc: faker.image.image(),
    videoSrc: "#video/" + uuid,
    title: faker.lorem.sentence(),
    views: faker.helpers.shuffle([
      faker.datatype.number({min: 0, max: NUM_SHORTNER_RANGE['K'].max}),
      faker.datatype.number({min: NUM_SHORTNER_RANGE['M'].min, max: NUM_SHORTNER_RANGE['M'].max}),
      faker.datatype.number({min: NUM_SHORTNER_RANGE['B'].min, max: NUM_SHORTNER_RANGE['B'].max})
    ])[0],
    datetime: faker.datatype.datetime().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    channelName: getChannelName,
    channelSrc: "#channel/" + getChannelName,
    channelProfileImgSrc: faker.internet.avatar(),
    description: faker.lorem.paragraph(),
  });
}

export default data;
