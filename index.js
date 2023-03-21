const EleventyFetch = require("@11ty/eleventy-fetch");
const dotenv = require("dotenv");

dotenv.config();

main("11ty/eleventy-fetch");

async function main(orgRepo) {
  const res = await EleventyFetch(`https://api.github.com/repos/${orgRepo}`, {
    duration: "1d",
    type: "json",
    fetchOptions: {
      headers: {
        "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    },
  });
  console.log({ res });
}
