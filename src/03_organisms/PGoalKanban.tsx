import { useState } from "react";
import { KanbanBody } from "@/03_organisms/KanbanBody";
import { ItemDetail } from "@/02_molecules/ItemDetail";
import pgoal from "@/_data/productgoal.json";

export default function PGoalKanban() {
  const [focusId, setFocusId] = useState<string | null>(null);
  const focusItem = pgoal.find((it) => it.id === focusId);

  return (
    <>
      <div className="cols2">
        <KanbanBody
          data={pgoal}
          banner="Product Goals"
          setFocusId={setFocusId}
        />
        {focusItem && <ItemDetail item={focusItem} />}
      </div>
      <style jsx>{`
        .cols2 {
          display: grid;
          grid-template-columns: 1fr 300px;
        }
      `}
      </style>
    </>
  )
}
