import { DatabaseService } from '@blog/services/databases';

export default async function Index() {
  const topLatestPosts = await DatabaseService.getTopLatestPosts(10);
  
  return (
    <section>
      <h2 className="font-medium uppercase text-secondary tracking-[.125em]">
        Recently published
      </h2>
    </section>
  );
}
