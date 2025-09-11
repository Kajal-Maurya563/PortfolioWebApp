export default function Company({logo,name}) {
  return (
    <div className="border border-gray-800 rounded-md px-4 py-2 flex items-center justify-center bg-gray-950 md:px-6 md:py-3">
        <div className="text-2xl opacity-30">
            {logo}
        </div>
        <div className="name font-bold text-gray-500">{name}</div>
        
    </div>
  );
}