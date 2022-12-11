import { useContext } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "../../../Components/Carousel";
import { Context } from "../../UserContext/UserContext";

function ProjectDetails() {
  const location = useLocation();
  const id = parseInt(location.pathname.split("/")[2]);
  const { data } = useContext(Context);

  const {
    name,
    gitHub,
    server,
    live,
    description,
    pictures,
    features,
    technology,
  } = data[id];

  return (
    <div className="container mx-auto mt-20 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <Carousel pictures={pictures}></Carousel>
        </div>
        <div className="mx-3 md:mx-0">
          {name && <h2 className="text-3xl font-semibold">{name}</h2>}
          {description && <p className="my-5"><span className="underline font-semibold pr-5">Description:-</span>{description}</p>}
        </div>
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 mx-3 md:mx-0">
        <div>
          {features && (
            <p className="underline text-xl">
              Features are available in this project:-
            </p>
          )}
          <ul className="list-inside list-disc">{features && features.map((f, i) => <li key={i}>{f}</li>)}</ul>
        </div>
        <div>
          {technology && (
            <p className="underline text-xl">Usages Technology:-</p>
          )}
          <ul className="list-inside list-disc">{technology && technology.map((f, i) => <li key={i}>{f}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
