import CategoryItem from '@blog/components/CategoryItem';

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
      <p className="mb-8 heading-2">Top categories</p>
      {categories.map((category, index) => (
        <CategoryItem key={index} label={category} />
      ))}
    </section>
  );
}
