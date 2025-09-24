import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FriendCard from "@/components/FriendsCard";
import { Paperclip, Smile, Send } from "lucide-react"; // icons

const FriendsPage = () => {
  const friends = [
    {
      name: "Alice Johnson",
      image: "/assets/talk-icon.png",
      lastMessage: "Hey, how are you?",
    },
    {
      name: "Bob Smith",
      image: "/assets/talk-icon.png",
      lastMessage: "Let's meet tomorrow.",
    },
    {
      name: "Charlie Brown",
      image: "/assets/talk-icon.png",
      lastMessage: "See you soon!",
    },
    {
      name: "David Wilson",
      image: "/assets/talk-icon.png",
      lastMessage: "Working on a project rn.",
    },
    {
      name: "Emma Davis",
      image: "/assets/talk-icon.png",
      lastMessage: "Can we talk later?",
    },
  ];

  return (
    <div>
      <Navbar />
      <main className="flex min-h-[calc(100vh-20vh)] items-start justify-center py-3">
        {/* Left Sidebar (Friends List) */}
        <div className="w-1/4 h-[80vh] bg-white border-r flex flex-col">
          {/* Search Bar */}
          <div className="p-3 border-b">
            <input
              type="text"
              placeholder="Search friends..."
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
          </div>

          {/* Friend List */}
          <div className="flex-1 overflow-y-auto">
            {friends.map((friend, index) => (
              <FriendCard
                key={index}
                name={friend.name}
                image={friend.image}
                lastMessage={friend.lastMessage}
              />
            ))}
          </div>
        </div>

        {/* Right Chat Area */}
        <div className="w-3/4 h-[80vh] bg-amber-100 flex flex-col">
          {/* Chat header */}
          <div className="p-4 border-b bg-white">
            <h2 className="text-lg font-semibold">Chat Window</h2>
          </div>

          {/* Chat messages (empty for now) */}
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Messages will go here */}
          </div>

          {/* Input Box */}
          <div className="p-3 border-t bg-white flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
            <Smile className="w-6 h-6 text-gray-500 cursor-pointer" />
            <Paperclip className="w-6 h-6 text-gray-500 cursor-pointer" />
            <Send className="w-6 h-6 text-blue-500 cursor-pointer" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FriendsPage;
