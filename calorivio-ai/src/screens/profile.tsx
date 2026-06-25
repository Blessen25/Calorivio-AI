import './styles/profile.css';
const Profile = () => {
  return (
    <div className="profile_page">
      <div className="profile_card">

        <div className="profile_header">
          <div className="profile_avatar">
            <i className="fa-solid fa-user"></i>
          </div>

          <div>
            <h1 className="heading-5 font-w-700">
              Blessen Vinoy Mathew
            </h1>

            <p className="text-md font-w-400">
              Personal Nutrition Profile
            </p>
          </div>
        </div>

        <div className="profile_stats">

          <div className="stat_card">
            <span className="text-sm font-w-400">
              Age
            </span>

            <h3 className="heading-5 font-w-600">
              25 Years
            </h3>
          </div>

          <div className="stat_card">
            <span className="text-sm font-w-400">
              Height
            </span>

            <h3 className="heading-5 font-w-600">
              179 cm
            </h3>
          </div>

          <div className="stat_card">
            <span className="text-sm font-w-400">
              Current Weight
            </span>

            <h3 className="heading-5 font-w-600">
              91 kg
            </h3>
          </div>

          <div className="stat_card">
            <span className="text-sm font-w-400">
              Target Weight
            </span>

            <h3 className="heading-5 font-w-600">
              75 kg
            </h3>
          </div>

          <div className="stat_card">
            <span className="text-sm font-w-400">
              Goal
            </span>

            <h3 className="heading-5 font-w-600">
              Weight Loss
            </h3>
          </div>

          <div className="stat_card">
            <span className="text-sm font-w-400">
              Weight To Lose
            </span>

            <h3 className="heading-5 font-w-600">
              16 kg
            </h3>
          </div>

        </div>

        <div className="profile_actions">
          <button className="edit_btn text-md font-w-600" onClick={() => window.location.href = '/edit-profile'}>
            <i className="fa-solid fa-pen"></i>
            Edit Profile
          </button>
        </div>

      </div>
    </div>
  );
};

export default Profile;