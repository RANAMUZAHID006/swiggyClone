import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <User
        name="Name: Rana"
        location="Location: Delhi"
        contact="Contact: @hellorana"
      />
      <UserClass
        name="Name: Rana class"
        location="Location: Delhi class"
        contact="Contact: @hellorana class"
      />
    </div>
  );
};
export default About;
