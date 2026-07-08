import Banner from '@/components/shared/Banner/Banner';
import Card from '@/components/TipAndBreed/Card';
import { SpeedInsights } from '@vercel/speed-insights/next';
const HomePage = async () => {

  // const session = await auth.api.getSession({
  //   headers: await headers()
  // });
  // console.log("session data ", session);
  // const user = session?.user;
  // if (!user) {
  //   redirect("/auth/register");
  //   return <ErrorPage></ErrorPage>;
  // }


  return (
    <div>
      <Banner></Banner>
      <Card></Card>
      <SpeedInsights />
    </div>
  );
};

export default HomePage;