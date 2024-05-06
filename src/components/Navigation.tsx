type NavigationItems = {
  href: string;
  label: string;
  description?: string;
};

type NavigationProps = {
  items: NavigationItems[];
};

function Navigation({ items }: NavigationProps) {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href}>
              <span>{item.label}</span>
              {item.description && ` / ${item.description}`}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
