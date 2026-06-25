import "./profile.css";

const Profile = () => {
  return (
    <div className="profile_page">
      <div className="profile_card">
        <h1>Profile</h1>
        <p>Tell Calorivio about you for better meal plans.</p>

        <form className="profile_form">
          <input type="text" placeholder="Full Name" />
          <input type="number" placeholder="Age" />

          <select>
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input type="number" placeholder="Height (cm)" />
          <input type="number" placeholder="Current Weight (kg)" />
          <input type="number" placeholder="Target Weight (kg)" />

          <select>
            <option>Activity Level</option>
            <option>Sedentary</option>
            <option>Lightly Active</option>
            <option>Moderately Active</option>
            <option>Very Active</option>
          </select>

          <select>
            <option>Goal</option>
            <option>Weight Loss</option>
            <option>Muscle Gain</option>
            <option>Maintenance</option>
          </select>

          <button type="button" className="profile_save_btn">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;