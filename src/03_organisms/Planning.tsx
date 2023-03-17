import { useState, useEffect } from "react";
import pgoal from "@/_data/productgoal.json";
import sgoal from "@/_data/sprintgoal.json";
import pbl from '@/_data/pbl.json';
import sbl from "@/_data/sbl.json";

export const Planning = () => {
  const [fpgl, setFpgl] = useState<string | null>(null);
  const [fsgl, setFsgl] = useState<string | null>(null);
  const [fpbl, setFpbl] = useState<string | null>(null);

  useEffect(() => {
    setFsgl(null);
    setFpbl(null);
  }, [fpgl]);

  useEffect(() => {
    setFpbl(null);
  }, [fsgl]);

  return (
    <div>
      <h1>Planning</h1>
      <div className="col4">
        <div>
          <h2>Product Goal</h2>
          <ul>
            {pgoal.map((it) =>
              <li key={it.id} onClick={() => setFpgl(it.id)}>{it.title}</li>
            )}
          </ul>
        </div>
        <div>
          <h2>Sprint Goal</h2>
          <ul>
            {sgoal.filter((it) => it.parentId === fpgl).map((it) =>
              <li key={it.id} onClick={() => setFsgl(it.id)}>{it.title}</li>
            )}
          </ul>
        </div>
        <div>
          <h2>Product Backlog</h2>
          <ul>
            {pbl.filter((it) => it.parentId === fsgl).map((it) =>
              <li key={it.id} onClick={() => setFpbl(it.id)}>{it.title}</li>
            )}
          </ul>
        </div>
        <div>
          <h2>Sprint Backlog</h2>
          <ul>
            {sbl.filter((it) => it.parentId === fpbl).map((it) => (
              <li key={it.id}>{it.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>{`
        .col4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
      `}</style>
    </div>
  );
}
