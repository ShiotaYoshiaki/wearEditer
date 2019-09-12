import sinon from 'sinon';
import analyze from '../../src/service/analyze';


/**
 * sionon等をダウンロードしてから再テスト
 */
describle('Service: analyze.js 画像タグ付けAPIのテスト') {


  it('Succeess: get tags', () => {
    analyze.then((actual) => {
      expect(actual).to.be.equal(null);
    })
  })

}

