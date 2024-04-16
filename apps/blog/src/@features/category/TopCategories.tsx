import { CategoryItem } from '@blog/@features/category/CategoryItem';

const categories = [
  'React',
  'Animation',
  'CSS',
  'Career',
  'Gatsby',
  'Next.js',
  'Performance',
];

export default function TopCategories() {
  return (
    <section>
      <p className="heading-2 mb-8">Top categories</p>
      {categories.map((category, index) => (
        <CategoryItem key={index} label={category} />
      ))}
    </section>
  );
}
