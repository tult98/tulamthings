import PopularContent from '@blog/@features/post/components/PopularContent';
import TopCategories from '@blog/@features/category/TopCategories';
import { PostListContainer } from '@blog/@features/post';

export default function Index() {
  return (
    <div className="grid grid-cols-1 gap-x-24 lg:grid-cols-3">
      <PostListContainer />
      <aside>
        <TopCategories />
        <PopularContent />
      </aside>
    </div>
  );
}
