import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { FaCalendar, FaTelegramPlane } from "react-icons/fa";
import { GoLocation, GoDiffAdded } from "react-icons/go";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const checkout = () => {
    const paywallConfig = {
      icon:
        "https://forum.metacartel.org/uploads/db3603/original/1X/29dbb63a8ab5d39895ac88e4b737acfff8d5cf9c.png",
      title: "MC² EthDenver Tickets!",
      locks: {
        "0xe1cb3d896ec40f185baf427f4bb202cfb309db95": {
          network: 100,
          emailRequired: true,
          password: true,
        },
        "0xe204a6976676097631ec65d26500acbd445ad3f4": {
          network: 100,
          emailRequired: true,
        },
      },
      pessimistic: true,
    };

    const url = new URL("https://app.unlock-protocol.com/checkout");
    const redirectUri = new URL(window.location.href);
    url.searchParams.set("redirectUri", redirectUri.toString());
    url.searchParams.set("paywallConfig", JSON.stringify(paywallConfig));
    // Handle success?
    router.push(url.toString());
  };

  return (
    <>
      <Head>
        <title>MC² EthDenver</title>
        <meta name="description" content="MC² EthDenver" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto mt-8 ">
        <div>
          <div className="flex md:hidden justify-center md:justify-start">
            <Image
              className="border-8
              border-white
              w-1/2
              rounded-full  
              my-8
              md:w-4/12   
              md:p-4"
              alt="chiliface"
              height="100"
              width="100"
              src="/chiliface-circle.svg"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-16 md:mt-48 rounded rounded-lg bg-white p-5	mb-8">
            <div className="">
              <h1 className="text-5xl mb-8">MC² EthDenver</h1>
              <p className="text-xl">
                Come and experience the highest vibes in Denver, on March 4th we
                are taking over the MileHigh Station with help from{" "}
                <Link
                  target="_blank"
                  className="underline"
                  href="https://metacartel.xyz/"
                >
                  MetaCartel Ventures
                </Link>
                ,{" "}
                <Link
                  target="_blank"
                  className="underline"
                  href="https://www.charged.fi/"
                >
                  Charged Particles
                </Link>
                ,{" "}
                <Link
                  target="_blank"
                  className="underline"
                  href="https://hedgey.finance/"
                >
                  Hedgey Finance
                </Link>
                ,{" "}
                <Link
                  target="_blank"
                  className="underline"
                  href="https://weloveguac.org/ "
                >
                  Dip DAO
                </Link>{" "}
                and many more of the Web3 homies for this one night event.
              </p>
              <p className="my-4 text-xl">
                🙌🏼 Join us for Drinks, Food, and live Music in the classic iron
                works building at MileHigh Station.
              </p>
              <p className="my-4 text-xl">
                Register using{" "}
                <Link
                  target="_blank"
                  className="underline"
                  href="https://unlock-protocol.com/"
                >
                  Unlock
                </Link>{" "}
                for some special NFT perks
              </p>
              <button
                onClick={checkout}
                className="w-full bg-red hover:bg-accent text-white font-bold py-4 px-4 rounded"
              >
                Register
              </button>
            </div>
            <div className="text-xl md:w-2/3">
              <div className="hidden md:flex justify-center md:justify-start">
                <Image
                  alt="chiliface"
                  height="100"
                  width="100"
                  src="/chiliface-circle.svg"
                  className="my-4"
                />
              </div>
              <ul>
                <li className="mb-4">
                  <FaCalendar className="inline mr-2" />
                  Saturday March 4th, 5-11pm
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    href="https://goo.gl/maps/bUxBwok9W8Mk5Ce3A"
                  >
                    <GoLocation className="inline mr-2" />
                    2027 W Colfax Ave, Denver
                  </Link>
                </li>
                <li className="mb-4">
                  <Link target="_blank" href="https://t.me/+GCiEBvuunhtjMjNh">
                    <FaTelegramPlane className="inline mr-2" />
                    Telegram
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NWUzaGtnYjNvcDRndW9sdGk0OWRqbWxuY2YganVsaWVuLmdlbmVzdG91eEBt&tmsrc=julien.genestoux%40gmail.com">
                    <GoDiffAdded className="inline mr-2" />
                    Add to Calendar
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
