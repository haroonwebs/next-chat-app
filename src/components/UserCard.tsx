import Image from "next/image";

interface UserCardProps {
  name: string;
  profession: string;
  image: string;
}

export default function UserCard({ name, profession, image }: UserCardProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center text-center space-y-3 hover:shadow-lg transition">
      {/* User Image */}
      <div className="w-20 h-20 rounded-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="object-cover"
        />
      </div>

      {/* User Info */}
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{profession}</p>
      </div>

      {/* Button */}
      <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-xl hover:bg-blue-600 transition">
        Add to Friend List
      </button>
    </div>
  );
}
