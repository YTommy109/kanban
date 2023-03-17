import { useState, useMemo } from "react";
import { Lane2_200 } from "@/04_templates/Lane"
import { KanbanBody } from "@/03_organisms/KanbanBody";
import { ItemDetail } from "@/02_molecules/ItemDetail";
import sgoal from "@/_data/sprintgoal.json";

export default function SGoalKanban() {
  const [focusId, setFocusId] = useState<string|null>(null);
  const focusItem = useMemo(() => sgoal.find((it) => it.id === focusId), [focusId])

  return <Lane2_200>
    <KanbanBody
      data={sgoal}
      banner="Sprint Goals"
      setFocusId={setFocusId}
    />
    {focusItem && <ItemDetail item={focusItem} />}
  </Lane2_200>
}
