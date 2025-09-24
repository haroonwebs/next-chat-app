import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UserCard from "@/components/UserCard";

const UsersPage = () => {
  const users = [
    {
      name: "Alice Johnson",
      profession: "Software Engineer",
      image: "/assets/talk-icon.png",
    },
    {
      name: "Bob Smith",
      profession: "Graphic Designer",
      image: "/assets/talk-icon.png",
    },
    {
      name: "Charlie Brown",
      profession: "Product Manager",
      image: "/assets/talk-icon.png",
    },
    {
      name: "Alice Johnson",
      profession: "Software Engineer",
      image: "/assets/talk-icon.png",
    },
    {
      name: "Bob Smith",
      profession: "Graphic Designer",
      image: "/assets/talk-icon.png",
    },
    {
      name: "Charlie Brown",
      profession: "Product Manager",
      image: "/assets/talk-icon.png",
    },
    {
      name: "Alice Johnson",
      profession: "Software Engineer",
      image: "/assets/talk-icon.png",
    },
    {
      name: "Bob Smith",
      profession: "Graphic Designer",
      image: "/assets/talk-icon.png",
    },
  ];

  return (
    <div>
      <Navbar />
      <main className="flex min-h-[calc(100vh-20vh)] flex-col items-center px-6 py-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          Welcome to the Users Page
        </h1>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 w-full max-w-7xl">
          {users.map((user, index) => (
            <UserCard
              key={index}
              name={user.name}
              profession={user.profession}
              image={user.image}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UsersPage;
