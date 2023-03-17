import { useState } from "react";
import { KanbanBody } from "@/03_organisms/KanbanBody";
import { ItemDetail } from "@/02_molecules/ItemDetail";
import sbl from "@/_data/sbl.json";

export default function SprintKanban() {
  const [sbis] = useState<BacklogItem[]>(sbl as BacklogItem[]);
  const [focusId, setFocusId] = useState<string | null>(null);
  const focusItem = sbis.find((it) => it.id === focusId);

  return <>
    <div className="cols2">
      <KanbanBody
        data={sbis}
        banner="Sprint Backlog"
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
}
