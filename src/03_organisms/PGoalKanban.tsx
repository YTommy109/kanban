import { useState, useMemo } from 'react'
import { Lane2_200 } from '@/04_templates/Lane'
import { KanbanBody } from '@/03_organisms/KanbanBody'
import { ItemDetail } from '@/02_molecules/ItemDetail'
import { useBacklogItems } from '@/hooks/useBacklogItem'

export default function PGoalKanban() {
  const {pgs} = useBacklogItems()
  const [focusId, setFocusId] = useState<string|null>(null)
  const focusItem = useMemo(() => pgs.find((it) => it.id === focusId), [focusId, pgs])

  return <Lane2_200>
    <KanbanBody
      data        = {pgs}
      banner      = "Product Goals"
      setFocusId  = {setFocusId}
    />
    {focusItem && <ItemDetail item={focusItem} />}
  </Lane2_200>
}
