export default function SummaryCard({ text, info }) {
  return (
    <div className="p-7 h-full rounded-4xl dark:bg-[#14141A] dark:border-gray-800 bg-[#FFFFFF] border border-gray-200    transition duration-200 hover:shadow-red-600/30 shadow-md  ">
      <h1 className="font-semibold text-case dark:text-gray-400 text-[##52525B] text-xs mb-1">
        {text}
      </h1>
      <div className="border-t-2 border-gray-400/10"></div>

      <p className="text-4xl font-semibold dark:text-white text-[#18181B] mt-1">
        {info}
      </p>
    </div>
  );
}
