import Banner from '@/components/shared/Banner/Banner';
import { SpeedInsights } from '@vercel/speed-insights/next';
const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <SpeedInsights />
    </div>
  );
};

export default HomePage;