import { useState } from "react";
import { KanbanBody } from "@/03_organisms/KanbanBody";
import { ItemDetail } from "@/02_molecules/ItemDetail";
import pbl from "@/_data/pbl.json";

export default function ProductKanban() {
  const [sbis] = useState<BacklogItem[]>(pbl);
  const [focusId, setFocusId] = useState<string | null>(null);
  const focusItem = sbis.find((it) => it.id === focusId);

  return <>
    <div className="cols2">
      <KanbanBody
        data={sbis}
        banner="Product Backlog"
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
