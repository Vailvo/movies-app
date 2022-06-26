import movieForm from "../forms/movieForm.component";

//restrict access for users not logged in
const moviePage = () => {
  return (
    <>
      <h1> Movie Page </h1>
      <movieForm />
    </>
  );
};

export default moviePage;
