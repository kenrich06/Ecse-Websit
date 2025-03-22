import profilePic from "@/assets/profilePic.jpg"; // Import your image

const Header = () => {
  return (
    <div className="flex items-center space-x-3 p-4">
      <img
        src={profilePic}
        alt="Kenrich Coutinho"
        className="w-10 h-10 rounded-full object-cover"
      />
      <h1 className="text-xl font-bold text-white">Kenrich Coutinho</h1>
    </div>
  );
};

export default Header;
