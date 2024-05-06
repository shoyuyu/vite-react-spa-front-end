import Heading from '@components/Heading';
import SampleArticle1 from '@assets/articles/sample-article-1.jpg';
import SampleArticle2 from '@assets/articles/sample-article-2.jpg';
import SampleArticle3 from '@assets/articles/sample-article-3.jpg';
import SampleArticle4 from '@assets/articles/sample-article-4.jpg';

function Articles() {
  const articles = [
    {
      spot: 'キャンプ場_1',
      area: '地域_1',
      title: '森の中でアクティビティ体験',
      description:
        '都心から車で80分。緑に囲まれたキャンプ場で、関東圏最大級のウッドデッキや大型のアクティビティエリアが併設された、ここでしか味わえないキャンプ体験を楽しめます。',
      imgSrc: SampleArticle1,
    },
    {
      spot: 'キャンプ場_2',
      area: '地域_2',
      title: '山並みの中に佇む森の中の秘密基地',
      description:
        '雄大な自然の中で開かれたキャンピングエリアは、まるで森の中の秘密基地！山々に囲まれた空間で特別な時間をお過ごしいただけます。',
      imgSrc: SampleArticle2,
    },
    {
      spot: 'キャンプ場_3',
      area: '地域_3',
      title: '海が目の前に見える海岸のキャンプ場',
      description:
        '太平洋を見渡せるロケーション抜群な景観が特徴で、オーシャンビューと夜は満点の星空を楽しめます。海岸までは徒歩5分、海水浴はもちろん、釣りや潮干狩りなど様々なアクティビティを体験する事もできます。',
      imgSrc: SampleArticle3,
    },
    {
      spot: 'キャンプ場_4',
      area: '地域_4',
      title: '日本海を見下ろす絶景',
      description:
        '日本海を見下ろす事が出来る山の上のキャンプ場。天気が良い日は満点の星空が見える絶景のロケーションです。',
      imgSrc: SampleArticle4,
    },
  ];

  return (
    <article>
      <Heading
        title="全国のキャンプ場を紹介"
        description="定番のキャンプ場から穴場のスポットまで、日本各地の様々なソロキャン向けのキャンプ場を紹介しています。"
      />
      <div className="articles">
        <div>
          <section className="article">
            {articles.map((article, index) => (
              <div key={index}>
                <h3 className="article-title">
                  {article.spot}
                  <span>{article.area}</span>
                </h3>
                <dl className="article-image">
                  <dt>
                    <img src={article.imgSrc} alt={article.title} />
                  </dt>
                  <dd>{article.title}</dd>
                </dl>
                <p className="article-description">{article.description}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </article>
  );
}

export default Articles;
