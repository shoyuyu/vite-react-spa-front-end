import Heading from '@components/Heading';
import SamplePickup1 from '@assets/pickup/sample-pickup-1.jpg';
import SamplePickup2 from '@assets/pickup/sample-pickup-2.jpg';
import SamplePickup3 from '@assets/pickup/sample-pickup-3.jpg';

function Top() {
  const pickupList = [
    {
      img: SamplePickup1,
      title: 'オススメのキャンプ場_1',
      area: '地域_1',
      description:
        '季節を通して四季折々の諸物を楽しむことができる湖畔のキャンプ場。同敷地内には宿泊施設の他にショッピングモールや温泉も併設されています。',
    },
    {
      img: SamplePickup2,
      title: 'オススメのキャンプ場_2',
      area: '地域_2',
      description:
        '東京ドーム約15個分の広大な森林公園内に併設されたキャンプ場。敷地内では、BBQ、焚き火、温泉などを楽しむ事ができます。',
    },
    {
      img: SamplePickup3,
      title: 'オススメのキャンプ場_3',
      area: '地域_3',
      description:
        '標高約1,000mに位置する高原キャンプ場。標高が高いため、避暑地として夏場でも快適に過ごすことができます。',
    },
  ];

  return (
    <article>
      <Heading
        title="休日はソロキャンに出かけよう。"
        description={
          'ソロキャンプにオススメの日本全国のキャンプ場を紹介しているサイトです。都心に近いアクセスの良い場所から、自然豊かなエリアなど魅力溢れるキャンプ場を掲載しています。\n「ソロキャン紹介サイト」は、ソロキャンプの楽しみ方を提供致します。'
        }
      />
      <section className="pickup">
        <h3>オススメのキャンプ場</h3>
        <ul className="pickup-list">
          {pickupList.map((pickup, index) => (
            <li key={index}>
              <div>
                <img src={pickup.img} alt={pickup.title} />
              </div>
              <dl>
                <dt>
                  {pickup.title}
                  <span>{pickup.area}</span>
                </dt>
                <dd>{pickup.description}</dd>
              </dl>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Top;
