import vision from 'node-cloud-vision-api';

vision.init({auth: 'AIzaSyByFiCHTp_PO3Dc_1wNqoBWRYT_jIRkilE'});

function createAnalyzeParam () {
  const param = new vision.Request({
    image: new vision.Image('./test/data/image/sampleWear.jpg'),
    features: [
      new vision.Feature('LABEL_DETECTION', 20),
      new vision.Feature('LOGO_DETECTION', 4),
    ]
  });
  return param;
}


export async function getImageTags() {
    const param = createAnalyzeParam();
    return vision.annotate(param).then((res) => {
                                return new Promise((resolve, reject) => {
                        resolve(res.responses);
        })
    }).catch((e) => {
            })
}

