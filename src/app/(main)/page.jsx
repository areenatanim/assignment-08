import { SpeedInsights } from '@vercel/speed-insights/next';
const HomePage = () => {
  return (
    <div>
      <h2>this is home page</h2>
      <SpeedInsights />
    </div>
  );
};

export default HomePage;