import '@css/heading.css';

// 内容を動的に設定できるようにpropsを使用する。
type HeadingProps = {
  title: string;
  description: string;
};

function Heading({ title, description }: HeadingProps) {
  return (
    <div className="heading">
      <h2>{title}</h2>
      <p style={{ whiteSpace: 'pre-line' }}>{description}</p>
    </div>
  );
}

export default Heading;
