import Banner from "@/components/Banner/Banner";
import CountingCard from "@/components/CountingCard/CountingCard";
import Homepage from "./home/page";
export default function Home() {
  return (
    <div>
      <div>
        <Banner></Banner>
        <CountingCard></CountingCard>
        <Homepage></Homepage>
      </div>
    </div>
  );
}
