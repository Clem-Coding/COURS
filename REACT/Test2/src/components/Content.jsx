import chat from "../assets/Dagonet.png";

const Content = () => {
  return (
    <div>
      <section>
        <h2>Voici la photo de mon chat</h2>
        <img src={chat} alt="chat noir et blanc allongé" />
        <p>Dagonet, le petit chat le plus mignon des chats</p>
      </section>
    </div>
  );
};

export default Content;
