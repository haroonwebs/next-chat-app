import Image from "next/image";

interface FriendCardProps {
  name: string;
  image: string;
  lastMessage?: string;
}
const FriendsCard = ({ name, image, lastMessage }: FriendCardProps) => {
  return (
    <div className="w-full flex items-center p-3 bg-white hover:bg-gray-100 border-b cursor-pointer">
      {/* Profile Image */}
      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="object-cover"
        />
      </div>

      {/* Friend Info */}
      <div className="ml-4 flex flex-col justify-center flex-1">
        <h3 className="text-base font-semibold">{name}</h3>
        {lastMessage && (
          <p className="text-sm text-gray-500 truncate">{lastMessage}</p>
        )}
      </div>
    </div>
  );
};
export default FriendsCard;
