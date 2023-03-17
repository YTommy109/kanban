import { useState } from "react";
import { Lane3 } from "@/04_templates/Lane"
import { KanbanBody } from "@/03_organisms/KanbanBody";
import { ItemDetail } from "@/02_molecules/ItemDetail";
import sgoal from "@/_data/sprintgoal.json";

export default function SGoalKanban() {
  const [sgoals] = useState<BacklogItem[]>(sgoal);
  const [focusId, setFocusId] = useState<string | null>(null);
  const focusItem = sgoals.find((it) => it.id === focusId);

  return <Lane3>
    <KanbanBody
      data={sgoals}
      banner="Sprint Goals"
      setFocusId={setFocusId}
    />
    {focusItem && <ItemDetail item={focusItem} />}
  </Lane3>
}
