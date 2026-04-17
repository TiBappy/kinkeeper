import { Suspense } from "react";
import TimelineContent from "./TimelineContent";

export default function TimelinePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TimelineContent />
    </Suspense>
  );
}