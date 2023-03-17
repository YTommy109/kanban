import { useState, useMemo } from "react"
import { Lane2_200 } from "@/04_templates/Lane"
import { KanbanBody } from "@/03_organisms/KanbanBody"
import { ItemDetail } from "@/02_molecules/ItemDetail"
import pgoal from "@/_data/productgoal.json"

export default function PGoalKanban() {
  const [focusId, setFocusId] = useState<string|null>(null);
  const focusItem = useMemo(() => pgoal.find((it) => it.id === focusId), [focusId])

  return <Lane2_200>
    <KanbanBody
      data={pgoal}
      banner="Product Goals"
      setFocusId={setFocusId}
    />
    {focusItem && <ItemDetail item={focusItem} />}
  </Lane2_200>
}
