import PopularContent from '@blog/widgets/PopularContent';
import PostContainer from '@blog/widgets/PostContainer';
import TopCategories from '@blog/widgets/TopCategories';

export default function Index() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-24">
      <PostContainer />
      <aside>
        <TopCategories />
        <PopularContent />
      </aside>
    </div>
  );
}
