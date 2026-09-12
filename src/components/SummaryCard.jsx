export default function SummaryCard({ text, info }) {
  return (
    <div className=" p-7 bg-[#14141A] rounded-4xl border border-gray-800 h-full ">
      <h1 className="font-semibold text-case text-gray-400 text-xs mb-1">
        TOTAL SPENDING
      </h1>
      <div className="border-t-2 border-gray-400/10"></div>

      <p className="text-4xl font-semibold text-white mt-1">$24,568</p>
    </div>
  );
}
