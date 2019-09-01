import  { getImageTags } from '../repository/visionRepository';


async function getTags() {
  const tags = await getImageTags();
  return tags;
}

export default async (param) => {

  const tags = await getTags();

  const result= 'success';
  const message = '';

  return {
    result,
    message,
    tags,
  };
}

