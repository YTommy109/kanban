import { useState, useMemo } from 'react'
import { Lane2_200 } from '@/04_templates/Lane'
import { KanbanBody } from '@/03_organisms/KanbanBody'
import { ItemDetail } from '@/02_molecules/ItemDetail'
import { useBacklogItems } from '@/hooks/useBacklogItem'

export default function SGoalKanban() {
  const {sgs: sbs} = useBacklogItems()
  const [focusId, setFocusId] = useState<string|null>(null)
  const focusItem = useMemo(() => sbs.find((it) => it.id === focusId), [focusId, sbs])

  return <Lane2_200>
    <KanbanBody
      data={sbs}
      banner="Sprint Goals"
      setFocusId={setFocusId}
    />
    {focusItem && <ItemDetail item={focusItem} />}
  </Lane2_200>
}
