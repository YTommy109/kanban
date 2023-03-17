import { useState } from "react";
import { Lane3 } from "@/04_templates/Lane"
import { KanbanBody } from "@/03_organisms/KanbanBody";
import { ItemDetail } from "@/02_molecules/ItemDetail";
import pbl from "@/_data/pbl.json";

export function ProductKanban() {
  const [sbis] = useState<BacklogItem[]>(pbl);
  const [focusId, setFocusId] = useState<string | null>(null);
  const focusItem = sbis.find((it) => it.id === focusId);

  return <Lane3>
    <KanbanBody
      data={sbis}
      banner="Product Backlog"
      setFocusId={setFocusId}
    />
    {focusItem && <ItemDetail item={focusItem} />}
  </Lane3>
}
