import "./styles/edit_profile.css";

const EditProfile = () => {
  return (
    <div className="edit_profile_page">
      <div className="edit_profile_card">
        <h1 className="heading-3 font-w-700">Edit Profile</h1>
        <p className="text-md font-w-400">
          Update your personal nutrition details.
        </p>

        <form className="edit_profile_form">
          <div className="form_group">
            <label className="text-sm font-w-500">Name</label>
            <input type="text" defaultValue="Blessen Vinoy Mathew" />
          </div>

          <div className="form_group">
            <label className="text-sm font-w-500">Age</label>
            <input type="number" defaultValue={25} />
          </div>

          <div className="form_group">
            <label className="text-sm font-w-500">Height</label>
            <input type="number" defaultValue={179} />
          </div>

          <div className="form_group">
            <label className="text-sm font-w-500">Current Weight</label>
            <input type="number" defaultValue={91} />
          </div>

          <div className="form_group">
            <label className="text-sm font-w-500">Target Weight</label>
            <input type="number" defaultValue={75} />
          </div>

          <div className="form_group">
            <label className="text-sm font-w-500">Goal</label>
            <select defaultValue="Weight Loss">
              <option>Weight Loss</option>
              <option>Muscle Gain</option>
              <option>Maintenance</option>
            </select>
          </div>

          <button type="button" className="save_profile_btn text-md font-w-600" onClick={() => window.location.href = '/'}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;