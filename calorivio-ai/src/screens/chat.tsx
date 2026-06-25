const Chat = () => {
  return (
    <div className="chat_container text-md">
      <h1>What can I help you with?</h1>

      <div className="chat_box text-sm">
        <input
          type="text"
          placeholder="Ask Calorivio about meals, calories, or diets..."
        />
        <button>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
};

export default Chat;