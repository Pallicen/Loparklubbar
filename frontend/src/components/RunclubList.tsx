import { useEffect, useState } from "react";
import RunclubCard from "./RunclubCard";
import { api, type RunclubDto } from "../api";

interface RunclubListProps {
  selectedCity: string;
  selectedLevel: string;
}


const RunclubList = ({ selectedCity, selectedLevel }: RunclubListProps) => {

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

  const filteredRunclubs = runclubs.filter((runclub) => {

    const cityMatch = 
      selectedCity === "" || runclub.city === selectedCity;

    const levelMatch = 
      selectedLevel === "" || runclub.level === selectedLevel;

    return cityMatch && levelMatch;
  });

  return (
    <div className="RunclubCards">

      {filteredRunclubs.map((runclub) => (
        <RunclubCard
          key={runclub.id}
          name={runclub.name}
          description={runclub.description}
          socialMediaLink={runclub.socialMediaLink} 
          city={runclub.city} 
          level={runclub.level} 
          time={runclub.time} 
          image={runclub.image}
         />
      ))}

    </div>
  );
};

export default RunclubList;