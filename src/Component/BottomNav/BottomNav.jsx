import Links from "../Links/Links";

export default function BottomNav() {
  let links = [
    "all",
    "css",
    "sports",
    "learning",
    " tv ",
    "java",
    "kitchen",
    "Words",
    "Mixs",
    "plainning",
    "games","cooking","c++","information" , "live","bootstrap"
  ];
  return (
    <nav className="px-1 py-2 w-fit mx-auto">
      <ul className="flex gap-2">
        {links.map((word, index) => {
          return <Links key={index} word={word} />;
        })}
      </ul>
    </nav>
  );
}
