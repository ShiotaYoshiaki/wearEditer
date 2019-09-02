import { getImageTags } from '../repository/visionRepository';


async function getTags() {
  const imageTags = await getImageTags();
  const tags = imageTags.tags[0].labelAnnotations.map(tag => {
    return {
      description: tag.description,
      score: tag.score,
    }
  });
  return tags;
}

export default async (param) => {
  try {
    const tags = await getTags();
    const result = 'success';
    const message = '';
    return {
      result,
      message,
      tags,
    };
  } catch (e) {
    console.log(e);
  }
}

