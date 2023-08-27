import { UserAuth } from "../../context/authContext/AuthContext";
import GoogleButton from "react-google-button";

const SignIn = () => {
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen  bg-main_color">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <p className="text-gray-600 mb-6">Sign in using your Google account</p>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
};

export default SignIn;
