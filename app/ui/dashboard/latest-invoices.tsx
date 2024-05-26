import { ArrowPathIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
import { fetchEntries, fetchLatestEntries } from "@/app/lib/data";

export default async function LatestEntries() {
  const latestEntries = await fetchLatestEntries();

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Neueste Einträge
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {latestEntries.map((entry, i) => {
            return (
              <div
                key={entry.id}
                className={clsx(
                  "flex flex-row items-center justify-between py-4",
                  {
                    "border-t": i !== 0
                  }
                )}
              >
                <div className="flex items-center">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {entry.ort}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {entry.motivation}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {entry.speisen}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {entry.getraenke}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {entry.beschwerden}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      Typ {entry.stuhltyp}: {entry.stuhlverhalten}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {entry.therapie}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {entry.anmerkungen}
                    </p>
                  </div>
                </div>
                <p className={`${lusitana.className} truncate text-sm font-medium md:text-base`}>
                  {entry.stuhltyp}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
