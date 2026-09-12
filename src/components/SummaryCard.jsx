export default function SummaryCard({text,info}) {
  return (
    <div className=" w-110 p-6 bg-[#14141A] rounded-xl border border-gray-800">
      <h1 className="font-semibold text-case text-gray-400">TOTAL SPENDING</h1>
      <p className="text-4xl font-semibold text-white mt-2">$24,568</p>
    </div>
  );
}
