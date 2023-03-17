import { useState } from "react";
import { Lane3 } from "@/04_templates/Lane"
import { KanbanBody } from "@/03_organisms/KanbanBody";
import { ItemDetail } from "@/02_molecules/ItemDetail";
import pgoal from "@/_data/productgoal.json";

export default function PGoalKanban() {
  const [focusId, setFocusId] = useState<string | null>(null);
  const focusItem = pgoal.find((it) => it.id === focusId);

  return <Lane3>
    <KanbanBody
      data={pgoal}
      banner="Product Goals"
      setFocusId={setFocusId}
    />
    {focusItem && <ItemDetail item={focusItem} />}
  </Lane3>
}
