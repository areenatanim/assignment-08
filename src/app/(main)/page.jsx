import Banner from '@/components/shared/Banner/Banner';
import Card from '@/components/TipAndBreed/Card';
import { SpeedInsights } from '@vercel/speed-insights/next';
const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Card></Card>
      <SpeedInsights />
    </div>
  );
};

export default HomePage;