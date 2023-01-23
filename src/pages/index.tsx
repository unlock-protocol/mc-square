import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { FaCalendar, FaTelegramPlane } from "react-icons/fa";
import { GoLocation, GoDiffAdded } from "react-icons/go";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>MC^2 EthDenver</title>
        <meta name="description" content="MC^2 EthDenver" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <h1 className="text-5xl mt-8 md:mt-48 mb-8">MC^2 EthDenver</h1>
        <div className="grid md:grid-cols-2 gap-4	">
          <div>
            <p className="my-4 text-xl">
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
              , Dip DAO and many more of the Web3 homies for this one night
              event.
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
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Register
            </button>
          </div>
          <div className="my-4 text-xl">
            <ul>
              <li className="mb-4">
                <FaCalendar className="inline mr-2" />
                Saturday March 4th, 6-10pm
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
      </main>
    </>
  );
}
