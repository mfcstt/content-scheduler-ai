import { ContentPlanner } from "~/features/contents/content-suggestion";
import { ContentsChatbot } from "~/features/contents/contents-chatbot";

export default function () {
  return (
    <div className="p-6 grid grid-cols-2 gap-6">
      <ContentsChatbot />
      <ContentPlanner />
    </div>
  );
}