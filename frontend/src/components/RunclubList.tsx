import { useEffect, useState } from "react";
import RunclubCard from "./RunclubCard";
import { api, type RunclubDto } from "../../api";

const RunclubList = () => {

  const [runclubs, setRunclubs] = useState<RunclubDto[]>([]);

  useEffect(() => {

    async function loadRunclubs() {

      try {

        const data = await api.getRunclubs();

        setRunclubs(data);

      } catch (err) {
        console.error(err);
      }
    }

    loadRunclubs();

  }, []);

  return (
    <div className="RunclubCards">

      {runclubs.map((runclub) => (
        <RunclubCard
          key={runclub.id}
          name={runclub.name}
          description={runclub.description}
          socialMediaLink={runclub.socialMediaLink} 
          city={runclub.city} 
          level={runclub.level} 
          time={runclub.time} 
          image={runclub.image}        />
      ))}

    </div>
  );
};

export default RunclubList;