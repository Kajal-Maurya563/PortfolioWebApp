import Image from "next/image";

export default function SkillCard({ logo, name }) {
  return (
    <div className="flex flex-col items-center gap-4 p-2">
      <div className="w-25 h-25 relative">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
      <span className="text-sm font-medium text-gray-300">{name}</span>
    </div>
  );
}
