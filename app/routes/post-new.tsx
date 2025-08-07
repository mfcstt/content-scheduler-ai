import { ContentPlanner } from "~/features/posts/post-suggestion";
import { PostsChatbot } from "~/features/posts/posts-chatbot";

export default function () {
  return (
    <div className="p-6 grid grid-cols-2 gap-6">
      <PostsChatbot />
      <ContentPlanner />
    </div>
  );
}
