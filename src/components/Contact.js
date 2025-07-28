const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Section</h1>
      <form>
        <input
          className="border border-black p-2 m-2"
          placeholder="name"
          type="text"
        />
        <input
          class="border border-black p-2 m-2"
          placeholder="message"
          type="text"
        />
        <button class="border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
