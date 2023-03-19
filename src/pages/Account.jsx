import SavedMovies from "../components/SavedMovies";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d049a3bd-40ee-411b-9f16-d1def798d43b/b765d97f-c4ea-47b5-a28f-f7d21d4467e2/GB-en-20230313-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="movie covers"
          className=" w-full h-[400px] object-cover"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">Saved for later</h1>
        </div>
      </div>
      <SavedMovies />
    </>
  );
};

export default Account;
