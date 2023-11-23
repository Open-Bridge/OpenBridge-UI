import Image from "next/image";
import chevronDown from "../../public/icons/chevron-down.svg";

export default function Transaction() {

    const TrendingPoolsData = [
        {
          id: 1,
          projectName: "0x5cc73e87d89b473c...5c263e3287ce7dadff930",
          saleType: "10 minutes ago (November 22, 2023 at 14:58:48 UTC)",
          price: '0xbbb2...6651',
          minBuy: '0x1c62...6586',
          maxBuy: 'Pending',
        },
        {
          id: 2,
          projectName: "0x7c073e87d89b473c...5c263e3287ce7dadff930",
          saleType: "20 minutes ago (November 22, 2023 at 14:58:48 UTC)",
          price: '0xbbb2...6651',
          minBuy: '0x1c62...6586',
          maxBuy: 'Pending',
        },
        {
          id: 3,
          projectName: "0x9mc73e87d89b473c...5c263e3287ce7dadff930",
          saleType: "40 minutes ago (November 22, 2023 at 14:58:48 UTC)",
          price: '0xbbb2...6651',
          minBuy: '0x1c62...6586',
          maxBuy: 'Pending',
        },
        {
          id: 4,
          projectName: "0x1cc83e87d89b473c...5c263e3287ce7dadff930",
          saleType: "3 hours ago (November 22, 2023 at 14:58:48 UTC)",
          price: '0xbbb2...6651',
          minBuy: '0x1c62...6586',
          maxBuy: 'Pending',
        },
       
      ]
    return(
    <>
      <section className="text-white lg:pr-[1.06rem] block">
      <div className="mb-[1.88rem] flex justify-between items-center">
        <div className="flex items-center gap-1">
         {/**  <Image
            width={24}
            height={24}
            src="/icons/rocket.svg"
            alt="rocket icon"
          /> */}
          <h3 className="text-white/95 lg:text-3xl text-xl tracking-[-0.015rem]">
            Transactions
          </h3>
        </div>
        <div className="flex items-center text-md  gap-1">
          <h3>View on Explorer</h3>
          <Image
            className="-rotate-90 w-[14px]"
            src={chevronDown}
            alt="caret"
          />
        </div>
      </div>
      {/* table */}

      <div className="w[80%] md:w-full grid grid-cols-1  lg:overflow-x-none overflow-x-auto rounded-[0.625rem] border border-green-400 bg-green-700/25">
        <table
          className="w-full border-collapse table pr-[2.31rem]"
          cellPadding={10}
        >
          <thead className="">
            <tr className="whitespace-nowrap text-left border-b border-green-400/25">
              <th
                className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]"
                id="project-name"
              >
                &nbsp;
              </th>
              <th
                className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]"
                id="project-name"
              >
                Message ID
              </th>
              <th
                className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]"
                id="sale-type"
              >
                Age
              </th>
              <th
                className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]"
                id="price"
              >
                From
              </th>
              <th
                className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]"
                id="min-buy"
              >
               To
              </th>
              <th
                className="text-[#D1D1D6] text-[0.75rem] tracking-[-0.0075rem]"
                id="max-buy"
              >
                Status
              </th>
             
            </tr>
          </thead>
          <tbody className="mt-[1.19rem] text-sm">
            {TrendingPoolsData?.map((data) => (
              <tr key={data?.id} className="whitespace-nowrap">
                <th
                  // id={data?.id}
                  className="bg-green-700/25 border-r border-green-400"
                >
                  {data?.id}.
                </th>
                <td headers={`project ${data?.id}`}>{data?.projectName}</td>
                <td headers={`sale-type ${data?.id}`}>{data?.saleType}</td>
                <td headers={`price ${data?.id}`}>{data?.price}</td>
                <td headers={`min-buy ${data?.id}`}>{data?.minBuy}</td>
                <td headers={`max-buy ${data?.id}`}>{data?.maxBuy}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    </>
    )
}