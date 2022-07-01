import { useNavigate } from "react-router-dom";

import { useAuth } from "customHooks/useAuth";
import { StyledButton } from "components/StyledButton";

const styles = {
  container: { marginTop: 70, padding: "0 20px 0 20px" },
  heading: { color: "#d63e2f" },
};

const UserContentPage = () => {
  const navigate = useNavigate();
  const { auth } = useAuth();

  const handleNavigate = () => navigate("/user-content/courses");

  // console.log("auth:", auth);
  return (
    <div style={styles.container}>
      <h1>
        Welcome <span style={styles.heading}>{auth?.name}</span>
      </h1>

      <StyledButton onClick={handleNavigate} text="courses" />

      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </p>
    </div>
  );
};

export default UserContentPage;
